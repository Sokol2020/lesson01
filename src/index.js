import timer from './modules/timer'
import menu from './modules/menu'
import modal from './modules/modal'
import smoothScroll from './modules/smoothScroll'
import formsValidation from './modules/formsValidator'
import tabs from './modules/tabs'
import slider from './modules/slider'
import calc from './modules/calc'
import sendForm from './modules/sendForm'


timer(`22 december 2021`)
menu()
modal()
smoothScroll()
formsValidation()
tabs()
slider()
calc(100)
sendForm({
  formId: "form1",
  someElem: [
    {
      type: "block",
      id: "total",
    },
  ],
});
sendForm({
  formId: "form2",
  someElem: [
    {
      type: "block",
      id: "total",
    },
  ],
});
sendForm({
  formId: "form3",
  someElem: [
    {
      type: "block",
      id: "total",
    },
  ],
});