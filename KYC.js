import { auth, db } from "./firebase.js";
import { doc, updateDoc } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-storage.js";

const storage = getStorage();

window.submitKYC = async () => {
  const user = auth.currentUser;
  if (!user) {
    alert("Please login first");
    return;
  }

  const file = document.getElementById("passport").files[0];
  if (!file) {
    alert("Please select a passport image");
    return;
  }

  const storageRef = ref(storage, `passports/${user.uid}`);
  await uploadBytes(storageRef, file);

  const photoURL = await getDownloadURL(storageRef);

  await updateDoc(doc(db, "users", user.uid), {
    fullName: document.getElementById("fullname").value,
    address: document.getElementById("address").value,
    kycStatus: "Verified",
    profilePhoto: photoURL
  });

  status.innerText = "KYC Completed! ✅";

  // Optionally redirect to dashboard
  setTimeout(() => window.location.href = "dashboard.html", 1500);
};
