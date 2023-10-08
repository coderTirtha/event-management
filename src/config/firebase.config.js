// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID
};

// const firebaseConfig = {
//     apiKey: ,
//     authDomain: "rock-n-roll-17e16.firebaseapp.com",
//     projectId: "rock-n-roll-17e16",
//     storageBucket: "rock-n-roll-17e16.appspot.com",
//     messagingSenderId: "681648752531",
//     appId: "1:681648752531:web:e0f8d0bea31b1349908a66"
//   };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
