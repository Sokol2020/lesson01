/*"use strict"; //Строгий режим
const title = document.getElementsByTagName("h1")[0];
const btnPlus = document.querySelector(".screen-btn");
const otherItemsPercent = document.querySelectorAll(".other-items.percent");
const otherItemsNumber = document.querySelectorAll(".other-items.number");

const inputRange = document.querySelector(".rollback input");
const inputRangeValue = document.querySelector("div.rollback .range-value");

const btnStart = document.getElementsByClassName("handler_btn")[0];
const btnReset = document.getElementsByClassName("handler_btn")[1];

const total = document.getElementsByClassName("total-input")[0];
const totalCount = document.getElementsByClassName("total-input")[1];
const totalCountOther = document.getElementsByClassName("total-input")[2];
const fullTotalCount = document.getElementsByClassName("total-input")[3];
const totalCountRollback = document.getElementsByClassName("total-input")[4];

let screens = document.querySelectorAll(".screen");

const appData = {
  title: "",
  screens: [],
  screenPrice: 0,
  screenCount: 0,
  adaptive: true,
  rollback: 0,
  servicePricesPercent: 0,
  servicePricesNumber: 0,
  fullPrice: 0,
  servicePercentPrice: 0,
  servicesPercent: {},
  servicesNumber: {},
  checkInputs: function () {
    screens = document.querySelectorAll(".screen");

    screens.forEach(function (item) {
      const input = item.querySelector(".screen input");
      const select = item.querySelector(".screen select");

      input.addEventListener("change", appData.checkInputs);
      select.addEventListener("change", appData.checkInputs);
    });

    
    for (let i = 0; i < screens.length; i++) {
      if ( screens[i].querySelector("select").selectedIndex === 0 || screens[i].querySelector("input").value === "") {
        btnStart.disabled = true;
        break;
      } else {
        btnStart.disabled = false;
      }
    }
  },

  init: function () {
    appData.addTitle();

    appData.checkInputs();
    btnStart.addEventListener("click", appData.start);

    btnPlus.addEventListener("click", appData.addScreenBlock);

    inputRange.addEventListener("input", function (event) {
      inputRangeValue.textContent = event.target.value + "%";
      appData.rollback = event.target.value;
    });
  },

  addTitle: function () {
    document.title = title.textContent;
  },
  start: function () {
    appData.addScreens();
    appData.addServices();
    appData.addPrices();

    appData.logger();

    appData.showResult();
  },

  isString: function (str) {
    return str.length === 0 || str == Number.parseFloat(str, Infinity);
  },

  showResult: function () {
    total.value = appData.screenPrice;
    totalCount.value = appData.screenCount;
    totalCountOther.value =
      appData.servicePricesPercent + appData.servicePricesNumber;
    fullTotalCount.value = appData.fullPrice;
    totalCountRollback.value = appData.servicePercentPrice;
  },

  addScreens: function () {
    screens = document.querySelectorAll(".screen");

    screens.forEach(function (screen, index) {
      const select = screen.querySelector("select");
      const input = screen.querySelector("input");
      const selectName = select.options[select.selectedIndex].textContent;

      appData.screens.push({
        id: index,
        name: selectName,
        price: +select.value * +input.value,
        count: +input.value,
      });
    });
  },

  addServices: function () {
    otherItemsPercent.forEach(function (item) {
      const check = item.querySelector("input[type=checkbox]");
      const label = item.querySelector("label");
      const input = item.querySelector("input[type=text]");

      if (check.checked) {
        appData.servicesPercent[label.textContent] = +input.value;
      }
    });
    otherItemsNumber.forEach(function (item) {
      const check = item.querySelector("input[type=checkbox]");
      const label = item.querySelector("label");
      const input = item.querySelector("input[type=text]");

      if (check.checked) {
        appData.servicesNumber[label.textContent] = +input.value;
      }
    });
  },

  addScreenBlock: function () {
    const cloneScreen = screens[0].cloneNode(true);
    screens[screens.length - 1].after(cloneScreen);
  },

  addPrices: function () {
    for (let screen of appData.screens) {
      appData.screenPrice += +screen.price;
    }

    for (let screen of appData.screens) {
      appData.screenCount += +screen.count;
    }

    for (let key in appData.servicesNumber) {
      appData.servicePricesNumber += appData.servicesNumber[key];
    }
    for (let key in appData.servicesPercent) {
      appData.servicePricesPercent +=
        appData.screenPrice * (appData.servicesPercent[key] / 100);
    }

    appData.fullPrice =
      +appData.screenPrice +
      appData.servicePricesNumber +
      appData.servicePricesPercent;

    appData.servicePercentPrice = Math.ceil(
      appData.fullPrice - appData.fullPrice * (appData.rollback / 100)
    );
  },

  logger: function () {
    console.log(appData.screens);
  },
};

appData.init();
*/
"use strict"; //Строгий режим
const title = document.getElementsByTagName("h1")[0];
const btnPlus = document.querySelector(".screen-btn");
const otherItemsPercent = document.querySelectorAll(".other-items.percent");
const otherItemsNumber = document.querySelectorAll(".other-items.number");

