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
  arr.splice(
    arr.findIndex((element) => element.id === id),
    0,
    obj
  );
}
insertIntoarr(secondObj, 2);
console.log(arr);
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
  condidateArr.forEach((item) => {
    companys.add(item.company);
  });
  return Array.from(companys);
}
console.log(getCompanyNames());
//7//
function getUsersByYear(year) {
  let arr = [];
  condidateArr.forEach((item) => {
    if (new Date(Date.parse(item.registered)).getFullYear() === +year) {
      arr.push(item._id);
    }
  });
  return arr;
}
console.log(getUsersByYear(2015));
//8//
function getCondidatesByUnreadMsg(count) {
  let arr = [];
  let regExp = /\b\d+\b/;
  condidateArr.forEach((item) => {
    if (+item.greeting.match(regExp)[0] === +count) {
      arr.push(new Condidate(item));
    }
  });
  return arr;
}
console.log(getCondidatesByUnreadMsg(8));
//9//
function getCondidatesByGender(gender) {
  let arr = [];
  condidateArr.forEach((item) => {
    if (item.gender === gender) {
      arr.push(new Condidate(item));
    }
  });
  return arr;
}

//10//
Array.prototype.reduce2 = function (callback, initialValue) {
  if (this == null) {
    throw new TypeError("reduce called on null or undefined");
  }
  if (typeof callback !== "function") {
    throw new TypeError("callback is not a function");
  }
  let ObjformArr = Object(this);
  let objLength = ObjformArr.length;
  let startValue;
  let i = 0;
  if (arguments.length > 1) {
    startValue = initialValue;
  } else {
    startValue = ObjformArr[i++];
  }

  while (i < objLength) {
    if (ObjformArr[i] in ObjformArr) {
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
