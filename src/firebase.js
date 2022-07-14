// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBxqvWu0DlkmWMF7cb2EKzu43Qc3kU122E",
    authDomain: "watch-with-nicky.firebaseapp.com",
    projectId: "watch-with-nicky",
    storageBucket: "watch-with-nicky.appspot.com",
    messagingSenderId: "1037049963965",
    appId: "1:1037049963965:web:fbca2f053195a12d091ed4",
    measurementId: "G-9EBSCSEGCP"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)
