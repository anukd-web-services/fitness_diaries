import { 
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  GoogleAuthProvider,
  FacebookAuthProvider,
  OAuthProvider,
  signInAnonymously,    
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
const facebookBtn = document.querySelectorAll('.bxl-facebook');
const twitterBtn = document.querySelectorAll('.bxl-twitter');
const guestBtn = document.querySelectorAll('.bxs-user');
const forgotPasswordLink = document.querySelector('.forgot-link a');


registerBtn.addEventListener('click', () => {
  container.classList.add('active');
});

loginBtn.addEventListener('click', () => {
  container.classList.remove('active');
});


//Register-user 
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

//Login-user
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
      errorMessage.style.display = 'none';
    })
    .catch((error) => {
      console.error("❌ Login error:", error.code, error.message);

      if (error.code === "auth/invalid-login-credentials") {
        errorMessage.textContent = "User not found or wrong password. Please try again.";
      } else if (error.code === "auth/invalid-email") {
        errorMessage.textContent = "Invalid email.";
      } else if (error.code === "auth/user-not-found") {
        errorMessage.textContent = "No account found with this email.";
      } else {
        errorMessage.textContent = "Login failed. " + error.message;
      }

      errorMessage.style.display = 'block';
    });
});

//Google-login
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


//Facebook-login
facebookBtn.forEach((btn) => {
  btn.addEventListener('click', async (e) => {
    e.preventDefault();

    const facebookProvider = new FacebookAuthProvider();

    try {
      const result = await signInWithPopup(auth, facebookProvider);
      const user = result.user;

      console.log("✅ Facebook Login successful!");
      console.log("User ID:", user.uid);
      console.log("User Email:", user.email);

      alert(`Welcome, ${user.displayName || user.email}!`);
    } catch (error) {
      console.error("❌ Facebook Login error:", error.code, error.message);
      alert("Facebook login failed: " + error.message);
    }
  });
});


//Twitter-login
twitterBtn.forEach((btn) => {
  btn.addEventListener('click', async (e) => {
    e.preventDefault();

    const twitterProvider = new OAuthProvider('twitter.com');

    try {
      const result = await signInWithPopup(auth, twitterProvider);
      const user = result.user;

      console.log("✅ Twitter Login successful!");
      console.log("User ID:", user.uid);
      console.log("User Name:", user.displayName);
      console.log("User Email:", user.email);
      console.log("User Photo:", user.photoURL);

      alert(`Welcome, ${user.displayName || "Twitter User"}!`);
    } catch (error) {
      console.error("❌ Twitter Login error:", error.code, error.message);
      alert("Twitter login failed: " + error.message);
    }
  });
});


//Guest-login
guestBtn.forEach((btn) => {
  btn.addEventListener('click', async (e) => {
    e.preventDefault();

    try {
      const result = await signInAnonymously(auth);
      const user = result.user;

      console.log("✅ Guest Login successful!");
      console.log("User ID:", user.uid);

      alert("Welcome, Guest! You're now using the app anonymously.");
    } catch (error) {
      console.error("❌ Guest Login error:", error.code, error.message);
      alert("Guest login failed: " + error.message);
    }
  });
});

//Forgot-password
forgotPasswordLink.addEventListener('click', (e) => {
  e.preventDefault();

  const emailInput = document.querySelector('.form-box.login input[type="email"]');
  const email = emailInput.value.trim();

  if (!email) {
    alert("Please enter your email first.");
    return;
  }

 sendPasswordResetEmail(auth, email)
  .then(() => {
    alert("If this email is registered, a password reset link has been sent.");
  })
  .catch((error) => {
    console.error("Reset error:", error.message);
    alert("Error: " + error.message);
  });
});