import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "make-code-easy.firebaseapp.com",
  projectId: "make-code-easy",
  storageBucket: "make-code-easy.appspot.com",
  messagingSenderId: "175841198996",
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: "G-6LZ5R1FNG1",
};

export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore();
export const storage = getStorage(app);
