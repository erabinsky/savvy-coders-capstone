export default {
  heading: `Edit Profile`,
  main:`
<form action="#" alignment="center" id="new-user">
    <span id="profile-picture" class="fas fa-user-circle"></span>
    <span>
        <label for="first-name">First Name</label>
        <input type="text" name="first-name" id="first-name"/>
    </span>
    <span>
        <label for="last-name">Last Name</label>
        <input type="text" name="last-name" id="last-name"/>
    </span>
    <span>
        <label for="DOB">Date of Birth</label>
        <input type="text" name="DOB" id="DOB"/>
    </span>
    <span>
        <label for="phone">Phone Number</label>
        <input type="text" name="phone" id="phone"/>
    </span>
    <span>
        <label for="address">Address</label>
        <input type="text" name="address" id="address"/>
    </span>
    <span>
        <label for="email">Email Address</label>
        <input type="text" name="email" id="email"/>
    </span>
    <span>
        <label for="password">Password</label>
        <input type="text" name="password" id="password"/>
    </span>
<span id="save-cancel">
    <input type="submit" value="Save" id="save"/>
    <input type="reset" value="Cancel" id="cancel"/>
</span>
    </form>

<a href="#">Help</a>`

}
