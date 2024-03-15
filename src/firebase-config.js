// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgxSGIBOkcVlh98aPqQ7ufuauBdheobDM",
  authDomain: "devblastmatrix.firebaseapp.com",
  projectId: "devblastmatrix",
  storageBucket: "devblastmatrix.appspot.com",
  messagingSenderId: "889613371287",
  appId: "1:889613371287:web:c1eeb4080d11df1281e6d2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);