const calc = (price = 100) => {
  const calcBlock = document.querySelector('.calc-block')
  const calcType = document.querySelector('.calc-type')
  const calcSquare = document.querySelector('.calc-square')
  const calcCount = document.querySelector('.calc-count')
  const calcDay = document.querySelector('.calc-day')
  const total = document.getElementById('total')

  const countCalc = () => {
    const calcTypeValue = +calcType.options[calcType.selectedIndex].value
    const calcSquareValue = calcSquare.value

    let totalValue = 0
    let calcCountValue = 1
    let calcDayValue = 1

    if (calcCount.value > 1) {
      calcCountValue += +calcCount.value / 10
    }

    if(calcDay.value && calcDay.value < 5){
      calcDayValue = 2
    } else if (calcDay.value && calcDay.value < 10) {
      calcDayValue = 1.5
    } else {
      calcDayValue = 1
    }

    if(calcType.value && calcSquare.value){
      totalValue = price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue;
      const calcAnimate = (num) => {
        const step = 125;
        let n = 0;
        let t = Math.round(totalValue/((num*300)/step));
        let trunc = totalValue % step; // находим остаток
        let interval = setInterval(() => {
          n = n + step;
          if(n > num) {
            clearInterval(interval);
            total.innerHTML = `${n - step + trunc}`;
            //Если текущий n > num (такое может быть только если totalValue/step с остатком) - удаляем setInterval, а в качестве итогового значения записываем значение n на текущей итерации (которое больше n) - step (шаг итерации, возвращаемся на 1 шаг назад) + trunc (остаток)
          } else {
            total.innerHTML = n;
          }
        },t);
      };

    calcAnimate(totalValue);   
    } else {
      totalValue = 0
    }

  total.textContent = totalValue
}

  calcBlock.addEventListener('input', (e) => {
    if(e.target === calcCount ||
      e.target === calcSquare ||  
      e.target === calcType ||
      e.target === calcDay){
      countCalc()
    }
  })
};

export default calc;