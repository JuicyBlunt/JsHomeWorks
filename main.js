//=================1===============
let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let number = Math.round(Math.random() * (6 - 1) + 1);
    if (number <= 5 && number >= 1) {
      console.log("Start the game");
      resolve(number);
    }
    if (number === 6) {
      reject("Exit");
    }
  }, 0);
});
promise
  .then((num) => {
    if (num === 1) {
      console.log("Stay here");
    } else {
      console.log(`Go ${num} steps`);
    }
  })
  .catch((err) => {
    console.log(err);
  });
//=================2===============
class ProductError extends Error {
  constructor(message) {
    super(message);
    this.name = "Product Error";
  }
}
let products = ["apple", "chiken", "beef", "duck"];

let goToShop = function (prod) {
  return new Promise((resolve, reject) => {
    resolve(prod.length);
  });
};
function makeDinner() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(console.log("Bon Appetit"));
    }, 3000);
  });
}
goToShop(products)
  .then((res) => {
    if (res < 4) {
      throw new ProductError("Too low products");
    } else {
      makeDinner();
    }
  })
  .catch((err) => {
    if (err instanceof ProductError) {
      console.error(`${err.name} : ${err.message}`);
    }
  });

//=================3===============
function renderCards(...id) {
  let wrapp = document.querySelector(".container");
  wrapp.innerHTML = "";
  let items = fetch(`https://rickandmortyapi.com/api/character/${id}`).then(
    (res) => res.json()
  );
  items
    .then((response) => {
      if (!Array.isArray(response)) {
        response = [response];
      }
      response.forEach((card) => {
        let html = `<div class="card">
      <div class="card-info">
        <div class="title">
          <h1>${card.name}</h1>
          <div class="status">
            <div class="live-status ${
              card.status === "Dead" ? "dead" : ""
            }"></div>
            <p>${card.status} - ${card.species} </p>
          </div>
        </div>
        <div class="content">
          <p>${card.location.name}</p>
        </div>
      </div>
      <div class="card-image">
        <img
          src="${card.image}"
          alt="Img"
        />
      </div>
    </div>`;
        wrapp.insertAdjacentHTML("beforeend", html);
      });
    })
    .catch((err) => console.log(err));
}
function filterCards() {
  let wrapp = document.querySelector(".form-container");
  wrapp.addEventListener("change", function listener(e) {
    let key =
      e.target.id === "male" || e.target.id === "female" ? "gender" : "status";
    if (
      e.target.matches('input[type="checkbox"]') &&
      e.target.checked === true
    ) {
      let inputs = document.querySelectorAll("input:checked");
      inputs.forEach((input) => {
        if (e.target !== input) {
          input.checked = false;
        }
      });
      fetch(`https://rickandmortyapi.com/api/character/?${key}=${e.target.id}`)
        .then((res) => res.json())
        .then((cards) => {
          let resArr = cards.results.map((item) => item.id);
          return renderCards(resArr);
        });
    } else {
      fetch(`https://rickandmortyapi.com/api/character/`)
        .then((res) => res.json())
        .then((cards) => {
          let allCharacters = cards.results.map((item) => item.id);
          return renderCards(allCharacters);
        });
    }
  });
}
renderCards(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12);
filterCards();
