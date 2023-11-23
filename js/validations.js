// Validation Script
document.addEventListener("DOMContentLoaded", function () {
  const signupForm = document.getElementById("signupForm");

  signupForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const usernameError = document.getElementById("usernameError");
    if (username.length < 3) {
      usernameError.textContent = "Username must be at least 3 characters";
    } else {
      usernameError.textContent = "";
    }

    const email = document.getElementById("email").value;
    const emailError = document.getElementById("emailError");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      emailError.textContent = "Invalid email format";
    } else {
      emailError.textContent = "";
    }

    const password = document.getElementById("password").value;
    const passwordError = document.getElementById("passwordError");
    if (password.length < 6) {
      passwordError.textContent = "Password must be at least 6 characters";
    } else {
      passwordError.textContent = "";
    }

    const confirmPassword = document.getElementById("confirmPassword").value;
    const confirmPasswordError = document.getElementById(
      "confirmPasswordError"
    );
    if (confirmPassword !== password) {
      confirmPasswordError.textContent = "Passwords do not match";
    } else {
      confirmPasswordError.textContent = "";
    }

    if (
      username.length >= 3 &&
      emailRegex.test(email) &&
      password.length >= 6 &&
      confirmPassword === password
    ) {
      sessionStorage.setItem("loggedInUser", username);
      const loader = document.getElementById("loader");
      const loaderContainer = document.getElementById("loaderContainer");

      loader.style.display = "block";
      loaderContainer.style.display = "block";

      e.preventDefault();

      setTimeout(() => {
        window.location.href = "index.html";

        loader.style.display = "none";
        loaderContainer.style.display = "none";
      }, 2000);
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const signInForm = document.getElementById("signInForm");

  signInForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const signInEmail = document.getElementById("signInEmail").value;
    const emailError = document.getElementById("emailError");
    if (!isValidEmail(signInEmail)) {
      emailError.textContent = "Invalid email format";
    } else {
      emailError.textContent = "";
    }

    const signInPassword = document.getElementById("signInPassword").value;
    const passwordError = document.getElementById("passwordError");
    if (signInPassword.length < 6) {
      passwordError.textContent = "Password must be at least 6 characters";
    } else {
      passwordError.textContent = "";
    }

    if (isValidEmail(signInEmail) && signInPassword.length >= 6) {
      const loader = document.getElementById("loader");
      const loaderContainer = document.getElementById("loaderContainer");

      loader.style.display = "block";
      loaderContainer.style.display = "block";

      e.preventDefault();

      setTimeout(() => {
        window.location.href = "dashboard.html";

        loader.style.display = "none";
        loaderContainer.style.display = "none";
      }, 2000);
    }
  });

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
});
