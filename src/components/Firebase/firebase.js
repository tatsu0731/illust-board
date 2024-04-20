// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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

export default app;
