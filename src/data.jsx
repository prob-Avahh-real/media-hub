// ============================================================
// MediaHub Data Layer — Store, Types, Persistence, Sample Data
// ============================================================

// --- Platforms ---
const PLATFORMS = [
  { id: 'bilibili', name: 'Bilibili', icon: '📺', color: '#fb7299', url: 'https://www.bilibili.com' },
  { id: 'iqiyi', name: '爱奇艺', icon: '🎬', color: '#07d159', url: 'https://www.iqiyi.com' },
  { id: 'migu', name: '咪咕', icon: '📡', color: '#ff6a00', url: 'https://www.miguvideo.com' },
  { id: 'tencent_sports', name: '腾讯体育', icon: '🏀', color: '#1a6eff', url: 'https://sports.qq.com' },
  { id: 'douyin', name: '抖音', icon: '🎵', color: '#000000', url: 'https://www.douyin.com' },
  { id: 'xiaohongshu', name: '小红书', icon: '📕', color: '#ff2442', url: 'https://www.xiaohongshu.com' },
  { id: 'youku', name: '优酷', icon: '🌈', color: '#1fa2f2', url: 'https://www.youku.com' },
  { id: 'mango', name: '芒果TV', icon: '🥭', color: '#ffbe00', url: 'https://www.mgtv.com' },
  { id: 'netflix', name: 'Netflix', icon: '🎥', color: '#e50914', url: 'https://www.netflix.com' },
  { id: 'other', name: '其他', icon: '📱', color: '#64748b', url: '' }
];

// --- Helpers ---
const uid = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 8);

const today = () => new Date().toISOString().split('T')[0];
const daysFromNow = (n) => { const d = new Date(); d.setDate(d.getDate() + n); return d.toISOString().split('T')[0]; };

const getPlatform = (id) => PLATFORMS.find(p => p.id === id) || PLATFORMS[PLATFORMS.length - 1];

const STATUS_LABELS = {
  watching: { label: '在看', color: '#22c55e', bg: '#052e16' },
  completed: { label: '看完', color: '#3b82f6', bg: '#0f172a' },
  plan_to_watch: { label: '想看', color: '#a855f7', bg: '#1a0f2e' },
  on_hold: { label: '搁置', color: '#f59e0b', bg: '#1c1500' },
  dropped: { label: '弃了', color: '#ef4444', bg: '#1c0505' }
};

const SHOW_TYPES = [
  { id: 'drama', label: '电视剧', icon: '📺' },
  { id: 'variety', label: '综艺', icon: '🎭' },
  { id: 'anime', label: '动漫', icon: '🎨' },
  { id: 'movie', label: '电影', icon: '🎬' },
  { id: 'sports', label: '体育', icon: '🏟️' },
  { id: 'short_video', label: '短视频', icon: '📱' },
  { id: 'documentary', label: '纪录片', icon: '🌍' }
];

