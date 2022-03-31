/* eslint-disable no-unused-vars */
const button = document.getElementById("conversation-button");
const conversation = document.getElementById("conversation");

const beginToTalk = document.getElementById("begin-to-talk");
const name = document.getElementById("name");
const bio1 = document.getElementById("bio1");

name.addEventListener("click", () => {
  bio1.innerHTML = `A budding web developer who choreographs stories across multi-media
platforms. I see the web as an open architecture for project
curation and collaboration.`;
  bio1.style.color = "rgb(83, 63, 40)";
});

const converse = () => {
  console.log("here");
  conversation.innerHTML = `<label for="">Hi, what's your name?</label><br>
<input id="username" type="text"><hr>
<label for="hi">Lovely name that you have :) Now let's get to know each other at a deeper level. What matters most to you in life?</label>
<br><input id="interests" type="text"><hr><label for="interests">Thank you for sharing that with me. How interesting! What projects do you think we can work on so that we can grow together?</label>
<br><input id="projects" type="text"><hr><label for="projects"><button id="submit">Share with me</button>`;
  beginToTalk.innerHTML = "";
  const submitButton = document.getElementById("submit");
  submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    conversation.innerHTML = `<div><p>Thank you! Will get back to you soon.</p></div>`;
  });
};

button.addEventListener("click", (e) => {
  e.preventDefault();
  converse();
});
