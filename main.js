//=====1======//
for (let i = 1; i <= 10; i++) {
  i % 3 == 0
    ? console.log("FizBuz")
    : i % 2 == 0
    ? console.log("Fiz")
    : console.log("Buz");
}

//=====2======//
function factorial(num) {
  return num == 1 ? num : num * factorial(num - 1);
}

//=====3======//
const sheetsInReamPaper = 500;
const consumptionPerWeek = 1200;
const weeksAmount = 8;

function enoughtPaper() {
  let amountPerWeeks = (weeksAmount * consumptionPerWeek) / sheetsInReamPaper;
  return amountPerWeeks % 1 == 0
    ? amountPerWeeks
    : amountPerWeeks - (amountPerWeeks % 1) + 1;
}
console.log(enoughtPaper());
//=====4======//
const roomsOnFloor = 3;
const floors = 9;
const roomNumber = 456;
let porch;
let floor;
function findCustomer() {
  let entrance = roomNumber / (floors * roomsOnFloor);
  porch = entrance % 1 == 0 ? entrance : entrance - (entrance % 1) + 1;
  let counter = 0;
  for (let i = 1; i <= porch; i++) {
    for (let j = 1; j <= floors; j++) {
      for (let k = 1; k <= roomsOnFloor; k++) {
        counter++;
        if (counter == roomNumber) {
          floor = j;
        }
      }
    }
  }
}
findCustomer();
console.log(porch, floor);

//=====5======//
const medianNumber = 6;
function pyramid() {
  for (let i = 1; i <= medianNumber; i++) {
    let str = "-".repeat(medianNumber - i);
    let str2 = "*".repeat(i * 2 - 1);
    console.log(str + str2 + str);
  }
}
pyramid();
