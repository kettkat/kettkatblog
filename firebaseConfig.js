import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCPM3x-6r5LpV3C25yFtyHEb7rWJ4jZ6Yo",
  authDomain: "poems-e8dc6.firebaseapp.com",
  databaseURL: "https://poems-e8dc6-default-rtdb.firebaseio.com",
  projectId: "poems-e8dc6",
  storageBucket: "poems-e8dc6.appspot.com",
  messagingSenderId: "1017499952744",
  appId: "1:1017499952744:web:e57b2e32bd8f48c1183ddd",
};

export const app = initializeApp(firebaseConfig);
