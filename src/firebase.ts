// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"; // 1. Import GoogleAuthProvider

const firebaseConfig = {
  apiKey: "AIzaSyDdbSFUWY_cvFV1SrSwXKC2vzb70xe08bk",
  authDomain: "dhaliwal-clinic.firebaseapp.com",
  projectId: "dhaliwal-clinic",
  storageBucket: "dhaliwal-clinic.appspot.com", // Corrected this common typo
  messagingSenderId: "327651322770",
  appId: "1:327651322770:web:d2a6c265a5e9cf0560ef4b",
  measurementId: "G-87NKQSE6R3"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

// 2. Create and export an instance of the Google provider
export const googleProvider = new GoogleAuthProvider();