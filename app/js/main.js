import { snacks } from "./products.js";
import "../css/style.css";

const allSnacks = snacks.filter((el) => el.title !== "salad");
const cheapSnacks = snacks.filter((el) => el.price <= 3.0);
const expensiveSnacks = snacks.filter((el) => el.price > 3.0);

document.querySelector(".all").addEventListener("click", function (event) {
  event.preventDefault();
  allCards();
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
