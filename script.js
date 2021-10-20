'use strict'

const appData = {
  title: '',
  screens: '',
  screenPrice: 0,
  adaptive: true,
  rollback: 10,
  allServicePrices: 0,
  fullPrice: 0,
  servicePercentPrice: 0,
  service1: '',
  service2: '',
  asking: function() {

    while (!(appData.title = prompt('Как называется проект?'))){
      alert('Поле не может быть пустым!');
    }
    appData.screens = prompt("Какие типы экранов нужно разработать?");
    do {
      appData.screenPrice = prompt("Сколько будет стоить данная работа?");
    }  while(!isNumber(appData.screenPrice))
  
    appData.adaptive = confirm("Нужен ли адаптив на сайте?");
    }
};


const isNumber = function(num) {
  return !isNaN(parseFloat(num)) && isFinite(num) // проверка на число
  }


const getAllServicePrices = function() {
  let sum = 0;
  for(let i=0, priceForOne; i<2; i++){

    if(i===0){
      appData.service1 = prompt("Какой дополнительный тип услуги нужен?")
    }
    else if(i===1){
      appData.service2 = prompt("Какой дополнительный тип услуги нужен?")
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
  appData.screenPrice = Number(appData.screenPrice)
  return  parseInt(appData.screenPrice) +  appData.allServicePrices;
}

function getTitle() {
  let cutTitle = appData.title.trim();
  return cutTitle
    .charAt(0)
    .toUpperCase() + cutTitle
    .substring(1)
    .toLowerCase();
}

const getServicePercentPrices = function() {
  return (appData.fullPrice - (appData.fullPrice * (appData.rollback/100)));
}

const screenArray = function Array() {
  return appData.screens.split();
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


appData.asking()
appData.allServicePrices = getAllServicePrices();
appData.fullPrice = getFullPrice();
appData.servicePercentPrice = getServicePercentPrices();
appData.title = getTitle();

console.log(appData.fullPrice);
console.log(appData.servicePercentPrice);