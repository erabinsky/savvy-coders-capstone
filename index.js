import { Header, Nav, Main, Footer } from "./components";
import * as state from "./store";
import { navSlide, showSettings, selectResSetting, calendar, clientUpload, editUser } from "./lib"

import Navigo from "navigo";

const router = new Navigo(location.origin)


// TODO: Add querySelectors and addEventListener to make hamburger icon functional



//renders imported content as state within specified components
function render(st = state.Login){

  (document.querySelector("#root").innerHTML = `
  ${Header(st)}
  ${Nav(st.navLinks)}
  ${Main(st)}
  ${Footer(st)}
  `);
router.updatePageLinks();
navSlide();
showSettings();
selectResSetting();
calendar();
editUser();

};


router
.on(":page", params =>  {console.log(params);
render(state[`${params.page.slice(0, 1).toUpperCase()}${params.page.slice(1).toLowerCase()}`])
})
.on("/", () => render())
.resolve();



