/* УрФУ — общий скрипт прототипа: иконки, шапка, подвал, роль, тема, поиск, табы. */
(function () {
  'use strict';

  /* ---------- Иконки (контурные, 24×24) ---------- */
  const ICONS = {
    search: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
    menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
    x: '<path d="M18 6 6 18M6 6l12 12"/>',
    'chevron-down': '<path d="m6 9 6 6 6-6"/>',
    'chevron-right': '<path d="m9 18 6-6-6-6"/>',
    'chevron-left': '<path d="m15 18-6-6 6-6"/>',
    'arrow-right': '<path d="M5 12h14M12 5l7 7-7 7"/>',
    'arrow-up-right': '<path d="M7 17 17 7M7 7h10v10"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    minus: '<path d="M5 12h14"/>',
    check: '<path d="M20 6 9 17l-5-5"/>',
    calendar: '<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
    clock: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
    'map-pin': '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
    user: '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
    users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>',
    graduation: '<path d="M22 10 12 5 2 10l10 5 10-5Z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>',
    book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V2H6.5A2.5 2.5 0 0 0 4 4.5v15Z"/><path d="M4 19.5A2.5 2.5 0 0 0 6.5 22H20v-5"/>',
    flask: '<path d="M9 3h6M10 3v6L4.5 19a2 2 0 0 0 1.7 3h11.6a2 2 0 0 0 1.7-3L14 9V3"/><path d="M7 15h10"/>',
    building: '<rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 22v-4h6v4M8 6h.01M16 6h.01M12 6h.01M12 10h.01M12 14h.01M16 10h.01M16 14h.01M8 10h.01M8 14h.01"/>',
    home: '<path d="m3 10 9-7 9 7v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"/><path d="M9 22V12h6v10"/>',
    globe: '<circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20"/>',
    briefcase: '<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>',
    heart: '<path d="M12 21s-8-4.5-8-11a5 5 0 0 1 8-4 5 5 0 0 1 8 4c0 6.5-8 11-8 11Z"/>',
    file: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/>',
    download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>',
    phone: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2Z"/>',
    mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/>',
    message: '<path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 8.5 8.5 0 0 1-3.8-.9L3 21l1.9-5.7A8.4 8.4 0 0 1 12.5 3 8.5 8.5 0 0 1 21 11.5Z"/>',
    help: '<circle cx="12" cy="12" r="10"/><path d="M9.1 9a3 3 0 0 1 5.8 1c0 2-3 3-3 3M12 17h.01"/>',
    info: '<circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
    moon: '<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>',
    eye: '<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/>',
    type: '<path d="M4 7V4h16v3M9 20h6M12 4v16"/>',
    star: '<path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1Z"/>',
    trophy: '<path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6M18 9h1.5a2.5 2.5 0 0 0 0-5H18M4 22h16M10 14.7V17c0 .6-.5 1-1 1.2C7.8 18.8 7 20.2 7 22M14 14.7V17c0 .6.5 1 1 1.2 1.2.6 2 2 2 3.8M18 2H6v7a6 6 0 0 0 12 0Z"/>',
    coins: '<circle cx="8" cy="8" r="6"/><path d="M18.1 10.4A6 6 0 1 1 10.3 18M7 6h1v4M16.7 13.9l.7.7-2.8 2.8"/>',
    ruble: '<path d="M6 11h8a4 4 0 0 0 0-8H9v18M6 15h9"/>',
    wifi: '<path d="M5 12.6a10 10 0 0 1 14 0M8.5 16.4a5 5 0 0 1 7 0M2 8.8a15 15 0 0 1 20 0M12 20h.01"/>',
    navigation: '<path d="m3 11 19-9-9 19-2-8Z"/>',
    bed: '<path d="M2 4v16M2 8h18a2 2 0 0 1 2 2v10M2 17h20M6 8v9"/>',
    activity: '<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>',
    palette: '<circle cx="13.5" cy="6.5" r="1.5"/><circle cx="17.5" cy="10.5" r="1.5"/><circle cx="8.5" cy="7.5" r="1.5"/><circle cx="6.5" cy="12.5" r="1.5"/><path d="M12 2a10 10 0 0 0 0 20c.9 0 1.7-.8 1.7-1.7 0-.4-.2-.8-.4-1.1-.3-.3-.4-.7-.4-1.1 0-.9.8-1.7 1.7-1.7h2A5.6 5.6 0 0 0 22 11 10 10 0 0 0 12 2Z"/>',
    cpu: '<rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M15 2v2M15 20v2M2 15h2M2 9h2M20 15h2M20 9h2M9 2v2M9 20v2"/>',
    sparkles: '<path d="M12 3 13.9 8.1 19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9Z"/><path d="M19 17v4M17 19h4"/>',
    rocket: '<path d="M4.5 16.5c-1.5 1.3-2 5-2 5s3.7-.5 5-2c.7-.8.7-2.1-.1-2.9a2.2 2.2 0 0 0-2.9-.1Z"/><path d="m12 15-3-3a22 22 0 0 1 2-4A12.9 12.9 0 0 1 22 2c0 2.7-.8 7.5-6 11a22.4 22.4 0 0 1-4 2Z"/><path d="M9 12H4s.6-3 2-4c1.6-1.1 5 0 5 0M12 15v5s3-.6 4-2c1.1-1.6 0-5 0-5"/>',
    leaf: '<path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.5 19 2c1 2 2 4.2 2 8 0 5.5-4.8 10-10 10Z"/><path d="M2 21c0-3 1.9-5.4 5.2-6"/>',
    filter: '<path d="M22 3H2l8 9.5V19l4 2v-8.5Z"/>',
    grid: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/>',
    list: '<path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/>',
    bell: '<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9M10.3 21a1.9 1.9 0 0 0 3.4 0"/>',
    share: '<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.6 13.5 6.8 4M15.4 6.5l-6.8 4"/>',
    bookmark: '<path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z"/>',
    external: '<path d="M15 3h6v6M10 14 21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>',
    send: '<path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>',
    lock: '<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
    'log-in': '<path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4M10 17l5-5-5-5M15 12H3"/>',
    sliders: '<path d="M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6"/>',
    play: '<path d="m6 3 14 9-14 9Z"/>',
    quote: '<path d="M3 21c3 0 7-1 7-8V5c0-1.3-.8-2-2-2H4c-1.3 0-2 .7-2 2v6c0 1.2.7 2 2 2h3c0 4-2 6-4 6M15 21c3 0 7-1 7-8V5c0-1.3-.8-2-2-2h-4c-1.3 0-2 .7-2 2v6c0 1.2.7 2 2 2h3c0 4-2 6-4 6"/>',
    target: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
    route: '<circle cx="6" cy="19" r="3"/><path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"/><circle cx="18" cy="5" r="3"/>',
    utensils: '<path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2M7 2v20M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/>',
    shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/>',
    zap: '<path d="M13 2 3 14h9l-1 8 10-12h-9Z"/>',
    award: '<circle cx="12" cy="8" r="6"/><path d="M15.5 12.9 17 22l-5-3-5 3 1.5-9.1"/>',
    chart: '<path d="M3 3v18h18M18 17V9M13 17V5M8 17v-3"/>',
    trending: '<path d="m22 7-8.5 8.5-5-5L2 17M16 7h6v6"/>',
    layers: '<path d="m12 2 10 5-10 5L2 7Z"/><path d="m2 17 10 5 10-5M2 12l10 5 10-5"/>',
    'id-card': '<rect x="2" y="5" width="20" height="14" rx="2"/><circle cx="8" cy="12" r="2"/><path d="M14 10h4M14 14h4M5 16c.5-1.2 1.6-2 3-2s2.5.8 3 2"/>',
    edit: '<path d="M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/>',
    music: '<path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>',
    copy: '<rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>',
    refresh: '<path d="M3 12a9 9 0 0 1 15-6.7L21 8M21 3v5h-5M21 12a9 9 0 0 1-15 6.7L3 16M3 21v-5h5"/>',
    lightbulb: '<path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2Z"/>'
  };
  const icon = (name, cls = '') =>
    `<svg class="i ${cls}" viewBox="0 0 24 24" aria-hidden="true">${ICONS[name] || ICONS.info}</svg>`;
  const hydrateIcons = (root = document) =>
    root.querySelectorAll('i[data-icon]').forEach((el) => { el.outerHTML = icon(el.dataset.icon, el.className); });

  /* ---------- Логотипы (3 концепции) ---------- */
  const WORD = (fill) => `<text x="60" y="33" font-family="Onest, system-ui, sans-serif" font-weight="800" font-size="27" letter-spacing="-0.6" fill="${fill}">УрФУ</text>`;
  const LOGOS = {
    // 1. Эволюция: «Ф» как глобус-ориентир в фирменном знаке
    evolution: (c = {}) => `<svg viewBox="0 0 136 48" role="img" aria-label="УрФУ"><rect width="48" height="48" rx="14" fill="${c.bg || 'var(--brand)'}"/><circle cx="24" cy="24" r="10" fill="none" stroke="${c.fg || '#fff'}" stroke-width="4.5"/><path d="M24 8v32" stroke="${c.fg || '#fff'}" stroke-width="4.5" stroke-linecap="round"/><circle cx="36" cy="12" r="4" fill="${c.dot || 'var(--accent)'}"/>${WORD(c.word || 'currentColor')}</svg>`,
    // 2. Самоцвет: огранённый кристалл (уральские камни), в гранях — «У»
    gem: (c = {}) => `<svg viewBox="0 0 136 48" role="img" aria-label="УрФУ"><g>${c.mono
      ? `<path d="M24 2 43 13v22L24 46 5 35V13Z" fill="${c.mono}"/>`
      : `<path d="M24 24 24 2 43 13Z" fill="#6f95ff"/><path d="M24 24 43 13v22Z" fill="#1f4fd8"/><path d="M24 24 43 35 24 46Z" fill="#163aa6"/><path d="M24 24 24 46 5 35Z" fill="#0f2f8f"/><path d="M24 24 5 35V13Z" fill="#2a5ae6"/><path d="M24 24 5 13 24 2Z" fill="#9ab4ff"/>`}<path d="M15 14.5 24 27M33 14.5 20.5 37" stroke="${c.fg || '#fff'}" stroke-width="4.5" stroke-linecap="round" fill="none"/><circle cx="33" cy="14.5" r="2.8" fill="${c.dot || 'var(--accent)'}"/></g>${WORD(c.word || 'currentColor')}</svg>`,
    // 3. Вектор: три грани-вершины — Уральские горы и рост
    vector: (c = {}) => `<svg viewBox="0 0 136 48" role="img" aria-label="УрФУ"><g transform="skewX(-14) translate(10 0)"><rect x="4" y="26" width="9" height="16" rx="3" fill="${c.a || '#9ab4ff'}"/><rect x="17" y="16" width="9" height="26" rx="3" fill="${c.b || 'var(--brand)'}"/><rect x="30" y="6" width="9" height="36" rx="3" fill="${c.dot || 'var(--accent)'}"/></g>${WORD(c.word || 'currentColor')}</svg>`
  };
  const LOGO_KEY = 'urfu-logo';
  const currentLogo = () => { try { return localStorage.getItem(LOGO_KEY) || 'gem'; } catch (e) { return 'gem'; } };

  /* ---------- Навигация (новая IA: 5 разделов) ---------- */
  const NAV = [
    { id: 'admission', label: 'Поступление', href: 'admission.html', cols: [
      { h: 'Выбрать', links: [['Каталог программ', 'programs.html'], ['Подбор по баллам ЕГЭ', 'programs.html#calc'], ['Бакалавриат и специалитет', 'programs.html?level=bachelor'], ['Магистратура', 'programs.html?level=master'], ['Аспирантура', 'programs.html?level=phd'], ['Колледж (СПО)', 'programs.html?level=college']] },
      { h: 'Подать документы', links: [['Как поступить: 3 шага', 'admission.html#steps'], ['Сроки приёма 2027', 'admission.html#dates'], ['Подать заявление онлайн', 'admission.html#apply'], ['Льготы и особые права', 'admission.html#benefits'], ['Целевое обучение', 'admission.html#target']] },
      { h: 'После подачи', links: [['Списки и рейтинги', 'admission.html#lists'], ['Стоимость и оплата', 'admission.html#cost'], ['Общежития', 'campus.html#dorms'], ['Школьникам: олимпиады и курсы', 'admission.html#school']] }
    ], promo: { t: 'Приём-2027', d: 'Подбери программу по своим баллам за 1 минуту', cta: 'Подобрать', href: 'programs.html#calc' } },
    { id: 'study', label: 'Обучение', href: 'student.html', cols: [
      { h: 'Каждый день', links: [['Мой кабинет студента', 'student.html'], ['Расписание', 'schedule.html'], ['Электронные сервисы', 'student.html#services'], ['Справки и заявления', 'student.html#requests']] },
      { h: 'Поддержка', links: [['Стипендии и выплаты', 'student.html#money'], ['Психологическая помощь', 'help.html#psy'], ['Перевод и восстановление', 'help.html#transfer'], ['Студентам с ОВЗ', 'help.html#access']] },
      { h: 'Возможности', links: [['Практика и карьера', 'student.html#career'], ['Обмен и мобильность', 'student.html#mobility'], ['Библиотека', 'student.html#services'], ['Дополнительное образование', 'programs.html?level=extra']] }
    ], promo: { t: 'Расписание', d: 'Найди свою группу и добавь пары в календарь телефона', cta: 'Открыть', href: 'schedule.html' } },
    { id: 'science', label: 'Наука', href: 'science.html', cols: [
      { h: 'Исследования', links: [['Лаборатории и центры', 'science.html#labs'], ['Научные проекты', 'science.html#projects'], ['Научные журналы', 'science.html#journals']] },
      { h: 'Карьера в науке', links: [['Аспирантура', 'programs.html?level=phd'], ['Гранты и конкурсы', 'science.html#grants'], ['Студенческая наука', 'science.html#students']] },
      { h: 'Для бизнеса', links: [['Заказать исследование', 'science.html#business'], ['Технологии для лицензирования', 'science.html#business'], ['Стартапы УрФУ', 'science.html#startups']] }
    ], promo: { t: 'Наука для бизнеса', d: 'Решим инженерную задачу вашей компании', cta: 'Обсудить', href: 'science.html#business' } },
    { id: 'campus', label: 'Кампус', href: 'campus.html', cols: [
      { h: 'Жить', links: [['Карта кампуса', 'campus.html'], ['Общежития', 'campus.html#dorms'], ['Где поесть', 'campus.html#food'], ['Медицина', 'campus.html#health']] },
      { h: 'Проводить время', links: [['Студенческие сообщества', 'campus.html#life'], ['Спорт', 'campus.html#sport'], ['Творчество', 'campus.html#art'], ['Волонтёрство', 'campus.html#life']] },
      { h: 'Развитие', links: [['Новый кампус', 'campus.html#new'], ['Безопасность', 'help.html#safety'], ['Wi‑Fi и IT', 'help.html#it']] }
    ], promo: { t: 'Карта кампуса', d: '20+ корпусов и маршрут до нужной аудитории', cta: 'На карту', href: 'campus.html' } },
    { id: 'about', label: 'Об УрФУ', href: 'institutes.html', cols: [
      { h: 'Университет', links: [['Институты', 'institutes.html'], ['Новости и события', 'news.html'], ['Пресс-центр', 'news.html#press'], ['Руководство', 'institutes.html#leaders']] },
      { h: 'Работа и партнёрство', links: [['Работа в УрФУ', 'help.html#jobs'], ['Партнёрам', 'science.html#business'], ['Эндаумент-фонд', 'help.html#endowment'], ['Выпускникам', 'help.html#alumni']] },
      { h: 'Документы', links: [['Сведения об образовательной организации', 'help.html#docs'], ['Контакты', 'help.html#contacts'], ['О концепции редизайна', 'concept.html']] }
    ], promo: { t: 'Новости', d: 'Главное за неделю: наука, студенты, события', cta: 'Читать', href: 'news.html' } }
  ];

  const ROLES = [
    { key: 'applicant', label: 'поступаю', full: 'Абитуриент' },
    { key: 'student', label: 'учусь', full: 'Студент' },
    { key: 'staff', label: 'работаю', full: 'Сотрудник' },
    { key: 'partner', label: 'партнёр', full: 'Партнёр' },
    { key: 'intl', label: 'из другой страны', full: 'International' }
  ];

  const LANGS = [['RU', 'Русский'], ['EN', 'English'], ['中文', '中文'], ['ES', 'Español'], ['PT', 'Português'], ['FR', 'Français'], ['AR', 'العربية']];

  /* ---------- Поиск: индекс задач и страниц ---------- */
  const SEARCH = [
    { g: 'Частые задачи', t: 'Расписание моей группы', d: 'Обучение', u: 'schedule.html', i: 'calendar' },
    { g: 'Частые задачи', t: 'Проходные баллы и подбор программы', d: 'Поступление', u: 'programs.html#calc', i: 'target' },
    { g: 'Частые задачи', t: 'Заказать справку об обучении', d: 'Кабинет студента', u: 'student.html#requests', i: 'file' },
    { g: 'Частые задачи', t: 'Заселиться в общежитие', d: 'Кампус', u: 'campus.html#dorms', i: 'bed' },
    { g: 'Частые задачи', t: 'Стипендии и выплаты', d: 'Обучение', u: 'student.html#money', i: 'coins' },
    { g: 'Частые задачи', t: 'Подключиться к Wi‑Fi', d: 'Помощь', u: 'help.html#it', i: 'wifi' },
    { g: 'Страницы', t: 'Поступление 2027', d: 'Как поступить в 3 шага', u: 'admission.html', i: 'graduation' },
    { g: 'Страницы', t: 'Каталог программ', d: '400+ программ', u: 'programs.html', i: 'grid' },
    { g: 'Страницы', t: 'Программная инженерия', d: 'Бакалавриат · ИРИТ-РтФ', u: 'program.html', i: 'cpu' },
    { g: 'Страницы', t: 'Кабинет студента', d: 'Сервисы и заявки', u: 'student.html', i: 'user' },
    { g: 'Страницы', t: 'Новости и события', d: 'Пресс-центр', u: 'news.html', i: 'bell' },
    { g: 'Страницы', t: 'Институты', d: '16 институтов и центров', u: 'institutes.html', i: 'building' },
    { g: 'Страницы', t: 'Институт радиоэлектроники и IT', d: 'ИРИТ-РтФ', u: 'institute.html', i: 'building' },
    { g: 'Страницы', t: 'Наука и лаборатории', d: 'Исследования и R&D', u: 'science.html', i: 'flask' },
    { g: 'Страницы', t: 'Карта кампуса', d: 'Корпуса и маршруты', u: 'campus.html', i: 'map-pin' },
    { g: 'Страницы', t: 'Центр помощи', d: 'Ответы и контакты', u: 'help.html', i: 'help' },
    { g: 'Контакты', t: 'Приёмная комиссия', d: '+7 (343) 375-44-44 · или напиши в чат', u: 'help.html#contacts', i: 'phone' },
    { g: 'Контакты', t: 'Контакт-центр', d: '8-800-100-50-44 · бесплатно', u: 'help.html#contacts', i: 'phone' }
  ];

  /* ---------- Хранилище (безопасно) ---------- */
  const store = {
    get(k, d) { try { const v = localStorage.getItem(k); return v === null ? d : v; } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* приватный режим */ } }
  };

  /* ---------- Тема и размер текста (применяем сразу) ---------- */
  const root = document.documentElement;
  const applyTheme = (t) => root.setAttribute('data-theme', t); /* без атрибута — светлая, «auto» следует за системой */
  const applyScale = (s) => root.style.setProperty('--fs-scale', s);
  applyTheme(store.get('urfu-theme', 'light'));
  applyScale(store.get('urfu-scale', '1'));

  /* ---------- Версия для слабовидящих: размер, цвета, картинки, интервал ---------- */
  const A11Y_DEF = { on: false, size: '1.3', c: 'site', img: 'on', sp: '0' };
  const getA11y = () => { try { return { ...A11Y_DEF, ...JSON.parse(store.get('urfu-a11y', '{}')) }; } catch (e) { return { ...A11Y_DEF }; } };
  function applyA11y(st) {
    const attr = (name, val) => { if (val) root.setAttribute(name, val); else root.removeAttribute(name); };
    attr('data-a11y', st.on ? 'on' : '');
    attr('data-a11y-c', st.on && st.c !== 'site' ? st.c : '');
    attr('data-a11y-img', st.on && st.img !== 'on' ? st.img : '');
    attr('data-a11y-sp', st.on && st.sp !== '0' ? st.sp : '');
    applyScale(st.on ? st.size : store.get('urfu-scale', '1'));
  }
  applyA11y(getA11y());

  /* ---------- Роль ---------- */
  const getRole = () => store.get('urfu-role', 'applicant');
  function setRole(key) {
    store.set('urfu-role', key);
    document.body.dataset.role = key;
    document.querySelectorAll('.role-pill').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.roleKey === key)));
    document.querySelectorAll('[data-for-role]').forEach((el) => {
      el.hidden = !el.dataset.forRole.split(' ').includes(key);
    });
    document.dispatchEvent(new CustomEvent('rolechange', { detail: key }));
  }

  /* ---------- Шапка ---------- */
  function renderHeader() {
    const mount = document.getElementById('site-header');
    if (!mount) return;
    const page = document.body.dataset.page || '';
    const navLinks = NAV.map((n) => `<button class="nav__link ${n.id === page ? 'is-current' : ''}" aria-expanded="false" aria-controls="mega-${n.id}" data-mega="${n.id}">${n.label}${icon('chevron-down')}</button>`).join('');
    const megas = NAV.map((n) => `
      <div class="mega" id="mega-${n.id}" role="region" aria-label="${n.label}">
        <div class="container mega__grid">
          ${n.cols.map((c) => `<div class="mega__col"><h3>${c.h}</h3>${c.links.map(([t, u]) => `<a href="${u}">${t}</a>`).join('')}</div>`).join('')}
          <a class="mega__promo" href="${n.promo.href}"><span class="eyebrow">${n.label}</span><strong class="h4">${n.promo.t}</strong><span class="muted small">${n.promo.d}</span><span class="arrow-link">${n.promo.cta} ${icon('arrow-right')}</span></a>
        </div>
      </div>`).join('');
    const role = getRole();
    mount.outerHTML = `
    <a class="skip-link" href="#main">Перейти к содержанию</a>
    <section class="a11y-bar" id="a11y-bar" aria-label="Настройки версии для слабовидящих">
      <div class="container a11y-bar__inner">
        <div class="a11y-bar__title">
          <span class="a11y-bar__eye">${icon('eye')}</span>
          <span><strong>Версия для слабовидящих</strong><small>Настройки сохраняются на этом устройстве</small></span>
          <button class="a11y-bar__more" aria-expanded="false" aria-controls="a11y-opts">Настройки ${icon('chevron-down')}</button>
        </div>
        <div class="a11y-opts" id="a11y-opts">
          <div class="a11y-group" role="group" aria-label="Размер шрифта"><span aria-hidden="true">Размер шрифта</span>
            <div class="a11y-seg a11y-seg--size" data-a11y-set="size"><button data-v="1.3" aria-label="Крупный">А</button><button data-v="1.55" aria-label="Очень крупный">А</button><button data-v="1.8" aria-label="Максимальный">А</button></div></div>
          <div class="a11y-group" role="group" aria-label="Цвета сайта"><span aria-hidden="true">Цвета</span>
            <div class="a11y-seg" data-a11y-set="c">${[['site', 'Цвета сайта'], ['bw', 'Чёрным по белому'], ['wb', 'Белым по чёрному'], ['blue', 'Тёмно-синим по голубому'], ['beige', 'Коричневым по бежевому'], ['brown', 'Зелёным по коричневому']].map(([v, l]) => `<button class="a11y-sw a11y-sw--${v}" data-v="${v}" aria-label="${l}" title="${l}">Ц</button>`).join('')}</div></div>
          <div class="a11y-group" role="group" aria-label="Изображения"><span aria-hidden="true">Изображения</span>
            <div class="a11y-seg" data-a11y-set="img"><button data-v="on">Цветные</button><button data-v="gray">Ч/б</button><button data-v="off">Скрыть</button></div></div>
          <div class="a11y-group" role="group" aria-label="Интервал между буквами и строками"><span aria-hidden="true">Интервал</span>
            <div class="a11y-seg a11y-seg--sp" data-a11y-set="sp"><button data-v="0">Обычный</button><button data-v="1">Средний</button><button data-v="2">Большой</button></div></div>
          <div class="a11y-actions"><button data-a11y-reset>Сбросить</button><button data-a11y-toggle>${icon('eye')} Обычная версия</button></div>
        </div>
      </div>
    </section>
    <header class="site-header" id="header">
      <div class="container header-bar">
        <a class="brand" href="index.html" aria-label="УрФУ — на главную" data-logo-slot>${LOGOS[currentLogo()]()}</a>
        <nav class="nav" aria-label="Основная навигация">${navLinks}</nav>
        <div class="header-tools">
          <button class="search-trigger" data-search-open aria-label="Поиск">${icon('search')}<span>Найти на сайте</span><kbd>Ctrl K</kbd></button>
          <div class="rel">
            <button class="lang-btn" data-pop="lang" aria-expanded="false" aria-label="Язык сайта: русский">${icon('globe')} RU</button>
            <div class="popover" id="pop-lang" role="menu">${LANGS.map(([c, n], idx) => `<a href="index.html" role="menuitem" class="${idx === 0 ? 'is-active' : ''}">${n}<span class="muted">${c}</span></a>`).join('')}</div>
          </div>
          <div class="rel">
            <button class="tool-btn" data-pop="a11y" aria-expanded="false" aria-label="Версия для слабовидящих и настройки отображения">${icon('eye')}</button>
            <div class="popover" id="pop-a11y">
              <button class="a11y-cta" data-a11y-toggle>${icon('eye')}<span data-a11y-label>Версия для слабовидящих</span></button>
              <div class="pop-normal"><h4>Размер текста</h4>
              <div class="seg" data-seg="scale"><button data-v="1" aria-pressed="false">A</button><button data-v="1.15" aria-pressed="false" style="font-size:18px">A</button><button data-v="1.3" aria-pressed="false" style="font-size:21px">A</button></div></div>
              <h4>Тема</h4>
              <div class="seg" data-seg="theme"><button data-v="light" aria-pressed="false" aria-label="Светлая">${icon('sun')}</button><button data-v="dark" aria-pressed="false" aria-label="Тёмная">${icon('moon')}</button><button data-v="auto" aria-pressed="false">Авто</button></div>
            </div>
          </div>
          <a class="btn btn--sm header-cabinet" href="student.html">${icon('log-in')} Личный кабинет</a>
          <button class="tool-btn burger" data-drawer-open aria-label="Открыть меню">${icon('menu')}</button>
        </div>
      </div>
      ${megas}
      <div class="role-bar">
        <div class="container role-bar__inner" role="group" aria-label="Я —">
          <span class="role-bar__label">Я —</span>
          ${ROLES.map((r) => `<button class="role-pill" data-role-key="${r.key}" aria-pressed="${r.key === role}"><span class="dot"></span>${r.label}</button>`).join('')}
        </div>
      </div>
    </header>
    <div class="drawer" id="drawer" aria-hidden="true">
      <div class="drawer__backdrop" data-drawer-close></div>
      <div class="drawer__panel" role="dialog" aria-label="Меню">
        <div class="row between"><a class="brand" href="index.html">${LOGOS[currentLogo()]()}</a><button class="tool-btn" data-drawer-close aria-label="Закрыть меню">${icon('x')}</button></div>
        <button class="search-trigger" data-search-open style="width:100%;margin:8px 0">${icon('search')} Найти на сайте</button>
        ${NAV.map((n) => `<details class="acc"><summary>${n.label}${icon('plus')}</summary><div class="acc__body">${n.cols.flatMap((c) => c.links).map(([t, u]) => `<a href="${u}">${t}</a>`).join('')}</div></details>`).join('')}
        <a class="btn btn--block" href="student.html" style="margin-top:16px">${icon('log-in')} Личный кабинет</a>
        <a class="btn btn--ghost btn--block" href="help.html">${icon('help')} Центр помощи</a>
      </div>
    </div>
    <div class="search-modal" id="search" aria-hidden="true">
      <div class="search-modal__backdrop" data-search-close></div>
      <div class="search-modal__panel" role="dialog" aria-label="Поиск по сайту">
        <div class="search-modal__input">${icon('search')}<input id="search-input" type="search" placeholder="Например: расписание, общежитие, проходной балл" autocomplete="off" aria-label="Поисковый запрос"><button class="tool-btn" data-search-close aria-label="Закрыть поиск">${icon('x')}</button></div>
        <div class="search-results" id="search-results"></div>
      </div>
    </div>`;
  }

  /* ---------- Подвал ---------- */
  function renderFooter() {
    const mount = document.getElementById('site-footer');
    if (!mount) return;
    const col = (h, links) => `<div><h3>${h}</h3><ul>${links.map(([t, u]) => `<li><a href="${u}">${t}</a></li>`).join('')}</ul></div>`;
    mount.outerHTML = `
    <footer class="site-footer">
      <div class="container">
        <div class="footer-top">
          <div class="stack">
            <a class="brand" href="index.html" style="color:#fff">${LOGOS[currentLogo()]({ word: '#fff' })}</a>
            <p>Уральский федеральный университет<br>имени первого Президента России Б. Н. Ельцина</p>
            <div class="footer-contact"><span>Контакт-центр, бесплатно</span><strong><a href="tel:88001005044">8-800-100-50-44</a></strong></div>
            <div class="social"><a href="help.html#contacts" aria-label="ВКонтакте">VK</a><a href="help.html#contacts" aria-label="Telegram">TG</a><a href="help.html#contacts" aria-label="Rutube">RT</a><a href="help.html#contacts" aria-label="Дзен">ДЗ</a></div>
          </div>
          ${col('Поступающим', [['Каталог программ', 'programs.html'], ['Как поступить', 'admission.html#steps'], ['Сроки приёма', 'admission.html#dates'], ['Общежития', 'campus.html#dorms']])}
          ${col('Студентам', [['Кабинет студента', 'student.html'], ['Расписание', 'schedule.html'], ['Стипендии', 'student.html#money'], ['Карьера', 'student.html#career']])}
          ${col('Университет', [['Институты', 'institutes.html'], ['Наука', 'science.html'], ['Кампус', 'campus.html'], ['Новости', 'news.html']])}
          ${col('Помощь', [['Центр помощи', 'help.html'], ['Контакты', 'help.html#contacts'], ['Сведения об организации', 'help.html#docs'], ['Концепция редизайна', 'concept.html']])}
        </div>
        <div class="footer-bottom">
          <span>© 2026 УрФУ · Конкурсный концепт редизайна, данные демонстрационные</span>
          <span><a href="help.html#docs">Противодействие коррупции</a> · <a href="help.html#docs">Политика конфиденциальности</a> · <a href="structure.html">Карта сайта</a> · <a href="#a11y-bar" data-a11y-toggle>Версия для слабовидящих</a></span>
        </div>
      </div>
    </footer>`;
  }

  /* ---------- Поведение шапки ---------- */
  function bindHeader() {
    const header = document.getElementById('header');
    if (!header) return;
    const closeMegas = () => {
      header.querySelectorAll('.mega').forEach((m) => m.classList.remove('is-open'));
      header.querySelectorAll('[data-mega]').forEach((b) => b.setAttribute('aria-expanded', 'false'));
    };
    header.querySelectorAll('[data-mega]').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const m = document.getElementById('mega-' + btn.dataset.mega);
        const open = !m.classList.contains('is-open');
        closeMegas(); closePops();
        if (open) { m.classList.add('is-open'); btn.setAttribute('aria-expanded', 'true'); }
      });
    });
    header.querySelectorAll('.mega').forEach((m) => m.addEventListener('click', (e) => e.stopPropagation()));

    // Поповеры
    const closePops = () => document.querySelectorAll('.popover.is-open').forEach((p) => { p.classList.remove('is-open'); });
    header.querySelectorAll('[data-pop]').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const p = document.getElementById('pop-' + btn.dataset.pop);
        const open = !p.classList.contains('is-open');
        closePops(); closeMegas();
        p.classList.toggle('is-open', open);
        btn.setAttribute('aria-expanded', String(open));
      });
    });
    document.querySelectorAll('.popover').forEach((p) => p.addEventListener('click', (e) => e.stopPropagation()));
    document.addEventListener('click', () => { closeMegas(); closePops(); });

    // Сегменты: размер текста, тема
    const syncSeg = () => {
      document.querySelectorAll('[data-seg="scale"] button').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.v === store.get('urfu-scale', '1'))));
      document.querySelectorAll('[data-seg="theme"] button').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.v === store.get('urfu-theme', 'light'))));
    };
    document.querySelectorAll('[data-seg="scale"] button').forEach((b) => b.addEventListener('click', () => { store.set('urfu-scale', b.dataset.v); applyScale(b.dataset.v); syncSeg(); }));
    document.querySelectorAll('[data-seg="theme"] button').forEach((b) => b.addEventListener('click', () => { store.set('urfu-theme', b.dataset.v); applyTheme(b.dataset.v); syncSeg(); }));
    syncSeg();

    // Версия для слабовидящих
    const syncA11y = () => {
      const st = getA11y();
      document.querySelectorAll('[data-a11y-set]').forEach((g) => g.querySelectorAll('button').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.v === st[g.dataset.a11ySet]))));
      document.querySelectorAll('[data-a11y-label]').forEach((el) => { el.textContent = st.on ? 'Обычная версия сайта' : 'Версия для слабовидящих'; });
    };
    const setA11y = (patch) => { const st = { ...getA11y(), ...patch }; store.set('urfu-a11y', JSON.stringify(st)); applyA11y(st); syncA11y(); return st; };
    document.querySelectorAll('[data-a11y-set] button').forEach((b) => b.addEventListener('click', () => setA11y({ [b.closest('[data-a11y-set]').dataset.a11ySet]: b.dataset.v })));
    document.querySelectorAll('[data-a11y-toggle]').forEach((b) => b.addEventListener('click', (e) => {
      e.preventDefault();
      const st = setA11y({ on: !getA11y().on });
      document.querySelectorAll('.popover.is-open').forEach((p) => p.classList.remove('is-open'));
      if (st.on) { window.scrollTo({ top: 0, behavior: 'instant' }); document.querySelector('.a11y-bar__eye').closest('.a11y-bar').focus?.(); }
      toast(st.on ? 'Версия для слабовидящих включена — настройки вверху страницы' : 'Вернули обычную версию сайта');
    }));
    document.querySelectorAll('[data-a11y-reset]').forEach((b) => b.addEventListener('click', () => { setA11y({ ...A11Y_DEF, on: true }); toast('Настройки сброшены'); }));
    const more = document.querySelector('.a11y-bar__more');
    more?.addEventListener('click', () => { const open = more.closest('.a11y-bar').classList.toggle('is-open'); more.setAttribute('aria-expanded', String(open)); });
    syncA11y();

    // Тень при прокрутке
    const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 4);
    window.addEventListener('scroll', onScroll, { passive: true }); onScroll();

    // Роли
    document.querySelectorAll('.role-pill, [data-set-role]').forEach((b) => b.addEventListener('click', () => {
      const key = b.dataset.roleKey || b.dataset.setRole;
      setRole(key);
      const r = ROLES.find((x) => x.key === key);
      if (b.classList.contains('role-pill')) toast(`Показываем сайт для роли «${r.full}»`);
    }));

    // Мобильное меню
    const drawer = document.getElementById('drawer');
    const toggleDrawer = (open) => { drawer.classList.toggle('is-open', open); drawer.setAttribute('aria-hidden', String(!open)); document.body.style.overflow = open ? 'hidden' : ''; };
    document.querySelectorAll('[data-drawer-open]').forEach((b) => b.addEventListener('click', () => toggleDrawer(true)));
    document.querySelectorAll('[data-drawer-close]').forEach((b) => b.addEventListener('click', () => toggleDrawer(false)));

    // Esc закрывает всё
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') { closeMegas(); closePops(); toggleDrawer(false); closeSearch(); }
    });
  }

  /* ---------- Поиск ---------- */
  let activeIdx = -1;
  function openSearch(q = '') {
    const m = document.getElementById('search');
    if (!m) return;
    m.classList.add('is-open'); m.setAttribute('aria-hidden', 'false');
    document.getElementById('drawer')?.classList.remove('is-open');
    const input = document.getElementById('search-input');
    input.value = q; renderResults(q); setTimeout(() => input.focus(), 30);
  }
  function closeSearch() {
    const m = document.getElementById('search');
    if (!m || !m.classList.contains('is-open')) return;
    m.classList.remove('is-open'); m.setAttribute('aria-hidden', 'true');
  }
  function renderResults(q) {
    const box = document.getElementById('search-results');
    const query = q.trim().toLowerCase();
    const items = query ? SEARCH.filter((s) => (s.t + ' ' + s.d).toLowerCase().includes(query)) : SEARCH.filter((s) => s.g === 'Частые задачи');
    activeIdx = -1;
    if (!items.length) {
      box.innerHTML = `<div style="padding:24px;text-align:center" class="stack-sm"><strong>Ничего не нашли по запросу «${q.replace(/</g, '&lt;')}»</strong><span class="muted small">Попробуй другое слово или спроси в <a class="link" href="help.html">Центре помощи</a></span></div>`;
      return;
    }
    const groups = [...new Set(items.map((i) => i.g))];
    box.innerHTML = groups.map((g) => `<div class="search-group">${query ? g : 'Часто ищут'}</div>` + items.filter((i) => i.g === g).map((i) =>
      `<a class="search-item" href="${i.u}"><span class="icon-tile">${icon(i.i)}</span><span><strong>${i.t}</strong><small>${i.d}</small></span></a>`).join('')).join('');
  }
  function bindSearch() {
    document.querySelectorAll('[data-search-open]').forEach((b) => b.addEventListener('click', (e) => { e.preventDefault(); openSearch(b.dataset.searchQuery || ''); }));
    document.querySelectorAll('[data-search-close]').forEach((b) => b.addEventListener('click', closeSearch));
    const input = document.getElementById('search-input');
    if (!input) return;
    input.addEventListener('input', () => renderResults(input.value));
    input.addEventListener('keydown', (e) => {
      const items = [...document.querySelectorAll('.search-item')];
      if (!items.length) return;
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        e.preventDefault();
        activeIdx = (activeIdx + (e.key === 'ArrowDown' ? 1 : -1) + items.length) % items.length;
        items.forEach((it, i) => it.classList.toggle('is-active', i === activeIdx));
        items[activeIdx].scrollIntoView({ block: 'nearest' });
      } else if (e.key === 'Enter') {
        e.preventDefault();
        (items[activeIdx] || items[0]).click();
      }
    });
    document.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); openSearch(); }
      if (e.key === '/' && !/input|textarea|select/i.test(document.activeElement.tagName)) { e.preventDefault(); openSearch(); }
    });
  }

  /* ---------- Табы (универсальные) ---------- */
  function bindTabs(rootEl = document) {
    rootEl.querySelectorAll('[role="tablist"]').forEach((list) => {
      const tabs = [...list.querySelectorAll('[role="tab"]')];
      tabs.forEach((tab) => tab.addEventListener('click', () => {
        tabs.forEach((t) => {
          const on = t === tab;
          t.setAttribute('aria-selected', String(on));
          const panel = document.getElementById(t.getAttribute('aria-controls'));
          if (panel) panel.hidden = !on;
        });
      }));
    });
  }

  /* ---------- Чипсы-переключатели ---------- */
  function bindChips(rootEl = document) {
    rootEl.querySelectorAll('[data-chip-group]').forEach((group) => {
      const multi = group.dataset.chipGroup === 'multi';
      group.querySelectorAll('.chip').forEach((chip) => chip.addEventListener('click', () => {
        if (multi) chip.setAttribute('aria-pressed', String(chip.getAttribute('aria-pressed') !== 'true'));
        else group.querySelectorAll('.chip').forEach((c) => c.setAttribute('aria-pressed', String(c === chip)));
        group.dispatchEvent(new CustomEvent('chipchange', { bubbles: true }));
      }));
    });
  }

  /* ---------- Тост ---------- */
  let toastTimer;
  function toast(msg) {
    document.querySelector('.toast')?.remove();
    const t = document.createElement('div');
    t.className = 'toast'; t.setAttribute('role', 'status'); t.textContent = msg;
    document.body.appendChild(t);
    clearTimeout(toastTimer); toastTimer = setTimeout(() => t.remove(), 2600);
  }

  /* ---------- Появление при прокрутке ---------- */
  function bindReveal() {
    const els = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) { els.forEach((e) => e.classList.add('is-in')); return; }
    const io = new IntersectionObserver((entries) => entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); } }), { rootMargin: '0px 0px -8% 0px' });
    els.forEach((e) => io.observe(e));
  }

  /* ---------- Демо-действия: кнопки без реального бэкенда ---------- */
  function bindDemo() {
    document.querySelectorAll('[data-toast]').forEach((el) => el.addEventListener('click', (e) => { e.preventDefault(); toast(el.dataset.toast); }));
  }

  /* ---------- Запуск ---------- */
  function init() {
    renderHeader();
    renderFooter();
    hydrateIcons();
    bindHeader();
    bindSearch();
    bindTabs();
    bindChips();
    bindDemo();
    bindReveal();
    setRole(getRole());
    document.dispatchEvent(new CustomEvent('appready'));
    fixHashScroll();
  }

  /* Шапка вставляется после первого перехода браузера к якорю — повторяем его */
  function fixHashScroll() {
    if (!location.hash || location.hash.length < 2) return;
    let userScrolled = false;
    const stop = () => { userScrolled = true; };
    ['wheel', 'touchstart', 'keydown'].forEach((e) => window.addEventListener(e, stop, { once: true, passive: true }));
    const go = () => {
      if (userScrolled) return;
      let el = null;
      try { el = document.querySelector(decodeURIComponent(location.hash)); } catch (e) { return; }
      if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' });
    };
    requestAnimationFrame(go);
    window.addEventListener('load', go, { once: true });
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(go);
  }

  /* ---------- Код аудитории → корпус («Х-420» → ХТИ, Мира 28, 4 этаж) ----------
     Буквы — по открытым источникам УрФУ (контакты подразделений, «Корпуса УрФУ» приёмной комиссии).
     map — id объекта на карте campus.html. */
  const PASSAGE = 'Зимой можно не выходить на улицу: от ГУКа сюда ведёт подземный переход.';
  const BUILDINGS = {
    'ГУК': { n: 'Главный учебный корпус', a: 'ул. Мира, 19', map: 'main', tip: 'Ректорат, приёмная комиссия, актовый зал и музей УрФУ — здесь.' },
    'М': { n: 'Корпус М — комплекс ГУКа', a: 'ул. Мира, 19', map: 'main', tip: 'Это крыло главного корпуса: заходи через ГУК.' },
    'И': { n: 'Корпус И — комплекс ГУКа', a: 'ул. Мира, 19', map: 'main', tip: 'Это крыло главного корпуса: заходи через ГУК.' },
    'Э': { n: 'Корпус Э — комплекс ГУКа', a: 'ул. Мира, 19', map: 'main', tip: 'Это крыло главного корпуса: заходи через ГУК.' },
    'Р': { n: 'Корпус Р — здание радиофака', a: 'ул. Мира, 32', map: 'irit', tip: 'С 2026 года ИРИТ-РтФ учится в новом кампусе в Новокольцовском — проверь адрес пары в расписании.' },
    'Х': { n: 'Химико-технологический корпус', a: 'ул. Мира, 28', map: 'hti', tip: PASSAGE },
    'ФТ': { n: 'Физико-технологический корпус', a: 'ул. Мира, 21', map: 'fti', tip: PASSAGE },
    'С': { n: 'Корпус Института строительства и архитектуры', a: 'ул. Мира, 17', map: null, tip: PASSAGE },
    'Т': { n: 'Корпус УралЭНИН и ИФО', a: 'ул. Софьи Ковалевской, 5', map: 'uralenin', tip: 'Отдельное здание, не на Мира. Здесь УралЭНИН и институт фундаментального образования.' }
  };
  // Новый кампус (вторая очередь открыта в январе 2026): ИРИТ-РтФ, ИнЭУ, СУНЦ.
  // Корпус ИРИТ-РтФ: блоки D–K (латиница), 3 этажа, номер «E-203» — блок E, 2-й этаж (по поэтажной схеме у входа, октябрь 2026).
  const NEW_CAMPUS = { code: 'Новый кампус', letter: '', n: 'Кампус в Новокольцовском: ИРИТ-РтФ, ИнЭУ, СУНЦ', a: 'ул. 100-летия Уральского университета, Новокольцовский', map: 'nk-irit', floor: null,
    tip: 'До ГУКа — автобус 56 до «Восточной» и 20 минут пешком. Студенты закладывают на дорогу около часа.' };
  const LATIN = { A: 'А', B: 'В', C: 'С', E: 'Е', H: 'Н', K: 'К', M: 'М', O: 'О', P: 'Р', T: 'Т', X: 'Х', Y: 'У' };
  const NK_LOOKALIKE = { 'Д': 'D', 'Е': 'E', 'Г': 'G', 'Н': 'H', 'К': 'K' }; // кириллица, набранная вместо латиницы
  function findRoom(raw) {
    const u = String(raw || '').toUpperCase().replace(/\s+/g, '').replace(/^(ИРИТ-?РТФ|ИРИТ|РТФ|IRIT)[-–—.,]?/, '');
    const nk = u.match(/^([D-KДЕГНК])[-–—.]?([1-3]\d{2})([A-ZА-Я]?)$/);
    if (nk) {
      const block = NK_LOOKALIKE[nk[1]] || nk[1], f = +nk[2][0];
      return { ...NEW_CAMPUS, code: `${block}-${nk[2]}${nk[3].toLowerCase()}`, letter: block, n: `ИРИТ-РтФ, блок ${block}`, a: 'ул. 100-летия Уральского университета, 5', map: 'nk-irit', floor: f, floors: 3,
        tip: `Новый кампус. Блоки D–K соединены переходами в кольцо — от входа иди по указателям к блоку ${block} и поднимись на ${f}-й этаж. Столовая — в блоке H на 1-м этаже.` };
    }
    const s = String(raw || '').toUpperCase().replace(/[A-Z]/g, (ch) => LATIN[ch] || ch).replace(/Ё/g, 'Е').replace(/\s+/g, '');
    const m = s.match(/^(ГУК|ФТ|[А-Я])[-–—.]?(\d{1,4})([А-Я]?)$/);
    if (!m) {
      if (!/КАМПУС|НВК|НОВОКОЛЬЦ|ИРИТ|РТФ|ИНЭУ|СУНЦ/.test(s)) return null;
      const map = /ИНЭУ/.test(s) ? 'nk-ineu' : /СУНЦ/.test(s) ? 'nk-sunc' : /НВК/.test(s) ? 'nk-dorm1' : 'nk-irit';
      const addr = { 'nk-irit': ', 5', 'nk-dorm1': ', 6' }[map] || ', Новокольцовский';
      return { ...NEW_CAMPUS, map, a: 'ул. 100-летия Уральского университета' + addr };
    }
    const [, letter, num, suf] = m;
    const b = BUILDINGS[letter];
    const code = `${letter === 'ФТ' ? 'Фт' : letter}-${num}${suf.toLowerCase()}`;
    if (!b) return { code, letter, unknown: true };
    return { code, letter, ...b, floor: num.length === 3 ? +num[0] : num.length === 4 ? +num.slice(0, 2) : null }; // Т-1011 — 10 этаж
  }

  window.UI = { getA11y, icon, hydrateIcons, toast, setRole, getRole, bindTabs, bindChips, openSearch, LOGOS, LOGO_KEY, ROLES, NAV, store, findRoom, BUILDINGS, NEW_CAMPUS };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
