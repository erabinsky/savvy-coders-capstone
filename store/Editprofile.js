export default {
  heading: `Edit Profile`,
  main:`
<form action="data-navigo 'Profile'" alignment="center" id="new-user">
    <span id="profile-picture" class="fas fa-user-circle"></span>
    <span>
        <label for="first-name">First Name</label>
        <input type="text" name="first-name" id="first-name" pattern="[a-zA-Z]+">
    </span>
    <span>
        <label for="last-name">Last Name</label>
        <input type="text" name="last-name" id="last-name" pattern="[a-zA-Z]+">
    </span>
    <span>
        <label for="DOB">Date of Birth</label>
        <input type="text" name="DOB" id="DOB" pattern="[01][0-9][/][0-3][0-9][/][0-2][0-9]{3}" placeholder="mm/dd/yyy">
    </span>
    <span>
        <label for="phone">Phone Number</label>
        <input type="text" name="phone" id="phone" pattern="[(][0-9]{3}[)][ ][0-9]{3}[-][0-9]{4}"
        placeholder="(###) ###-####">
    </span>
    <span>
        <label for="address">Address</label>
        <input type="text" name="address" id="address" pattern="[0-9]+[ [a-zA-Z]+[ ][a-zA-Z]+[,][ ][0-9]{5}" placeholder="### Street, ZIP">
    </span>
    <span>
        <label for="email">Email Address</label>
        <input type="text" name="email" id="email" pattern="[a-zA-Z0-9]+[@][a-zA-Z0-9]+[.][a-zA-Z0-9]" placeholder="example@email.com">
    </span>
    <span>
        <label for="password">Password</label>
        <input type="password" name="password" id="password">
    </span>
<span id="save-cancel">
    <input type="submit" value="Save" id="save"/>
    <input type="reset" value="Cancel" id="cancel">
</span>
    </form>

<a href="#">Help</a>`

}
