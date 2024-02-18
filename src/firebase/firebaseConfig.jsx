// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBy0Gm8UKflm36NEhEo-QCkPj3hUFKsSWc",
  authDomain: "chatapp-89104.firebaseapp.com",
  projectId: "chatapp-89104",
  storageBucket: "chatapp-89104.appspot.com",
  messagingSenderId: "420323205932",
  appId: "1:420323205932:web:3498bc475b58574a35c289",
  measurementId: "G-0MR6QBSNE4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

// yetkilendirme

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
