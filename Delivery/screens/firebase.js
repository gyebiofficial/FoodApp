// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDMWGtZu6sYfCOVBeR1aOOSD-RIGT8dX0s",
  authDomain: "delivery-app-adced.firebaseapp.com",
  projectId: "delivery-app-adced",
  storageBucket: "delivery-app-adced.appspot.com",
  messagingSenderId: "650740290718",
  appId: "1:650740290718:web:8d42d90978373d8f00d78f",
};

let app;
try{
    app = initializeApp(firebaseConfig);
    console.log("Firebase initialized successfully:", app);}
    catch(error) {
    console.error("Firebase initialization error:", error);
    }

    const auth = getAuth(app);

    export {auth};
