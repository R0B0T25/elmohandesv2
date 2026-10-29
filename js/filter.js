/**
 * filter.js — Elmohandes Decor
 * Categories filter logic for the Projects page
 */

(function () {
  "use strict";

  const filterBar = document.querySelector(".filter-bar");
  const items = document.querySelectorAll(".filter-item");
  const loadMoreBtn = document.getElementById("load-more-btn");

  if (!filterBar) return;

  filterBar.addEventListener("click", (e) => {
    const button = e.target.closest(".filter-pill");
    if (!button) return;

    // Toggle active state on tab buttons
    filterBar.querySelectorAll(".filter-pill").forEach((btn) => {
      btn.classList.remove("is-active");
      btn.setAttribute("aria-selected", "false");
    });

    button.classList.add("is-active");
    button.setAttribute("aria-selected", "true");

    const filterVal = button.dataset.filter;

    // Filter items
    items.forEach((item) => {
      const category = item.dataset.category;

      // Clear any existing transition timeouts to prevent race conditions
      if (item._showTimeout) clearTimeout(item._showTimeout);
      if (item._hideTimeout) clearTimeout(item._hideTimeout);

      if (filterVal === "all" || category === filterVal) {
        // Show element
        item.classList.remove("is-hidden");
        item.setAttribute("aria-hidden", "false");
        // Small delay to trigger animation
        item._showTimeout = setTimeout(() => {
          item.style.opacity = "1";
          item.style.transform = "scale(1)";
        }, 50);
      } else {
        // Hide element
        item.style.opacity = "0";
        item.style.transform = "scale(0.95)";
        item._hideTimeout = setTimeout(() => {
          item.classList.add("is-hidden");
          item.setAttribute("aria-hidden", "true");
        }, 300); // matching animation transition time
      }
    });
  });

  // Mock Load More behavior
  loadMoreBtn?.addEventListener("click", () => {
    loadMoreBtn.disabled = true;
    loadMoreBtn.textContent = "جاري تحميل المزيد...";

    setTimeout(() => {
      loadMoreBtn.style.display = "none";
      // In a real project, we would append HTML templates via fetch.
      // Here we just notify the user.
      alert("تم تحميل جميع المشاريع الحالية.");
    }, 1200);
  });
})();
