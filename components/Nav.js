export default () => `
<nav>
    <span class="fas fa-bars">
    </span>
    <ul class= "nav-links">
      <li><a data-navigo href="Profile">My Profile</a></li>
      <li><a data-navigo href="Reservations">My Reservations</a></li>
      <li><a data-navigo href="Contact">Contact Us</a></li>
      <li><a data-navigo href="Help">Help</a></li>
    </ul>

  </nav>`;
  // TODO: Add querySelectors and addEventListener to make hamburger icon functional

// const navSlide = () => {
//   //query selectors
//   const hamburger = document.querySelector('.fa-bars');
//   const nav = document.querySelector('.nav-links');

//   //event listener/toggle
//   hamburger.addEventListener('click', () => {
//     nav.classList.toggle('nav-links-active')
//   })
// }
// navSlide();


