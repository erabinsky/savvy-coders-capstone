
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
  listItem.addEventListener('click', () => {

    uiArrow.classList.toggle('down');
    dropItem.classList.toggle('ul-is-hidden');
  })

  }

  export const selectResSetting = () => {
    const listItem = document.querySelector('.res-settings li ul li');

    listItem.addEventListener('click', () => {
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

      tbl.innerHTML=""

      monthAndYear.innerHTML = `${months[month]} ${year}`

      let date = 1;

      for(let i = 0; i < 6; i += 1){
        let row = document.createElement('tr')

        for (let j = 0; j < 7; j += 1){
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
      thisYear = (thiMonth === 0)? thisYear - 1: thisYear;
      thisMonth = (thisMonth === 0)? 11: thisMonth -1;
      showCalendar(thisMonth,thisYear)
    }

    const next = () => {
      thisYear = thisMonth === 11 ? thisYear +1: currentyYear;
      thisMonth = (thisMonth + 1) % 12;
      showCalendar(thisMonth, thisYear);
    }
  }

