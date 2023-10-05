// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCSfJhlC81YU-V4cvYylF_JKoueK2baWxc",
    authDomain: "ecommerce-infotech.firebaseapp.com",
    projectId: "ecommerce-infotech",
    storageBucket: "ecommerce-infotech.appspot.com",
    messagingSenderId: "102787800985",
    appId: "1:102787800985:web:ecba37b641516999813d08"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const initFirebase = () => app