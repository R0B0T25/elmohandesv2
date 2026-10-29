/**
 * form.js — Elmohandes Decor
 * Inline client-side form validation + AJAX submission mock
 */

(function () {
  "use strict";

  const form = document.getElementById("contact-form");
  const successState = document.getElementById("contact-success");

  if (!form) return;

  const fields = {
    name: {
      input: document.getElementById("client-name"),
      error: document.getElementById("name-error"),
      validate() {
        const val = this.input.value.trim();
        if (val.length < 3) {
          this.showError();
          return false;
        }
        this.clearError();
        return true;
      },
      showError() {
        this.input.classList.add("is-error");
        this.input.closest(".form-group").classList.add("has-error");
      },
      clearError() {
        this.input.classList.remove("is-error");
        this.input.closest(".form-group").classList.remove("has-error");
      },
    },
    phone: {
      input: document.getElementById("client-phone"),
      error: document.getElementById("phone-error"),
      validate() {
        const val = this.input.value.trim();
        // Egyptian phone format regex (010, 011, 012, 015 followed by 8 numbers)
        const regex = /^01[0125][0-9]{8}$/;
        if (!regex.test(val)) {
          this.showError();
          return false;
        }
        this.clearError();
        return true;
      },
      showError() {
        this.input.classList.add("is-error");
        this.input.closest(".form-group").classList.add("has-error");
      },
      clearError() {
        this.input.classList.remove("is-error");
        this.input.closest(".form-group").classList.remove("has-error");
      },
    },
  };

  // Inline validation on blur
  Object.keys(fields).forEach((key) => {
    const field = fields[key];
    field.input.addEventListener("blur", () => {
      field.validate();
    });
    field.input.addEventListener("input", () => {
      // Clear errors on edit
      field.clearError();
    });
  });

  // Submit handler
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Validate all fields
    let isValid = true;
    Object.keys(fields).forEach((key) => {
      const isFieldValid = fields[key].validate();
      if (!isFieldValid) isValid = false;
    });

    if (!isValid) {
      // Scroll to first error
      const firstError = form.querySelector(".is-error");
      firstError?.focus();
      return;
    }

    // Submit state (Spinner button)
    const btn = form.querySelector('button[type="submit"]');
    const originalText = btn.textContent;
    btn.disabled = true;
    btn.textContent = "جاري إرسال طلبك...";

    // Mock AJAX Submit
    setTimeout(() => {
      // Hide form
      form.style.display = "none";

      // Show success state
      if (successState) {
        successState.style.display = "block";
        requestAnimationFrame(() => {
          successState.classList.add("is-visible");
        });
      }

      // Smooth scroll back to form card top
      const card = form.closest(".contact-card");
      if (card) {
        const cardTop = card.getBoundingClientRect().top + window.scrollY - 100;
        window.scrollTo({ top: cardTop, behavior: "smooth" });
      }
    }, 1500);
  });
})();
