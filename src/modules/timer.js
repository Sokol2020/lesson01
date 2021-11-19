const timer = (deadline) => {
  const timerHours = document.getElementById("timer-hours");
  const timerMinutes = document.getElementById("timer-minutes");
  const timerSeconds = document.getElementById("timer-seconds");

  const getTimeRemaining = () => {
    let dateStop = new Date(deadline).getTime();
    let dateNow = new Date().getTime();
    let timeRemaining = (dateStop - dateNow) / 1000;
    let hours = Math.floor(timeRemaining / 3600);
    let minutes = Math.floor((timeRemaining / 60) % 60);
    let seconds = Math.floor(timeRemaining % 60);

    return { timeRemaining, hours, minutes, seconds };
  };

  const updateClock = () => {
    let getTime = getTimeRemaining();
    timerHours.textContent = ("0" + getTime.hours).slice(-2);
    timerMinutes.textContent = ("0" + getTime.minutes).slice(-2);
    timerSeconds.textContent = ("0" + getTime.seconds).slice(-2);
  };

  if (getTimeRemaining > 0) {
    updateClock();
  }

  setInterval(() => {
    let getTime = getTimeRemaining();
    if (getTime.timeRemaining > 0) {
      updateClock();
    } else if (getTime.timeRemaining === 0) {
      clearInterval(updateClock);
    }
  }, 1000);
};

export default timer;