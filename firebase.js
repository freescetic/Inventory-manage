// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_c7_OSq_5Krm6o4DPQKLcpk_t4QbJ6mU",
  authDomain: "pantry-tracker-smav.firebaseapp.com",
  projectId: "pantry-tracker-smav",
  storageBucket: "pantry-tracker-smav.appspot.com",
  messagingSenderId: "69380090247",
  appId: "1:69380090247:web:e88ed4515d6f371d62cb22",
  measurementId: "G-VYSHF39W7D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export {firestore}