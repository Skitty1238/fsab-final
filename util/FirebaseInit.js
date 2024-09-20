// Intializes the firebase database

// run these packages before
// npm install firebase
// npm install firebase-admin

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWmbckaVHKAN4wLnyC06XQo9zcaW_8Kn8",
  authDomain: "fsab-final.firebaseapp.com",
  projectId: "fsab-final",
  storageBucket: "fsab-final.appspot.com",
  messagingSenderId: "118603568864",
  appId: "1:118603568864:web:425c19b1ccc27d9a0c2285"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);