

// Import the functions you need from the SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgUBtSu__MOMrTmFqQ7zWaea5lUme-GIc",
  authDomain: "fir-demo-55612.firebaseapp.com",
  projectId: "fir-demo-55612",
  storageBucket: "fir-demo-55612.firebasestorage.app",
  messagingSenderId: "870783319078",
  appId: "1:870783319078:web:432e7bb3edef4e9d00bae7",
  measurementId: "G-XE47ZX7GJN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

console.log("Firebase connected:", app.name);

export const auth = getAuth(app);
