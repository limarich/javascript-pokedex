const items = document.querySelectorAll(".item");
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("close-modal");
const infoContainer = document.querySelector(".info-container");

const openModal = () => {
  modal.style.display = "block";
  infoContainer.classList.add("skeleton");
  modal.scrollTo();
};

const closeModal = () => {
  modal.style.display = "none";
};

closeBtn.addEventListener("click", closeModal);
