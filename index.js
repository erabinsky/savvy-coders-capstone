import { Header, Nav, Main, Footer } from "./components";
import * as state from "./store";
import { navSlide, date, today, showSettings, selectResSetting, calendar, userSignup, login } from "./lib"



import Navigo from "navigo";
import { auth, db, firebase } from "./firebase";
import { firestore } from "firebase";
import { userInfo } from "os";



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
  // addReservation();
  // showSettings();
  // selectResSetting();
  // calendar();
  // editUser();
  // userSignup();
  // login();




  //FIREBASE


  const users = (data) => {

    data.forEach(doc => {
      const user = doc.data();
      console.log(user);
    })
  }



//Listens for whether or not there is a user logged-in
  //Auth Status Listener
  auth.onAuthStateChanged(userInfo => {
    if (userInfo) {
      console.log('user logged in:', userInfo.uid);
    }







    //Login Function
    console.log(router.lastRouteResolved().url)
    const currentPage = router.lastRouteResolved().url;
    if (currentPage === "/Login") {


      //Hide Hamburger
      document.getElementById('hamburger').style.visibility = "hidden";


      document.querySelector('#user-login').addEventListener('submit', (e) => {
        e.preventDefault();
        console.log('clicked');

        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;
        firebase.auth().signInWithEmailAndPassword(email, password)
          .then((cred => {
            alert(`Hi, ${email}!`);
            router.navigate('/Profile')



          }))
          .catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            if (errorCode === 'auth/wrong-password') {
              alert('Wrong password.'), document.getElementById("user-login").reset();
            } else {
              alert(errorMessage), document.getElementById('user-login').reset();
            }
            console.log(error);
            router.navigate('/Login')
          });

      });

    }

    //Logout Function

    const logout = document.getElementById('logout');
    logout.addEventListener('click', () => {
      auth.signOut().then(() => {
        alert('Successfully Logged Out!');
        router.navigate('/Login');
      })
    })

    if (currentPage === "/EditProfile") {
      console.log(router.lastRouteResolved().url)
      document.querySelector('#new-user').addEventListener('submit', (e) => {
        e.preventDefault();
        const firstName = document.getElementById('first-name');
        const lastName = document.getElementById('last-name');
        const DOB = document.getElementById('DOB');
        const phone = document.getElementById('phone');
        const address = document.getElementById('address');

        //auth credentials
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;


        //writes user doc in 'users' collection based on auth user credentials
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
        router.navigate('/Profile')
      })
    }

    //Profile Page
    if (currentPage === "/Profile") {
      const profileHeading = document.querySelector('.profile-name')
      const todayMenu = document.querySelector('#dashboard-menu')
      const todayDate = document.querySelector('#dashboard-date')
      const availability = document.querySelector('#availability')
      //CROSS REFERENCES DB AND AUTH!
      db.collection('users').get().then(snapshot => {
        snapshot.docs.forEach(doc => {
          if (doc.id === auth.currentUser.uid) {
            console.log(doc.data().firstName);
            profileHeading.innerHTML = `${doc.data().firstName} ${doc.data().lastName}`
          }
        })
      })

    // Dynamic Dashboard Data
    db.collection('menus').get().then(snapshot=> {
      snapshot.docs.forEach(doc => {
        if (doc.data().date === date){
          todayDate.innerHTML = `Today's Date: ${date}`
          todayMenu.innerHTML = `Today's Menu: ${doc.data().meal}`
          availability.innerHTML = `Spots Available: ${doc.data().availability}`
        }
      })
    })

    const menuRef = db.collection('menus')
    const reserveNow = document.getElementById('reserve-now-profile');

    reserveNow.addEventListener('click', () => {
      db.collection('menus').get().then(snapshot=> {
        console.log(snapshot)
        snapshot.docs.forEach(doc => {
          if (doc.data().date === date){
            const newAvailability = availability -1;
            doc.availability = newAvailability;
            db.collection('menus').doc(doc.id).update({
              ...doc.data(), //SPREAD OPERATOR
              availability: doc.data().availability -1
            }) //TODO add .then() method to set innerHTML of elementID containing availability with new availability value.
            .then(
              alert('Reservation Successful!')
            )
            console.log(doc.data())

          }
        });
      })
    })
    }


    //Calendar/Reservations Page
    if (currentPage === '/Reservations'){
      document.getElementById('calendar-today').innerHTML = date;

        //query selectors
        const listItems = document.querySelectorAll('.res-settings');
        const uiArrows = document.querySelectorAll('.fa-chevron-right');
        const meal = document.querySelector('.meal');

        //event listener/toggle

        listItems.forEach(listItem => {
          listItem.addEventListener('click', () => {
            listItem.querySelector('.settings-dropdown').classList.toggle('none');
          })
        })





    }
    else {
      console.log('user logged out')
    }
  })


}






router
  .on(":page", params => {
    console.log(params);
    render(state[`${params.page.slice(0, 1).toUpperCase()}${params.page.slice(1).toLowerCase()}`])
  })
  .on("/", () => render())
  .resolve();