// --- Sample Data ---
const SAMPLE_SHOWS = [
  { id: uid(), platformId: 'bilibili', title: '时光代理人', type: 'anime', status: 'watching', currentEpisode: 8, totalEpisodes: 12, rating: 9.2, coverEmoji: '⏰', tags: ['国创', '悬疑'], updatedAt: '2026-05-30', addedAt: '2026-05-01', nextEpisodeDate: daysFromNow(5) },
  { id: uid(), platformId: 'iqiyi', title: '狂飙', type: 'drama', status: 'completed', currentEpisode: 39, totalEpisodes: 39, rating: 9.5, coverEmoji: '🚔', tags: ['刑侦', '剧情'], updatedAt: '2026-05-28', addedAt: '2026-04-15' },
  { id: uid(), platformId: 'tencent_sports', title: 'NBA 季后赛 2026', type: 'sports', status: 'watching', currentEpisode: 12, totalEpisodes: 0, rating: 9.0, coverEmoji: '🏀', tags: ['篮球', 'NBA'], updatedAt: '2026-06-01', addedAt: '2026-04-20', nextEpisodeDate: daysFromNow(1) },
  { id: uid(), platformId: 'bilibili', title: '迷宫饭 第二季', type: 'anime', status: 'watching', currentEpisode: 5, totalEpisodes: 12, rating: 9.1, coverEmoji: '🍲', tags: ['日漫', '奇幻'], updatedAt: '2026-05-31', addedAt: '2026-05-05', nextEpisodeDate: daysFromNow(3) },
  { id: uid(), platformId: 'migu', title: '中超联赛 2026', type: 'sports', status: 'watching', currentEpisode: 8, totalEpisodes: 30, rating: 8.0, coverEmoji: '⚽', tags: ['足球', '中超'], updatedAt: '2026-05-29', addedAt: '2026-03-01', nextEpisodeDate: daysFromNow(2) },
  { id: uid(), platformId: 'douyin', title: '美食探店系列', type: 'short_video', status: 'watching', currentEpisode: 0, totalEpisodes: 0, rating: 8.5, coverEmoji: '🍜', tags: ['美食', '探店'], updatedAt: '2026-06-01', addedAt: '2026-05-10' },
  { id: uid(), platformId: 'xiaohongshu', title: '旅行攻略合集', type: 'short_video', status: 'watching', currentEpisode: 0, totalEpisodes: 0, rating: 8.8, coverEmoji: '✈️', tags: ['旅行', '攻略'], updatedAt: '2026-05-30', addedAt: '2026-05-15' },
  { id: uid(), platformId: 'iqiyi', title: '萌探探探案 第三季', type: 'variety', status: 'plan_to_watch', currentEpisode: 0, totalEpisodes: 12, rating: 0, coverEmoji: '🔍', tags: ['综艺', '推理'], updatedAt: '2026-05-25', addedAt: '2026-05-20', nextEpisodeDate: daysFromNow(4) },
  { id: uid(), platformId: 'bilibili', title: '凡人修仙传 年番', type: 'anime', status: 'watching', currentEpisode: 86, totalEpisodes: 156, rating: 9.3, coverEmoji: '⚔️', tags: ['国创', '修仙'], updatedAt: '2026-05-31', addedAt: '2026-01-01', nextEpisodeDate: daysFromNow(6) },
  { id: uid(), platformId: 'migu', title: '欧冠决赛 2026', type: 'sports', status: 'plan_to_watch', currentEpisode: 0, totalEpisodes: 1, rating: 0, coverEmoji: '🏆', tags: ['足球', '欧冠'], updatedAt: '2026-05-28', addedAt: '2026-05-20', nextEpisodeDate: daysFromNow(7) },
];

const SAMPLE_HISTORY = [
  { id: uid(), showId: SAMPLE_SHOWS[0].id, episode: 8, watchedAt: '2026-05-30T20:30:00', note: '第8集神作' },
  { id: uid(), showId: SAMPLE_SHOWS[1].id, episode: 39, watchedAt: '2026-05-28T22:00:00', note: '大结局' },
  { id: uid(), showId: SAMPLE_SHOWS[3].id, episode: 5, watchedAt: '2026-05-31T21:00:00', note: '迷宫饭新一集' },
  { id: uid(), showId: SAMPLE_SHOWS[8].id, episode: 86, watchedAt: '2026-05-31T19:00:00', note: '韩立突破' },
  { id: uid(), showId: SAMPLE_SHOWS[2].id, episode: 12, watchedAt: '2026-06-01T10:30:00', note: '西部决赛 G4' },
];

const SAMPLE_SUBSCRIPTIONS = [
  { id: uid(), platformId: 'bilibili', planName: '大会员 年度', price: 148, startDate: '2026-03-01', endDate: '2027-03-01', autoRenew: true, reminderDays: 15 },
  { id: uid(), platformId: 'iqiyi', planName: '黄金VIP 季度', price: 58, startDate: '2026-05-15', endDate: '2026-08-15', autoRenew: true, reminderDays: 7 },
  { id: uid(), platformId: 'migu', planName: '咪咕体育通', price: 98, startDate: '2026-01-01', endDate: '2026-12-31', autoRenew: false, reminderDays: 30 },
  { id: uid(), platformId: 'tencent_sports', planName: 'NBA会员 月度', price: 30, startDate: '2026-05-20', endDate: '2026-06-20', autoRenew: true, reminderDays: 3 },
  { id: uid(), platformId: 'douyin', planName: '抖音精选', price: 0, startDate: '2025-01-01', endDate: '2099-12-31', autoRenew: true, reminderDays: 0 },
  { id: uid(), platformId: 'xiaohongshu', planName: '免费用户', price: 0, startDate: '2025-01-01', endDate: '2099-12-31', autoRenew: true, reminderDays: 0 },
];

// --- Store ---
const STORE_KEY = 'mediahub_data';

const defaultData = {
  shows: SAMPLE_SHOWS,
  history: SAMPLE_HISTORY,
  subscriptions: SAMPLE_SUBSCRIPTIONS,
  settings: { theme: 'dark' }
};

const loadData = () => {
  try {
    const raw = localStorage.getItem(STORE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      // Merge with defaults to handle new fields
      return { ...defaultData, ...parsed, shows: parsed.shows || [], history: parsed.history || [], subscriptions: parsed.subscriptions || [] };
    }
  } catch (e) { console.warn('Load data error:', e); }
  return JSON.parse(JSON.stringify(defaultData));
};

