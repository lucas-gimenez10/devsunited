import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCd1dLuRiXdjjcT3hAJXIJPBgjYscm1VlI",
  authDomain: "devs-united-c5d08.firebaseapp.com",
  projectId: "devs-united-c5d08",
  storageBucket: "devs-united-c5d08.appspot.com",
  messagingSenderId: "1077242562828",
  appId: "1:1077242562828:web:f64984766e19aac22e2129"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);