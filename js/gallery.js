/**
 * gallery.js — Elmohandes Decor
 * Triggers global Lightbox from the Project details page grid items
 */

(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", () => {
    const grid = document.getElementById("project-gallery-grid");
    if (!grid) return;

    const items = grid.querySelectorAll(".project-gallery__item");

    // Create image list structure
    const images = Array.from(items).map((item) => {
      const img = item.querySelector("img");
      return {
        src: img?.getAttribute("src") || "",
        alt: img?.getAttribute("alt") || "",
      };
    });

    items.forEach((item, index) => {
      item.addEventListener("click", () => {
        // Call global lightbox handler defined in main.js
        if (typeof window.openLightbox === "function") {
          window.openLightbox(images, index);
        }
      });
    });
  });
})();
