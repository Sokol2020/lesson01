import { animate } from "./helpers";

const modal = () => {
  const modal = document.querySelector(".popup");
  const buttons = document.querySelectorAll(".popup-btn");
  const popupContent = document.querySelector(".popup-content");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (window.innerWidth > 768) {
        modal.style.display = "block";
        animate({
          duration: 500,
          timing(timeFraction) {
            return timeFraction;
          },
          draw(progress) {
            popupContent.style.opacity = progress;
            popupContent.style.top = 10 * progress + "%";
          },
        });
      } else {
        modal.style.display = "block";
      }
    });
  });

  modal.addEventListener('click', (e) => {
    if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
      modal.style.display = "none";
    }
  });

};

export default modal;