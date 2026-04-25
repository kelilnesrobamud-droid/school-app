
import { auth } from "./firebase-config.js";
import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

const loginBtn = document.getElementById("login-btn");
const logoutBtn = document.getElementById("logout-btn");

if (loginBtn) {
    loginBtn.onclick = async () => {
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        if(!email || !password) {
            alert("እባክዎ ኢሜይል እና ፓስወርድ ያስገቡ!");
            return;
        }

        try {
            await signInWithEmailAndPassword(auth, email, password);
            alert("በደህና መጡ!");
        } catch (error) {
            alert("ስህተት: " + error.message);
        }
    };
}

if (logoutBtn) {
    logoutBtn.onclick = () => {
        signOut(auth).then(() => location.reload());
    };
}

onAuthStateChanged(auth, (user) => {
    if (user) {
        document.getElementById("login-section").style.display = "none";
        document.getElementById("dashboard-section").style.display = "block";
    }
});
