const menu = () => {
    const menu = document.querySelector("menu");

    const toggleMenu = () => {
      document.body.addEventListener("click", (e) => {
          if (e.target.closest(".menu")) {
              menu.classList.toggle("active-menu");
          } else if (e.target.closest("menu")  === menu && (e.target.classList.contains("close-btn"))) {
              if (!e.target.classList.contains("close-btn")) {
                  menu.classList.toggle("active-menu");
              } else {
                  menu.classList.toggle("active-menu");
              }
          } else if (e.target.closest("menu") !== menu) {
              menu.classList.remove("active-menu");
          } else if (e.target.tagName === "A") {
              menu.classList.toggle("active-menu");
          }
      });
  };
  toggleMenu();
};
  
export default menu;