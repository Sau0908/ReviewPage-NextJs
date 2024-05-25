import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAk2i4czGzjL66oHRTIzTEAX_GIJjnEy6o",
  authDomain: "review-page-dcde0.firebaseapp.com",
  projectId: "review-page-dcde0",
  storageBucket: "review-page-dcde0.appspot.com",
  messagingSenderId: "974349756750",
  appId: "1:974349756750:web:c935a2f010e6c2c7af561f",
  measurementId: "G-66TL5J77CR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
