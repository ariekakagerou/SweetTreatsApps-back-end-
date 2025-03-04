// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC5yoAA0-z7Bj8b1NF4_bMpteuJqI9xxhk",
    authDomain: "sweettreats-a8f36.firebaseapp.com",
    projectId: "sweettreats-a8f36",
    storageBucket: "sweettreats-a8f36.firebasestorage.app",
    messagingSenderId: "106876084797",
    appId: "1:106876084797:web:adfaf69cd2b1ec31cb4054",
    measurementId: "G-JM3RE5DRRT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db; // Pastikan menggunakan ekspor default