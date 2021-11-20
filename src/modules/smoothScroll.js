//const linksHead = document.querySelectorAll('.menu-list__link')
const menuItems = menu.querySelectorAll('ul>li>a')
const mainScroll = document.querySelector('.main__scroll')
const newArr = [...menuItems, mainScroll]



newArr.forEach(link => {  
  link.addEventListener('click', (event) =>{
    event.preventDefault()

    const ID = event.target.getAttribute('href').substr(1)
//плавная прокрутка при нажатии на раздел
    document.getElementById(ID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
})






/*
newArr.forEach(link => {  
  link.addEventListener('click', (event) =>{
    event.preventDefault()

    const ID = event.target.getAttribute('href').substr(1)
//плавная прокрутка при нажатии на раздел
    document.getElementById(ID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
})
*/





export default smoothScroll