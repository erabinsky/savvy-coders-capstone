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
      <li id="calendar-today"></li>
      <li>  October 21, 2019 | Grilled Chicken Breast </li>
      <li> Spots available: 15 </li>
    </ul>
    <a href="#" id="reserve-now">Reserve Now!</a>
    </div>

  <ul>
    <li class="res-settings">Preferences<i class="fas fa-chevron-right arrow"> </i>
      <ul class="settings-dropdown" id="preferences">
        <li class="meal">Poultry</li>
        <li class="meal">Beef</li>
        <li class="meal">Fish</li>
        <li class="meal">Vegetarian</li>
      </ul>
      </li>

    <li class="res-settings">Restrictions<i class="fas fa-chevron-right arrow"> </i>
      <ul class="settings-dropdown" id="restrictions">
        <li class="meal">Poultry</li>
        <li class="meal">Beef</li>
        <li class="meal">Fish</li>
        <li class="meal">Vegetarian</li>
      </ul>
      </li>

    <li class="res-settings"> Schedule<i class="fas fa-chevron-right arrow down"> </i> </li>
    <li class="res-settings"> Menu Search<i class="fas fa-chevron-right arrow down"> </i> </li>

  </ul>
  </div>
  `
}
