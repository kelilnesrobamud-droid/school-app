import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

const firebaseConfig = {
  // እባክህ ይህንን API Key ከ Firebase Project Settings ውስጥ ማረጋገጥህን አትርሳ
  apiKey: "AIzaSyBYFvuRAupj4_bDeaSJRwtpz_lohdd1XMM", 
  authDomain: "school-app-945a1.firebaseapp.com",
  projectId: "school-app-945a1",
  storageBucket: "school-app-945a1.appspot.com",
  messagingSenderId: "1074529168380",
  appId: "1:1074529168380:web:949d38224bf90934bca079"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export default app;

