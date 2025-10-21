document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Get form fields
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const subject = document.getElementById("subject");
  const message = document.getElementById("message");
  const success = document.getElementById("success");

  // Get error fields
  const errName = document.getElementById("error-name");
  const errEmail = document.getElementById("error-email");
  const errSubject = document.getElementById("error-subject");
  const errMessage = document.getElementById("error-message");

  // Reset previous errors
  errName.textContent = "";
  errEmail.textContent = "";
  errSubject.textContent = "";
  errMessage.textContent = "";
  success.style.display = "none";

  // Validation
  let isValid = true;

  if (name.value.trim() === "") {
    errName.textContent = "Full name is required.";
    isValid = false;
  }

  if (email.value.trim() === "") {
    errEmail.textContent = "Email is required.";
    isValid = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
    errEmail.textContent = "Please enter a valid email.";
    isValid = false;
  }

  if (subject.value.trim() === "") {
    errSubject.textContent = "Subject is required.";
    isValid = false;
  }

  if (message.value.trim().length < 10) {
    errMessage.textContent = "Message must be at least 10 characters.";
    isValid = false;
  }

  // If everything is valid
  if (isValid) {
    success.style.display = "block";
    this.reset();
  }
});
