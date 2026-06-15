(function () {
  // ═══════════════════════════════════════════════════════════════════════════
  //  SEO CONFIG — edit this file to update SEO for all pages in one place.
  //
  //  HOW TO USE:
  //    • Change site.* for values shared across every page (image, author, etc.)
  //    • Change pages.* for per-page title, description, canonical, robots.
  //    • To add a new page, copy any pages entry and use the path without .html
  //      e.g. "/about" maps to about.html
  // ═══════════════════════════════════════════════════════════════════════════

  var SEO = {

    // ── Shared site-wide values ─────────────────────────────────────────────
    site: {
      name:        "Deqly",
      url:         "https://deqly.com",
      image:       "https://deqly.com/brand_assets/Deqly-Share-Banner.jpg",
      imageAlt:    "Deqly digital card illustration",
      twitterCard: "summary_large_image",
      author:      "Deqly",
      locale:      "en_US",
    },

    // ── Per-page values (key = pathname without .html) ──────────────────────
    pages: {

      "/": {
        title:       "Deqly — Too much you in one card",
        description: "You're more than a name and number. Deqly lets you create multiple digital cards with pages to tell your story, personality, and work experience — all in one shareable profile.",
        canonical:   "https://deqly.com/",
        robots:      "index, follow",
      },

      "/privacy": {
        title:       "Privacy Policy — Deqly",
        description: "Read Deqly's Privacy Policy to understand how we collect, use, and protect your personal information.",
        canonical:   "https://deqly.com/privacy.html",
        robots:      "noindex, follow",
      },

      "/terms": {
        title:       "Terms & Conditions — Deqly",
        description: "Read Deqly's Terms & Conditions to understand the rules and guidelines for using the Deqly platform.",
        canonical:   "https://deqly.com/terms.html",
        robots:      "noindex, follow",
      },

    },
  };

  // ── Resolve current page ────────────────────────────────────────────────────
  var p = window.location.pathname.replace(/\/$/, "");
  if (p === "" || p === "/index.html") p = "/";
  else p = p.replace(/\.html$/, "");

  var page = SEO.pages[p] || SEO.pages["/"];
  var site = SEO.site;

  // ── Helpers ──────────────────────────────────────────────────────────────────
  function setMeta(attr, key, val) {
    var el = document.querySelector('meta[' + attr + '="' + key + '"]');
    if (!el) {
      el = document.createElement("meta");
      el.setAttribute(attr, key);
      document.head.appendChild(el);
    }
    el.setAttribute("content", val);
  }

  function setLink(rel, href) {
    var el = document.querySelector('link[rel="' + rel + '"]');
    if (!el) {
      el = document.createElement("link");
      el.setAttribute("rel", rel);
      document.head.appendChild(el);
    }
    el.setAttribute("href", href);
  }

  // ── Inject ────────────────────────────────────────────────────────────────
  document.title = page.title;

  setMeta("name", "description", page.description);
  setMeta("name", "author",      site.author);
  setMeta("name", "robots",      page.robots);
  setLink("canonical",           page.canonical);

  // Open Graph
  setMeta("property", "og:type",        "website");
  setMeta("property", "og:url",         page.canonical);
  setMeta("property", "og:site_name",   site.name);
  setMeta("property", "og:title",       page.title);
  setMeta("property", "og:description", page.description);
  setMeta("property", "og:image",       site.image);
  setMeta("property", "og:image:alt",   site.imageAlt);
  setMeta("property", "og:locale",      site.locale);

  // Twitter Card
  setMeta("name", "twitter:card",        site.twitterCard);
  setMeta("name", "twitter:title",       page.title);
  setMeta("name", "twitter:description", page.description);
  setMeta("name", "twitter:image",       site.image);
  setMeta("name", "twitter:image:alt",   site.imageAlt);

})();
