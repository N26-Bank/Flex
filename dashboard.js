import { onAuthStateChanged, signOut }
from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

import { doc, getDoc }
from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

import { auth, db } from "./firebase.js";

onAuthStateChanged(auth, async user => {
  if (!user) location.href = "index.html";

  const snap = await getDoc(doc(db, "users", user.uid));
  const data = snap.data();

  if (data.status === "suspended") {
    alert("Account suspended");
    signOut(auth);
  }

  name.innerText = data.fullName;
  balance.innerText = data.balance;
  kyc.innerText = data.kycStatus;
});

window.logout = () => signOut(auth);
