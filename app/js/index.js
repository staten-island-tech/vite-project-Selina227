import "./style.css";
import "../CSS/style.css";

const DOMSelectors = {
  box: document.getElementById("container-box"),
};

function injectCard() {
  const cardHTML = `<div class="card">
    <h2>Title</h2>
    <h2>Price</h2>
    <h2>Origin Country</h2>
    <h2>Flavor</h2>
    <img class="picture" src="${card.imageURL}">
    <button class="delete-btn">Delete</button>
  </div>`;

  DOMSelectors.box.insertAdjacentHTML("beforeend", cardHTML);
}

injectCard();
