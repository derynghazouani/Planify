

document.getElementById("paymentForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const fullName = document.getElementById("fullName").value.trim();
  const email = document.getElementById("email").value.trim();
  const cardNumber = document.getElementById("cardNumber").value.trim();

  if (!/^[A-Za-zÀ-ÿ]+(\s+[A-Za-zÀ-ÿ]+)+$/.test(fullName)) {
    alert("Nom complet invalide. Entrez votre prénom et nom.");
    return;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    alert("Adresse email invalide.");
    return;
  }

 
  if (!/^\d{16}$/.test(cardNumber)) {
    alert("Numéro de carte invalide. Il doit contenir 16 chiffres.");
    return;
  }

  alert("Toutes les informations sont valides !");
});
