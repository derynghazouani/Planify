
  function valider(event) {
    event.preventDefault(); // Empêche la soumission du formulaire

    let isValid = true;

    // Récupération des éléments du formulaire
    let fullName = document.getElementsByName("fullName")[0];
    let dob = document.getElementsByName("dob")[0];
    let gender = document.getElementsByName("gender")[0];
    let email = document.getElementsByName("email")[0];
    let phone = document.getElementsByName("phone")[0];
    let address = document.getElementsByName("address")[0];
    let username = document.getElementsByName("username")[0];
    let password = document.getElementsByName("password")[0];
    let confirmPassword = document.getElementsByName("confirmPassword")[0];
    let cardNumber = document.getElementsByName("cardNumber")[0];
    let terms = document.getElementsByName("terms")[0];

    // Effacement des messages d'erreur précédents
    resetErrors();

    // Validation du nom complet
   /* if (!fullName.value.trim()) {
      showError(fullName, "Le nom complet est requis.");
      isValid = false;
    }*/
   // Validation du nom complet
if (!fullName.value.trim()) {
  showError(fullName, "Le nom complet est requis.");
  isValid = false;
} else if (!/^[A-Za-z\s]+$/.test(fullName.value.trim())) {
  showError(fullName, "Le nom complet doit contenir uniquement des lettres alphabétiques.");
  isValid = false;
}


    // Validation de la date de naissance
    if (!dob.value) {
      showError(dob, "La date de naissance est requise.");
      isValid = false;
    }

    // Validation du sexe
    if (!gender.value) {
      showError(gender, "Le sexe est requis.");
      isValid = false;
    }

    // Validation de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.value.trim()) {
      showError(email, "L'adresse email est requise.");
      isValid = false;
    } else if (!emailRegex.test(email.value.trim())) {
      showError(email, "Veuillez entrer un email valide.");
      isValid = false;
    }

    // Validation du numéro de téléphone
    if (phone.value && !/^\d{8}$/.test(phone.value.trim())) {
      showError(
        phone,
        "Veuillez entrer un numéro de téléphone valide (8 chiffres)."
      );
      isValid = false;
    }

    // Validation de l'adresse
    if (!address.value.trim()) {
      showError(address, "L'adresse est requise.");
      isValid = false;
    }

    // Validation du nom d'utilisateur
    if (!username.value.trim()) {
      showError(username, "Le nom d'utilisateur est requis.");
      isValid = false;
    }

    // Validation du mot de passe
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).{6,}$/;
    if (!password.value.trim()) {
      showError(password, "Le mot de passe est requis.");
      isValid = false;
    } else if (!passwordRegex.test(password.value.trim())) {
      showError(
        password,
        "Le mot de passe doit contenir au moins 6 caractères, avec des lettres majuscules, minuscules et des caractères spéciaux."
      );
      isValid = false;
    }

    // Validation de la confirmation du mot de passe
    if (password.value.trim() !== confirmPassword.value.trim()) {
      showError(confirmPassword, "Les mots de passe ne correspondent pas.");
      isValid = false;
    }

    // Validation du numéro de carte bancaire
    if (!cardNumber.value.trim() || !/^\d{16}$/.test(cardNumber.value.trim())) {
      showError(
        cardNumber,
        "Veuillez entrer un numéro de carte bancaire valide (16 chiffres)."
      );
      isValid = false;
    }

    // Validation des conditions générales
    if (!terms.checked) {
      showError(terms, "Vous devez accepter les conditions générales.");
      isValid = false;
    }

    // Si tout est valide, soumettre le formulaire
   if (isValid) {
      alert("Inscription réussie !");
      // Vous pouvez ici soumettre le formulaire via une redirection ou un AJAX
      // document.forms[0].submit(); // Soumettre le formulaire si vous ne souhaitez pas faire la redirection via JS
      window.location.href = "userlogin1.html";
    }

    return isValid;// Empêche la soumission du formulaire si invalide



    
  
  }
  // Fonction pour afficher un message d'erreur
  function showError(element, message) {
    const errorSpan = document.createElement("span");
    errorSpan.textContent = message;
    errorSpan.style.color = "red";
    errorSpan.style.fontSize = "12px";
    errorSpan.style.marginTop = "5px";
    errorSpan.style.display = "block";
    element.parentElement.appendChild(errorSpan);
    element.classList.add("border-red-500"); // Ajoute la bordure rouge
  }

  // Fonction pour réinitialiser les erreurs
  function resetErrors() {
    const errorSpans = document.querySelectorAll("span");
    errorSpans.forEach((span) => span.remove()); // Supprime tous les messages d'erreur
    const inputs = document.querySelectorAll("input, select");
    inputs.forEach((input) => input.classList.remove("border-red-500")); // Réinitialise les bordures
  }

