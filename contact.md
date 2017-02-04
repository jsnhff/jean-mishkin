---
title: Contact
permalink: "/contact/"
layout: page
---

Phone:  917-873-5326

Or send Jean an email:

<form action="https://formspree.io/jeanmishkin@gmail.com"
method="POST">
    <label for="name">Name*</label>
    <input type="text" name="name" placeholder="James Joyce" class="block mb1 field">
    <label for="email">Email*</label>
    <input type="email" name="_replyto" placeholder="joyce@email.com" class="block mb1 field">
    <label for="information">What do you need help with?</label>
    <textarea rows="4" cols="50" name="information" placeholder="It was a bright cold day in April, and the clocks were striking thirteen." class="block mb1 field border-box" style="width:100%;"></textarea>
    <!-- Hidden inputs that help send the user to a nice thank you page
         and set the subject so filtering is easy. -->
    <input type="hidden" name="_next" value="http://jeanmishkin.com/thanks/" />
    <input type="hidden" name="_subject" value="New editing request!" />
    <input type="text" name="_gotcha" style="display:none" />
    <input type="submit" value="Send" class="btn btn-primary mt1">
</form>
