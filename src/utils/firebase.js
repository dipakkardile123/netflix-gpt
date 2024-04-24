// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBE_e_IaE16nQtGtAmfR16IpzsSaTXCX5g",
  authDomain: "netflixgpt-d7926.firebaseapp.com",
  projectId: "netflixgpt-d7926",
  storageBucket: "netflixgpt-d7926.appspot.com",
  messagingSenderId: "78646019445",
  appId: "1:78646019445:web:c485e33eba7f336fc83f3c",
  measurementId: "G-3QHWQGWPMX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth=getAuth();