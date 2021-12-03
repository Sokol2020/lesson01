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

      const calcAnimate = (num, elem) => {
        const step = 25;
        let n = 0;
        let t = Math.round(totalValue/((num*300)/step));
        let interval = setInterval(() => {
            n = n + step;
            if(n == num) {
                  clearInterval(interval);
            }
        total.innerHTML = n;
        },
      t);
    };

    calcAnimate(totalValue, 'total');   
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
}

export default calc