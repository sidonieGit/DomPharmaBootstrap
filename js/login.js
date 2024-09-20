// Initialiser les valeurs dans localStorage si elles ne sont pas définies
// if (!localStorage.getItem("Username")) {
//   localStorage.setItem("Username", "testuser");
// }
// if (!localStorage.getItem("Password")) {
//   localStorage.setItem("Password", "password123");
// }

const login = document.getElementById("login");

login.onclick = (e) => {
  e.preventDefault(); // Empêche l'envoi du formulaire par défaut

  const usernameAddress = document.getElementById("username").value.trim();
  const passwordAddress = document.getElementById("password").value.trim();

  const getUser = localStorage.getItem("Username").trim().toLowerCase();
  const getPass = localStorage.getItem("Password").trim().toLowerCase();

  if (usernameAddress === "" || passwordAddress === "") {
    swal("Input field has no value");
  } else {
    if (
      usernameAddress.toLowerCase() === getUser &&
      passwordAddress.toLowerCase() === getPass
    ) {
      swal(`Login successful, hi ${usernameAddress}`);
    } else {
      swal("Something is wrong");
    }
  }
};
