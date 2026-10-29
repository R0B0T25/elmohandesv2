/**
 * carousel.js — Elmohandes Decor
 * Testimonials Carousel with touch/swipe support
 */

(function () {
  "use strict";

  function initCarousel(carouselEl, dotsContainer) {
    if (!carouselEl) return;

    const slides = carouselEl.querySelectorAll(".testimonial-slide");
    const dots = dotsContainer?.querySelectorAll(".testimonials__dot");
    let current = 0;
    let autoplayInterval;
    let touchStartX = 0;
    let touchEndX = 0;

    if (slides.length <= 1) return;

    function goTo(index) {
      // Hide current
      slides[current].classList.remove("is-active");
      dots?.[current]?.classList.remove("is-active");
      dots?.[current]?.setAttribute("aria-selected", "false");

      // Show new
      current = (index + slides.length) % slides.length;
      slides[current].classList.add("is-active");
      dots?.[current]?.classList.add("is-active");
      dots?.[current]?.setAttribute("aria-selected", "true");

      // Update aria-live label
      carouselEl.setAttribute(
        "aria-label",
        `شهادات العملاء — ${current + 1} من ${slides.length}`,
      );
    }

    function next() {
      goTo(current + 1);
    }
    function prev() {
      goTo(current - 1);
    }

    function startAutoplay() {
      autoplayInterval = setInterval(next, 5000);
    }

    function stopAutoplay() {
      clearInterval(autoplayInterval);
    }

    // Dot buttons
    dots?.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        stopAutoplay();
        goTo(index);
        startAutoplay();
      });
    });

    // Touch / Swipe support
    carouselEl.addEventListener(
      "touchstart",
      (e) => {
        touchStartX = e.changedTouches[0].screenX;
      },
      { passive: true },
    );

    carouselEl.addEventListener(
      "touchend",
      (e) => {
        touchEndX = e.changedTouches[0].screenX;
        const diff = touchStartX - touchEndX;

        if (Math.abs(diff) > 50) {
          stopAutoplay();
          // RTL: swipe left → next, swipe right → prev
          diff > 0 ? next() : prev();
          startAutoplay();
        }
      },
      { passive: true },
    );

    // Keyboard navigation on dots
    dotsContainer?.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight") {
        stopAutoplay();
        prev();
        dots?.[current]?.focus();
        startAutoplay();
      }
      if (e.key === "ArrowLeft") {
        stopAutoplay();
        next();
        dots?.[current]?.focus();
        startAutoplay();
      }
    });

    // Pause on hover
    const wrapper = carouselEl.closest(".testimonials__wrapper");
    wrapper?.addEventListener("mouseenter", stopAutoplay);
    wrapper?.addEventListener("mouseleave", startAutoplay);

    // Init
    goTo(0);
    startAutoplay();
  }

  // Initialize when DOM ready
  document.addEventListener("DOMContentLoaded", () => {
    const carouselEl = document.getElementById("testimonials-carousel");
    const dotsContainer = document.querySelector(".testimonials__dots");
    initCarousel(carouselEl, dotsContainer);
  });
})();
