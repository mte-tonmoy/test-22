// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyCJ6ZvjD5nLK-zNuRoLRZ3043LB3E0VuR4",
    authDomain: "acigodrej-prs.firebaseapp.com",
    projectId: "acigodrej-prs",
    storageBucket: "acigodrej-prs.appspot.com",
    messagingSenderId: "419854302301",
    appId: "1:419854302301:web:1c9b970c503ddaf3a261b4",
    measurementId: "G-H0SYTHSWNC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;