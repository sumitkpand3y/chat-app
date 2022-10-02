
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBlYcXsV3N4w6Mb2hl4mjnUP5cRAsA3ClU",
  authDomain: "chat-app-32d5b.firebaseapp.com",
  projectId: "chat-app-32d5b",
  storageBucket: "chat-app-32d5b.appspot.com",
  messagingSenderId: "722499889696",
  appId: "1:722499889696:web:6b9d8294be79517acc6a45",
  measurementId: "G-XJNCWF387W",
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const analytics = getAnalytics(app);
export const storage = getStorage();
export const db = getFirestore()