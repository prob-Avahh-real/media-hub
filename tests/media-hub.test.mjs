import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

function createMediaHubContext() {
  const storage = new Map();
  const context = vm.createContext({
    window: {},
    localStorage: {
      getItem: (k) => (storage.has(k) ? storage.get(k) : null),
      setItem: (k, v) => storage.set(k, String(v)),
      removeItem: (k) => storage.delete(k),
    },
    console,
    Date,
    Math,
    Set,
    JSON,
  });
  const code = fs.readFileSync(path.join(ROOT, 'src/data.jsx'), 'utf8');
  vm.runInContext(code, context, { filename: 'src/data.jsx' });
  return { hub: context.window.__MediaHub, storage };
}

test('PWA manifest, service worker, and entry assets are consistent', () => {
  const manifest = JSON.parse(fs.readFileSync(path.join(ROOT, 'manifest.json'), 'utf8'));
  assert.equal(manifest.short_name, 'MediaHub');
  assert.equal(manifest.display, 'standalone');
  assert.ok(Array.isArray(manifest.icons) && manifest.icons.length >= 2);
  for (const icon of manifest.icons) {
    const rel = icon.src.replace(/^\//, '');
    assert.ok(fs.existsSync(path.join(ROOT, rel)), `missing icon ${rel}`);
  }
  const sw = fs.readFileSync(path.join(ROOT, 'sw.js'), 'utf8');
  assert.match(sw, /CACHE_NAME\s*=\s*'mediahub-v1'/);
});

test('MediaHub store initializes sample shows, platforms, and stats', () => {
  const { hub } = createMediaHubContext();
  assert.ok(hub.PLATFORMS.length >= 10);
  assert.equal(hub.getPlatform('bilibili').name, 'Bilibili');
  assert.equal(hub.getPlatform('nonexistent').id, 'other');

  const stats = hub.getStats();
  assert.equal(stats.total, hub.getStore().shows.length);
  assert.ok(stats.watching >= 1);
  assert.ok(stats.completed >= 1);
});

test('MediaHub dispatch mutates shows, auto-completes finished episodes, and persists state', () => {
  const { hub, storage } = createMediaHubContext();
  const beforeCount = hub.getStore().shows.length;

  let notified = 0;
  const unsub = hub.subscribe(() => {
    notified += 1;
  });

  hub.dispatch({
    type: 'ADD_SHOW',
    payload: {
      platformId: 'netflix',
      title: 'Arcane S2',
      type: 'anime',
      status: 'watching',
      currentEpisode: 1,
      totalEpisodes: 9,
      rating: 9.4,
    },
  });

  const added = hub.getStore().shows[0];
  assert.equal(hub.getStore().shows.length, beforeCount + 1);
  assert.equal(added.title, 'Arcane S2');
  assert.equal(added.status, 'watching');

  // Advancing to final episode auto-transitions status -> completed
  hub.dispatch({
    type: 'UPDATE_PROGRESS',
    payload: { id: added.id, episode: 9 },
  });
  const updated = hub.getStore().shows.find((s) => s.id === added.id);
  assert.equal(updated.currentEpisode, 9);
  assert.equal(updated.status, 'completed');

  hub.dispatch({ type: 'DELETE_SHOW', payload: added.id });
  assert.equal(hub.getStore().shows.length, beforeCount);
  assert.equal(notified, 3);
  assert.ok(storage.has('mediahub_data'));
  unsub();
});
