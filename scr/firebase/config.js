

import { initializeApp } from 'firebase/app';

import { getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore";

import { getStorage } from "firebase/storage";
// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// import "firebase/auth";
// import "firebase/storage";
// import "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyAJLN2BHfi69JjVaNxdhpVbivd9WPEbuXw",
    authDomain: "r-n-awesome-project.firebaseapp.com",
    projectId: "r-n-awesome-project",
    storageBucket: "r-n-awesome-project.appspot.com",
    messagingSenderId: "97348701626",
    appId: "1:97348701626:web:4dc8820611dbc35dece183",
    measurementId: "G-P2WFG257MW"
  };

  const app = initializeApp(firebaseConfig);

  export const auth = getAuth(app);
  export const db = getFirestore(app);
  export const storage = getStorage(app);

  // const app = initializeApp(firebaseConfig);
  // const db = getFirestore(app);
  
  // export default app;




