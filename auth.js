import { signInWithEmailAndPassword } from
"https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

import { auth } from "./firebase.js";

window.login = async function () {
  try {
    await signInWithEmailAndPassword(
      auth,
      email.value,
      password.value
    );
    window.location.href = "dashboard.html";
  } catch (e) {
    msg.innerText = e.message;
  }
};
