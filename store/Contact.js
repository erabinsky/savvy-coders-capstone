export default {
  heading: "Contact Us",
  main: `
  <address>
  <form action="mailto: ezra.rabinsky@gmail.com" id="contact-form">
  <div id="contact-form-container">

  <div class="contact-row" id="contact-email-row">
  <label class="contact-label" for="contact-email"> Email: </label>
  <input class="contact-input" type="text" name="contact-email" id="contact-email">
  </div>

  <div class="contact-row" id="contact-phone-row">
  <label class="contact-label" for="contact-phone"> Phone Number: </label>
  <input class="contact-input" type="text" name="contact-phone" id="contact-phone">
  </div>

  <div class="contact-row" id="contact-message-row">
  <label class="contact-label" for="contact-message">Write your message here: </label>
  <textarea class="contact-input" name="contact-message" id="contact-message" cols="30" rows="5">
  Backend form submit coming soon!
  </textarea>
  </div>

  <input type="submit" value="Submit">
  </div>
    </form>

  </address>
  `
}
