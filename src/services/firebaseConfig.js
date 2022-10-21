import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBnoCjkNUMDzjnLeTXyeldlFUa4FTXJ5rw",
  authDomain: "page-teclam.firebaseapp.com",
  projectId: "page-teclam",
  storageBucket: "page-teclam.appspot.com",
  messagingSenderId: "875545539492",
  appId: "1:875545539492:web:2ec6a5e55a93140bf24731"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);