/* ════════════════════════════════════════════════════════════
   STOK.LY DEMO — Interactions
   Copyright Proud Brands Limited. Preview purposes only.
   ════════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  // ── Mobile Nav Toggle ────────────────────────────────────
  const navToggle = document.querySelector('.nav-toggle');
  const mainNav = document.querySelector('.main-nav');

  if (navToggle && mainNav) {
    navToggle.addEventListener('click', function () {
      const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!isOpen));
      mainNav.classList.toggle('is-open', !isOpen);
    });

    // Close nav when clicking a link
    mainNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navToggle.setAttribute('aria-expanded', 'false');
        mainNav.classList.remove('is-open');
      });
    });
  }

  // ── Scroll Animations ───────────────────────────────────
  // Add fade-up class to animatable elements
  var selectors = [
    '.problem-card',
    '.feature-card',
    '.integration-cat',
    '.diff-card',
    '.testimonial-figure',
    '.review-badges',
    '.section-eyebrow',
    '.section-heading',
    '.section-sub',
    '.hero-content',
    '.hero-visual',
    '.pricing-teaser .btn'
  ];

  var targets = document.querySelectorAll(selectors.join(','));
  targets.forEach(function (el) {
    el.classList.add('fade-up');
  });

  // Add stagger to grid parents
  document.querySelectorAll('.problems-grid, .features-grid, .diff-grid, .integration-categories').forEach(function (grid) {
    grid.classList.add('stagger');
  });

  // Intersection Observer
  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -40px 0px'
    });

    document.querySelectorAll('.fade-up').forEach(function (el) {
      observer.observe(el);
    });
  } else {
    // Fallback: show everything
    document.querySelectorAll('.fade-up').forEach(function (el) {
      el.classList.add('is-visible');
    });
  }

  // ── Integration logo stagger ─────────────────────────────
  if ('IntersectionObserver' in window) {
    var logoObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var wraps = entry.target.querySelectorAll('.int-logo-wrap');
          wraps.forEach(function (wrap, i) {
            setTimeout(function () {
              wrap.classList.add('is-visible');
            }, i * 100);
          });
          logoObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    document.querySelectorAll('.integration-cat').forEach(function (cat) {
      logoObserver.observe(cat);
    });
  }

  // ── Header scroll effect ────────────────────────────────
  var header = document.querySelector('.site-header');
  if (header) {
    var lastScroll = 0;
    window.addEventListener('scroll', function () {
      var currentScroll = window.pageYOffset;
      if (currentScroll > 80) {
        header.style.boxShadow = '0 1px 8px rgba(15,43,60,0.08)';
      } else {
        header.style.boxShadow = 'none';
      }
      lastScroll = currentScroll;
    }, { passive: true });
  }
})();
