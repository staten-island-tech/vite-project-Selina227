import { snacks } from "./products.js";
import "../css/style.css";

document.querySelector(".all").addEventListener("click", function (event) {
  event.preventDefault();
  allCards();
});

document.querySelector(".cheap").addEventListener("click", function (event) {
  event.preventDefault();
  cheapCards();
});

document
  .querySelector(".expensive")
  .addEventListener("click", function (event) {
    event.preventDefault();
    expensiveCards();
  });

function allCards() {
  const container = document.querySelector(".container");
  container.innerHTML = "";

  snacks.forEach((snack) => {
    container.innerHTML += `
      <div class="card">
        <h2> ${snack.title} </h2>
        <h4> ${snack.price} </h4>
         <h4> ${snack.originCountry} </h4>
        <img src="${snack.imageUrl}" alt="${snack.altText}">
        <h5>Flavor: ${snack.flavor} </h5>
      </div>`;
  });
}

function cheapCards() {
  const container = document.querySelector(".container");
  container.innerHTML = "";
  const cheapSnacks = snacks.filter((snack) => snack.price <= 3.0);

  cheapSnacks.forEach((snack) => {
    container.innerHTML += `
    <div class="card">
      <h2> ${snack.title} </h2>
      <h4> ${snack.price} </h4>
       <h4> ${snack.originCountry} </h4>
      <img src="${snack.imageUrl}" alt="${snack.altText}">
      <h5>Flavor: ${snack.flavor} </h5>
    </div>`;
  });
}

function expensiveCards() {
  const container = document.querySelector(".container");
  container.innerHTML = "";
  const expensiveSnacks = snacks.filter((el) => el.price > 3.0);

  expensiveSnacks.forEach((snack) => {
    container.innerHTML += `
    <div class="card">
      <h2> ${snack.title} </h2>
      <h4> ${snack.price} </h4>
       <h4> ${snack.originCountry} </h4>
      <img src="${snack.imageUrl}" alt="${snack.altText}">
      <h5>Flavor: ${snack.flavor} </h5>
    </div>`;
  });
}

snacks.filter((snack) => snack.flavor.includes("Spicy"));

forEach;
filter;
includes;
