//1//
let counter = (function () {
  let counter = 0;
  let result = 0;
  return function (x) {
    counter++;
    if (counter == 1) {
      counter++;
      result += x;
      return;
    }
    result += x;
    return result;
  };
})();

//2//
let getUpdatedArr = (function () {
  let arr = [];
  return function (el) {
    if (!el) {
      arr = [];
      return arr;
    }
    arr.push(el);
    return arr;
  };
})();

//3//
let getTime = (function () {
  let counter = 0;
  let startTime = null;
  return function () {
    counter++;
    if (counter == 1) {
      startTime = new Date();
      console.log("Enabled");
      return;
    }
    let endTime = new Date();
    let result = Math.round((endTime - startTime) / 1000);
    startTime = endTime;
    return result;
  };
})();

//4//
const time = 60;
let timer = (time) => {
  let min = Math.trunc(time / 60);
  let sec = time % 60;
  let interval = setInterval(() => {
    if (sec >= 0) {
      console.log(`${("0" + min).slice(-2)}:${("0" + sec).slice(-2)}`);
      sec--;
    } else {
      if (min > 0) {
        min--;
        sec = 60;
        sec--;
        console.log(`${("0" + min).slice(-2)}:${("0" + sec).slice(-2)}`);
      } else {
        clearInterval(interval);
      }
    }
  }, 1000);
};
