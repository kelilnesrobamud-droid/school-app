
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// ይህ መረጃ ከFirebase Settings (Web App) የሚገኝ ነው
const firebaseConfig = {
  apiKey: "የአንተ_API_KEY",
  authDomain: "የአንተ_PROJECT_ID.firebaseapp.com",
  projectId: "የአንተ_PROJECT_ID",
  storageBucket: "የአንተ_PROJECT_ID.appspot.com",
  messagingSenderId: "የአንተ_SENDER_ID",
  appId: "የአንተ_APP_ID"
};

// ሲስተሙን ማስነሳት
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
