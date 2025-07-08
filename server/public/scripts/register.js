import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";
import { app } from "./firebase.js";

const db = getDatabase(app);

const container = document.querySelector('.container');
const registerBtn = document.querySelector('.register-btn');
const loginBtn = document.querySelector('.login-btn');
const googleLogin = document.querySelector('.bxl-google');

registerBtn.addEventListener('click', () => {
  container.classList.add('active');
});

loginBtn.addEventListener('click', () => {
  container.classList.remove('active');
});

const putData = () => {
  set(ref(db, "users/xenix"), {
    id: 1,
    name: "xenix",
    age: 20,
  });
};

googleLogin.addEventListener('click', () => {
  putData();
});