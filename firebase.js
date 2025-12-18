<script type="module">
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

export const firebaseConfig = {
  apiKey: "AIzaSyCpGwKbyOW_LQPrTKoNvDjW_oTD9_cxsnc",
  authDomain: "n26-bank-888bc.firebaseapp.com",
  projectId: "n26-bank-888bc",
  storageBucket: "n26-bank-888bc.firebasestorage.app",
  messagingSenderId: "112126821080",
  appId: "1:112126821080:web:c108cc61d84a25f5290dad"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
</script>
