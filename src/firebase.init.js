// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3rYYY0PV3I4Zpz4Wy_CWz9pZ_r9x6GAE",
  authDomain: "life-saviour-doctor.firebaseapp.com",
  projectId: "life-saviour-doctor",
  storageBucket: "life-saviour-doctor.appspot.com",
  messagingSenderId: "420200101146",
  appId: "1:420200101146:web:757f45a39400ce315268a3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
