lit-html-issues
===============

This repo consists of a native web component and a lit-html template.

The template is of a form, which contains a text input, a select, a checkbox input and a radio
button input.

The web component attempts to set values of each of the input elements on first render. Thereafter,
it attempts to set the values every 2 seconds.

Note in the case of the select, the value cannot be set programatically.

In the case of the other inputs, initial values can be set programatically. However, if a user
selects a different value they cannot be updated programatically.

Either I don't know how to use lit-html or it has some serious bugs for form processing.

# Running

This repo does not require a build step but will only run in browsers that have native support
for v1 web components. Chrome, Firefox and Safari all now support v1 native web components so
feel free to run this in any of those browsers. Note, they all react the same. 

1. download the repo.
2. install the resources using npm install.
3. start a live-server using ```npm start```
