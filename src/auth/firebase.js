// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBAHqqVatYa5Z2EkzhoIA8-o7qDcMhG8U0",
    authDomain: "auth-cc-12b38.firebaseapp.com",
    projectId: "auth-cc-12b38",
    storageBucket: "auth-cc-12b38.firebasestorage.app",
    messagingSenderId: "1086961991654",
    appId: "1:1086961991654:web:670439d7f8eb33b287a027",
    measurementId: "G-ZS0QHQW9RR"
    };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();