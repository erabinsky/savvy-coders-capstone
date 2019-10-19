import { Header, Nav, Main, Footer } from "./components";
import * as state from "./store";


function render(st = state.Login){

  (document.querySelector("#root").innerHTML = `
  ${Header(st)}
  ${Nav()}
  ${Main(st)}
  ${Footer()}
  `)};

  render();
