export default {
  heading:"My Calendar",
  main: `
    <div class="resContainer">
    <div class="calendar">

    <h3 class="card-header" id="month-and-year"> Calendar </h3>
    <table class="table table-bordered table-responsive-sm" id="calendar">
      <thead>
        <tr>
          <td> Mon </td>
          <td> Tue </td>
          <td> Wed </td>
          <td> Thu </td>
          <td> Fri </td>
        </tr>
      </thead>
      <tbody id="calendar-body"></tbody>
      </table>
    </div>

    <div class="calendar-dash">
    <ul>
      <li> Today's Date: October 19, 2019 </li>
      <li>  October 21, 2019 | Grilled Chicken Breast </li>
      <li> Spots available: 15 </li>
    </ul>
    <a href="#" id="reserve-now">Reserve Now!</a>
    </div>

  <ul class="res-settings">
    <li>Preferences<i class="fas fa-chevron-right arrow down"> </i>
      <ul class="ul-is-hidden">
        <li>Poultry</li>
        <li>Beef</li>
        <li>Fish</li>
        <li>Vegetarian</li>
      </ul>
      </li>

    <li>Restrictions<i class="fas fa-chevron-right arrow down"> </i>
      <ul class="ul-is-hidden">
        <li>Poultry</li>
        <li>Beef</li>
        <li>Fish</li>
        <li>Vegetarian</li>
      </ul>
      </li>

    <li> Schedule<i class="fas fa-chevron-right arrow down"> </i> </li>
    <li> Menu Search<i class="fas fa-chevron-right arrow down"> </i> </li>
    <li> Help </li>
  </ul>
  </div>
  `
}
