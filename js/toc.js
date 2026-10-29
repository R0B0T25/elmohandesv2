/**
 * toc.js — Elmohandes Decor
 * Generates an interactive Table of Contents for blog single articles
 */

(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", () => {
    const articleBody = document.querySelector(".article-body");
    const tocList = document.querySelector(".toc-list");

    if (!articleBody || !tocList) return;

    const headings = articleBody.querySelectorAll("h2");
    const links = [];

    // Dynamically build list items
    headings.forEach((heading) => {
      const id =
        heading.getAttribute("id") ||
        heading.textContent.trim().replace(/\s+/g, "-").toLowerCase();
      heading.setAttribute("id", id);

      const li = document.createElement("li");
      const a = document.createElement("a");

      a.href = `#${id}`;
      a.className = "toc-link";
      a.textContent = heading.textContent.trim();

      li.appendChild(a);
      tocList.appendChild(li);
      links.push(a);
    });

    // Tracking active scroll state
    const observerOptions = {
      root: null,
      rootMargin: "-100px 0px -40% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          links.forEach((link) => {
            if (link.getAttribute("href") === `#${id}`) {
              link.classList.add("is-active");
            } else {
              link.classList.remove("is-active");
            }
          });
        }
      });
    }, observerOptions);

    headings.forEach((heading) => {
      observer.observe(heading);
    });
  });
})();
