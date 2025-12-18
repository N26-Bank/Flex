import { doc, getDoc } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";
import { auth, db } from "./firebase.js";

onAuthStateChanged(auth, async user => {
  if (!user) location.href = "index.html";

  const snap = await getDoc(doc(db, "users", user.uid));
  const data = snap.data();

  if (data.status === "suspended") {
    alert("Account suspended");
    auth.signOut();
    return;
  }

  document.getElementById("name").innerText = data.fullName;
  document.getElementById("balance").innerText = data.balance;
  document.getElementById("kyc").innerText = data.kycStatus;

  if (data.profilePhoto) {
    const img = document.createElement("img");
    img.src = data.profilePhoto;
    img.width = 100;
    document.body.appendChild(img);
  }
});
