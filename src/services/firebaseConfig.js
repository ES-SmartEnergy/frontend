// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4u_3ffGHzRbwkJOcm4DrDYfrz2lTGEDU",
  authDomain: "smart-energy-695e0.firebaseapp.com",
  databaseURL: "https://smart-energy-695e0-default-rtdb.firebaseio.com",
  projectId: "smart-energy-695e0",
  storageBucket: "smart-energy-695e0.appspot.com",
  messagingSenderId: "536359670950",
  appId: "1:536359670950:web:540bc3d7f7121f3082d067",
  measurementId: "G-QCK30NSH21"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);