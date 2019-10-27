

export const navSlide = () => {
  //query selectors
  const hamburger = document.querySelector('.fa-bars');
  const nav = document.querySelector('.nav-links');

  //event listener/toggle
  hamburger.addEventListener('click', () => {
    nav.classList.toggle('nav-links-active');
  })
}
