import { snacks } from "./products.js";
import "../css/style.css";

const allSnacks = snacks.filter((el) => el.title !== "salad");
const cheapSnacks = snacks.filter((el) => el.price <= 3.0);
const expensiveSnacks = snacks.filter((el) => el.price > 3.0);

document.querySelector(".all").addEventListener("click", function (event) {
  event.preventDefault();
  console.log(allSnacks);
  if (document.body.classList.contains("cheap1")) {
    document.body.classList.remove("cheap1");
    document.body.classList.add("container");
  } else {
    document.body.classList.remove("expensive1");
    document.body.classList.add("container");
  }

  allCards();

  const cards2 = document.querySelectorAll(".card");
  cards2.forEach((card) => {
    if (card.body.classList.contains("cheap1")) {
      card.body.classList.remove("cheap1");
      card.body.classList.add("card");
    } else {
      card.body.classList.remove("expensive1");
      card.body.classList.add("card");
    }
  });
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
        <img src="${snack.imageURL}" alt="${star.imageDesc}">
        <h5> Flavor: ${snack.flavor} </h5>
      </div>`;
  });
}
