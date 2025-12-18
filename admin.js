import { doc, setDoc, updateDoc, getDoc }
from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

import { onAuthStateChanged }
from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

import { auth, db } from "./firebase.js";

onAuthStateChanged(auth, async user => {
  const snap = await getDoc(doc(db, "users", user.uid));
  if (snap.data().role !== "admin") {
    alert("Unauthorized");
    location.href = "dashboard.html";
  }
});

window.addUser = async () => {
  await setDoc(doc(db, "users", uid.value), {
    fullName: fullname.value,
    balance: 0,
    role: "user",
    kycStatus: "Pending",
    status: "active"
  });
  status.innerText = "User added";
};

window.suspend = async () => {
  await updateDoc(doc(db, "users", susUid.value), {
    status: "suspended"
  });
  status.innerText = "User suspended";
};
