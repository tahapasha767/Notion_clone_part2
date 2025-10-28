// Import the functions you need from the SDKs you need
import { initializeApp ,getApps,getApp} from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBm1HkrEnZxnGfr62R76zqAmqw01CsZU0Y",
  authDomain: "lubricunt.firebaseapp.com",
  projectId: "lubricunt",
  storageBucket: "lubricunt.firebasestorage.app",
  messagingSenderId: "378162411339",
  appId: "1:378162411339:web:cc8d2c0432f810c3c9dace",
  measurementId: "G-PYKNLNMSRS"
};

// Initialize Firebase

const app =getApps().length===0?initializeApp(firebaseConfig):getApp();
const db=getFirestore(app)
//const analytics = getAnalytics(app);

export {db};