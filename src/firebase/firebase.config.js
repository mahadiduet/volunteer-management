// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCT2urfyQx7w4Bzo5smBSQt6aCwDGIL-Zo",
  authDomain: "volunteer-management-b22ec.firebaseapp.com",
  projectId: "volunteer-management-b22ec",
  storageBucket: "volunteer-management-b22ec.appspot.com",
  messagingSenderId: "645047031493",
  appId: "1:645047031493:web:21ba70892701fe05ddc2ac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;