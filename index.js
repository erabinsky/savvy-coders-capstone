import { Header, Nav, Main, Footer } from "./components";
import * as state from "./store";
import { navSlide, showSettings, selectResSetting, calendar, userSignup, login } from "./lib"



import Navigo from "navigo";
import { auth, db, firebase } from "./firebase";

const router = new Navigo(location.origin)


// TODO: Add querySelectors and addEventListener to make hamburger icon functional

//renders imported content as state within specified components
function render(st = state.Login) {

  (document.querySelector("#root").innerHTML = `
  ${Header(st)}
  ${Nav(st.navLinks)}
  ${Main(st)}
  ${Footer(st)}
  `);
  router.updatePageLinks();
  navSlide();
  // showSettings();
  // selectResSetting();
  // calendar();
  // editUser();
  // userSignup();
  // login();

  console.log(router.lastRouteResolved().url)
  const currentPage = router.lastRouteResolved().url;
  if (currentPage === "/Login") {
    document.querySelector('#user-login').addEventListener('submit', (e) => {
      e.preventDefault();
      console.log('clicked');
      const email = document.getElementById('login-email').value;
      const password = document.getElementById('login-password').value;

      firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });
      router.navigate('/Profile');
    })
  }

  if (currentPage === "/EditProfile") {
    console.log(router.lastRouteResolved().url)
    document.querySelector('#new-user').addEventListener('submit', (e) => {
      e.preventDefault();
      console.log('clicked, too!')
      const firstName = document.getElementById('first-name');
      const lastName = document.getElementById('last-name');
      const DOB = document.getElementById('DOB');
      const phone = document.getElementById('phone');
      const address = document.getElementById('address');

      //auth credentials
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;



      auth.createUserWithEmailAndPassword(email, password).then(cred => {

          console.log(email);
        return db.collection('users').doc(cred.user.uid).set({
          firstName: firstName.value,
          lastName: lastName.value,
          DOB: DOB.value,
          phone: phone.value,
          address: address.value,
          email: email,
          password: password

        })
      })
      .catch(console.error)
    })
  }

  if (currentPage === "/Login"){

      const userLogin = document.querySelector('#user-login');

      userLogin.addEventListener('submit', (e) => {
        e.preventDefault;
        console.log('lets log in!');
        // const email = db.collection('users').doc().get(email);
        // const password = db.collection('users').doc().get(password);
        router.navigate('/Profile')

      })
    }

  }


  // //User Listener
  // auth.onAuthStateChanged(user => {
  //       st.isAuth = Boolean(user);
  //     })



router
        .on(":page", params => {
          console.log(params);
          render(state[`${params.page.slice(0, 1).toUpperCase()}${params.page.slice(1).toLowerCase()}`])
        })
        .on("/", () => render())
        .resolve();



