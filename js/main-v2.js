/**
 * main-v2.js — Elmohandes Decor
 * Navigation · Mobile menu · Page transitions · Global interactions
 */

(function () {
  "use strict";

  // ============================================
  // NAVIGATION — Scroll behavior
  // ============================================

  const header = document.querySelector(".header");
  let lastScrollY = 0;
  let ticking = false;

  let menuOpen = false;

  function updateHeader() {
    if (menuOpen) {
      header?.classList.remove("is-hidden");
      ticking = false;
      return;
    }

    const currentScrollY = window.scrollY;

    // Transparent / Solid
    if (currentScrollY > 80) {
      header.classList.remove("is-transparent");
      header.classList.add("is-scrolled");
    } else {
      const isHeroPage = document.querySelector(".hero");
      if (isHeroPage) {
        header.classList.add("is-transparent");
        header.classList.remove("is-scrolled");
      } else {
        header.classList.add("is-scrolled");
        header.classList.remove("is-transparent");
      }
    }

    // Hide / Show on scroll direction
    if (currentScrollY > 200) {
      if (currentScrollY > lastScrollY) {
        header.classList.add("is-hidden");
      } else {
        header.classList.remove("is-hidden");
      }
    } else {
      header.classList.remove("is-hidden");
    }

    lastScrollY = currentScrollY;
    ticking = false;
  }

  window.addEventListener(
    "scroll",
    () => {
      if (!ticking) {
        requestAnimationFrame(updateHeader);
        ticking = true;
      }
    },
    { passive: true },
  );

  // Initial state
  if (header) {
    const isHeroPage = document.querySelector(".hero");
    if (isHeroPage) {
      header.classList.add("is-transparent");
    } else {
      header.classList.add("is-scrolled");
    }
    updateHeader();
  }

  // ============================================
  // ACTIVE NAV LINK
  // ============================================

  const navLinks = document.querySelectorAll(".nav__link");
  const currentPath = window.location.pathname;

  navLinks.forEach((link) => {
    const href = link.getAttribute("href");
    if (
      href === currentPath ||
      (currentPath === "/" && href === "index.html") ||
      (href !== "/" && href !== "index.html" && currentPath.includes(href))
    ) {
      link.classList.add("is-active");
    }
  });

  // ============================================
  // MOBILE MENU
  // ============================================

  const navToggle = document.querySelector(".nav__toggle");
  const navDrawer = document.querySelector(".nav__drawer");

  function openMenu() {
    menuOpen = true;
    header?.classList.remove("is-hidden");
    header?.classList.add("is-scrolled");
    navToggle?.classList.add("is-open");
    navDrawer?.classList.add("is-open");
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    navToggle?.setAttribute("aria-expanded", "true");
    navToggle?.setAttribute("aria-label", "إغلاق القائمة");
  }

  function closeMenu() {
    menuOpen = false;
    navToggle?.classList.remove("is-open");
    navDrawer?.classList.remove("is-open");
    document.body.style.overflow = "";
    document.documentElement.style.overflow = "";
    navToggle?.setAttribute("aria-expanded", "false");
    navToggle?.setAttribute("aria-label", "فتح القائمة");
    updateHeader();
  }

  navToggle?.addEventListener("click", () => {
    menuOpen ? closeMenu() : openMenu();
  });

  // Close on Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && menuOpen) closeMenu();
  });

  // Close on backdrop click
  navDrawer?.addEventListener("click", (e) => {
    if (e.target === navDrawer) closeMenu();
  });

  // Close on nav link click
  navDrawer?.querySelectorAll(".nav__link").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  // ============================================
  // PAGE TRANSITIONS
  // ============================================

  const transitionEl = document.querySelector(".page-transition");

  function animatePageOut(url) {
    if (!transitionEl) {
      window.location.href = url;
      return;
    }
    transitionEl.classList.add("is-leaving");
    setTimeout(() => {
      window.location.href = url;
    }, 400);
  }

  // Intercept internal links
  document.querySelectorAll("a[href]").forEach((link) => {
    const href = link.getAttribute("href");

    // Skip external, anchors, mailto, tel
    if (
      !href ||
      href.startsWith("#") ||
      href.startsWith("http") ||
      href.startsWith("mailto") ||
      href.startsWith("tel") ||
      href.startsWith("wa.me") ||
      link.hasAttribute("target")
    )
      return;

    link.addEventListener("click", (e) => {
      e.preventDefault();
      animatePageOut(href);
    });
  });

  // Page enter animation
  window.addEventListener("pageshow", () => {
    if (transitionEl) {
      transitionEl.classList.remove("is-leaving");
      transitionEl.classList.add("is-entering");
      setTimeout(() => {
        transitionEl.classList.remove("is-entering");
      }, 500);
    }
  });

  // ============================================
  // SMOOTH SCROLL for anchor links
  // ============================================

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      const target = document.querySelector(anchor.getAttribute("href"));
      if (target) {
        e.preventDefault();
        const headerHeight = header?.offsetHeight || 0;
        const targetTop =
          target.getBoundingClientRect().top +
          window.scrollY -
          headerHeight -
          24;
        window.scrollTo({ top: targetTop, behavior: "smooth" });
      }
    });
  });

  // ============================================
  // LIGHTBOX (Global — used in gallery pages)
  // ============================================

  const lightbox = document.getElementById("lightbox");
  if (lightbox) {
    let lightboxImages = [];
    let currentIndex = 0;

    function openLightbox(images, index) {
      lightboxImages = images;
      currentIndex = index;
      updateLightboxImage();
      lightbox.showModal();
      document.body.style.overflow = "hidden";
      lightbox.querySelector(".lightbox__close")?.focus();
    }

    function closeLightbox() {
      lightbox.close();
      document.body.style.overflow = "";
    }

    function updateLightboxImage() {
      const img = lightbox.querySelector(".lightbox__img");
      const counter = lightbox.querySelector(".lightbox__counter");
      if (img) {
        img.src = lightboxImages[currentIndex]?.src || "";
        img.alt = lightboxImages[currentIndex]?.alt || "";
      }
      if (counter) {
        counter.textContent = `${currentIndex + 1} / ${lightboxImages.length}`;
      }
    }

    lightbox
      .querySelector(".lightbox__close")
      ?.addEventListener("click", closeLightbox);
    lightbox.querySelector(".lightbox__next")?.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % lightboxImages.length;
      updateLightboxImage();
    });
    lightbox.querySelector(".lightbox__prev")?.addEventListener("click", () => {
      currentIndex =
        (currentIndex - 1 + lightboxImages.length) % lightboxImages.length;
      updateLightboxImage();
    });

    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) closeLightbox();
    });

    document.addEventListener("keydown", (e) => {
      if (!lightbox.open) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") {
        // RTL: left = next
        currentIndex = (currentIndex + 1) % lightboxImages.length;
        updateLightboxImage();
      }
      if (e.key === "ArrowRight") {
        // RTL: right = prev
        currentIndex =
          (currentIndex - 1 + lightboxImages.length) % lightboxImages.length;
        updateLightboxImage();
      }
    });

    // Expose globally
    window.openLightbox = openLightbox;
  }

  // ============================================
  // SCROLL PROGRESS BAR
  // ============================================

  const progressBar = document.querySelector(".scroll-progress");
  if (progressBar) {
    window.addEventListener(
      "scroll",
      () => {
        const docHeight =
          document.documentElement.scrollHeight - window.innerHeight;
        const progress = (window.scrollY / docHeight) * 100;
        progressBar.style.width = `${Math.min(progress, 100)}%`;
      },
      { passive: true },
    );
  }

  // ============================================
  // INERTIA SMOOTH SCROLL
  // ============================================

  const scrollContainer = document.querySelector("[data-scroll-container]");

  const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
  if (scrollContainer && window.innerWidth >= 1024 && !isTouch) {
    let ease = 0.08;
    let targetY = 0;
    let currentY = 0;
    let isScrolling = true;

    const setBodyHeight = () => {
      if (scrollContainer) {
        document.body.style.height = `${scrollContainer.getBoundingClientRect().height}px`;
      }
    };

    window.addEventListener("resize", setBodyHeight);
    window.addEventListener("load", setBodyHeight);

    if (window.MutationObserver) {
      const observer = new MutationObserver(setBodyHeight);
      observer.observe(scrollContainer, { childList: true, subtree: true });
    }

    window.addEventListener(
      "scroll",
      () => {
        if (isScrolling) {
          targetY = window.scrollY;
        }
      },
      { passive: true },
    );

    function smoothScrollLoop() {
      if (isScrolling) {
        currentY += (targetY - currentY) * ease;
        scrollContainer.style.transform = `translate3d(0, ${-currentY}px, 0)`;
      }
      requestAnimationFrame(smoothScrollLoop);
    }

    setTimeout(() => {
      setBodyHeight();
      requestAnimationFrame(smoothScrollLoop);
    }, 100);

    // Disable scrolling logic when Lightbox dialog is open
    const lightboxDialog = document.getElementById("lightbox");
    if (lightboxDialog) {
      const observer = new MutationObserver(() => {
        if (lightboxDialog.hasAttribute("open")) {
          isScrolling = false;
          scrollContainer.style.transform = "none";
          document.body.style.height = "";
        } else {
          isScrolling = true;
          setBodyHeight();
        }
      });
      observer.observe(lightboxDialog, {
        attributes: true,
        attributeFilter: ["open"],
      });
    }
  }
})();
