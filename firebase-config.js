// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPM3x-6r5LpV3C25yFtyHEb7rWJ4jZ6Yo",
  authDomain: "poems-e8dc6.firebaseapp.com",
  databaseURL: "https://poems-e8dc6-default-rtdb.firebaseio.com",
  projectId: "poems-e8dc6",
  storageBucket: "poems-e8dc6.appspot.com",
  messagingSenderId: "1017499952744",
  appId: "1:1017499952744:web:e57b2e32bd8f48c1183ddd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app)