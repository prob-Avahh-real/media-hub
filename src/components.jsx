// ============================================================
// MediaHub Components — All React Components
// ============================================================

// --- Icon svg utility ---
const Icon = ({ name, size = 20, className = '' }) => {
  const icons = {
    home: '<path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>',
    list: '<path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"/>',
    compass: '<path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/><path d="M11 3h2v2h-2z"/><path d="M13 11l-2 2 2 2 2-2-2-2z"/>',
    history: '<path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/><path d="M8 12h4l3 3"/>',
    creditCard: '<path d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/>',
    plus: '<path d="M12 5v14m7-7H5"/>',
    search: '<path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>',
    close: '<path d="M6 18L18 6M6 6l12 12"/>',
    edit: '<path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>',
    trash: '<path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>',
    play: '<path d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/><path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>',
    calendar: '<path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>',
    bell: '<path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>',
    trendingUp: '<path d="M13 7h7m0 0v7m0-7l-7 7-4-4-6 6"/>',
    check: '<path d="M5 13l4 4L19 7"/>',
    alertCircle: '<path d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>',
    menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
    chevronRight: '<path d="M9 5l7 7-7 7"/>',
    moreHorizontal: '<path d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"/>',
    filter: '<path d="M4 4h16v2.5l-6 6V20l-4-2v-5.5L4 6.5V4z"/>',
    moon: '<path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>',
    sun: '<path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>'
  };
  const d = icons[name] || icons.home;
  return React.createElement('svg', {
    width: size, height: size, viewBox: '0 0 24 24',
    fill: 'none', stroke: 'currentColor', strokeWidth: 2,
    strokeLinecap: 'round', strokeLinejoin: 'round',
    className
  }, d.split('><').map((seg, i) => {
    const path = seg.replace('<', '').replace('>', '');
    return React.createElement('path', { key: i, d: path.replace(/^path d="/, '').replace(/"$/, '') });
  }));
};

// ============================================================
// Sub-components
// ============================================================

const PlatformBadge = ({ platformId, size = 'sm' }) => {
  const p = window.__MediaHub.getPlatform(platformId);
  const sizes = { sm: 'text-xs px-2 py-0.5', md: 'text-sm px-3 py-1' };
  return React.createElement('span', {
    className: `inline-flex items-center gap-1 rounded-full font-medium ${sizes[size] || sizes.sm}`,
    style: { backgroundColor: p.color + '20', color: p.color }
  }, p.icon, p.name);
};

const StatusBadge = ({ status }) => {
  const s = window.__MediaHub.STATUS_LABELS[status] || { label: status, color: '#94a3b8', bg: '#1e293b' };
  return React.createElement('span', {
    className: 'inline-flex items-center gap-1 rounded-full text-xs px-2 py-0.5 font-medium',
    style: { backgroundColor: s.bg, color: s.color, border: '1px solid ' + s.color + '40' }
  },
  React.createElement('span', { className: 'w-1.5 h-1.5 rounded-full', style: { backgroundColor: s.color } }),
  s.label);
};

const ProgressBar = ({ current, total }) => {
  if (!total) return null;
  const pct = Math.min(100, Math.round((current / total) * 100));
  return React.createElement('div', { className: 'w-full bg-slate-700/50 rounded-full h-1.5 overflow-hidden' },
    React.createElement('div', {
      className: 'h-full rounded-full transition-all duration-500',
      style: { width: pct + '%', background: 'linear-gradient(90deg, #6366f1, #8b5cf6)' }
    })
  );
};

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;
  return React.createElement('div', {
    className: 'fixed inset-0 z-50 flex items-center justify-center p-4',
    style: { backgroundColor: 'rgba(0,0,0,0.6)' },
    onClick: onClose
  },
  React.createElement('div', {
    className: 'bg-slate-800 rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-700',
    onClick: e => e.stopPropagation()
  },
  React.createElement('div', { className: 'flex items-center justify-between p-5 border-b border-slate-700' },
    React.createElement('h2', { className: 'text-lg font-bold text-white' }, title),
    React.createElement('button', { onClick: onClose, className: 'text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-700 transition-colors' },
      React.createElement(Icon, { name: 'close', size: 20 }))
  ),
  React.createElement('div', { className: 'p-5' }, children)));
};

// ============================================================
// Add/Edit Show Modal
// ============================================================

