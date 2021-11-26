const modal = () => {
  const modal = document.querySelector(".popup");
  const buttons = document.querySelectorAll(".popup-btn");

  const openModal = () => {
    modal.style.display = "block";
    document.querySelector(".popup-content").animate(
      [
        {
          opacity: 0,
          transform: "translate3D(0, -300px, 0)",
        },
        {
          opacity: 1,
        },
      ],
      {
        duration: 500,
      }
    );
  };

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (window.innerWidth > 768) {
        openModal();
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