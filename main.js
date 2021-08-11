class Student {
  static id = 1;
  static listOfStudents = [];
  constructor(enrollee) {
    this.id = Student.id++;
    this.name = enrollee.name;
    this.surname = enrollee.surname;
    this.ratingPoint = enrollee.ratingPoint;
    this.schoolPoint = enrollee.schoolPoint;
    this.isSelfPayment = true;
    Student.listOfStudents.push(this);
    this.kindOfPayment();
  }
  kindOfPayment() {
    this.sortByRating();
    for (let i = 0; i < Student.listOfStudents.length; i++) {
      if (Student.listOfStudents[i].ratingPoint >= 800 && i < 5) {
        Student.listOfStudents[i].isSelfPayment = false;
      } else {
        Student.listOfStudents[i].isSelfPayment = true;
      }
    }
  }
  sortByRating() {
    Student.listOfStudents.sort((a, b) => {
      if (a.ratingPoint == b.ratingPoint) {
        return b.schoolPoint - a.schoolPoint;
      }
      return b.ratingPoint - a.ratingPoint;
    });
  }
}
for (let key in studentArr) {
  new Student(studentArr[key]);
}
console.log(Student.listOfStudents);

class CustomString {
  reverse(string) {
    let newStr = "";
    for (let i = string.length - 1; i >= 0; i--) {
      newStr += string[i];
    }
    return newStr;
  }
  ucFirst(string) {
    let newStr = "";
    let stopCount = 0;
    for (let i = 0; i < string.length; i++) {
      if (string[i].toUpperCase() === string[i]) {
        newStr += string[i];
      } else {
        newStr += string[i].toUpperCase();
        stopCount = i + 1;
        break;
      }
    }
    for (let j = stopCount; j < string.length; j++) {
      newStr += string[j];
    }
    return newStr;
  }
  ucWords(string) {
    let substr = "";
    let newStr = "";
    for (let i = 0; i < string.length; i++) {
      if (string[i] === " ") {
        newStr += this.ucFirst(substr) + " ";
        substr = "";
      } else if (i === string.length - 1) {
        substr += string[i];
        newStr += this.ucFirst(substr) + " ";
      } else {
        substr += string[i];
      }
    }
    return newStr;
  }
}
const myString = new CustomString();

myString.reverse("qwerty"); //выведет 'ytrewq'
myString.ucFirst("qwerty"); //с любым началом строки выведет первую букву заглавной.
myString.ucWords("qwerty qwerty qwerty"); //выведет 'Qwerty Qwerty Qwerty

class Validator {
  checkIsEmail(str) {
    let regExp = /^[\w\.?\-?]{1,}[0-9a-z]{1}@([\w-]+\.)+\w+$/gi;
    let arr = str.split("");
    let check = arr.filter((item) => item === "@");
    if (check.length > 1 || arr.indexOf("@") < 2) {
      return false;
    } else {
      let nameDomain = str.split("@");
      if (
        nameDomain[1].split(".").indexOf("") == -1 &&
        nameDomain[1].split(".").length > 1
      ) {
        return str.split(" ").length == 1;
      } else {
        return false;
      }
    }
  }

  checkIsDomain(str) {
    let regExp = /^(https?:\/\/)?([\w-]+\.)+[\w]+$/;
    let arr = str.split("");
    let splitByDots = str.split(".");
    if (arr.indexOf("@") !== -1) {
      return false;
    }
    for (let i = 0; i < splitByDots.length; i++) {
      for (let j = 0; j < splitByDots[i].length; j++)
        if (splitByDots[i][j].toUpperCase() == splitByDots[i][j]) {
          return false;
        }
    }
    if (
      str.split(".").indexOf("") == -1 &&
      str.split(".").length > 1 &&
      str.split(".").length < 4
    ) {
      return str.split(" ").length == 1;
    } else {
      return false;
    }
  }
  checkIsDate(str) {
    let newStr = "";
    if (str.indexOf(".") !== -1) {
      newStr = str.split(".").reverse().join("-");
    }
    if (str.indexOf("/") !== -1) {
      newStr = str.split("/").reverse().join("-");
    }
    if (str.indexOf("-") !== -1) {
      newStr = str.split("-").reverse().join("-");
    }
    let timeStamp = Date.parse(newStr);
    return isNaN(timeStamp) == false ? true : false;
  }

  checkIsPhone(str) {
    let regexp = /^\+38(-?\s?\(?0\d{2}\)?\s?-?)(\d+-?)+\d+$/g;
    let newStr = "";
    if (str.lastIndexOf("+") !== 0) {
      return false;
    } else {
      newStr = str.split("").filter((item) => {
        if (Number.isFinite(+item) && item !== " ") {
          return true;
        } else {
          return false;
        }
      });
      if (newStr.slice(0, 3).join("") === "380") {
        return true;
      } else {
        return false;
      }
    }
  }
}
