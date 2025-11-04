function valider(event) {
  let email = document.getElementsByName("email")[0];
  let mdp = document.getElementsByName("password")[0];
  let emailError = email.nextElementSibling;
  let mdpError = mdp.nextElementSibling;
  let isValid = true;

  email.classList.remove("is-invalid");
  emailError.textContent = "";
  mdp.classList.remove("is-invalid");
  mdpError.textContent = "";

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.value.trim()) {
      isValid = false;
      email.classList.add("is-invalid");
      emailError.textContent = "L'email est requis.";
  } else if (!emailRegex.test(email.value.trim())) {
      isValid = false;
      email.classList.add("is-invalid");
      emailError.textContent = "Veuillez entrer un email valide.";
  }

  
  if (!isValid) {
      event.preventDefault();
  }
 
}
