// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9kOIh5HdLGKd4k_5Grsru3YXCUQ4squA",
  authDomain: "for-testing-7ffc1.firebaseapp.com",
  projectId: "for-testing-7ffc1",
  storageBucket: "for-testing-7ffc1.appspot.com",
  messagingSenderId: "171580635951",
  appId: "1:171580635951:web:8e0ad6437c6e2be2b6bfda",
  measurementId: "G-HW1B0QXLKP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);