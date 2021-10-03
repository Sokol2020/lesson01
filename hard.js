const num = 266219;

// разбиваем число на цифры
const digits = num.toString().split('');
const realDigits = digits.map(Number);
console.log(realDigits);

// перемножаем цифры между собой и возводим в степень 3
const reducer = (previousValue, currentValue) => previousValue * currentValue;
console.log(realDigits.reduce(reducer)); // Для проверки
console.log(realDigits.reduce(reducer)**3);

// отделили первые два числа путем slice от 0 элемента до элемента с индексов 2
console.log(String(realDigits.reduce(reducer)**3).slice(0,2));
