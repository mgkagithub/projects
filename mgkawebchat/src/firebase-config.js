// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVfztfaDfxWcaPNVBv9f7fYuAaAwES788",
  authDomain: "mgkawebchat.firebaseapp.com",
  projectId: "mgkawebchat",
  storageBucket: "mgkawebchat.appspot.com",
  messagingSenderId: "785329639405",
  appId: "1:785329639405:web:408bc4203cebff15e461e4",
  measurementId: "G-NKPDTX8J1K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;