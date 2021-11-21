const menu = () => {
  const menuBtn = document.querySelector('.menu') //класс
  const menu = document.querySelector('menu') //тег
  const closeBtn = menu.querySelector('.close-btn')
  const menuItems = menu.querySelectorAll('ul>li>a')


  const handleMenu = () => {
    menu.classList.toggle('active-menu')
  }

  menuBtn.addEventListener('click', handleMenu)

  // Кнопка закрытия меню (крестик)
  closeBtn.addEventListener('click', handleMenu)

  //перебор каждого элемента списка "Меню" + обработчик с переходом по меню
  menuItems.forEach(menuItem => menuItem.addEventListener('click', handleMenu))
}


export default menu