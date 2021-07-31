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
