// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOpNR59slWcFIPP6K2aqEheoXZPHv8OtY",
  authDomain: "house-marketplace-app-9f587.firebaseapp.com",
  projectId: "house-marketplace-app-9f587",
  storageBucket: "house-marketplace-app-9f587.appspot.com",
  messagingSenderId: "549064078088",
  appId: "1:549064078088:web:49ce6d2d87108ac65332bd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
