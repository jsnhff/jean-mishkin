---
layout: page
title: Contact
permalink: /contact/
---
Phone:  917-873-5326

Or send Jean an email:

<form action="https://formspree.io/jsnhff@gmail.com"
method="POST">
    <label for="name">Name*</label>
    <input type="text" name="name" placeholder="James Joyce" class="block mb1 field">
    <label for="email">Email*</label>
    <input type="email" name="_replyto" placeholder="name@email.com" class="block mb1 field">
    <label for="information">What do you need help with?</label>
    <textarea rows="4" cols="50" name="information" placeholder="It was a bright cold day in April, and the clocks were striking thirteen." class="block mb1 field border-box" style="width:100%;"></textarea>
    <!-- Hidden inputs that help send the user to a nice thank you page
         and set the subject so filtering is easy. -->
    <!-- CHANGE THIS IN PRODUCTION to point to www.jeanmishkin.com/thanks -->
    <input type="hidden" name="_next" value="//127.0.0.1:4000/thanks/" />
    <input type="hidden" name="_subject" value="New editing request!" />
    <input type="text" name="_gotcha" style="display:none" />
    <input type="submit" value="Send" class="btn btn-primary mt1">
</form>
