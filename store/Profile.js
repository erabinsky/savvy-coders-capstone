import { date } from '../lib'
export default {
  heading: "",
  main: `
        <img src="https://picsum.photos/id/555/200/200"/>
        <h2 class="profile-name"></h2>
        <ul class="dashboard">
          <li class="today" id="dashboard-date"></li>
          <li class="today" id="dashboard-menu"></li>
          <li class="today" id="availability"></li>
        </ul>
        <span class="reserve-now" id="reserve-now-profile"> Reserve Now!</span>
        <a data-navigo href="Reservations">Calendar</a>
        <a data-navigo href="EditProfile">Edit Profile</a>
        `
}
