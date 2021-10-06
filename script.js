'use strict';

let title = 'lesson02';
let screens = 'Простые, Сложные, Интерактивные';
let screenPrice = 28;
let rollback = 14;
let fullPrice = 150000;
let adaptive = true;


console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);

console.log(screens.length);

console.log("Стоимость верстки экранов " + screenPrice + " гривен");
console.log("Стоимость разработки сайта " + fullPrice + " гривен");

console.log(screens.toLowerCase().split(","));

console.log(fullPrice * (rollback/100));


title = prompt("Как называется наш проект?");
console.log(title);

screens = prompt("Какие типы экранов нужно разработать?");
console.log(screens);

screenPrice = +prompt("Сколько будет стоить данная работа?");
console.log(screenPrice);

adaptive = confirm("Нужен ли адаптив на сайте?");
console.log(adaptive);


let service1 = prompt("Какой дополнительный тип услуги нужен?");
console.log(service1);

let servicePrice1 = prompt("Сколько это будет стоить?");
console.log(servicePrice1);

let service2 = prompt("Какой дополнительный тип услуги нужен?");
console.log(service2);

let servicePrice2 = prompt("Сколько это будет стоить?");
console.log(servicePrice2);

fullPrice = parseInt(screenPrice) + parseInt(servicePrice1) + parseInt(servicePrice2);
console.log(fullPrice);

let servicePercentPrice = Math.ceil(fullPrice - (fullPrice * (rollback/100)));
console.log(servicePercentPrice);

if(fullPrice > 30000){
  console.log("Даем скидку в 10%");
}
else if(fullPrice > 15000 && fullPrice <= 30000){
  console.log("Даем скидку в 5%");
}
else if(fullPrice <= 15000 && fullPrice >= 0){
  console.log("Скидка не предусмотрена");
}
else if (fullPrice < 0){
  console.log("Что то пошло не так");
}

