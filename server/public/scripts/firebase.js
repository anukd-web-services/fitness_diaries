import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyCbOmt0d-p88GwOD45Y3JPYKJ3G85_zJyU",
  authDomain: "daily-fitness-82a96.firebaseapp.com",
  projectId: "daily-fitness-82a96",
  storageBucket: "daily-fitness-82a96.firebasestorage.app",
  messagingSenderId: "1009654632565",
  appId: "1:1009654632565:web:3cdd03af7781501f46683c",
  measurementId: "G-RDG6FCVYT6",
  databaseURL: "https://daily-fitness-82a96-default-rtdb.firebaseio.com",
};

export const app = initializeApp(firebaseConfig);
