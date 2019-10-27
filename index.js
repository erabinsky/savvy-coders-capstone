import { Header, Nav, Main, Footer } from "./components";
import * as state from "./store";

import Navigo from "navigo";

const router = new Navigo(location.origin)



//renders imported content as state within specified components
function render(st = state.Login){

  (document.querySelector("#root").innerHTML = `
  ${Header(st)}
  ${Nav(st.navLinks)}
  ${Main(st)}
  ${Footer(st)}
  `);
router.updatePageLinks();
};


router
.on(":page", params =>
render(state[`${params.page.slice(0, 1).toUpperCase()}${params.page.slice(1).toLowerCase()}`])
)
.on("/", () => render())
.resolve();



// TODO: Add querySelectors and addEventListener to make hamburger icon functional

const navSlide = () => {
  //query selectors
  const hamburger = document.querySelector('.fa-bars');
  const nav = document.querySelector('.nav-links');

  //event listener/toggle
  hamburger.addEventListener('click', () => {
    nav.classList.toggle('nav-active')
  })
  render(state.Nav)
}
navSlide();

  render();




