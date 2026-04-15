// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpV7h4TxtOaKt8Swxc8NQ4Udytt-y_U1U",
  authDomain: "taichinhcn-d1973.firebaseapp.com",
  projectId: "taichinhcn-d1973",
  storageBucket: "taichinhcn-d1973.firebasestorage.app",
  messagingSenderId: "231342956642",
  appId: "1:231342956642:web:6a2ddc93c2e07dc9d4713b",
  measurementId: "G-WYCPZ6SN95"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

console.log("Firebase initialized with Auth and Firestore");

export { app, analytics, auth, db };
