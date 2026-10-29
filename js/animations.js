/**
 * animations.js — Elmohandes Decor
 * IntersectionObserver · Scroll Reveals · Hero Sequence · Counter
 */

(function () {
  "use strict";

  // ============================================
  // INTERSECTION OBSERVER — Scroll Reveals
  // ============================================

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-revealed");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -60px 0px",
    },
  );

  // Observe all reveal elements
  document
    .querySelectorAll(".reveal, .image-reveal, .timeline-item")
    .forEach((el) => {
      revealObserver.observe(el);
    });

  // ============================================
  // HERO SEQUENCE ANIMATION
  // ============================================

  function initHeroAnimation() {
    const hero = document.querySelector(".hero");
    if (!hero) return;

    // Elements with hero animation classes
    const heroElements = hero.querySelectorAll(
      ".hero-mask, .hero-seq--1, .hero-seq--2, .hero-seq--3, .hero-seq--4, .hero-seq--5, .hero-seq--6",
    );
    const scrollIndicator = hero.querySelector(".scroll-indicator");
    const heroImage = hero.querySelector(".hero__bg");

    // Small delay to ensure DOM is ready
    requestAnimationFrame(() => {
      // Hero background image zoom
      if (heroImage) {
        heroImage.style.transform = "scale(1)";
      }

      // Trigger all hero sequence elements
      heroElements.forEach((el) => {
        el.classList.add("is-revealed");
      });

      // Scroll indicator last
      if (scrollIndicator) {
        setTimeout(() => {
          scrollIndicator.classList.add("is-revealed");
        }, 1800);
      }
    });
  }

  // ============================================
  // COUNTER ANIMATION
  // ============================================

  function animateCounter(element, target, duration = 1600) {
    const suffix = element.dataset.suffix || "";
    const prefix = element.dataset.prefix || "";
    let startTimestamp = null;

    // Parse target (handles "6000", "+6000", etc.)
    const numTarget = parseInt(target.toString().replace(/[^0-9]/g, ""), 10);

    function easeOutCubic(t) {
      return 1 - Math.pow(1 - t, 3);
    }

    function step(timestamp) {
      if (!startTimestamp) startTimestamp = timestamp;
      const elapsed = timestamp - startTimestamp;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutCubic(progress);
      const current = Math.floor(easedProgress * numTarget);

      element.textContent = prefix + current.toLocaleString("ar-EG") + suffix;

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        // Final value — use original target display
        element.textContent = prefix + element.dataset.target + suffix;
      }
    }

    requestAnimationFrame(step);
  }

  // Observe counters
  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const counter = entry.target;
          const target = counter.dataset.target;
          if (target && !counter.classList.contains("is-counted")) {
            counter.classList.add("is-counted");
            animateCounter(counter, target);
          }
          counterObserver.unobserve(counter);
        }
      });
    },
    { threshold: 0.5 },
  );

  document.querySelectorAll("[data-counter]").forEach((el) => {
    // Initialize with 0
    el.textContent =
      (el.dataset.prefix || "") + "0" + (el.dataset.suffix || "");
    counterObserver.observe(el);
  });

  // ============================================
  // PROCESS LINE ANIMATION
  // ============================================

  const processLineObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-revealed");
          processLineObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 },
  );

  document.querySelectorAll(".process-line").forEach((el) => {
    processLineObserver.observe(el);
  });

  // ============================================
  // STAGGER CHILDREN
  // Adds delay classes to children of .stagger-parent
  // ============================================

  document.querySelectorAll(".stagger-parent").forEach((parent) => {
    const children = parent.querySelectorAll(".reveal");
    children.forEach((child, index) => {
      child.classList.add(`reveal--delay-${Math.min(index + 1, 6)}`);
    });
  });

  // ============================================
  // PARALLAX (subtle — images only)
  // ============================================

  const parallaxElements = document.querySelectorAll("[data-parallax]");

  if (parallaxElements.length > 0) {
    function updateParallax() {
      parallaxElements.forEach((el) => {
        const speed = parseFloat(el.dataset.parallax) || 0.1;
        const rect =
          el.closest("[data-parallax-container]")?.getBoundingClientRect() ||
          el.getBoundingClientRect();
        const viewportCenter = window.innerHeight / 2;
        const elementCenter = rect.top + rect.height / 2;
        const offset = (viewportCenter - elementCenter) * speed;

        el.style.transform = `translateY(${offset}px)`;
      });
    }

    window.addEventListener("scroll", updateParallax, { passive: true });
    updateParallax(); // Initial
  }

  // ============================================
  // INIT
  // ============================================

  document.addEventListener("DOMContentLoaded", () => {
    initHeroAnimation();
  });

  // If DOM already loaded
  if (document.readyState !== "loading") {
    initHeroAnimation();
  }
})();
