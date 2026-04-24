import { auth, db } from './firebase-config.js';
import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const loginBtn = document.getElementById('login-btn');
const logoutBtn = document.getElementById('logout-btn');

if (loginBtn) {
    loginBtn.onclick = async () => {
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const role = document.getElementById('user-role').value;

        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            const userDoc = await getDoc(doc(db, "users", user.uid));
            
            if (userDoc.exists() && userDoc.data().role === role) {
                document.getElementById('login-section').style.display = 'none';
                document.getElementById('dashboard-section').style.display = 'block';
                document.getElementById('role-display').innerText = "ገጽ፡ " + role.toUpperCase();
            } else {
                alert("ሚናው አልተገኘም!");
                await signOut(auth);
            }
        } catch (e) { alert("ስህተት፡ " + e.message); }
    };
}

if (logoutBtn) {
    logoutBtn.onclick = () => { signOut(auth).then(() => location.reload()); };
}

