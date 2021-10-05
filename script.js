'use strict';

let title = 'lesson02';
let screens = 'Простые, Сложные, Интерактивные';
let screenPrice = 28;
const rollback = 14;
let fullPrice = 150000;
const adaptive = true;


console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);

console.log(screens.length);

console.log("Стоимость верстки экранов " + screenPrice + " гривен");
console.log("Стоимость разработки сайта " + fullPrice + " гривен");

console.log(screens.toLowerCase().split(","));

console.log(fullPrice * (rollback/100));