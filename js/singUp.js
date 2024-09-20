let form = document.getElementById("signupForm");
let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let psw = document.getElementById("psw");
let btn = document.getElementById("btn");

console.log(email);
console.log(btn);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validation();
});

function validation() {
  // Example validation logic
  if (
    username.value.trim() === "" ||
    email.value.trim() === "" ||
    password.value.trim() === "" ||
    psw.value.trim() === ""
  ) {
    alert("All fields are required!");
    return;
  }

  if (password.value !== psw.value) {
    alert("Passwords do not match!");
    return;
  }

  // Store data in localStoragelocalStorage is a built-in web API provided by modern browsers that allows you to store data as key-value pairs in the user's browser.trim() is a JavaScript string method that removes whitespace from both ends of a string.
  localStorage.setItem("Username", username.value.trim());
  localStorage.setItem("Password", password.value.trim());
  alert("Registration successful!");
}
