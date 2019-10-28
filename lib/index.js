
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

  export const selectSetting = () => {
    const listItem = document.querySelector('.res-settings li ul li');

    listItem.addEventListener('click', () => {
      listItem.classList.toggle('selected')
    })
  }

