

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


