import { date } from '../lib'
export default {
  heading: "",
  main: `
        <img src="https://picsum.photos/id/555/200/200"/>
        <h2 class="profile-name"></h2>
        <ul class="dashboard">
          <li class="today"> Today's Date: ${date} </li>
          <li class="today" id="today-menu"></li>
          <li class="today"> Spots Available: 20</li>
        </ul>
        <a href="#">Reserve Now!</a>
        <a data-navigo href="Reservations">Calendar</a>
        <a data-navigo href="EditProfile">Edit Profile</a>
        `
}
