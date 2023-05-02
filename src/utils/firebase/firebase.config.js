// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwjMX3JRYlyHA90vnOvNAUN5_M4qLerPg",
  authDomain: "sweet-bakery-394f3.firebaseapp.com",
  projectId: "sweet-bakery-394f3",
  storageBucket: "sweet-bakery-394f3.appspot.com",
  messagingSenderId: "693428255505",
  appId: "1:693428255505:web:122d6002833a76323d6ab0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app