const inputRange = document.querySelector(".rollback input");
const inputRangeValue = document.querySelector("div.rollback .range-value");

const btnStart = document.getElementsByClassName("handler_btn")[0];
const btnReset = document.getElementsByClassName("handler_btn")[1];

const total = document.getElementsByClassName("total-input")[0];
const totalCount = document.getElementsByClassName("total-input")[1];
const totalCountOther = document.getElementsByClassName("total-input")[2];
const fullTotalCount = document.getElementsByClassName("total-input")[3];
const totalCountRollback = document.getElementsByClassName("total-input")[4];

let screens = document.querySelectorAll(".screen");

const appData = {
  title: "",
  screens: [],
  screenPrice: 0,
  screenCount: 0,
  adaptive: true,
  rollback: 0,
  servicePricesPercent: 0,
  servicePricesNumber: 0,
  fullPrice: 0,
  servicePercentPrice: 0,
  servicesPercent: {},
  servicesNumber: {},
  checkInputs: function () {
    screens = document.querySelectorAll(".screen");

    screens.forEach(function (item) {
      const input = item.querySelector(".screen input");
      const select = item.querySelector(".screen select");

      input.addEventListener("input", appData.checkInputs);
      select.addEventListener("input", appData.checkInputs);
    });
    
    for (let i = 0; i < screens.length; i++) {
      if ( screens[i].querySelector("select").selectedIndex === 0 || screens[i].querySelector("input").value === "") {
        btnStart.disabled = true;
        break;
      } else {
        btnStart.disabled = false;
      }
    }
  },

  init: function () {
    appData.addTitle();

    appData.checkInputs();
    btnStart.addEventListener("click", appData.start);

    btnPlus.addEventListener("click", appData.addScreenBlock);

    inputRange.addEventListener("input", function (event) {
      inputRangeValue.textContent = event.target.value + "%";
      appData.rollback = event.target.value;
    });
  },

  addTitle: function () {
    document.title = title.textContent;
  },
  start: function () {
    appData.addScreens();
    appData.addServices();
    appData.addPrices();

    appData.logger();

    appData.showResult();
  },

  isString: function (str) {
    return str.length === 0 || str == Number.parseFloat(str, Infinity);
  },

  showResult: function () {
    total.value = appData.screenPrice;
    totalCount.value = appData.screenCount;
    totalCountOther.value =
      appData.servicePricesPercent + appData.servicePricesNumber;
    fullTotalCount.value = appData.fullPrice;
    totalCountRollback.value = appData.servicePercentPrice;
  },

  addScreens: function () {
    screens = document.querySelectorAll(".screen");

    screens.forEach(function (screen, index) {
      const select = screen.querySelector("select");
      const input = screen.querySelector("input");
      const selectName = select.options[select.selectedIndex].textContent;

      appData.screens.push({
        id: index,
        name: selectName,
        price: +input.value * +select.value,
        count: +input.value,
      });
    });
  },

  addServices: function () {
    otherItemsPercent.forEach(function (item) {
      const check = item.querySelector("input[type=checkbox]");
      const label = item.querySelector("label");
      const input = item.querySelector("input[type=text]");

      if (check.checked) {
        appData.servicesPercent[label.textContent] = +input.value;
      }
    });
    otherItemsNumber.forEach(function (item) {
      const check = item.querySelector("input[type=checkbox]");
      const label = item.querySelector("label");
      const input = item.querySelector("input[type=text]");

      if (check.checked) {
        appData.servicesNumber[label.textContent] = +input.value;
      }
    });
  },

  addScreenBlock: function () {
    const cloneScreen = screens[0].cloneNode(true);
    screens[screens.length - 1].after(cloneScreen);

    for (let i = 0; i < screens.length; i++) {
      if ( screens[i].querySelector("select").selectedIndex === 0 || screens[i].querySelector("input").value === "") {
        btnStart.disabled = true;
        break;
      } else {
        btnStart.disabled = false;
      }
    }
  },

  addPrices: function () {
    for (let screen of appData.screens) {
      appData.screenPrice += +screen.price;
    }

    for (let screen of appData.screens) {
      appData.screenCount += +screen.count;
    }

    for (let key in appData.servicesNumber) {
      appData.servicePricesNumber += appData.servicesNumber[key];
    }
    for (let key in appData.servicesPercent) {
      appData.servicePricesPercent +=
        appData.screenPrice * (appData.servicesPercent[key] / 100);
    }

    appData.fullPrice =
      +appData.screenPrice +
      appData.servicePricesNumber +
      appData.servicePricesPercent;

    appData.servicePercentPrice = Math.ceil(
      appData.fullPrice - appData.fullPrice * (appData.rollback / 100)
    );
  },

  logger: function () {
    console.log(appData.screens);
    // console.log(appData.fullPrice);
    // console.log(appData.servicePercentPrice);
    // console.log(appData);
    // console.log(appData.screens);

    // for (let key in appData) {
    //   console.log(key + ": " + appData[key]);
    // }
  },
};

appData.init();