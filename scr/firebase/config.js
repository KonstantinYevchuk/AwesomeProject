
// import firebase from "firebase";
// import "firebase/auth";
// import "firebase/firestore";
// import "firebase/storage";
import { initializeApp } from 'firebase/app';
// Функція для підключення авторизації в проект
import { getAuth } from "firebase/auth";
// Функція для підключення бази даних у проект
import { getFirestore } from "firebase/firestore";
// Функція для підключення сховища файлів в проект
import { getStorage } from "firebase/storage";


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

    // export { auth, db, storage };

  // const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);




