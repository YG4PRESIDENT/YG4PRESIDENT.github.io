// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwMOCS57k5y_PvriGmF-6LtsudCNdG8_Q",
  authDomain: "workout-intensity-tracking.firebaseapp.com",
  projectId: "workout-intensity-tracking",
  storageBucket: "workout-intensity-tracking.appspot.com",
  messagingSenderId: "766776932369",
  appId: "1:766776932369:web:d927fd0f2b0d830fac19b0",
  measurementId: "G-FJDM5RKMCC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// export const db = firebase.firestore();
export const db = getFirestore(app);