const AddShowModal = ({ isOpen, onClose, editShow }) => {
  const { PLATFORMS, SHOW_TYPES, STATUS_LABELS, dispatch, uid, today } = window.__MediaHub;
  const [form, setForm] = React.useState({ title: '', platformId: 'bilibili', type: 'anime', status: 'watching', currentEpisode: 0, totalEpisodes: 12, rating: 0, coverEmoji: '📺', tags: '', nextEpisodeDate: '' });

  React.useEffect(() => {
    if (editShow) {
      setForm({ ...editShow, tags: (editShow.tags || []).join(', ') });
    } else {
      setForm({ title: '', platformId: 'bilibili', type: 'anime', status: 'watching', currentEpisode: 0, totalEpisodes: 12, rating: 0, coverEmoji: '📺', tags: '', nextEpisodeDate: '' });
    }
  }, [editShow, isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title.trim()) return;
    const data = {
      ...form,
      tags: form.tags.split(/[,，]/).map(t => t.trim()).filter(Boolean),
      rating: Number(form.rating) || 0,
      currentEpisode: Number(form.currentEpisode) || 0,
      totalEpisodes: Number(form.totalEpisodes) || 0
    };
    if (editShow) {
      dispatch({ type: 'UPDATE_SHOW', payload: { ...data, id: editShow.id } });
    } else {
      dispatch({ type: 'ADD_SHOW', payload: data });
    }
    onClose();
  };

  const update = (k, v) => setForm(f => ({ ...f, [k]: v }));

  const inputClass = 'w-full bg-slate-700/50 border border-slate-600 rounded-xl px-3 py-2.5 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 text-sm';
  const labelClass = 'block text-sm font-medium text-slate-300 mb-1.5';

  return React.createElement(Modal, { isOpen, onClose, title: editShow ? '编辑内容' : '添加新内容' },
    React.createElement('form', { onSubmit: handleSubmit, className: 'space-y-4' },
      React.createElement('div', null,
        React.createElement('label', { className: labelClass }, '标题 *'),
        React.createElement('input', { className: inputClass, value: form.title, onChange: e => update('title', e.target.value), placeholder: '输入视频/剧集名称' })
      ),
      React.createElement('div', { className: 'grid grid-cols-2 gap-4' },
        React.createElement('div', null,
          React.createElement('label', { className: labelClass }, '平台'),
          React.createElement('select', { className: inputClass, value: form.platformId, onChange: e => update('platformId', e.target.value) },
            PLATFORMS.map(p => React.createElement('option', { key: p.id, value: p.id }, `${p.icon} ${p.name}`)))
        ),
        React.createElement('div', null,
          React.createElement('label', { className: labelClass }, '类型'),
          React.createElement('select', { className: inputClass, value: form.type, onChange: e => update('type', e.target.value) },
            SHOW_TYPES.map(t => React.createElement('option', { key: t.id, value: t.id }, `${t.icon} ${t.label}`)))
        )
      ),
      React.createElement('div', { className: 'grid grid-cols-2 gap-4' },
        React.createElement('div', null,
          React.createElement('label', { className: labelClass }, '状态'),
          React.createElement('select', { className: inputClass, value: form.status, onChange: e => update('status', e.target.value) },
            Object.entries(STATUS_LABELS).map(([k, v]) => React.createElement('option', { key: k, value: k }, v.label)))
        ),
        React.createElement('div', null,
          React.createElement('label', { className: labelClass }, 'Emoji 封面'),
          React.createElement('input', { className: inputClass, value: form.coverEmoji, onChange: e => update('coverEmoji', e.target.value), placeholder: '📺' })
        )
      ),
      React.createElement('div', { className: 'grid grid-cols-3 gap-4' },
        React.createElement('div', null,
          React.createElement('label', { className: labelClass }, '当前集数'),
          React.createElement('input', { type: 'number', min: 0, className: inputClass, value: form.currentEpisode, onChange: e => update('currentEpisode', e.target.value) })
        ),
        React.createElement('div', null,
          React.createElement('label', { className: labelClass }, '总集数'),
          React.createElement('input', { type: 'number', min: 0, className: inputClass, value: form.totalEpisodes, onChange: e => update('totalEpisodes', e.target.value), placeholder: '0=连载中' })
        ),
        React.createElement('div', null,
          React.createElement('label', { className: labelClass }, '评分(0-10)'),
          React.createElement('input', { type: 'number', min: 0, max: 10, step: 0.1, className: inputClass, value: form.rating, onChange: e => update('rating', e.target.value) })
        )
      ),
      React.createElement('div', null,
        React.createElement('label', { className: labelClass }, '标签（逗号分隔）'),
        React.createElement('input', { className: inputClass, value: form.tags, onChange: e => update('tags', e.target.value), placeholder: '如: 悬疑, 国创, 年度神作' })
      ),
      React.createElement('div', null,
        React.createElement('label', { className: labelClass }, '下一集更新时间'),
        React.createElement('input', { type: 'date', className: inputClass, value: form.nextEpisodeDate, onChange: e => update('nextEpisodeDate', e.target.value) })
      ),
      React.createElement('div', { className: 'flex gap-3 pt-2' },
        React.createElement('button', { type: 'button', onClick: onClose, className: 'flex-1 px-4 py-2.5 rounded-xl border border-slate-600 text-slate-300 hover:bg-slate-700 transition-colors text-sm font-medium' }, '取消'),
        React.createElement('button', { type: 'submit', className: 'flex-1 px-4 py-2.5 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium hover:from-indigo-600 hover:to-purple-700 transition-all text-sm' }, editShow ? '保存修改' : '添加')
      )
    )
  );
};

// ============================================================
// Subscription Modal
// ============================================================

