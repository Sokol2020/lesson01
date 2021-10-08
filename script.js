'use strict';
const rollback = 14;
const title = '   КаЛьКулятор Вёрстки';

const screens = prompt("Какие типы экранов нужно разработать?");
const screenPrice = +prompt("Сколько будет стоить данная работа?");
const adaptive = confirm("Нужен ли адаптив на сайте?");

const service1 = prompt("Какой дополнительный тип услуги нужен?");
const servicePrice1 = prompt("Сколько это будет стоить?");
const service2 = prompt("Какой дополнительный тип услуги нужен?");
const servicePrice2 = prompt("Сколько это будет стоить?");

let fullPrice = parseInt(screenPrice) + parseInt(servicePrice1) + parseInt(servicePrice2);
const servicePercentPrice = Math.ceil(fullPrice - (fullPrice * (rollback/100)));


const allServicePrices = function getAllServicePrices() {
  return parseInt(servicePrice1) + parseInt(servicePrice2);
}

fullPrice = getFullPrice();
function getFullPrice(a, b) {
  return a+b;
}

function getTitle() {
  let cutTitle = title.trim();
  return cutTitle
    .charAt(0)
    .toUpperCase() + cutTitle
    .substring(1)
    .toLowerCase();
}

const ervicePercentPrice = function getServicePercentPrices() {
  return (Math.ceil(getFullPrice(screenPrice, allServicePrices(servicePrice1, servicePrice2)) - (getFullPrice(screenPrice, allServicePrices(servicePrice1, servicePrice2)) * (rollback/100))));
}

const screenArray = function Array() {
  return screens.split();
}

const showTypeOf = function (variable) {
  console.log(variable, typeof variable);

}

const getRollbackMessage = function(price) {
  if(price > 30000){
    return "Даем скидку в 10%"
  } else if(price > 15000 && price <= 30000){
    return "Даем скидку в 5%"
  } else if(price <= 15000 && price >= 0){
    return "Скидка не предусмотрена"
  } else if (price < 0){
    return "Что то пошло не так"
  }
}


showTypeOf(title);
showTypeOf(fullPrice);
showTypeOf(adaptive);
console.log(screens);
console.log(getRollbackMessage(fullPrice));
console.log(ervicePercentPrice());


/*
console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);
console.log(screens.length);
console.log("Стоимость верстки экранов " + screenPrice + " гривен");
console.log("Стоимость разработки сайта " + fullPrice + " гривен");
console.log(screens.toLowerCase().split(","));
console.log(fullPrice * (rollback/100));

console.log(allServicePrices());
console.log(getFullPrice(screenPrice, allServicePrices(servicePrice1, servicePrice2)));
console.log(getTitle());
console.log(ervicePercentPrice());
console.log(screenArray());*/