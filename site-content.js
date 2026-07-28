// ═══════════════════════════════════════════════════
//  SITE CONTENT — edit this file to change any text
//  on the website. No need to touch index.html.
//
//  GRADIENT HEADINGS: use { plain, gradient, gradientFirst, lineBreak }
//    plain        → the black part of the heading
//    gradient     → the coloured part
//    gradientFirst → set true if the gradient comes BEFORE the plain text
//    lineBreak    → set true to put a <br> between plain and gradient
//
//  PLAIN TEXT: just a string — no HTML needed.
// ═══════════════════════════════════════════════════

var CONTENT = {

  // ── Navigation ──────────────────────────────────
  nav: {
    cta: "Try it for free",
  },

  // ── Hero ────────────────────────────────────────
  hero: {
    heading: {
      plain:         "Leave an impact,",
      gradient:      "not just a contact",
      gradientFirst: false,
      lineBreak:     true,
    },
    body:       "One card was never enough, Deqly gives you a deck of cards! Your story, your work, your personality, all shareable in one single link.",
    cta:        "Create A Free Deqly!",
    secondary:  "See examples ↓",
  },

  // ── Ticker (scrolling banner) ────────────────────
  // Add, remove, or reorder items freely.
  ticker: [
    "NO MORE PRINTING",
    "SHARE YOUR STORY",
    "UPDATE IN SECONDS",
    "SHARE INSTANTLY",
    "ALWAYS MEMORABLE",
    "100% YOU",
  ],

  // ── Features ────────────────────────────────────
  features: {
    heading: {
      plain:         "Where your ",
      gradient:      "story takes shape",
      gradientFirst: false,
      lineBreak:     false,
    },
    sub: "Your story doesn't fit on one card. Here's how Deqly gives every part of you the space to make an impact",
    cards: [
      {
        title: "You need more than one!",
        body:  "Build a full deck of cards! Not just one. Add your contacts, experiences, journey, and personality all in one place,",
      },
      {
        title: "A poet or a painter?",
        body:  "Shape your deck your way. Through words, visuals or both. Build something worth sharing",
      },
      {
        title: "Treat it like a pitch deck",
        body:  "A normal card introduces you. A Deqly deck represents you and helps you make an impact and leave an impression.",
      },
      {
        title: "Share more cards without waste!",
        body:  "No printing, no reprints — update your Deqly instantly and share your cards freely & with no limits.",
      },
    ],
  },

  // ── Showcase ────────────────────────────────────
  showcase: {
    heading: {
      plain:         " than a card can say",
      gradient:      "There is more to you",
      gradientFirst: true,
      lineBreak:     false,
    },
    sub:        "At every networking event from now on, share a deck, not a card!",
    ctaDesktop: "Click 👇 to see what we're all about",
    ctaMobile:  "Swipe 👇 to see what we're all about",
  },

  // ── How it works ────────────────────────────────
  how: {
    pill: "So easy it's actually crazy",
    heading: {
      plain:         "Create cards in",
      gradient:      "just a few steps",
      gradientFirst: false,
      lineBreak:     true,
    },
    steps: [
      {
        title: "Sign up free",
        body:  "Just enter your email — we'll send you a magic link to get started, no passwords needed.",
      },
      {
        title: "Create a deck",
        body:  "Make it yours! Choose your style, pick your card type and build your deck - one card at a time!",
      },
      {
        title: "Share your Deqly!",
        body:  "Send it through a link or your QR code, your cards are ready to be shared make an impact!",
      },
    ],
  },

  // ── Final CTA ───────────────────────────────────
  cta: {
    pill:    "It starts FREE!",
    heading: "Make a bigger impact today!",
    body:    "Create and share a Deqly today! Theres too much you for one card",
    btn:     "Try our Beta version now!",
  },

  // ── Contact form ─────────────────────────────────
  contact: {
    btn: "Contact us today!",
  },

  // ── Mobile gate modal ───────────────────────────
  mobileGate: {
    heading: "Mobile only — for now",
    body:    "The Deqly Beta is built for your phone. Open this page on your mobile device and tap the button to jump straight in.",
  },

};


// ═══════════════════════════════════════════════════
//  BUILDER — do not edit below this line
// ═══════════════════════════════════════════════════
document.addEventListener('DOMContentLoaded', function () {

  function set(key, text) {
    var el = document.querySelector('[data-c="' + key + '"]');
    if (el) el.textContent = text;
  }

  function setHTML(key, html) {
    var el = document.querySelector('[data-c="' + key + '"]');
    if (el) el.innerHTML = html;
  }

  function buildHeading(cfg) {
    var g = '<span class="grad-text">' + cfg.gradient + '</span>';
    var br = cfg.lineBreak ? '<br/>' : '';
    return cfg.gradientFirst ? g + cfg.plain : cfg.plain + br + g;
  }

  // Nav
  set('nav-cta', CONTENT.nav.cta);

  // Hero — custom-built (not buildHeading) so mobile can break onto 3 lines
  // at different word boundaries than desktop's 2-line break.
  setHTML('hero-heading', 'Leave an<br class="br-mobile"/> impact,<br class="br-desktop"/> <span class="grad-text">not just<br class="br-mobile"/> a contact</span>');
  set('hero-body',      CONTENT.hero.body);
  set('hero-cta',       CONTENT.hero.cta);
  set('hero-secondary', CONTENT.hero.secondary);

  // Ticker — build spans and duplicate for seamless loop
  var tickerEl = document.querySelector('[data-c="ticker"]');
  if (tickerEl) {
    var items = CONTENT.ticker.concat(CONTENT.ticker);
    tickerEl.innerHTML = items.map(function (item) {
      return '<span style="font-size:20px;font-weight:600;color:#fff;white-space:nowrap;padding:0 32px;">✦ ' + item + ' ✦</span>';
    }).join('');
  }

  // Features
  setHTML('feat-heading', buildHeading(CONTENT.features.heading));
  set('feat-sub', CONTENT.features.sub);
  CONTENT.features.cards.forEach(function (card, i) {
    var n = i + 1;
    set('feat-' + n + '-title', card.title);
    set('feat-' + n + '-body',  card.body);
  });

  // Showcase
  setHTML('showcase-heading',    buildHeading(CONTENT.showcase.heading));
  set('showcase-sub',            CONTENT.showcase.sub);
  set('showcase-cta-desktop',    CONTENT.showcase.ctaDesktop);
  set('showcase-cta-mobile',     CONTENT.showcase.ctaMobile);

  // How it works
  set('how-pill', CONTENT.how.pill);
  setHTML('how-heading', buildHeading(CONTENT.how.heading));
  CONTENT.how.steps.forEach(function (step, i) {
    var n = i + 1;
    set('how-' + n + '-title', step.title);
    set('how-' + n + '-body',  step.body);
  });

  // CTA
  set('cta-pill',    CONTENT.cta.pill);
  set('cta-heading', CONTENT.cta.heading);
  set('cta-body',    CONTENT.cta.body);
  set('cta-btn',     CONTENT.cta.btn);

  // Contact
  set('contact-btn', CONTENT.contact.btn);

  // Mobile gate
  set('gate-heading', CONTENT.mobileGate.heading);
  set('gate-body',    CONTENT.mobileGate.body);

});
