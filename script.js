const formTitle = document.getElementById("form-title");
const form = document.getElementById("form");
const toggle = document.getElementById("toggle");
const container = document.querySelector(".container");

let isLogin = true;
formTitle.textContent = isLogin ? "Login" : "Register";

toggle.addEventListener("click", () => {
  isLogin = !isLogin;

  formTitle.textContent = isLogin ? "Login" : "Register";
  form.innerHTML = isLogin
    ? '<div class="input-container">\n<input type="text" placeholder=" " required>\n<label>Username</label>\n</div>\n<div class="input-container">\n<input type="password" placeholder=" " required class="password-input">\n<label>Password</label>\n<span class="toggle-password"><i class="fas fa-eye"></i></span>\n</div>\n<button type="submit">Submit</button>'
    : '<div class="input-container">\n<input type="text" placeholder=" " required>\n<label>Full Name</label>\n</div>\n<div class="input-container">\n<input type="email" placeholder=" " required>\n<label>Email</label>\n</div>\n<div class="input-container">\n<input type="password" placeholder=" " required class="password-input">\n<label>Password</label>\n<span class="toggle-password"><i class="fas fa-eye"></i></span>\n</div>\n<div class="input-container">\n<input type="password" placeholder=" " required class="password-input">\n<label>Confirm Password</label>\n<span class="toggle-password"><i class="fas fa-eye"></i></span>\n</div>\n<button type="submit">Register</button>';
  toggle.textContent = isLogin
    ? "Don't have an account? Register here."
    : "Already have an account? Login here.";

  // Toggle class to adjust image position
  container.classList.toggle("register-mode", !isLogin);

  // Initialize password toggle functionality
  initPasswordToggle();
});

// Password toggle functionality
function initPasswordToggle() {
  // Select all password input fields and their corresponding toggle buttons
  const passwordInputs = document.querySelectorAll(".password-input");
  const toggleIcons = document.querySelectorAll(".toggle-password i");

  // Add event listener to each toggle icon
  toggleIcons.forEach((icon, index) => {
    icon.addEventListener("click", () => {
      const input = passwordInputs[index];
      if (input.type === "password") {
        input.type = "text";
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
      } else {
        input.type = "password";
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");
      }
    });
  });
}

// Initialize password toggle on page load
document.addEventListener("DOMContentLoaded", initPasswordToggle);
