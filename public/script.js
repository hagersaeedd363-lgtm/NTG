/* ===== FC Mobile Hub — interactions ===== */
(function () {
  'use strict';

  /* ---------- Mobile nav ---------- */
  var navToggle = document.getElementById('navToggle');
  var navLinks = document.getElementById('navLinks');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
      var open = navLinks.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    navLinks.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        navLinks.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ---------- Footer year ---------- */
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Back to top ---------- */
  var toTop = document.getElementById('toTop');
  window.addEventListener('scroll', function () {
    if (toTop) toTop.classList.toggle('show', window.scrollY > 600);
  }, { passive: true });

  /* ---------- Animated hero counters ---------- */
  function animateCount(el) {
    var target = parseInt(el.getAttribute('data-count'), 10) || 0;
    var start = 0, dur = 1400, t0 = null;
    function step(ts) {
      if (!t0) t0 = ts;
      var p = Math.min((ts - t0) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      var val = Math.floor(eased * (target - start) + start);
      el.textContent = val >= 1000 ? (val / 1000).toFixed(val >= 10000 ? 0 : 1) + 'k' : val.toString();
      if (p < 1) requestAnimationFrame(step);
      else el.textContent = target >= 1000 ? (target / 1000).toFixed(target >= 10000 ? 0 : 1) + 'k' : target.toString();
    }
    requestAnimationFrame(step);
  }

  /* ---------- Reveal on scroll + trigger counters ---------- */
  var revealEls = [];
  document.querySelectorAll('.section, .hero-copy, .hero-visual, .cta-inner, .mode-card, .tip').forEach(function (el) {
    el.classList.add('reveal');
    revealEls.push(el);
  });

  var countersDone = false;
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
          if (!countersDone && entry.target.querySelector && entry.target.querySelector('.hero-stats')) {
            countersDone = true;
            document.querySelectorAll('.hero-stats strong').forEach(animateCount);
          }
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('in'); });
    document.querySelectorAll('.hero-stats strong').forEach(animateCount);
  }

  /* ---------- Events data + filtering ---------- */
  var EVENTS = [
    { cat: 'league', tag: 'League', title: 'Premier League Showdown', timer: 'Resets in 6h', desc: 'Beat rival clubs across the English top flight to bank league-exclusive players.', reward: '⭐ 88+ Player Pick' },
    { cat: 'promo', tag: 'Promo', title: 'Team of the Year', timer: 'Ends in 3 days', desc: 'The biggest promo of the season. Chase the best XI voted by fans worldwide.', reward: '🔥 Untradeable TOTY' },
    { cat: 'pvp', tag: 'PvP', title: 'Division Rivals', timer: 'Weekly reset', desc: 'Climb the ranked ladder in Head to Head for milestone rewards and coins.', reward: '💠 Rank Rewards' },
    { cat: 'league', tag: 'League', title: 'La Liga Grind', timer: 'Resets in 6h', desc: 'Daily Spanish-league objectives feeding chemistry pieces for your squad core.', reward: '🎁 Chem Boosts' },
    { cat: 'promo', tag: 'Promo', title: 'UCL Road to the Final', timer: 'Ends in 5 days', desc: 'Track live Champions League fixtures for dynamic, upgrading player items.', reward: '⚡ Live UCL Cards' },
    { cat: 'pvp', tag: 'PvP', title: 'VS Attack Blitz', timer: 'Ends in 12h', desc: 'Fast attacking duels — outscore opponents to spike your weekend leaderboard rank.', reward: '🏅 Leaderboard Packs' }
  ];

  var eventGrid = document.getElementById('eventGrid');
  function renderEvents(filter) {
    if (!eventGrid) return;
    var list = EVENTS.filter(function (e) { return filter === 'all' || e.cat === filter; });
    if (!list.length) {
      eventGrid.innerHTML = '<p class="event-empty">No events in this category right now.</p>';
      return;
    }
    eventGrid.innerHTML = list.map(function (e) {
      return '' +
        '<article class="event-card">' +
          '<div class="event-top">' +
            '<span class="tag tag-' + e.cat + '">' + e.tag + '</span>' +
            '<span class="event-timer">⏱ ' + e.timer + '</span>' +
          '</div>' +
          '<h3>' + e.title + '</h3>' +
          '<p>' + e.desc + '</p>' +
          '<span class="event-reward">' + e.reward + '</span>' +
        '</article>';
    }).join('');
  }
  renderEvents('all');

  var eventFilters = document.getElementById('eventFilters');
  if (eventFilters) {
    eventFilters.addEventListener('click', function (e) {
      var btn = e.target.closest('.chip');
      if (!btn) return;
      eventFilters.querySelectorAll('.chip').forEach(function (c) { c.classList.remove('is-active'); });
      btn.classList.add('is-active');
      renderEvents(btn.getAttribute('data-filter'));
    });
  }

  /* ---------- Squad chemistry builder ---------- */
  // Slot layouts as percentage coords {x,y} on the pitch (0-100). GK bottom, attack top.
  var FORMATIONS = {
    '433': [
      { p: 'GK', x: 50, y: 92 },
      { p: 'LB', x: 15, y: 74 }, { p: 'CB', x: 38, y: 78 }, { p: 'CB', x: 62, y: 78 }, { p: 'RB', x: 85, y: 74 },
      { p: 'CM', x: 30, y: 52 }, { p: 'CM', x: 50, y: 56 }, { p: 'CM', x: 70, y: 52 },
      { p: 'LW', x: 20, y: 26 }, { p: 'ST', x: 50, y: 20 }, { p: 'RW', x: 80, y: 26 }
    ],
    '442': [
      { p: 'GK', x: 50, y: 92 },
      { p: 'LB', x: 15, y: 74 }, { p: 'CB', x: 38, y: 78 }, { p: 'CB', x: 62, y: 78 }, { p: 'RB', x: 85, y: 74 },
      { p: 'LM', x: 16, y: 50 }, { p: 'CM', x: 40, y: 54 }, { p: 'CM', x: 60, y: 54 }, { p: 'RM', x: 84, y: 50 },
      { p: 'ST', x: 38, y: 22 }, { p: 'ST', x: 62, y: 22 }
    ],
    '4231': [
      { p: 'GK', x: 50, y: 92 },
      { p: 'LB', x: 15, y: 74 }, { p: 'CB', x: 38, y: 78 }, { p: 'CB', x: 62, y: 78 }, { p: 'RB', x: 85, y: 74 },
      { p: 'CDM', x: 38, y: 58 }, { p: 'CDM', x: 62, y: 58 },
      { p: 'CAM', x: 20, y: 38 }, { p: 'CAM', x: 50, y: 40 }, { p: 'CAM', x: 80, y: 38 },
      { p: 'ST', x: 50, y: 18 }
    ],
    '352': [
      { p: 'GK', x: 50, y: 92 },
      { p: 'CB', x: 28, y: 78 }, { p: 'CB', x: 50, y: 80 }, { p: 'CB', x: 72, y: 78 },
      { p: 'LM', x: 12, y: 52 }, { p: 'CM', x: 35, y: 56 }, { p: 'CM', x: 50, y: 58 }, { p: 'CM', x: 65, y: 56 }, { p: 'RM', x: 88, y: 52 },
      { p: 'ST', x: 38, y: 22 }, { p: 'ST', x: 62, y: 22 }
    ]
  };

  var NAMES = ['A. Rivera', 'M. Osei', 'L. Bianchi', 'K. Novak', 'J. Silva', 'D. Aksoy',
    'R. Haddad', 'T. Nakamura', 'S. Bauer', 'N. Costa', 'F. Okafor', 'V. Sørensen',
    'C. Mensah', 'P. Ferreira', 'E. Volkov', 'G. Marchetti'];

  var pitch = document.getElementById('pitch');
  var teamRatingEl = document.getElementById('teamRating');
  var teamChemEl = document.getElementById('teamChem');
  var formationSelect = document.getElementById('formationSelect');
  var current = '433';
  var filled = {}; // index -> { ovr, name }

  function randInt(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }

  function buildPitch(formation) {
    if (!pitch) return;
    // remove existing slots (keep the .pitch-lines element)
    pitch.querySelectorAll('.slot').forEach(function (s) { s.remove(); });
    filled = {};
    var slots = FORMATIONS[formation];
    slots.forEach(function (slot, i) {
      var btn = document.createElement('button');
      btn.className = 'slot';
      btn.style.left = slot.x + '%';
      btn.style.top = slot.y + '%';
      btn.setAttribute('type', 'button');
      btn.setAttribute('aria-label', 'Add player at ' + slot.p);
      btn.innerHTML =
        '<span class="slot-badge">+</span>' +
        '<span class="slot-label">' + slot.p + '</span>' +
        '<span class="slot-name"></span>';
      btn.addEventListener('click', function () { fillSlot(i, btn, slot.p); });
      pitch.appendChild(btn);
    });
    updateReadout();
  }

  function fillSlot(i, btn, pos) {
    var ovr = randInt(82, 99);
    var name = NAMES[randInt(0, NAMES.length - 1)];
    filled[i] = { ovr: ovr, name: name };
    btn.classList.add('filled');
    btn.querySelector('.slot-badge').textContent = ovr;
    btn.querySelector('.slot-name').textContent = name;
    updateReadout();
  }

  function updateReadout() {
    var vals = Object.keys(filled).map(function (k) { return filled[k].ovr; });
    var total = FORMATIONS[current].length;
    if (teamRatingEl) {
      teamRatingEl.textContent = vals.length ? Math.round(vals.reduce(function (a, b) { return a + b; }, 0) / vals.length) : '—';
    }
    if (teamChemEl) {
      var chem = Math.round((vals.length / total) * 33);
      teamChemEl.innerHTML = chem + '<i>/33</i>';
    }
  }

  function autoFill() {
    if (!pitch) return;
    pitch.querySelectorAll('.slot').forEach(function (btn, i) {
      var pos = btn.querySelector('.slot-label').textContent;
      fillSlot(i, btn, pos);
    });
  }

  if (formationSelect) {
    formationSelect.addEventListener('change', function () {
      current = formationSelect.value;
      buildPitch(current);
    });
  }
  var autoFillBtn = document.getElementById('autoFill');
  var clearBtn = document.getElementById('clearPitch');
  if (autoFillBtn) autoFillBtn.addEventListener('click', autoFill);
  if (clearBtn) clearBtn.addEventListener('click', function () { buildPitch(current); });

  buildPitch(current);
})();
