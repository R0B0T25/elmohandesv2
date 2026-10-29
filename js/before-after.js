/**
 * before-after.js — Elmohandes Decor
 * Interactive before/after image slider (drag/touch slide)
 */

(function () {
  "use strict";

  function initBeforeAfterSlider() {
    const slider = document.getElementById("before-after-slider");
    if (!slider) return;

    const beforeWrapper = slider.querySelector(".ba-slider__before-wrapper");
    const beforeImage = beforeWrapper?.querySelector(
      ".ba-slider__image--before",
    );
    const handle = slider.querySelector(".ba-slider__handle");

    const hint = slider.querySelector(".ba-slider__hint");

    if (!beforeWrapper || !handle) return;

    let active = false;

    function hideHint() {
      if (hint) {
        hint.classList.add("is-hidden");
      }
    }

    // Adjust width of before image container to prevent compression when clip changes
    function adjustBeforeImageWidth() {
      if (beforeImage) {
        beforeImage.style.width = `${slider.offsetWidth}px`;
      }
    }

    // Initialize/Resize event
    adjustBeforeImageWidth();
    window.addEventListener("resize", adjustBeforeImageWidth);

    function slide(x) {
      hideHint();
      const rect = slider.getBoundingClientRect();
      let position = ((x - rect.left) / rect.width) * 100;

      // Bound checks
      if (position < 0) position = 0;
      if (position > 100) position = 100;

      // Update positions (RTL: wrapper is right-aligned, so width is 100 - position)
      beforeWrapper.style.width = `${100 - position}%`;
      handle.style.left = `${position}%`;
    }

    // Mouse events
    slider.addEventListener("mousedown", (e) => {
      active = true;
      slide(e.clientX);
    });

    window.addEventListener("mouseup", () => {
      active = false;
    });

    window.addEventListener("mousemove", (e) => {
      if (!active) return;
      slide(e.clientX);
    });

    // Touch events
    slider.addEventListener(
      "touchstart",
      (e) => {
        active = true;
        slide(e.touches[0].clientX);
      },
      { passive: false },
    );

    window.addEventListener("touchend", () => {
      active = false;
    });

    window.addEventListener(
      "touchmove",
      (e) => {
        if (!active) return;
        e.preventDefault(); // Prevent body scrolling while dragging the handler on mobile
        slide(e.touches[0].clientX);
      },
      { passive: false },
    );
  }

  document.addEventListener("DOMContentLoaded", initBeforeAfterSlider);
})();
