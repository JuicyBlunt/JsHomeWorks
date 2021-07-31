//======1======//
const citiesAndCountries = {
  Киев: "Украина",
  "Нью-Йорк": "США",
  Амстердам: "Нидерланды",
  Берлин: "Германия",
  Париж: "Франция",
  Лиссабон: "Португалия",
  Вена: "Австрия",
};
const result = Object.entries(citiesAndCountries).map((item) =>
  item.join(" - это ")
);
console.log(result);

//======2======//
function getArray() {
  const amount = 9;
  let counter = 0;
  let arr = [];
  if (amount % 3 == 0) {
    for (let i = 0; i < amount / 3; i++) {
      arr[i] = [];
      for (let j = 1; j <= 3; j++) {
        counter++;
        arr[i].push(counter);
      }
    }
    return arr;
  }
  console.error("Invalid number");
}
console.log(getArray());

//======3======//
const namesOfDays = {
  ru: [
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
    "Воскресенье",
  ],
  en: [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ],
};
function getNameOfDay() {
  const lang = "ru";
  const day = 3;
  return namesOfDays[lang][day - 1];
}

console.log(getNameOfDay());

//======4======//
const arr = [19, 5, 42, 2, 77];
function sumFewestNums(arr) {
  return arr
    .sort((a, b) => a - b)
    .slice(0, 2)
    .reduce((acc, curr) => acc + curr);
}
console.log(sumFewestNums(arr));

//======5======//

function arrToBinary(arr) {
  let result = 0;
  let reverseArr = arr.reverse();
  for (let i = 0; i <= reverseArr.length; i++) {
    if (reverseArr[i] == 1) {
      result += Math.pow(2, i);
    }
  }
  return result;
}
console.log(arrToBinary([1, 1, 1, 0, 0, 1]));
