//1//
const searchCandidatesByPhoneNumber = (phone) => {
  return condidateArr.filter((item) => {
    let onlyNumbers = item.phone.replace(/\D/g, "");
    return onlyNumbers.includes(phone.replace(/\D/g, ""));
  });
};

//2//
const getCandidateById = (id) => {
  return condidateArr.filter((item) => {
    if (item._id === id) {
      item.registered = `${new Date(item.registered).getDate()}/${
        new Date(item.registered).getMonth() + 1
      }/${new Date(item.registered).getFullYear()}`;
      return true;
    }
  });
};

//3//
const sortCandidatesArr = (sortBy) => {
  let regExp = /\D/g;
  if (!sortBy) return condidateArr;
  return condidateArr.sort((a, b) => {
    if (sortBy === "asc") {
      return a.balance.replace(regExp, "") - b.balance.replace(regExp, "");
    } else if (sortBy === "desc") {
      return b.balance.replace(regExp, "") - a.balance.replace(regExp, "");
    }
  });
};

//4//
const getEyeColorMap = () => {
  let keys = condidateArr.reduce((acc, item) => {
    acc[item.eyeColor] = [];
    return acc;
  }, {});
  for (let key in condidateArr) {
    keys[condidateArr[key].eyeColor].push(condidateArr[key]);
  }
  return keys;
};
