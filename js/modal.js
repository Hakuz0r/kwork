export function initModal() {
  const overlay = document.querySelector("[data-modal-overlay]");
  const modal = document.querySelector("[data-modal]");
  const sourceInput = document.querySelector("[data-modal-source]");
  const form = document.querySelector("[data-modal-form]");

  if (!overlay || !modal) return;

  function openModal(src) {
    overlay.classList.add("is-open");
    modal.classList.add("is-open");
    document.body.classList.add("modal-open");
    if (sourceInput) sourceInput.value = src || "";
  }

  function closeModal() {
    overlay.classList.remove("is-open");
    modal.classList.remove("is-open");
    document.body.classList.remove("modal-open");
  }

  document.querySelectorAll("[data-open-modal]").forEach((btn) => {
    btn.addEventListener("click", () => openModal(btn.getAttribute("data-src") || ""));
  });

  document.querySelectorAll("[data-close-modal]").forEach((el) => {
    el.addEventListener("click", closeModal);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      closeModal();
    });
  }
}
