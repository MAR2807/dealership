
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6jCUXTuHfEAjyrIVZ7LjzwksOXBavMgM",
  authDomain: "carinventory-12f88.firebaseapp.com",
  projectId: "carinventory-12f88",
  storageBucket: "carinventory-12f88.appspot.com",
  messagingSenderId: "570585733719",
  appId: "1:570585733719:web:a6c77eb5637cf99874a112",
  measurementId: "G-DZ1BMFJLXL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export{db}