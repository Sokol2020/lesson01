'use strict';

let title;
let screens;
let screenPrice;
let adaptive;
const rollback = 10;
let allServicePrices;
let fullPrice;
let servicePercentPrice;
let service1;
let service2;


const isNumber = function(num) {
  return !isNaN(parseFloat(num)) && isFinite(num) // проверка на число
  }

const asking = function() {

  while (!(title = prompt('Как называется проект?'))){
    alert('Поле не может быть пустым!');
  }
   screens = prompt("Какие типы экранов нужно разработать?");
  do {
     screenPrice = prompt("Сколько будет стоить данная работа?");
  }  while(!isNumber(screenPrice))

   adaptive = confirm("Нужен ли адаптив на сайте?");
  }


const getAllServicePrices = function() {
  let sum = 0;
  for(let i=0, priceForOne; i<2; i++){

    if(i===0){
      service1 = prompt("Какой дополнительный тип услуги нужен?")
    }
    else if(i===1){
      service2 = prompt("Какой дополнительный тип услуги нужен?")
    }
    do {
      priceForOne = prompt('Сколько это будет стоить?');
    }
    while (!isNumber(priceForOne))
    sum += +priceForOne;
  }
  return sum;
}

function getFullPrice() {
  screenPrice = Number(screenPrice)
  return  parseInt(screenPrice) +  allServicePrices;
}

function getTitle() {
  let cutTitle = title.trim();
  return cutTitle
    .charAt(0)
    .toUpperCase() + cutTitle
    .substring(1)
    .toLowerCase();
}

const getServicePercentPrices = function() {
  return (fullPrice - (fullPrice * (rollback/100)));
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


asking()
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
servicePercentPrice = getServicePercentPrices();
title = getTitle();

showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);

console.log(getRollbackMessage(fullPrice));
console.log(servicePercentPrice);
console.log("allServicePrices", allServicePrices);