import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyDmy91s9HIAfNs2vwyKymFd29dnVZm7iqU",
  authDomain: "artlife3.firebaseapp.com",
  projectId: "artlife3",
  storageBucket: "artlife3.appspot.com",
  messagingSenderId: "688613520295",
  appId: "1:688613520295:web:955b29cb08dc71ccd57c82"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
