const events = [
  { start: 0, duration: 15, title: "Exercise" },
  { start: 25, duration: 30, title: "Travel to work" },
  { start: 30, duration: 30, title: "Plan day" },
  { start: 60, duration: 15, title: "Review yesterday's commits" },
  { start: 100, duration: 15, title: "Code review" },
  { start: 180, duration: 90, title: "Have lunch with John" },
  { start: 360, duration: 30, title: "Skype call" },
  { start: 370, duration: 45, title: "Follow up with designer" },
  { start: 405, duration: 30, title: "Push up branch" },
];

const start = 8;
const end = 17;

function initCalendar(from = 8, to = 17) {
  let wrapper = document.querySelector(".calendar__wrapper");
  let startHour = from * 60;
  let countOfHours = to - from;
  for (let i = 0; i <= countOfHours; i++) {
    let halfHour = `<p>${startHour / 60}:30</p>`;
    let html = `<div class="event">
                   <div class="event__time">
                     <p>${startHour / 60}:00</p>
                     ${i === countOfHours ? "" : halfHour}
                   </div>
                  <div class="event__items" data-count=${i}>
                  </div>
                </div>`;
    startHour += 60;
    wrapper.insertAdjacentHTML("beforeend", html);
  }
}

function initEvents(events) {
  document.forms.delete.remove.innerHTML = "";
  let wrapper = Array.from(document.querySelectorAll(".event__items"));
  wrapper.forEach((item) => (item.innerHTML = ""));
  events.forEach(({ start, duration, title, bgc }, index) => {
    let searchElement = wrapper.find((item) => {
      if (+item.dataset.count === Math.trunc(start / 60)) {
        return item;
      }
    });
    let div = document.createElement("div");
    div.className = "event__item";
    div.textContent = title;
    div.style.height = `${duration * 2}px`;
    div.style.top = `${(start % 60) * 2}px`;
    div.style.backgroundColor = bgc || "";
    searchElement.append(div);
    //INIT OPTIONS
    document.forms.delete.remove.insertAdjacentHTML(
      "beforeend",
      `<option value=${index}>${title}</option>`
    );
  });
}

function formsHandler(e) {
  e.preventDefault();
  if (e.target.name === "add") {
    let text = document.querySelector("#event-title").value;
    let startTime = document.querySelector("#timeStart").value;
    let endTime = document.querySelector("#timeEnd").value;
    let color = document.querySelector("#color").value;
    let obj = {
      start: startTime,
      duration: endTime,
      title: text || "No text",
      bgc: color,
    };
    events.push(obj);
    initEvents(events);
  }
  if (e.target.name === "delete") {
    let option = Array.from(remove.options).filter((item) => item.selected);
    if (option.length >= 1) {
      option.forEach((item) => events.splice(item.value, 1));
    }
    initEvents(events);
  }
}

document.addEventListener("submit", formsHandler);

document.querySelector("#timeStart").oninput = (e) => {
  document.querySelector(".hours").innerHTML = `${Math.trunc(
    e.target.value / 60
  )}:${Math.round(e.target.value % 60)}`;
};

document.querySelector("#timeEnd").oninput = (e) => {
  document.querySelector(".minutes").innerHTML = e.target.value;
};

initCalendar(start, end);
initEvents(events);
