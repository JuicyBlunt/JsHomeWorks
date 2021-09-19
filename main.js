const events = [
  { start: 0, duration: 15, title: "Exercise" },
  { start: 25, duration: 90, title: "Travel to work" },
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

function addPropsToArr() {
  events.forEach((elem) => {
    elem.bgc = "#e2ecf5";
  });
}

function initCalendar(from, to) {
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
  document.forms.change.replace.innerHTML = "";
  let wrapper = Array.from(document.querySelectorAll(".event__items"));
  wrapper.forEach((item) => (item.innerHTML = ""));
  events.forEach((event, index) => {
    let searchElement = wrapper.find((item) => {
      if (+item.dataset.count === Math.trunc(event.start / 60)) {
        return item;
      }
    });
    addOneEvent(event, searchElement);
    //INIT DELETE/CHANGE OPTIONS
    formOptions(index, event.title);
  });
}

function addOneEvent({ start, duration, title, bgc }, place) {
  let hexToRgba = bgc
    .match(/\w\w/g)
    .map((x) => parseInt(x, 16))
    .join();
  let div = document.createElement("div");
  div.className = "event__item";
  div.textContent = title || "No text";
  div.style.height = `${duration * 2}px`;
  div.style.top = `${(start % 60) * 2}px`;
  div.style.backgroundColor = `rgba(${hexToRgba},.5)`;
  div.style.borderLeftColor = `rgba(${hexToRgba})`;
  place.append(div);
}

function formOptions(index, title) {
  document.forms.delete.remove.insertAdjacentHTML(
    "beforeend",
    `<option value=${index}>${title}</option>`
  );
  document.forms.change.replace.insertAdjacentHTML(
    "beforeend",
    `<option value=${index}>${title}</option>`
  );
}

function formsHandler(e) {
  e.preventDefault();
  if (e.target.name === "add") {
    addFormHandler();
  }
  if (e.target.name === "delete") {
    deleteFormHandler();
  }
  if (e.target.name === "change") {
    changeFormHanlder();
  }
}

function addFormHandler() {
  let text = document.querySelector("#event-title").value;
  let startTime = +document.querySelector("#timeStart").value;
  let endTime = +document.querySelector("#timeEnd").value;
  let color = document.querySelector("#color").value;
  let obj = {
    start: +startTime,
    duration: endTime < startTime ? 0 : endTime - startTime,
    title: text || "No text",
    bgc: color,
  };
  events.push(obj);
  initEvents(events);
}

function deleteFormHandler() {
  let option = remove.value;
  if (option) {
    events.splice(option, 1);
    initEvents(events);
  } else {
    throw new Error("Choose come event for delete");
  }
}

function changeFormHanlder() {
  let selectedValue = replace.value;
  let changedTitle = document.querySelector("#changeTitle");
  let changedStart = document.querySelector("#changedStart");
  let changedEnd = document.querySelector("#changedEnd");
  events[selectedValue].title = changedTitle.value;
  events[selectedValue].start = +changedStart.value;
  events[selectedValue].duration = changedEnd.value - changedStart.value;
  initEvents(events);
  fillChangeForm();
}

function fillChangeForm() {
  let selectedValue = replace.value;
  if (selectedValue) {
    let searchItem = events[selectedValue];
    let { startTime, endTime } = changeFormTime(
      searchItem.start,
      searchItem.duration
    );
    let changedTitle = document.querySelector("#changeTitle");
    changedTitle.value = searchItem.title;
    let changedStart = document.querySelector("#changedStart");
    let changedStartCounter = document.querySelector("#changedStart~span");
    changedStart.value = searchItem.start;
    changedStartCounter.innerHTML = startTime;
    let changedEnd = document.querySelector("#changedEnd");
    let changedEndCounter = document.querySelector("#changedEnd~span");
    changedEnd.value = searchItem.start + searchItem.duration;
    changedEndCounter.innerHTML = endTime;
  }
}

function changeFormTime(start, end) {
  let startTime =
    `${Math.trunc(start / 60 + 8)}`.padStart(2, "0") +
    ":" +
    `${Math.round(start % 60)}`.padStart(2, "0");

  let endTime =
    `${Math.trunc((start + end) / 60 + 8)}`.padStart(2, "0") +
    ":" +
    `${Math.round((start + end) % 60)}`.padStart(2, "0");
  return { startTime, endTime };
}

function showTimeHandler(e) {
  let timePlace = document.querySelector(`#${e.target.id}~span`);
  timePlace.innerHTML =
    `${Math.trunc(e.target.value / 60 + 8)}`.padStart(2, "0") +
    ":" +
    `${Math.round(e.target.value % 60)}`.padStart(2, "0");
}

function comingEvent() {
  let interval = setInterval(() => {
    let date = `${new Date().getHours()}:${new Date().getMinutes()}`.split(":");
    let eventsForShow = events.filter((event) => {
      if (
        Math.trunc(event.start / 60 + 8) === +date[0] - 1 &&
        Math.round(event.start % 60) === +date[1]
      ) {
        return true;
      }
    });
    renderPopUp(eventsForShow);
  }, 30000);
}

function renderPopUp(eventsForModal) {
  let wrapper = document.querySelector(".modal");
  wrapper.innerHTML = "";
  eventsForModal.forEach((event) => {
    let modalHtml = `  <div class="modal__wrapper">
                        <div class="modal__line"></div>
                     <div class="modal__content">
                      <p class="modal__text">
                      The "${event.title}" event has started</p>
                     </div>
                     </div>`;
    wrapper.insertAdjacentHTML("beforeend", modalHtml);
  });
  let showedPopup = document.querySelectorAll(".modal__wrapper");
  showedPopup.forEach((popup) => {
    popup.classList.toggle("active");
  });
  setTimeout(() => {
    showedPopup.forEach((popup) => {
      popup.classList.toggle("active");
    });
  }, 4500);
}
document.addEventListener("submit", formsHandler);

document.addEventListener("change", (e) => {
  if (e.target.closest("form[name=change]") && e.target.tagName === "SELECT") {
    fillChangeForm();
  }
});

document.querySelector("#timeStart").oninput = showTimeHandler;
document.querySelector("#changedStart").oninput = showTimeHandler;

document.querySelector("#timeEnd").oninput = showTimeHandler;
document.querySelector("#changedEnd").oninput = showTimeHandler;

addPropsToArr();
initCalendar(start, end);
initEvents(events);
fillChangeForm();
comingEvent();
