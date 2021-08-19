//1//
function removeUser(arr, index) {
  return arr.splice(index, 1);
}
//2//
function getAllKeys(obj) {
  return Object.keys(obj);
}
//3//
function getAllValues(obj) {
  return Object.values(obj);
}
const obj = {
  id: 3,
  name: "Vasya",
};

const secondObj = {
  id: 4,
  name: "Katya",
};

const arr = [
  {
    id: 1,
    name: "Kolya",
  },
  {
    id: 2,
    name: "Petya",
  },
];
//4//
function insertIntoarr(obj, id) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].id == id) {
      arr.splice(i, 0, obj);
      break;
    }
  }
}
//5//
class Condidate {
  constructor(condidate) {
    this.address = condidate.address;
  }
  get state() {
    return this.address.split(",")[2];
  }
}
//6//
function getCompanyNames() {
  let companys = new Set();
  for (let i = 0; i < condidateArr.length; i++) {
    companys.add(condidateArr[i].company);
  }
  return Array.from(companys);
}
//7//
function getUsersByYear(year) {
  let arr = [];
  for (let i = 0; i < condidateArr.length; i++) {
    if (
      new Date(Date.parse(condidateArr[i].registered)).getFullYear() === year
    ) {
      arr.push(condidateArr[i]._id);
    }
  }
  return arr;
}
//8//
function getCondidatesByUnreadMsg(count) {
  let arr = [];
  let regExp = /\b\d+\b/;
  for (let i = 0; i < condidateArr.length; i++) {
    if (condidateArr[i].greeting.match(regExp)[0] == count) {
      arr.push(new Condidate(condidateArr[i]));
    }
  }
  return arr;
}
//9//
function getCondidatesByGender(gender) {
  let arr = [];
  for (let i = 0; i < condidateArr.length; i++) {
    if (condidateArr[i].gender == gender) {
      arr.push(new Condidate(condidateArr[i]));
    }
  }
  return arr;
}

//10//
Array.prototype.reduce2 = function (callback, initialValue) {
  if (this == null) {
    throw new TypeError("reduce called on null or undefined");
  }
  if (typeof callback !== "function") {
    throw new TypeError(" callback is not a function");
  }
  let ObjformArr = Object(this);
  let objLength = ObjformArr.length;
  let startValue;
  let i = 0;
  if (arguments.length > 1) {
    startValue = arguments[1];
  } else {
    startValue = ObjformArr[i++];
  }

  while (i < objLength) {
    if (i in ObjformArr) {
      startValue = callback(startValue, ObjformArr[i], i, ObjformArr);
      i++;
    }
  }
  return startValue;
};
Array.prototype.join2 = function (separator) {
  let newStr = "";
  if (arguments.length === 0) {
    return `${this}`;
  }
  if (separator === "") {
    return `${this}`.replace(/,/g, "");
  }
  if (this.length === 1) {
    return this;
  }
  for (let i = 0; i < this.length; i++) {
    if (i + 1 == this.length) {
      newStr += `${this[i]}`;
      break;
    }
    newStr += `${this[i]}${separator}`;
  }
  return newStr;
};
