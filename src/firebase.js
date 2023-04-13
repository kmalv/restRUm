// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxiTkPZkX1nmOhGCRs75z8Ri1ixdvIITo",
  authDomain: "restrum-86804.firebaseapp.com",
  projectId: "restrum-86804",
  storageBucket: "restrum-86804.appspot.com",
  messagingSenderId: "557585623398",
  appId: "1:557585623398:web:75324927aa26b7de4300a7",
  measurementId: "G-NNRSQB6F7E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;