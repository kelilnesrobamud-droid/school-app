import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBYfvuRAupJ4_bDeaSJRMtpz_lohdd1XHM",
  authDomain: "school-app-945a1.firebaseapp.com",
  databaseURL: "https://school-app-945a1-default-rtdb.firebaseio.com",
  projectId: "school-app-945a1",
  storageBucket: "school-app-945a1.firebasestorage.app",
  messagingSenderId: "1074529168380",
  appId: "1:1074529168380:web:eb23f0ee65dd7770bca079",
  measurementId: "G-E191ECKYG8"
};

// Firebase-ን ማስጀመር
const app = initializeApp(firebaseConfig);

// ለሌሎቹ ፋይሎች እንዲጠቀሙ Export ማድረግ
export const db = getFirestore(app);
export const auth = getAuth(app);
export default app;

