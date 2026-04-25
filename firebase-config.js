// Firebase SDKs ማስገቢያ
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// የአንተ ትክክለኛ የ School App መረጃዎች
const firebaseConfig = {
  apiKey: "AIzaSyBYfvuRAvpJ4_bDeaSJRMtpz_lohdd1XHM",
  authDomain: "school-app-945a1.firebaseapp.com",
  databaseURL: "https://school-app-945a1-default-rtdb.firebaseio.com",
  projectId: "school-app-945a1",
  storageBucket: "school-app-945a1.firebasestorage.app",
  messagingSenderId: "1074529168380",
  appId: "1:1074529168380:web:949d38224bf90934bca079",
  measurementId: "G-NFC9NTMYZ1"
};

// Firebase-ን ማስነሻ
const app = initializeApp(firebaseConfig);

// እነዚህን ለሌሎች ፋይሎች እንዲሰሩ ኤክስፖርት እናደርጋለን
export const db = getFirestore(app);
export const auth = getAuth(app);
export default app;

