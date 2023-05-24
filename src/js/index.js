const modalContainer = document.getElementById("modalContainer");
const modalOverlay = document.getElementById("modalOverlay");
const modalButton = document.getElementById("modalButton");
const closeModalX = document.getElementById("closeModalX");
const closeModal = document.getElementById("closeModal");

modalButton.addEventListener("click", () => {
  modalContainer.classList.remove("hidden");
});

closeModalX.addEventListener("click", () => {
  modalContainer.classList.add("hidden");
});

closeModal.addEventListener("click", () => {
  modalContainer.classList.add("hidden");
});

modalOverlay.addEventListener("click", (e) => {
  if (e.target === modalOverlay) {
    modalContainer.classList.add("hidden");
  }
});
