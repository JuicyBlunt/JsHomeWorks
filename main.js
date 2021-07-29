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
const roomsOnFloor = 4;
const floors = 5;
const roomNumber = 100;
let porch;
let floor;
function findCustomer() {
  let entrance = roomNumber / (floors * roomsOnFloor);
  porch = entrance % 1 == 0 ? entrance : entrance - (entrance % 1) + 1;
  let firstRoom = porch * (roomsOnFloor * floors) - roomsOnFloor * floors + 1;
  for (let i = 1; i <= floors; i++) {
    for (let j = 1; j <= roomsOnFloor; j++) {
      if (firstRoom == roomNumber) {
        floor = i;
      }
      ++firstRoom;
    }
  }
}
findCustomer();
console.log(porch, floor);

//=====5======//
const medianNumber = 5;
function pyramid() {
  let output = "";
  for (let i = 1; i <= medianNumber; i++) {
    let star = "*".repeat(i * 2 - 1);
    let dashes = "-".repeat(medianNumber - i);
    output += dashes + star + dashes + "\n";
  }
  console.log(output);
}
pyramid();
