// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCyNUJORLdPYL5t5_EskXM9F_lP7a2WquA",
  authDomain: "final-d7d30.firebaseapp.com",
  projectId: "final-d7d30",
  storageBucket: "final-d7d30.appspot.com",
  messagingSenderId: "43267785932",
  appId: "1:43267785932:web:3990884b4c4c92aa86ee69"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, provider };
