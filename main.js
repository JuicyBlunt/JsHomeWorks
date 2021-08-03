//======1======
function Emploee(employee) {
  this.id = employee.id;
  this.name = employee.name;
  this.surname = employee.surname;
  this.salary = employee.salary;
  this.workExperience = employee.workExperience;
  this.isPrivileges = employee.isPrivileges;
  this.gender = employee.gender;

  //======7======
  Object.defineProperty(this, "fullInfo", {
    get() {
      return Object.entries(this)
        .map((item) => item.join(" - "))
        .join(", ");
    },
    set(value) {
      for (let key in value) {
        if (this.key) {
          this.key = value.key;
        }
      }
    },
  });
}
const employeeObj = new Emploee(emplyeeArr[0]);

//======2======
Emploee.prototype.getFullName = function () {
  return `${this.surname} ${this.name}`;
};

//======3======
let createEmployesFromArr = (arr) => {
  let constructedArr = [];
  for (let key of arr) {
    constructedArr.push(new Emploee(key));
  }
  return constructedArr;
};
const emplyeeConstructArr = createEmployesFromArr(emplyeeArr);

//======4======
const getFullNamesFromArr = (arr) => {
  let fullNames = [];
  for (let key of arr) {
    fullNames.push(key.getFullName());
  }
  return fullNames;
};
console.log(getFullNamesFromArr(emplyeeConstructArr));

//======5======
const getMiddleSalary = (arr) => {
  return Math.round(
    arr.reduce((acc, curr) => {
      return acc + curr.salary;
    }, 0) / arr.length
  );
};
console.log(getMiddleSalary(emplyeeConstructArr));

//======6======
const getRandomEmployee = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};
getRandomEmployee(emplyeeConstructArr);

let test = new Emploee(emplyeeArr[0]);
test.fullInfo = { name: "Вася", salary: 9000 };