const AddSubscriptionModal = ({ isOpen, onClose, editSub }) => {
  const { PLATFORMS, dispatch } = window.__MediaHub;
  const [form, setForm] = React.useState({ platformId: 'bilibili', planName: '', price: 0, startDate: '', endDate: '', autoRenew: true, reminderDays: 7 });

  React.useEffect(() => {
    if (editSub) setForm(editSub);
    else setForm({ platformId: 'bilibili', planName: '', price: 0, startDate: '', endDate: '', autoRenew: true, reminderDays: 7 });
  }, [editSub, isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { ...form, price: Number(form.price) || 0, reminderDays: Number(form.reminderDays) || 7 };
    if (editSub) dispatch({ type: 'UPDATE_SUBSCRIPTION', payload: { ...data, id: editSub.id } });
    else dispatch({ type: 'ADD_SUBSCRIPTION', payload: data });
    onClose();
  };

  const ic = 'w-full bg-slate-700/50 border border-slate-600 rounded-xl px-3 py-2.5 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 text-sm';
  const lc = 'block text-sm font-medium text-slate-300 mb-1.5';

  return React.createElement(Modal, { isOpen, onClose, title: editSub ? '编辑会员' : '添加会员' },
    React.createElement('form', { onSubmit: handleSubmit, className: 'space-y-4' },
      React.createElement('div', null,
        React.createElement('label', { className: lc }, '平台'),
        React.createElement('select', { className: ic, value: form.platformId, onChange: e => setForm(f => ({ ...f, platformId: e.target.value })) },
          PLATFORMS.map(p => React.createElement('option', { key: p.id, value: p.id }, `${p.icon} ${p.name}`)))
      ),
      React.createElement('div', { className: 'grid grid-cols-2 gap-4' },
        React.createElement('div', null,
          React.createElement('label', { className: lc }, '套餐名称'),
          React.createElement('input', { className: ic, value: form.planName, onChange: e => setForm(f => ({ ...f, planName: e.target.value })), placeholder: '如: 年度大会员' })
        ),
        React.createElement('div', null,
          React.createElement('label', { className: lc }, '价格(元)'),
          React.createElement('input', { type: 'number', min: 0, className: ic, value: form.price, onChange: e => setForm(f => ({ ...f, price: e.target.value })) })
        )
      ),
      React.createElement('div', { className: 'grid grid-cols-2 gap-4' },
        React.createElement('div', null,
          React.createElement('label', { className: lc }, '开始日期'),
          React.createElement('input', { type: 'date', className: ic, value: form.startDate, onChange: e => setForm(f => ({ ...f, startDate: e.target.value })) })
        ),
        React.createElement('div', null,
          React.createElement('label', { className: lc }, '到期日期'),
          React.createElement('input', { type: 'date', className: ic, value: form.endDate, onChange: e => setForm(f => ({ ...f, endDate: e.target.value })) })
        )
      ),
      React.createElement('div', { className: 'grid grid-cols-2 gap-4' },
        React.createElement('div', null,
          React.createElement('label', { className: lc }, '提前提醒(天)'),
          React.createElement('input', { type: 'number', min: 0, className: ic, value: form.reminderDays, onChange: e => setForm(f => ({ ...f, reminderDays: e.target.value })) })
        ),
        React.createElement('div', { className: 'flex items-end pb-2' },
          React.createElement('label', { className: 'flex items-center gap-2 cursor-pointer' },
            React.createElement('input', { type: 'checkbox', checked: form.autoRenew, onChange: e => setForm(f => ({ ...f, autoRenew: e.target.checked }), className: 'w-4 h-4 rounded border-slate-600 bg-slate-700 text-indigo-500 focus:ring-indigo-500') }),
            React.createElement('span', { className: 'text-sm text-slate-300' }, '自动续费')
          )
        )
      ),
      React.createElement('div', { className: 'flex gap-3 pt-2' },
        React.createElement('button', { type: 'button', onClick: onClose, className: 'flex-1 px-4 py-2.5 rounded-xl border border-slate-600 text-slate-300 hover:bg-slate-700 transition-colors text-sm font-medium' }, '取消'),
        React.createElement('button', { type: 'submit', className: 'flex-1 px-4 py-2.5 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium hover:from-indigo-600 hover:to-purple-700 transition-all text-sm' }, editSub ? '保存' : '添加')
      )
    )
  );
};

// ============================================================
// Show Card
// ============================================================

const ShowCard = ({ show, onEdit, onDelete, onUpdateProgress }) => {
  const { getPlatform, STATUS_LABELS, formatDate } = window.__MediaHub;
  const platform = getPlatform(show.platformId);
  const status = STATUS_LABELS[show.status] || { label: show.status };
  const [menuOpen, setMenuOpen] = React.useState(false);

  return React.createElement('div', {
    className: 'group bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-4 hover:border-indigo-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/5'
  },
  React.createElement('div', { className: 'flex items-start gap-3' },
    // Cover emoji
    React.createElement('div', {
      className: 'w-14 h-14 rounded-xl flex items-center justify-center text-2xl flex-shrink-0',
      style: { backgroundColor: platform.color + '15' }
    }, show.coverEmoji || '📺'),
    // Info
    React.createElement('div', { className: 'flex-1 min-w-0' },
      React.createElement('div', { className: 'flex items-start justify-between gap-2' },
        React.createElement('h3', { className: 'text-white font-semibold text-sm leading-tight truncate' }, show.title),
        React.createElement('div', { className: 'relative flex-shrink-0' },
          React.createElement('button', {
            onClick: () => setMenuOpen(!menuOpen),
            className: 'opacity-0 group-hover:opacity-100 p-1 rounded-lg hover:bg-slate-700 text-slate-400 hover:text-white transition-all'
          }, React.createElement(Icon, { name: 'moreHorizontal', size: 16 })),
          menuOpen && React.createElement('div', { className: 'absolute right-0 top-8 bg-slate-800 border border-slate-700 rounded-xl shadow-xl py-1 min-w-[120px] z-10' },
            React.createElement('button', { onClick: () => { onEdit(show); setMenuOpen(false); }, className: 'w-full text-left px-3 py-2 text-sm text-slate-300 hover:bg-slate-700 hover:text-white flex items-center gap-2' },
              React.createElement(Icon, { name: 'edit', size: 14 }), '编辑'),
            React.createElement('button', { onClick: () => { if (confirm('确定删除?')) onDelete(show.id); setMenuOpen(false); }, className: 'w-full text-left px-3 py-2 text-sm text-red-400 hover:bg-slate-700 flex items-center gap-2' },
              React.createElement(Icon, { name: 'trash', size: 14 }), '删除')
          )
        )
      ),
      React.createElement('div', { className: 'flex flex-wrap items-center gap-1.5 mt-1.5' },
        React.createElement('span', { className: 'text-xs', style: { color: platform.color } }, platform.icon, ' ', platform.name),
        React.createElement('span', { className: 'text-slate-500' }, '·'),
        React.createElement(StatusBadge, { status: show.status }),
        show.rating > 0 && React.createElement('span', { className: 'text-xs text-amber-400 font-medium' }, '⭐', show.rating.toFixed(1))
      ),
      show.totalEpisodes > 0 && React.createElement('div', { className: 'mt-2' },
        React.createElement('div', { className: 'flex items-center justify-between text-xs text-slate-400 mb-1' },
          React.createElement('span', null, '进度 ' + show.currentEpisode + '/' + show.totalEpisodes),
          React.createElement('span', null, Math.round((show.currentEpisode / show.totalEpisodes) * 100) + '%')
        ),
        React.createElement(ProgressBar, { current: show.currentEpisode, total: show.totalEpisodes })
      ),
      React.createElement('div', { className: 'flex items-center gap-2 mt-2 flex-wrap' },
        (show.tags || []).slice(0, 3).map((tag, i) =>
          React.createElement('span', { key: i, className: 'text-xs px-2 py-0.5 rounded-full bg-slate-700/50 text-slate-400' }, tag)
        ),
        show.nextEpisodeDate && React.createElement('span', { className: 'text-xs text-indigo-400 ml-auto font-medium' },
          React.createElement(Icon, { name: 'calendar', size: 12, className: 'inline mr-0.5' }),
          formatDate(show.nextEpisodeDate))
      )
    )
  ),
  // Quick progress buttons
  show.status === 'watching' && show.totalEpisodes > 0 && show.currentEpisode < show.totalEpisodes &&
    React.createElement('div', { className: 'flex gap-2 mt-3 pt-3 border-t border-slate-700/50' },
      React.createElement('button', {
        onClick: () => onUpdateProgress(show.id, show.currentEpisode + 1),
        className: 'flex-1 text-xs px-3 py-1.5 rounded-lg bg-indigo-500/10 text-indigo-400 hover:bg-indigo-500/20 border border-indigo-500/20 transition-colors font-medium'
      }, React.createElement(Icon, { name: 'play', size: 12, className: 'inline mr-1' }), '更新第', show.currentEpisode + 1, '集'),
      show.currentEpisode > 0 && React.createElement('button', {
        onClick: () => onUpdateProgress(show.id, show.totalEpisodes),
        className: 'text-xs px-3 py-1.5 rounded-lg bg-green-500/10 text-green-400 hover:bg-green-500/20 border border-green-500/20 transition-colors'
      }, '看完')
    )
  );
};

// ============================================================
// PAGE: Dashboard
// ============================================================

const Dashboard = ({ onNavigate }) => {
  const [data, setData] = React.useState(window.__MediaHub.getStore());
  React.useEffect(() => window.__MediaHub.subscribe(setData), []);

  const { getStats, getUpcomingEpisodes, getRecentUpdates, getPlatform, STATUS_LABELS, formatDate } = window.__MediaHub;
  const stats = getStats();
  const upcoming = getUpcomingEpisodes();
  const recent = getRecentUpdates();

  const statCards = [
    { label: '追剧中', value: stats.watching, icon: 'play', color: '#22c55e' },
    { label: '已完成', value: stats.completed, icon: 'check', color: '#3b82f6' },
    { label: '想看', value: stats.planned, icon: 'calendar', color: '#a855f7' },
    { label: '平台数', value: stats.platforms, icon: 'compass', color: '#f59e0b' },
  ];

  return React.createElement('div', { className: 'space-y-6' },
    // Welcome
    React.createElement('div', null,
      React.createElement('h1', { className: 'text-2xl font-bold text-white' }, '仪表盘'),
      React.createElement('p', { className: 'text-slate-400 text-sm mt-1' }, '总览你的追剧和订阅状态')
    ),
    // Stats
    React.createElement('div', { className: 'grid grid-cols-2 lg:grid-cols-4 gap-3' },
      statCards.map((s, i) =>
        React.createElement('div', { key: i, className: 'bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-4' },
          React.createElement('div', { className: 'flex items-center gap-3' },
            React.createElement('div', { className: 'w-10 h-10 rounded-xl flex items-center justify-center', style: { backgroundColor: s.color + '15' } },
              React.createElement(Icon, { name: s.icon, size: 18, style: { color: s.color } })
            ),
            React.createElement('div', null,
              React.createElement('div', { className: 'text-2xl font-bold text-white' }, s.value),
              React.createElement('div', { className: 'text-xs text-slate-400' }, s.label)
            )
          )
        )
      )
    ),
    stats.expiringSubs > 0 && React.createElement('div', {
      className: 'bg-amber-500/10 border border-amber-500/20 rounded-2xl p-4 flex items-center gap-3'
    },
      React.createElement(Icon, { name: 'alertCircle', size: 20, className: 'text-amber-400 flex-shrink-0' }),
      React.createElement('p', { className: 'text-sm text-amber-300' }, stats.expiringSubs, '个会员即将到期，去看看 →'),
      React.createElement('button', { onClick: () => onNavigate('subscriptions'), className: 'ml-auto text-xs px-3 py-1.5 rounded-lg bg-amber-500/20 text-amber-300 hover:bg-amber-500/30 transition-colors' }, '管理')
    ),
    // Two columns
    React.createElement('div', { className: 'grid lg:grid-cols-2 gap-6' },
      // Recent updates
      React.createElement('div', null,
        React.createElement('h2', { className: 'text-lg font-semibold text-white mb-3 flex items-center gap-2' },
          React.createElement(Icon, { name: 'trendingUp', size: 18, className: 'text-indigo-400' }), '最近更新'),
        React.createElement('div', { className: 'space-y-2' },
          recent.slice(0, 5).map((show, i) => {
            const p = getPlatform(show.platformId);
            return React.createElement('div', { key: i, className: 'flex items-center gap-3 bg-slate-800/30 rounded-xl p-3 hover:bg-slate-800/50 transition-colors cursor-pointer', onClick: () => onNavigate('watchlist') },
              React.createElement('span', { className: 'text-lg' }, show.coverEmoji || '📺'),
              React.createElement('div', { className: 'flex-1 min-w-0' },
                React.createElement('div', { className: 'text-sm text-white font-medium truncate' }, show.title),
                React.createElement('div', { className: 'text-xs text-slate-400' },
                  STATUS_LABELS[show.status]?.label, show.totalEpisodes > 0 ? ` · ${show.currentEpisode}/${show.totalEpisodes}` : ''))
            );
          })
        )
      ),
      // Upcoming
      React.createElement('div', null,
        React.createElement('h2', { className: 'text-lg font-semibold text-white mb-3 flex items-center gap-2' },
          React.createElement(Icon, { name: 'bell', size: 18, className: 'text-purple-400' }), '即将更新'),
        React.createElement('div', { className: 'space-y-2' },
          upcoming.slice(0, 5).map((show, i) => {
            const p = getPlatform(show.platformId);
            return React.createElement('div', { key: i, className: 'flex items-center gap-3 bg-slate-800/30 rounded-xl p-3 hover:bg-slate-800/50 transition-colors cursor-pointer', onClick: () => onNavigate('watchlist') },
              React.createElement('span', { className: 'text-lg' }, show.coverEmoji || '📺'),
              React.createElement('div', { className: 'flex-1 min-w-0' },
                React.createElement('div', { className: 'text-sm text-white font-medium truncate' }, show.title),
                React.createElement('div', { className: 'text-xs text-indigo-400 font-medium' }, formatDate(show.nextEpisodeDate))))
          }),
          upcoming.length === 0 && React.createElement('p', { className: 'text-sm text-slate-500 text-center py-8' }, '没有即将更新的内容')
        )
      )
    )
  );
};

// ============================================================
// PAGE: Watchlist
// ============================================================

const Watchlist = () => {
  const [data, setData] = React.useState(window.__MediaHub.getStore());
  React.useEffect(() => window.__MediaHub.subscribe(setData), []);
  const { dispatch, getPlatform, STATUS_LABELS } = window.__MediaHub;

  const [showAddModal, setShowAddModal] = React.useState(false);
  const [editShow, setEditShow] = React.useState(null);
  const [filter, setFilter] = React.useState('all');
  const [platformFilter, setPlatformFilter] = React.useState('all');
  const [search, setSearch] = React.useState('');

  const filtered = data.shows.filter(s => {
    if (filter !== 'all' && s.status !== filter) return false;
    if (platformFilter !== 'all' && s.platformId !== platformFilter) return false;
    if (search && !s.title.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  const statusCounts = {};
  data.shows.forEach(s => { statusCounts[s.status] = (statusCounts[s.status] || 0) + 1; });

  const filters = [
    { id: 'all', label: '全部(' + data.shows.length + ')' },
    { id: 'watching', label: '在看(' + (statusCounts.watching || 0) + ')' },
    { id: 'plan_to_watch', label: '想看(' + (statusCounts.plan_to_watch || 0) + ')' },
    { id: 'completed', label: '看完(' + (statusCounts.completed || 0) + ')' },
    { id: 'on_hold', label: '搁置(' + (statusCounts.on_hold || 0) + ')' },
  ];

  return React.createElement('div', { className: 'space-y-5' },
    React.createElement('div', { className: 'flex items-center justify-between flex-wrap gap-3' },
      React.createElement('div', null,
        React.createElement('h1', { className: 'text-2xl font-bold text-white' }, '追剧列表'),
        React.createElement('p', { className: 'text-slate-400 text-sm mt-1' }, '管理你在各平台追踪的所有内容')
      ),
      React.createElement('button', {
        onClick: () => { setEditShow(null); setShowAddModal(true); },
        className: 'flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium hover:from-indigo-600 hover:to-purple-700 transition-all text-sm shadow-lg shadow-indigo-500/20'
      }, React.createElement(Icon, { name: 'plus', size: 16 }), '添加内容')
    ),
    // Search & filters
    React.createElement('div', { className: 'flex flex-wrap items-center gap-3' },
      React.createElement('div', { className: 'relative flex-1 min-w-[200px]' },
        React.createElement(Icon, { name: 'search', size: 16, className: 'absolute left-3 top-1/2 -translate-y-1/2 text-slate-400' }),
        React.createElement('input', {
          className: 'w-full bg-slate-800/50 border border-slate-700 rounded-xl pl-9 pr-3 py-2 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50',
          value: search, onChange: e => setSearch(e.target.value), placeholder: '搜索内容...'
        })
      ),
      React.createElement('select', { className: 'bg-slate-800/50 border border-slate-700 rounded-xl px-3 py-2 text-sm text-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/50', value: platformFilter, onChange: e => setPlatformFilter(e.target.value) },
        React.createElement('option', { value: 'all' }, '所有平台'),
        window.__MediaHub.PLATFORMS.filter(p => data.shows.some(s => s.platformId === p.id)).map(p =>
          React.createElement('option', { key: p.id, value: p.id }, p.icon + ' ' + p.name))
      )
    ),
    // Status tabs
    React.createElement('div', { className: 'flex gap-2 overflow-x-auto pb-1' },
      filters.map(f =>
        React.createElement('button', {
          key: f.id, onClick: () => setFilter(f.id),
          className: 'whitespace-nowrap px-3 py-1.5 rounded-lg text-sm font-medium transition-all ' +
            (filter === f.id ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30' : 'bg-slate-800/50 text-slate-400 border border-slate-700/50 hover:bg-slate-700/50')
        }, f.label)
      )
    ),
    // Shows grid
    React.createElement('div', { className: 'grid sm:grid-cols-2 xl:grid-cols-3 gap-3' },
      filtered.map(show =>
        React.createElement(ShowCard, {
          key: show.id, show,
          onEdit: (s) => { setEditShow(s); setShowAddModal(true); },
          onDelete: (id) => dispatch({ type: 'DELETE_SHOW', payload: id }),
          onUpdateProgress: (id, ep) => {
            dispatch({ type: 'UPDATE_PROGRESS', payload: { id, episode: ep } });
            dispatch({ type: 'ADD_HISTORY', payload: { showId: id, episode: ep, note: '' } });
          }
        })
      )
    ),
    filtered.length === 0 && React.createElement('div', { className: 'text-center py-16 text-slate-500' },
      React.createElement('p', { className: 'text-2xl mb-2' }, search ? '🔍' : '📭'),
      React.createElement('p', null, search ? '没有找到匹配的内容' : '还没有添加任何内容，点击上方按钮开始吧')
    ),
    React.createElement(AddShowModal, { isOpen: showAddModal, onClose: () => { setShowAddModal(false); setEditShow(null); }, editShow })
  );
};

// ============================================================
// PAGE: Discovery
// ============================================================

const Discovery = () => {
  const [data, setData] = React.useState(window.__MediaHub.getStore());
  React.useEffect(() => window.__MediaHub.subscribe(setData), []);
  const { dispatch, PLATFORMS, getPlatform } = window.__MediaHub;
  const [activePlatform, setActivePlatform] = React.useState('bilibili');

  // Curated recommendations grouped by platform
  const curatedMap = {
    bilibili: [
      { title: '时光代理人', type: 'anime', coverEmoji: '⏰', desc: '国创悬疑口碑之作，第二季制作中', rating: 9.2 },
      { title: '凡人修仙传 年番', type: 'anime', coverEmoji: '⚔️', desc: '国产修仙动画标杆，韩立人界篇', rating: 9.3 },
      { title: '迷宫饭 第二季', type: 'anime', coverEmoji: '🍲', desc: '美食与地下城冒险的奇妙结合', rating: 9.1 },
      { title: '雾山五行', type: 'anime', coverEmoji: '🔥', desc: '水墨国风打斗天花板', rating: 9.5 },
    ],
    iqiyi: [
      { title: '狂飙', type: 'drama', coverEmoji: '🚔', desc: '现象级扫黑除恶剧集', rating: 9.5 },
      { title: '萌探探探案 第三季', type: 'variety', coverEmoji: '🔍', desc: '沉浸式推理综艺', rating: 8.0 },
      { title: '唐朝诡事录', type: 'drama', coverEmoji: '🏮', desc: '古装悬疑探案', rating: 8.8 },
    ],
    migu: [
      { title: '中超联赛 2026', type: 'sports', coverEmoji: '⚽', desc: '中国足球超级联赛全程直播', rating: 8.0 },
      { title: '欧冠决赛 2026', type: 'sports', coverEmoji: '🏆', desc: '欧洲冠军联赛巅峰对决', rating: 9.5 },
    ],
    tencent_sports: [
      { title: 'NBA 季后赛 2026', type: 'sports', coverEmoji: '🏀', desc: 'NBA季后赛全程直播', rating: 9.0 },
      { title: 'CBA 总决赛', type: 'sports', coverEmoji: '🏀', desc: '中国男篮职业联赛总决赛', rating: 8.5 },
    ],
    douyin: [
      { title: '美食探店系列', type: 'short_video', coverEmoji: '🍜', desc: '全国美食探店精选', rating: 8.5 },
      { title: '抖音热榜 TOP10', type: 'short_video', coverEmoji: '🔥', desc: '今日最热短视频合集', rating: 8.0 },
    ],
    xiaohongshu: [
      { title: '旅行攻略合集', type: 'short_video', coverEmoji: '✈️', desc: '小红书精选旅行攻略', rating: 8.8 },
      { title: '好物推荐榜单', type: 'short_video', coverEmoji: '🛍️', desc: '小红书热门好物测评', rating: 8.2 },
    ],
    youku: [
      { title: '异人之下', type: 'drama', coverEmoji: '👻', desc: '一人之下真人版，国漫改编', rating: 8.7 },
    ],
    mango: [
      { title: '歌手 2026', type: 'variety', coverEmoji: '🎤', desc: '顶级音乐竞技综艺', rating: 8.5 },
    ]
  };

  const activeCurated = curatedMap[activePlatform] || [];
  const activeP = getPlatform(activePlatform);

  return React.createElement('div', { className: 'space-y-5' },
    React.createElement('div', null,
      React.createElement('h1', { className: 'text-2xl font-bold text-white' }, '内容发现'),
      React.createElement('p', { className: 'text-slate-400 text-sm mt-1' }, '各平台热门推荐，发现你的下一部好剧')
    ),
    // Platform tabs
    React.createElement('div', { className: 'flex gap-2 overflow-x-auto pb-1' },
      PLATFORMS.filter(p => curatedMap[p.id]?.length).map(p =>
        React.createElement('button', {
          key: p.id, onClick: () => setActivePlatform(p.id),
          className: 'flex items-center gap-1.5 whitespace-nowrap px-3 py-2 rounded-xl text-sm font-medium transition-all ' +
            (activePlatform === p.id ? 'text-white border' : 'text-slate-400 hover:text-slate-200 border border-transparent'),
          style: activePlatform === p.id ? { backgroundColor: p.color + '20', borderColor: p.color + '40', color: p.color } : {}
        }, p.icon, p.name)
      )
    ),
    // Platform header
    React.createElement('div', { className: 'flex items-center gap-3 px-1' },
      React.createElement('div', { className: 'w-8 h-8 rounded-lg flex items-center justify-center text-sm', style: { backgroundColor: activeP.color + '20' } }, activeP.icon),
      React.createElement('div', null,
        React.createElement('h2', { className: 'text-lg font-semibold text-white' }, activeP.name),
        React.createElement('p', { className: 'text-xs text-slate-400' }, '热门推荐 · ' + activeCurated.length + ' 个推荐')
      )
    ),
    // Cards
    React.createElement('div', { className: 'grid sm:grid-cols-2 lg:grid-cols-3 gap-3' },
      activeCurated.map((item, i) =>
        React.createElement('div', {
          key: i,
          className: 'bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-4 hover:border-indigo-500/30 transition-all duration-300 cursor-pointer group'
        },
        React.createElement('div', { className: 'flex items-start gap-3' },
          React.createElement('div', { className: 'w-14 h-14 rounded-xl flex items-center justify-center text-2xl flex-shrink-0', style: { backgroundColor: activeP.color + '15' } }, item.coverEmoji),
          React.createElement('div', { className: 'flex-1 min-w-0' },
            React.createElement('h3', { className: 'text-white font-semibold text-sm truncate' }, item.title),
            React.createElement('div', { className: 'flex items-center gap-2 mt-1' },
              React.createElement('span', { className: 'text-xs px-2 py-0.5 rounded-full', style: { backgroundColor: activeP.color + '20', color: activeP.color } }, item.type === 'anime' ? '动漫' : item.type === 'drama' ? '电视剧' : item.type === 'variety' ? '综艺' : item.type === 'sports' ? '体育' : '短视频'),
              item.rating > 0 && React.createElement('span', { className: 'text-xs text-amber-400' }, '⭐', item.rating.toFixed(1))
            ),
            React.createElement('p', { className: 'text-xs text-slate-400 mt-2 line-clamp-2' }, item.desc)
          )
        ),
        React.createElement('button', {
          onClick: () => {
            dispatch({ type: 'ADD_SHOW', payload: { title: item.title, platformId: activePlatform, type: item.type, status: 'plan_to_watch', currentEpisode: 0, totalEpisodes: 12, rating: item.rating, coverEmoji: item.coverEmoji, tags: [activeP.name], nextEpisodeDate: '' } });
          },
          className: 'mt-3 w-full text-xs py-2 rounded-lg bg-indigo-500/10 text-indigo-400 hover:bg-indigo-500/20 border border-indigo-500/20 transition-colors font-medium opacity-0 group-hover:opacity-100'
        }, '+ 加入追剧')
        )
      )
    )
  );
};

// ============================================================
// PAGE: History
// ============================================================

const History = () => {
  const [data, setData] = React.useState(window.__MediaHub.getStore());
  React.useEffect(() => window.__MediaHub.subscribe(setData), []);
  const { dispatch, getPlatform } = window.__MediaHub;

  const getShow = (showId) => data.shows.find(s => s.id === showId);

  // Group by date
  const grouped = {};
  data.history.forEach(h => {
    const dateKey = h.watchedAt.split('T')[0];
    if (!grouped[dateKey]) grouped[dateKey] = [];
    grouped[dateKey].push(h);
  });

  const sortedDates = Object.keys(grouped).sort((a, b) => new Date(b) - new Date(a));

  return React.createElement('div', { className: 'space-y-5' },
    React.createElement('div', null,
      React.createElement('h1', { className: 'text-2xl font-bold text-white' }, '观看历史'),
      React.createElement('p', { className: 'text-slate-400 text-sm mt-1' }, '共 ' + data.history.length + ' 条观看记录')
    ),
    sortedDates.length === 0 && React.createElement('div', { className: 'text-center py-16 text-slate-500' },
      React.createElement('p', { className: 'text-2xl mb-2' }, '📖'),
      React.createElement('p', null, '还没有观看记录')
    ),
    sortedDates.map(dateKey =>
      React.createElement('div', { key: dateKey },
        React.createElement('h3', { className: 'text-sm font-medium text-slate-400 mb-2 flex items-center gap-2' },
          React.createElement(Icon, { name: 'calendar', size: 14 }),
          dateKey === new Date().toISOString().split('T')[0] ? '今天' : dateKey === new Date(Date.now() - 86400000).toISOString().split('T')[0] ? '昨天' : dateKey
        ),
        React.createElement('div', { className: 'space-y-2' },
          grouped[dateKey].map(h => {
            const show = getShow(h.showId);
            if (!show) return null;
            const p = getPlatform(show.platformId);
            return React.createElement('div', {
              key: h.id,
              className: 'flex items-center gap-3 bg-slate-800/30 rounded-xl p-3 border border-slate-700/30'
            },
            React.createElement('span', { className: 'text-lg' }, show.coverEmoji || '📺'),
            React.createElement('div', { className: 'flex-1 min-w-0' },
              React.createElement('div', { className: 'flex items-center gap-2' },
                React.createElement('span', { className: 'text-sm text-white font-medium truncate' }, show.title),
                show.totalEpisodes > 0 && React.createElement('span', { className: 'text-xs text-slate-400' }, '第', h.episode, '集')
              ),
              React.createElement('div', { className: 'flex items-center gap-2 mt-0.5' },
                React.createElement('span', { className: 'text-xs', style: { color: p.color } }, p.icon, p.name),
                new Date(h.watchedAt).toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' }),
                h.note && React.createElement('span', { className: 'text-xs text-slate-400' }, '· ', h.note)
              )
            ),
            React.createElement('button', {
              onClick: () => dispatch({ type: 'DELETE_HISTORY', payload: h.id }),
              className: 'p-1.5 rounded-lg text-slate-500 hover:text-red-400 hover:bg-slate-700 transition-colors'
            }, React.createElement(Icon, { name: 'trash', size: 14 }))
            );
          })
        )
      )
    )
  );
};

// ============================================================
// PAGE: Subscriptions
// ============================================================

const Subscriptions = () => {
  const [data, setData] = React.useState(window.__MediaHub.getStore());
  React.useEffect(() => window.__MediaHub.subscribe(setData), []);
  const { dispatch, getPlatform, formatDate, diffDays } = window.__MediaHub;

  const [showAddModal, setShowAddModal] = React.useState(false);
  const [editSub, setEditSub] = React.useState(null);

  // Total monthly cost
  const totalMonthly = data.subscriptions
    .filter(s => s.price > 0)
    .reduce((sum, s) => {
      const days = diffDays(s.startDate, s.endDate);
      const months = Math.max(1, days / 30);
      return sum + (s.price / months);
    }, 0);

  const sortSubs = [...data.subscriptions].sort((a, b) => new Date(a.endDate) - new Date(b.endDate));

  return React.createElement('div', { className: 'space-y-5' },
    React.createElement('div', { className: 'flex items-center justify-between flex-wrap gap-3' },
      React.createElement('div', null,
        React.createElement('h1', { className: 'text-2xl font-bold text-white' }, '会员管理'),
        React.createElement('p', { className: 'text-slate-400 text-sm mt-1' }, '统一管理你所有平台的订阅和会员')
      ),
      React.createElement('button', {
        onClick: () => { setEditSub(null); setShowAddModal(true); },
        className: 'flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium hover:from-indigo-600 hover:to-purple-700 transition-all text-sm shadow-lg shadow-indigo-500/20'
      }, React.createElement(Icon, { name: 'plus', size: 16 }), '添加会员')
    ),
    // Monthly cost card
    React.createElement('div', {
      className: 'bg-gradient-to-r from-indigo-500/10 to-purple-600/10 border border-indigo-500/20 rounded-2xl p-5'
    },
      React.createElement('p', { className: 'text-xs text-indigo-300 font-medium' }, '月均订阅支出'),
      React.createElement('p', { className: 'text-3xl font-bold text-white mt-1' }, '¥', totalMonthly.toFixed(0)),
      React.createElement('p', { className: 'text-xs text-slate-400 mt-1' }, '基于 ', data.subscriptions.filter(s => s.price > 0).length, ' 个付费会员估算')
    ),
    // Subscription cards
    React.createElement('div', { className: 'grid sm:grid-cols-2 xl:grid-cols-3 gap-3' },
      sortSubs.map(sub => {
        const p = getPlatform(sub.platformId);
        const daysLeft = diffDays(new Date().toISOString().split('T')[0], sub.endDate);
        const isExpired = daysLeft <= 0;
        const isExpiring = daysLeft > 0 && daysLeft <= (sub.reminderDays || 7) && sub.price > 0;

        return React.createElement('div', {
          key: sub.id,
          className: 'bg-slate-800/50 backdrop-blur-sm border rounded-2xl p-4 transition-all hover:shadow-lg ' +
            (isExpired ? 'border-red-500/30' : isExpiring ? 'border-amber-500/30' : 'border-slate-700/50')
        },
        React.createElement('div', { className: 'flex items-start justify-between' },
          React.createElement('div', { className: 'flex items-center gap-3' },
            React.createElement('div', { className: 'w-12 h-12 rounded-xl flex items-center justify-center text-xl', style: { backgroundColor: p.color + '15' } }, p.icon),
            React.createElement('div', null,
              React.createElement('h3', { className: 'text-white font-semibold text-sm' }, p.name),
              React.createElement('p', { className: 'text-xs text-slate-400' }, sub.planName || '默认套餐')
            )
          ),
          React.createElement('button', {
            onClick: () => { setEditSub(sub); setShowAddModal(true); },
            className: 'p-1.5 rounded-lg text-slate-500 hover:text-white hover:bg-slate-700 transition-colors'
          }, React.createElement(Icon, { name: 'edit', size: 14 }))
        ),
        React.createElement('div', { className: 'mt-4 flex items-center justify-between' },
          React.createElement('div', null,
            React.createElement('p', { className: 'text-lg font-bold text-white' }, '¥', sub.price),
            sub.price > 0 && React.createElement('p', { className: 'text-xs text-slate-400' }, '总价')
          ),
          React.createElement('div', { className: 'text-right' },
            React.createElement('p', { className: 'text-xs text-slate-400' }, isExpired ? '已到期' : '到期'),
            React.createElement('p', { className: 'text-sm font-medium ' + (isExpired ? 'text-red-400' : isExpiring ? 'text-amber-400' : 'text-slate-200') },
              isExpired ? formatDate(sub.endDate) : formatDate(sub.endDate))
          )
        ),
        React.createElement('div', { className: 'mt-3 flex items-center justify-between' },
          React.createElement('div', { className: 'flex items-center gap-2' },
            React.createElement('span', { className: 'text-xs px-2 py-0.5 rounded-full', style: { backgroundColor: sub.autoRenew ? '#22c55e20' : '#ef444420', color: sub.autoRenew ? '#22c55e' : '#ef4444' } },
              sub.autoRenew ? '自动续费' : '手动续费'),
            !isExpired && React.createElement('span', { className: 'text-xs text-slate-400' }, daysLeft, '天后到期')
          ),
          React.createElement('button', {
            onClick: () => { if (confirm('确定删除这个会员?')) dispatch({ type: 'DELETE_SUBSCRIPTION', payload: sub.id }); },
            className: 'p-1.5 rounded-lg text-slate-500 hover:text-red-400 hover:bg-slate-700 transition-colors'
          }, React.createElement(Icon, { name: 'trash', size: 14 }))
        ),
        // Expiring warning
        isExpiring && React.createElement('div', { className: 'mt-3 pt-3 border-t border-amber-500/20' },
          React.createElement('p', { className: 'text-xs text-amber-400 flex items-center gap-1' },
            React.createElement(Icon, { name: 'alertCircle', size: 12 }),
            '即将到期，记得续费哦~'
          )
        )
        );
      })
    ),
    React.createElement(AddSubscriptionModal, { isOpen: showAddModal, onClose: () => { setShowAddModal(false); setEditSub(null); }, editSub })
  );
};

// ============================================================
// Layout & App
// ============================================================

const NAV_ITEMS = [
  { id: 'dashboard', label: '仪表盘', icon: 'home' },
  { id: 'watchlist', label: '追剧列表', icon: 'list' },
  { id: 'discovery', label: '发现', icon: 'compass' },
  { id: 'history', label: '历史', icon: 'history' },
  { id: 'subscriptions', label: '会员', icon: 'creditCard' },
];

const App = () => {
  const [page, setPage] = React.useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  const [data, setData] = React.useState(window.__MediaHub.getStore());

  React.useEffect(() => {
    const unsub = window.__MediaHub.subscribe(setData);
    // Register service worker
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').catch(() => {});
    }
    return unsub;
  }, []);

  const renderPage = () => {
    switch (page) {
      case 'dashboard': return React.createElement(Dashboard, { onNavigate: setPage });
      case 'watchlist': return React.createElement(Watchlist);
      case 'discovery': return React.createElement(Discovery);
      case 'history': return React.createElement(History);
      case 'subscriptions': return React.createElement(Subscriptions);
      default: return React.createElement(Dashboard, { onNavigate: setPage });
    }
  };

  const currentNav = NAV_ITEMS.find(n => n.id === page);

  return React.createElement('div', { className: 'min-h-screen bg-slate-900 text-white' },
    // Desktop sidebar
    React.createElement('div', { className: 'hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col' },
      React.createElement('div', { className: 'flex flex-col flex-1 bg-slate-800/50 border-r border-slate-700/50' },
        // Logo
        React.createElement('div', { className: 'flex items-center gap-3 px-6 py-5 border-b border-slate-700/50' },
          React.createElement('div', { className: 'w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm' }, 'MH'),
          React.createElement('div', null,
            React.createElement('h1', { className: 'text-white font-bold text-base' }, 'MediaHub'),
            React.createElement('p', { className: 'text-xs text-indigo-400' }, '多平台内容管家')
          )
        ),
        // Nav
        React.createElement('nav', { className: 'flex-1 px-3 py-4 space-y-1' },
          NAV_ITEMS.map(item =>
            React.createElement('button', {
              key: item.id, onClick: () => setPage(item.id),
              className: 'w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ' +
                (page === item.id ? 'bg-indigo-500/15 text-indigo-300' : 'text-slate-400 hover:text-slate-200 hover:bg-slate-700/50')
            },
            React.createElement(Icon, { name: item.icon, size: 18 }),
            item.label)
          )
        ),
        // Bottom info
        React.createElement('div', { className: 'px-6 py-4 border-t border-slate-700/50' },
          React.createElement('p', { className: 'text-xs text-slate-500' }, 'MediaHub v1.0'),
          React.createElement('p', { className: 'text-xs text-slate-600' }, '数据存储在本地浏览器')
        )
      )
    ),
    // Mobile header
    React.createElement('div', { className: 'lg:hidden sticky top-0 z-40 bg-slate-900/80 backdrop-blur-xl border-b border-slate-700/50 px-4 py-3 flex items-center justify-between' },
      React.createElement('button', {
        onClick: () => setSidebarOpen(true),
        className: 'p-2 rounded-xl text-slate-400 hover:bg-slate-800 transition-colors'
      }, React.createElement(Icon, { name: 'menu', size: 22 })),
      React.createElement('div', { className: 'flex items-center gap-2' },
        React.createElement('div', { className: 'w-7 h-7 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-xs' }, 'MH'),
        React.createElement('span', { className: 'text-white font-bold text-sm' }, currentNav?.label || 'MediaHub')
      ),
      React.createElement('div', { className: 'w-9' })
    ),
    // Mobile sidebar overlay
    sidebarOpen && React.createElement('div', {
      className: 'lg:hidden fixed inset-0 z-50',
      onClick: () => setSidebarOpen(false)
    },
      React.createElement('div', { className: 'absolute inset-0', style: { backgroundColor: 'rgba(0,0,0,0.6)' } }),
      React.createElement('div', {
        className: 'absolute left-0 top-0 bottom-0 w-64 bg-slate-800 border-r border-slate-700 shadow-2xl',
        onClick: e => e.stopPropagation()
      },
      React.createElement('div', { className: 'flex items-center justify-between px-6 py-5 border-b border-slate-700/50' },
        React.createElement('div', { className: 'flex items-center gap-3' },
          React.createElement('div', { className: 'w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm' }, 'MH'),
          React.createElement('span', { className: 'text-white font-bold' }, 'MediaHub')
        ),
        React.createElement('button', { onClick: () => setSidebarOpen(false), className: 'p-1 rounded-lg text-slate-400 hover:text-white' },
          React.createElement(Icon, { name: 'close', size: 20 }))
      ),
      React.createElement('nav', { className: 'px-3 py-4 space-y-1' },
        NAV_ITEMS.map(item =>
          React.createElement('button', {
            key: item.id, onClick: () => { setPage(item.id); setSidebarOpen(false); },
            className: 'w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ' +
              (page === item.id ? 'bg-indigo-500/15 text-indigo-300' : 'text-slate-400 hover:text-slate-200 hover:bg-slate-700/50')
          },
          React.createElement(Icon, { name: item.icon, size: 18 }),
          item.label)
        )
      )
      )
    ),
    // Main content
    React.createElement('main', { className: 'lg:pl-64' },
      React.createElement('div', { className: 'max-w-6xl mx-auto px-4 py-5 lg:py-8 pb-24 lg:pb-8' },
        renderPage()
      )
    ),
    // Mobile bottom nav
    React.createElement('nav', { className: 'lg:hidden fixed bottom-0 inset-x-0 z-40 bg-slate-800/90 backdrop-blur-xl border-t border-slate-700/50' },
      React.createElement('div', { className: 'flex justify-around py-1' },
        NAV_ITEMS.slice(0, 5).map(item =>
          React.createElement('button', {
            key: item.id, onClick: () => setPage(item.id),
            className: 'flex flex-col items-center gap-0.5 px-3 py-2 rounded-xl transition-colors ' +
              (page === item.id ? 'text-indigo-400' : 'text-slate-500 hover:text-slate-300')
          },
          React.createElement(Icon, { name: item.icon, size: 20 }),
          React.createElement('span', { className: 'text-[10px] font-medium' }, item.label)
          )
        )
      )
    )
  );
};

window.__MediaHubApp = App;
