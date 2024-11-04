import { snacks } from "./products.js";
import "../CSS/style.css";

document.querySelector("#container").innerHTML = `
  <h1>Hello?????</h1>
`;

snacks.forEach((snack) => console.log(snack.title, snack.price));
