

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

export const showSettings = () => {
  //query selectors
  const listItem = document.querySelector('.res-settings li');
  const uiArrow = document.querySelector('.arrow');
  const dropItem = document.querySelector('.res-settings li p');

  //event listener/toggle
  listItem.addEventListener('click', () => {

    uiArrow.classList.toggle('down');
    dropItem.classList.toggle('p-is-hidden');
  })

  }

