// JavaScript for Login/Signup Modal
const authModal = document.getElementById("authModal");
const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");
const showSignup = document.getElementById("showSignup");
const showLogin = document.getElementById("showLogin");
const closeModal = document.querySelector(".close");

// Open Login Modal
document.getElementById("login_signup").addEventListener("click", () => {
  authModal.classList.remove("hidden");
  loginForm.classList.remove("hidden");
  signupForm.classList.add("hidden");
});

// Toggle to Signup Form
showSignup.addEventListener("click", (e) => {
  e.preventDefault();
  loginForm.classList.add("hidden");
  signupForm.classList.remove("hidden");
});

// Toggle to Login Form
showLogin.addEventListener("click", (e) => {
  e.preventDefault();
  signupForm.classList.add("hidden");
  loginForm.classList.remove("hidden");
});

// Close Modal
closeModal.addEventListener("click", () => {
  authModal.classList.add("hidden");
});

// Close Modal When Clicking Outside
window.addEventListener("click", (e) => {
  if (e.target === authModal) {
    authModal.classList.add("hidden");
  }
});
