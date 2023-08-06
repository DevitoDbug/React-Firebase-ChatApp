// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBqJIun06kMvl1CD_CWQxuySz3eLzRwHLA",
  authDomain: "artlife2-73dac.firebaseapp.com",
  projectId: "artlife2-73dac",
  storageBucket: "artlife2-73dac.appspot.com",
  messagingSenderId: "983272743064",
  appId: "1:983272743064:web:5498a6a83c97d25595b0ed"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth =getAuth()
export const analytics = getAnalytics(app);
export const storage = getStorage();
export const db = getFirestore()