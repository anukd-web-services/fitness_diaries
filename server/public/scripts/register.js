import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import { app } from "./firebase.js";

const auth = getAuth(app);

const container = document.querySelector('.container');
const registerBtn = document.querySelector('.register-btn');
const jsRegisterBtn = document.querySelector('.js-register-btn');
const loginBtn = document.querySelector('.login-btn');
const googleLogin = document.querySelector('.bxl-google');

registerBtn.addEventListener('click', () => {
  container.classList.add('active');
});

loginBtn.addEventListener('click', () => {
  container.classList.remove('active');
});


// Register user when form submit button is clicked
jsRegisterBtn.addEventListener("click", (e) => {
  e.preventDefault();

  // Grab inputs from the registration form
  const emailInput = document.querySelector(
    '.form-box.register input[type="email"]'
  );
  const passwordInput = document.querySelector(
    '.form-box.register input[type="password"]'
  );

  const email = emailInput.value.trim();
  const password = passwordInput.value;

  if (!email || !password) {
    alert("Please fill in both email and password.");
    return;
  }

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log("Registration successful:", userCredential.user);
      alert("Registration successful!");
    })
    .catch((error) => {
      console.error("Error registering:", error.message);
      alert("Error: " + error.message);
    });
});