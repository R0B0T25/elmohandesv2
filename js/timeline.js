/**
 * timeline.js — Elmohandes Decor
 * Timeline scrolling reveal logic
 */

(function () {
  "use strict";

  function initTimeline() {
    const timeline = document.querySelector(".timeline");
    if (!timeline) return;

    const fillBar = timeline.querySelector(".timeline__bar-fill");
    const items = timeline.querySelectorAll(".timeline-item");

    // Create observer for year markers and card containers
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px",
      },
    );

    items.forEach((item) => {
      observer.observe(item);
    });

    // Animate the line fill on timeline visible trigger
    const timelineObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          timeline.classList.add("is-revealed");
          timelineObserver.unobserve(timeline);
        }
      },
      { threshold: 0.1 },
    );

    timelineObserver.observe(timeline);
  }

  document.addEventListener("DOMContentLoaded", initTimeline);
})();
