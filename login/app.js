const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';

const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const link = document.querySelector('a');
const greeting = document.querySelector('#greeting');

function onLoginSubmit(e) {
  // page refresh prevent
  e.preventDefault();

  loginForm.classList.add(HIDDEN_CLASSNAME);

  const username  = loginInput.value;
  // save username
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

function onHandleLinkClick(e) {
  // Link execution after alert
  alert('clicked!');
}

const savedUsername = localStorage.getItem(USERNAME_KEY);
if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener('submit', onLoginSubmit);
  link.addEventListener('click', onHandleLinkClick);
} else {
  paintGreetings(savedUsername);
}