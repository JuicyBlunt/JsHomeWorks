//=============1==============
function renderInputs() {
  let counter = +prompt("ВВедите желаемое количество инпутов", "1");
  let wrapper = document.forms[0];
  let result = new Array(counter).fill("");
  result.forEach((el, index) => {
    let input = document.createElement("input");
    input.className = "input-item";
    input.value = `Input ${result.length - index}`;
    wrapper.prepend(input);
  });
  let inputs = [...wrapper.querySelectorAll("input:not([type='submit'])")];
  inputs.forEach((item) => {
    if (item.matches(":nth-child(odd)")) {
      item.classList.add("bg-color");
    }
    if (item.matches(":nth-last-child(2)")) {
      item.classList.add("margin-zero");
    }
    if (item.matches(":nth-child(3n)")) {
      item.value = "";
      item.placeholder = "Some text";
    }
  });
}
// renderInputs();
//=============2==============
function renderTimer() {
  let wrapp = document.createElement("div");
  wrapp.setAttribute("data-task", 2);
  let h2 = document.createElement("h2");
  let startButton = document.createElement("button");
  startButton.innerText = "Start";
  let stopButton = document.createElement("button");
  stopButton.innerText = "Stop";
  wrapp.append(stopButton, startButton, h2);
  let insertPlace = document.forms[0];
  insertPlace.after(wrapp);
  let interval;
  wrapp.addEventListener("click", function (e) {
    if (e.target === stopButton) {
      clearInterval(interval);
    }
    if (e.target === startButton) {
      interval = setInterval(() => {
        let date = new Date();
        h2.innerText = `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`;
      }, 1000);
    }
  });
}
renderTimer();

//=============3==============
function initBlock() {
  let insertPlace = document.querySelector("[data-task]");
  let wrapper = document.createElement("div");
  wrapper.id = "wrapper";
  let footer = document.createElement("div");
  footer.id = "footer";
  let h1 = document.createElement("h1");
  h1.textContent = "Footer";
  footer.append(h1);
  let main = document.createElement("div");
  main.id = "main";
  let p1 = document.createElement("p");
  p1.innerText = "I am first paragraph";
  let p2 = document.createElement("p");
  p2.innerText = "I am second paragraph";
  p3 = document.createElement("p");
  p3.innerText = "I am last paragraph";
  main.append(p1, p2, p3);
  wrapper.append(footer, main);
  insertPlace.after(wrapper);
  return [footer, main];
}
initBlock();
function replaceFooter() {
  let wrapper = document.querySelector("#wrapper");
  let replace = [
    document.querySelector("#footer"),
    document.querySelector("#main"),
  ].reverse();
  wrapper.innerHTML = "";
  wrapper.append(...replace);
}
replaceFooter();
function changeColor() {
  let main = document.querySelector("#main");
  let coloredP = main.querySelector("p:last-child");
  coloredP.style.backgroundColor = "red";
}
changeColor();

//=============4==============
const INGREDIENTS = {
  cocoa: ["cocoa powder", "milk", "sugar"],
  cappuccino: ["milk", "coffee"],
  smoothie: ["banana", "orange", "sugar"],
  "matcha frappe": ["matcha", "milk", "ice"],
};

function getRecipe() {
  let wrapper = document.createElement("div");
  let h1 = document.createElement("h1");
  h1.textContent = "Menu";
  let ul = document.createElement("ul");
  ul.id = "menu";

  Object.entries(INGREDIENTS).forEach(([name, ingredients]) => {
    let li = document.createElement("li");
    let ol = document.createElement("ol");
    li.textContent = name;
    ul.append(li);
    ingredients.forEach((item) => {
      let li = document.createElement("li");
      li.textContent = item;
      ol.append(li);
    });
    li.append(ol);
    ol.style.display = "none";
  });
  wrapper.append(h1, ul);
  document.body.after(wrapper);
  document.addEventListener("click", (e) => {
    if (e.target.closest("ul")) {
      e.target.querySelector("ol").style.display = "block";
    }
  });
}

getRecipe();
