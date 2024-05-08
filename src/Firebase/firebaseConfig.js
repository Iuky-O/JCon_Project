// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCkCqqq0cwowkcOoi5EEc3sNxv5BHtaL0",
  authDomain: "jcon-project.firebaseapp.com",
  projectId: "jcon-project",
  storageBucket: "jcon-project.appspot.com",
  messagingSenderId: "28582866836",
  appId: "1:28582866836:web:0d0493ce61bb4abbbf2981"
};

// Initialize Firebase
export const firebase = initializeApp(firebaseConfig);
export const auth = getAuth(firebase);

export const database = getDatabase(firebase);