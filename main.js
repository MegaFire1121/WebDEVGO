document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("subscribe-form");
  const emailInput = document.getElementById("subscribe-email");
  const message = document.getElementById("subscribe-message");

  form.addEventListener("submit", (e) => {
    e.preventDefault(); 

    const email = emailInput.value.trim();

    if (email === "") {
      message.textContent = "Please enter your email.";
      message.style.color = "red";
      return;
    }

    console.log("New subscriber:", email);

    // Success message
    message.textContent = `Thanks for subscribing, ${email}!`;
    message.style.color = "green";

    // Optional: reset form
    form.reset();
  });
});

const hamburger = document.getElementById("hamburger-menu");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  if(navLinks.style.display === "flex") {
    navLinks.style.display = "none";
  } else {
    navLinks.style.display = "flex";
  }
});