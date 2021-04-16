---
title: Contact
permalink: "/contact/"
layout: page
---

Send Jean an email:

<form accept-charset="utf-8" action="https://formspree.io/f/xoqyvvrv" method="post">
  <fieldset class="border-none m0 p0">
    <label for="name">Name*</label>
    <input type="text" name="_name" placeholder="James Joyce" class="block mb1 mt1 field" required="">
    <label for="email">Email*</label>
    <input id="email" type="email" name="_replyto" placeholder="joyce@email.com" class="block mb1 mt1 field" required="">
    <label for="message">What do you need help with?</label>
    <textarea rows="4" cols="50" name="_message" placeholder="It was a bright cold day in April, and the clocks were striking thirteen." class="block mb1 mt1 field border-box" style="width:100%;"></textarea>
    <!-- Hidden inputs that help send the user to a nice thank you page and set the subject so filtering is easy. -->
    <input type="hidden" name="_next" value="http://jeanmishkin.com/thanks/" />
    <input id="subject" type="hidden" name="_subject" value="New editing request!" />
  </fieldset>
  <input id="submit" type="submit" value="Send" class="btn btn-primary mt1">
</form>

