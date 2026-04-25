
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBYFvuRAupj4_bDeaSJRwtpz_lohdd1XMM",
  authDomain: "school-app-945a1.firebaseapp.com",
  databaseURL: "https://school-app-945a1-default-rtdb.firebaseio.com",
  projectId: "school-app-945a1",
  storageBucket: "school-app-945a1.appspot.com",
  messagingSenderId: "1074529168380",
  appId: "1:1074529168380:web:949d38224bf90934bca079",
  measurementId: "G-NFC3NT9YZ1"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export default app;
