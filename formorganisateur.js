let formSubmitted = false; 

function valider(event) {
  event.preventDefault(); 
  

  if (formSubmitted) {
    return; 
  }

  let isValid = true;

  let fullName = document.getElementsByName("fullName")[0];
  let dob = document.getElementsByName("dob")[0];
  let gender = document.getElementsByName("gender")[0];
  let email = document.getElementsByName("email")[0];
  let phone = document.getElementsByName("phone")[0];
  let orgName = document.getElementsByName("orgName")[0];
  let orgAddress = document.getElementsByName("orgAddress")[0];
  let bankAccountNumber = document.getElementsByName("bankAccountNumber")[0];
  let username = document.getElementsByName("username")[0];
  let password = document.getElementsByName("password")[0];
  let confirmPassword = document.getElementsByName("confirmPassword")[0];
  let terms = document.getElementsByName("terms")[0];

  
  resetErrors();

  



   if (!fullName.value.trim()) {
    showError(fullName, "Le nom complet est requis.");
    isValid = false;
  } else if (!/^[A-Za-z\s]+$/.test(fullName.value.trim())) {
    showError(fullName, "Le nom complet doit contenir uniquement des lettres alphabétiques.");
    isValid = false;
  }

  
  if (!dob.value) {
    showError(dob, "La date de naissance est requise.");
    isValid = false;
  }


  if (!gender.value) {
    showError(gender, "Le sexe est requis.");
    isValid = false;
  }


  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.value.trim()) {
    showError(email, "L'adresse email est requise.");
    isValid = false;
  } else if (!emailRegex.test(email.value.trim())) {
    showError(email, "Veuillez entrer un email valide.");
    isValid = false;
  }

  
  if (phone.value && !/^\d{8}$/.test(phone.value.trim())) {
    showError(phone, "Veuillez entrer un numéro de téléphone valide (8 chiffres).");
    isValid = false;
  }


  if (!orgName.value.trim()) {
    showError(orgName, "Le nom de l'organisation est requis.");
    isValid = false;
  }

  
  if (!orgAddress.value.trim()) {
    showError(orgAddress, "L'adresse de l'organisation est requise.");
    isValid = false;
  }

  if (!bankAccountNumber.value.trim() || !/^\d+$/.test(bankAccountNumber.value.trim())) {
    showError(bankAccountNumber, "Veuillez entrer un numéro de compte bancaire valide.");
    isValid = false;
  }

  if (!username.value.trim()) {
    showError(username, "Le nom d'utilisateur est requis.");
    isValid = false;
  }

  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).{6,}$/;
  if (!password.value.trim()) {
    showError(password, "Le mot de passe est requis.");
    isValid = false;
  } else if (!passwordRegex.test(password.value.trim())) {
    showError(password, "Le mot de passe doit contenir au moins 6 caractères, avec des lettres majuscules, minuscules et des caractères spéciaux.");
    isValid = false;
  }


  if (password.value.trim() !== confirmPassword.value.trim()) {
    showError(confirmPassword, "Les mots de passe ne correspondent pas.");
    isValid = false;
  }

  if (!terms.checked) {
    showError(terms, "Vous devez accepter les conditions générales.");
    isValid = false;
  }

  if (isValid) {
    formSubmitted = true; 
    alert("Inscription réussie !");
    window.location.href = "userlogin1.html";
  }

  return isValid; 
}

function showError(element, message) {
  const errorSpan = document.createElement("span");
  errorSpan.textContent = message;
  errorSpan.style.color = "red";
  errorSpan.style.fontSize = "12px";
  errorSpan.style.marginTop = "5px";
  errorSpan.style.display = "block";
  element.parentElement.appendChild(errorSpan);
  element.classList.add("border-red-500");
}


function resetErrors() {
  const errorSpans = document.querySelectorAll("span");
  errorSpans.forEach((span) => span.remove()); 
  const inputs = document.querySelectorAll("input, select");
  inputs.forEach((input) => input.classList.remove("border-red-500"));
}

