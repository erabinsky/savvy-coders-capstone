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


//Creates New User Auth and creates a document in the "users" collection
// export const userSignup = () => {

//   const newUser = document.querySelector('#new-user');
//   newUser.addEventListener('submit', (e) => {
//     e.preventDefault();


//   const firstName = document.getElementById('first-name');
//   const lastName = document.getElementById('last-name');
//   const DOB = document.getElementById('DOB');
//   const phone = document.getElementById('phone');
//   const address = document.getElementById('address');

//     //auth credentials
//   const email = document.getElementById('email').value;
//   const password = document.getElementById('password').value;



//     auth.createUserWithEmailAndPassword(email, password).then(cred => {


//       return db.collection('users').doc(cred.user.uid).set({
//         firstName: firstName.value,
//         lastName: lastName.value,
//         DOB: DOB.value,
//         phone: phone.value,
//         address: address.value,
//         email: email.value,
//         passord: password.value
//       })
//     })
//   })
// }

//User Login




//User Listener



// firebase.auth().onAuthStateChanged(function(user) {
//   if (user) {
//     // User is signed in.
//     var displayName = user.displayName;
//     var email = user.email;
//     var emailVerified = user.emailVerified;
//     var photoURL = user.photoURL;
//     var isAnonymous = user.isAnonymous;
//     var uid = user.uid;
//     var providerData = user.providerData;
//     // ...



//   } else {
//     // User is signed out.
//     // ...
//   }
// });








//Logout
/*btnLogout.addEventListener('click", e => {
  firebase.auth().signOut();
});
*/



/*


export const editUser = () => {


  // const save = document.querySelector('form');
  // const firstName = document.getElementById('first-name');
  // const lastName = document.getElementById('last-name');
  // const DOB = document.getElementById('DOB');
  // const phone = document.getElementById('phone');
  // const address = document.getElementById('address');
  // const email = document.getElementById('email');
  // const password = document.getElementById('password');



  document.getElementById('new-user').addEventListener('submit', e => {
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



*/
