import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyB4k1kadkpHMzm-s7Ewun9vq2nFAYR907c",
  authDomain: "make-code-easy.firebaseapp.com",
  projectId: "make-code-easy",
  storageBucket: "make-code-easy.appspot.com",
  messagingSenderId: "175841198996",
  appId: "1:175841198996:web:509bb49065d290fb9e8581",
  measurementId: "G-6LZ5R1FNG1",
};

export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore();
export const storage = getStorage(app);
