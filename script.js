// === Part 1: Event Handling & Theme Toggle ===
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Counter Feature
let count = 0;
const counterBtn = document.getElementById("counterBtn");
const counterValue = document.getElementById("counterValue");
counterBtn.addEventListener("click", () => {
  count++;
  counterValue.textContent = count;
});

// === Part 2: FAQ Section ===
const faqQuestions = document.querySelectorAll(".faq-question");
faqQuestions.forEach((btn) => {
  btn.addEventListener("click", () => {
    const answer = btn.nextElementSibling;
    answer.style.display =
      answer.style.display === "block" ? "none" : "block";
  });
});

// === Part 3: Form Validation ===
const form = document.getElementById("registerForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const formSuccess = document.getElementById("formSuccess");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // stop form from submitting
  let valid = true;

  // Name Validation
  if (nameInput.value.trim().length < 3) {
    nameError.textContent = "Name must be at least 3 characters long.";
    valid = false;
  } else {
    nameError.textContent = "";
  }

  // Email Validation (basic regex)
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(emailInput.value.trim())) {
    emailError.textContent = "Enter a valid email address.";
    valid = false;
  } else {
    emailError.textContent = "";
  }

  // Password Validation (min 6 chars)
  if (passwordInput.value.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters long.";
    valid = false;
  } else {
    passwordError.textContent = "";
  }

  // Success
  if (valid) {
    formSuccess.textContent = "🎉 Registration successful!";
    form.reset();
  } else {
    formSuccess.textContent = "";
  }
});
