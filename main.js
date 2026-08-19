(function () {
  "use strict";

  var overlay = document.querySelector("[data-modal-overlay]");
  var modal = document.querySelector("[data-modal]");
  var sourceInput = document.querySelector("[data-modal-source]");
  var form = document.querySelector("[data-modal-form]");

  function openModal(src) {
    if (!overlay || !modal) return;
    overlay.classList.add("is-open");
    modal.classList.add("is-open");
    document.body.classList.add("modal-open");
    if (sourceInput) sourceInput.value = src || "";
  }

  function closeModal() {
    if (!overlay || !modal) return;
    overlay.classList.remove("is-open");
    modal.classList.remove("is-open");
    document.body.classList.remove("modal-open");
  }

  document.querySelectorAll("[data-open-modal]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      openModal(btn.getAttribute("data-src") || "");
    });
  });

  document.querySelectorAll("[data-close-modal]").forEach(function (el) {
    el.addEventListener("click", closeModal);
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeModal();
  });

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      closeModal();
    });
  }

  var navToggle = document.querySelector("[data-nav-toggle]");
  var nav = document.querySelector("[data-nav]");

  if (navToggle && nav) {
    navToggle.addEventListener("click", function () {
      nav.classList.toggle("is-open");
    });
  }
})();
