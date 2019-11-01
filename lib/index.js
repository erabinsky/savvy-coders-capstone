import { db, auth, firebase } from '../firebase';
//Navigation

export const navSlide = () => {
  //query selectors
  const hamburger = document.querySelector('.fa-bars');
  const nav = document.querySelector('.nav-links');

  //event listener/toggle
  hamburger.addEventListener('click', () => {
    nav.classList.toggle('nav-links-active');
  })
}


//Reservations view


//TODO: expand function to show/hide lists for each setting
//TODO: refine event listener to only listen for li click and allow child ul to stay open when its li's are selected/clicked

//What's wrong with .querySelectorAll()?

export const showSettings = () => {
  //query selectors
  const listItem = document.querySelector('.res-settings li');
  const uiArrow = document.querySelector('.res-settings .fa-chevron-right');
  const dropItem = document.querySelector('.res-settings li ul');

  //event listener/toggle
  listItem && listItem.addEventListener('click', () => {
    uiArrow.classList.toggle('down');
    dropItem.classList.toggle('ul-is-hidden');
  })
}

export const selectResSetting = () => {
  const listItem = document.querySelector('.res-settings li ul li');

  listItem && listItem.addEventListener('click', () => {
    listItem.classList.toggle('selected')
  })
}

//Calendar UI

//TODO: Get this to interact with the markup!

export const calendar = () => {
  let today = new Date()
  let thisMonth = today.getMonth();
  let thisYear = today.getFullYear();

  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];

  let monthAndYear = document.getElementById("month-and-year");

  const showCalendar = (month, year) => {
    let firstDay = new Date(year, month).getDay();
    let daysInMonth = 32 - new Date(year, month, 32).getDate();

    let tbl = document.getElementById('calendar-body');

    tbl.innerHTML = ""

    monthAndYear.innerHTML = `${months[month]} ${year}`

    let date = 1;

    for (let i = 0; i < 6; i += 1) {
      let row = document.createElement('tr')

      for (let j = 0; j < 7; j += 1) {
        if (i === 0 && j < firstDay) {
          let cell = document.createElement('td');
          let cellText = document.createTextNode("");
          cell.appendChild(cellText);
          row.appendChild(cell);

        } else if (date > daysInMonth) {
          break
        } else {
          let cell = document.createElement('td');
          let cellText = document.createTextNode(date);
          cell.appendChild(cellText);
          row.appendChild(cell);
        }
        date += 1;
      }

      tbl.appendChild(row);
    }
  }

  const previous = () => {
    thisYear = (thisMonth === 0) ? thisYear - 1 : thisYear;
    thisMonth = (thisMonth === 0) ? 11 : thisMonth - 1;
    showCalendar(thisMonth, thisYear)
  }

  const next = () => {
    thisYear = thisMonth === 11 ? thisYear + 1 : currentYear;
    thisMonth = (thisMonth + 1) % 12;
    showCalendar(thisMonth, thisYear);
  }
}


//FIREBASE


//user object


// Firebase Auth

//   //new user
//   export const newUser = () => {
//     document.querySelector('#new-user').addEventListener('submit', e => {
//       const email = document.getElementById('login-email').value;
//       const pass = document.getElementById('login-password').value;
//       // const auth = firebase.auth();
//       //create account
//       const promise = auth.createUserWithEmailAndPassword(email, pass);
//       promise.catch( e => console.log(e.message));
//     })}

//   //existing user
// export const userLogin = () => {
// document.querySelector('#user-login').addEventListener('submit', e => {
//   const email = user[email].value;
//   const pass = user[password].value;
//   // const auth = firebase.auth();
//   //Sign in
//   const promise = auth.signInWithEmailAndPassword(email, pass);
//   promise.catch( e => console.log(e.message));
// })}

//   //realtime listener *only for testing*
//   firebase.auth().onAuthStateChanged(firebaseUser => {
//     if(firebaseUser){
//       console.log(firebaseuser);
//       //btnLogout.classList.remove('hide');
//     } else {
//       console.log('not logged in!');
//       //btnLogout.classList.add('hide');
//     }
//   })

//Logout
/*btnLogout.addEventListener('click", e => {
  firebase.auth().signOut();
});
*/




export const editUser = () => {


  // const save = document.querySelector('form');
  // const firstName = document.getElementById('first-name');
  // const lastName = document.getElementById('last-name');
  // const DOB = document.getElementById('DOB');
  // const phone = document.getElementById('phone');
  // const address = document.getElementById('address');
  // const email = document.getElementById('email');
  // const password = document.getElementById('password');



  document.querySelector('form').addEventListener('submit', e => {
    e.preventDefault();
    const user = {
      firstName: document.getElementById('first-name'),
      lastName: document.getElementById('last-name'),
      DOB: document.getElementById('DOB'),
      phone: document.getElementById('phone'),
      address: document.getElementById('address'),
      email: document.getElementById('email'),
      password: document.getElementById('password')
    };
    console.log(user)
    const firstName = user.firstName.value;
    const lastName = user.lastName.value;
    const DOB = user.DOB.value;
    const phone = user.phone.value;
    const address = user.address.value;
    const email = user.email.value;
    const password = user.password.value;
    db.collection("users").doc(`${lastName}, ${firstName}`).set({
      'first name': firstName,
      'last name': lastName,
      'DOB': DOB,
      'phone': phone,
      'address': address,
      'email': email,
      'password': password
    })
      .then(function () {
        console.log("Document successfully written!");
      })
      .catch(function (error) {
        console.error("Error writing document: ", error);
      });

  })


}
