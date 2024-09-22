import { renderDomestic } from "./app";

const app = document.querySelector('#app');
const recommendations = app.appendChild(document.createElement('div'));

renderDomestic(recommendations);