const saveData = (data) => {
  try { localStorage.setItem(STORE_KEY, JSON.stringify(data)); } catch (e) { console.warn('Save error:', e); }
};

// --- Actions ---
let _storeData = loadData();
let _listeners = [];

const getStore = () => _storeData;

const subscribe = (fn) => { _listeners.push(fn); return () => { _listeners = _listeners.filter(l => l !== fn); }; };

const notify = () => { _listeners.forEach(fn => fn(_storeData)); };

const dispatch = (action) => {
  switch (action.type) {
    case 'ADD_SHOW':
      _storeData.shows.unshift({ id: uid(), ...action.payload, addedAt: today(), updatedAt: today() });
      break;
    case 'UPDATE_SHOW':
      _storeData.shows = _storeData.shows.map(s => s.id === action.payload.id ? { ...s, ...action.payload, updatedAt: today() } : s);
      break;
    case 'DELETE_SHOW':
      _storeData.shows = _storeData.shows.filter(s => s.id !== action.payload);
      break;
    case 'UPDATE_PROGRESS':
      _storeData.shows = _storeData.shows.map(s => {
        if (s.id !== action.payload.id) return s;
        const ep = action.payload.episode;
        return { ...s, currentEpisode: ep, updatedAt: today(), status: s.totalEpisodes > 0 && ep >= s.totalEpisodes ? 'completed' : s.status };
      });
      break;
    case 'ADD_HISTORY':
      _storeData.history.unshift({ id: uid(), ...action.payload, watchedAt: new Date().toISOString() });
      break;
    case 'DELETE_HISTORY':
      _storeData.history = _storeData.history.filter(h => h.id !== action.payload);
      break;
    case 'ADD_SUBSCRIPTION':
      _storeData.subscriptions.unshift({ id: uid(), ...action.payload });
      break;
    case 'UPDATE_SUBSCRIPTION':
      _storeData.subscriptions = _storeData.subscriptions.map(s => s.id === action.payload.id ? { ...s, ...action.payload } : s);
      break;
    case 'DELETE_SUBSCRIPTION':
      _storeData.subscriptions = _storeData.subscriptions.filter(s => s.id !== action.payload);
      break;
    case 'INIT_DATA':
      _storeData = action.payload;
      break;
    default: return;
  }
  saveData(_storeData);
  notify();
};

// --- Computed helpers ---
const getShowsByPlatform = () => {
  const map = {};
  _storeData.shows.forEach(s => {
    if (!map[s.platformId]) map[s.platformId] = [];
    map[s.platformId].push(s);
  });
  return map;
};

const getStats = () => {
  const shows = _storeData.shows;
  return {
    total: shows.length,
    watching: shows.filter(s => s.status === 'watching').length,
    completed: shows.filter(s => s.status === 'completed').length,
    planned: shows.filter(s => s.status === 'plan_to_watch').length,
    platforms: new Set(shows.map(s => s.platformId)).size,
    expiringSubs: _storeData.subscriptions.filter(s => {
      const d = new Date(s.endDate);
      const daysLeft = Math.ceil((d - new Date()) / (1000 * 60 * 60 * 24));
      return daysLeft > 0 && daysLeft <= 30 && s.price > 0;
    }).length
  };
};

const getUpcomingEpisodes = () => {
  return _storeData.shows
    .filter(s => s.nextEpisodeDate && s.status !== 'completed')
    .sort((a, b) => new Date(a.nextEpisodeDate) - new Date(b.nextEpisodeDate))
    .slice(0, 10);
};

const getRecentUpdates = () => {
  return [..._storeData.shows]
    .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt))
    .slice(0, 10);
};

const formatDate = (dateStr) => {
  if (!dateStr) return '';
  const d = new Date(dateStr);
  const now = new Date();
  const diff = Math.ceil((d - now) / (1000 * 60 * 60 * 24));
  const opts = { month: 'short', day: 'numeric' };
  const formatted = d.toLocaleDateString('zh-CN', opts);
  if (diff < 0) return `已过 ${formatted}`;
  if (diff === 0) return `今天 ${formatted}`;
  if (diff === 1) return `明天 ${formatted}`;
  if (diff < 7) return `${diff}天后 ${formatted}`;
  return formatted;
};

const diffDays = (d1, d2) => Math.ceil((new Date(d2) - new Date(d1)) / (1000 * 60 * 60 * 24));

window.__MediaHub = {
  PLATFORMS, SHOW_TYPES, STATUS_LABELS, getPlatform, uid, today, daysFromNow,
  getStore, subscribe, dispatch, getStats, getUpcomingEpisodes, getRecentUpdates,
  getShowsByPlatform, formatDate, diffDays, defaultData
};
