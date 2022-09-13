// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrWijphzQsk2wbx9xMEznLgHVRzwcSOR8",
  authDomain: "projeto-pdm-d19ab.firebaseapp.com",
  projectId: "projeto-pdm-d19ab",
  storageBucket: "projeto-pdm-d19ab.appspot.com",
  messagingSenderId: "904660306710",
  appId: "1:904660306710:web:93fd48572d67761e581e37"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// inicializando o firestone
export const db = getFirestore(app);
export const auth = getAuth(app);