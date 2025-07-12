import { 
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup 
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import { app } from "./firebase.js";

const auth = getAuth(app);

const container = document.querySelector('.container');
const registerBtn = document.querySelector('.register-btn');
const loginBtn = document.querySelector('.login-btn');
const jsRegisterBtn = document.querySelector('.js-register-btn');
const jsLoginBtn = document.querySelector('.js-login-btn');
const googleBtn = document.querySelectorAll('.bxl-google');


registerBtn.addEventListener('click', () => {
  container.classList.add('active');
});

loginBtn.addEventListener('click', () => {
  container.classList.remove('active');
});


// Register user 
jsRegisterBtn.addEventListener("click", (e) => {
  e.preventDefault();
 
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

// Login user
jsLoginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("Login button clicked.");

  const emailInput = document.querySelector('input[type="email"]');
  const passwordInput = document.querySelector('input[type="password"]');
  const errorMessage = document.querySelector('.error-message');

  if (!emailInput || !passwordInput || !errorMessage) {
    console.error("Form inputs or error container not found.");
    return;
  }

  const email = emailInput.value.trim();
  const password = passwordInput.value;

  errorMessage.style.display = 'none';
  errorMessage.textContent = '';

  if (!email || !password) {
    errorMessage.textContent = "Please enter both email and password.";
    errorMessage.style.display = 'block';
    return;
  }

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("✅ Login successful!");
      console.log("User ID:", user.uid);
      console.log("User Email:", user.email);
      errorMessage.style.display = 'none'; // Clear any old error
    })
    .catch((error) => {
      console.error("❌ Login error:", error.code, error.message);

      if (error.code === "auth/invalid-login-credentials") {
        errorMessage.textContent = "User not found or wrong password. Please try again.";
      } else {
        errorMessage.textContent = "Login failed: " + error.message;
      }

      errorMessage.style.display = 'block';
    });
});


//google-login
googleBtn.forEach((btn) => {
  btn.addEventListener('click', async (e) => {
    e.preventDefault();

    const googleProvider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      console.log("✅ Google Login successful!");
      console.log("User ID:", user.uid);
      console.log("User Email:", user.email);

      alert(`Welcome, ${user.displayName || user.email}!`);
    } catch (error) {
      console.error("❌ Google Login error:", error.code, error.message);
      alert("Google login failed: " + error.message);
    }
  });
});

