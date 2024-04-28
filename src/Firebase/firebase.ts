// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyASSeDJGJttOZVoOk8GVtzXKkrgTGiXyRA",
    authDomain: "illust-board.firebaseapp.com",
    projectId: "illust-board",
    storageBucket: "illust-board.appspot.com",
    messagingSenderId: "288163213556",
    appId: "1:288163213556:web:d8e1e9f88c80ad25a42ea1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);
const db = getFirestore(app);


export { app, auth, storage, db };