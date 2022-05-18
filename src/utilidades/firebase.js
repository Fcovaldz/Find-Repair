// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCBGS9hasqoKYjUyumovFuauvL8W782SPw",
  authDomain: "find-repair.firebaseapp.com",
  projectId: "find-repair",
  storageBucket: "find-repair.appspot.com",
  messagingSenderId: "838585613118",
  appId: "1:838585613118:web:999cff2577294981734a6f"
};

// Initialize Firebase
export const initFirebase = initializeApp(firebaseConfig);