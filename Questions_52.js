function validateForm() {
  const name = prompt("Enter your name:");
  const email = prompt("Enter your email:");
  const password = prompt("Enter your password:");
  const confirmPassword = prompt("Confirm your password:");

  // Name validation
  if (name === "" || !/^[a-zA-Z\s]+$/.test(name)) {
    alert("❌ Invalid name. Please use letters only.");
    return;
  }

  // Email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("❌ Invalid email format.");
    return;
  }

  // Password validation
  if (password.length < 6) {
    alert("❌ Password must be at least 6 characters.");
    return;
  }

  // Confirm password
  if (password !== confirmPassword) {
    alert("❌ Passwords do not match.");
    return;
  }

  // If all validations pass
  alert(`✅ Registration Successful!\nName: ${name}\nEmail: ${email}`);
}

validateForm();
