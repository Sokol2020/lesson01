const menu = () => {
  const menu = document.querySelector("menu");
  const menuItems = menu.querySelectorAll("ul>li>a");

  document.addEventListener("click", (e) => {
    if (
      e.target.closest(".menu") ||
      e.target.classList.contains("close-btn") ||
      e.target === menuItems[0] ||
      e.target === menuItems[1] ||
      e.target === menuItems[2] ||
      e.target === menuItems[3] ||
      e.target === menuItems[4]
    ) {
      menu.classList.toggle("active-menu");
    } else if (!e.target.closest(".active-menu")) {
      menu.classList.remove("active-menu");
    }
  });
};

export default menu;