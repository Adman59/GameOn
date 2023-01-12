function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// Créer une fonction main puis appeler chaque autre fonction, creer une condition

function main() {
  const modalBtn = document.querySelectorAll(".modal-btn");
  const closeIconModal = document.querySelectorAll('#closeIcon');

  // OPEN modal event
  modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

  // CLOSE modal event
  closeIconModal.forEach((btn) => btn.addEventListener("click", closeModal));

  validModal();
}
main();

function validModal() {
  const formModal = document.querySelectorAll(".formData");

  if (checkForm(formModal)) {
    console.log("ok");
  } else {
    console.log("c'est pas bon");
  }
}

function checkForm(formModal) {
  console.log(formModal);
  let controlTest = true;
  // Pour determiner sur quel input on travaille :
  formModal.forEach((input) => {
    console.log(input);
    input.addEventListener("input", (e) => {
      switch (e.target.id) {
        case "first_name":
          firstNameChecker(e.target.value);
          break;
        case "last_name":
          lastNameChecker(e.target.value)
          break;
        case "email":
          emailChecker(e.target.value)
          break;
        default:
          null;
      }
    });
  });

  if (controlTest) {
    return true;
  } else {
    return false;
  }
}

//---------------FONCTIONS-----------------//

// OPEN modal form
function launchModal() {
  const modalbg = document.querySelector(".bground");
  modalbg.style.display = "block";
}

// CLOSE modal form
function closeModal() {
  const modalbg = document.querySelector(".bground");
  modalbg.style.display = "none";
}

// First name checker (minimum de 2 caractères / n'est pas vide)

function firstNameChecker(value) {

  const errorDescription = document.getElementById('errorDesc');
  let firstNameRegex = /^[a-zA-Z-]+$/;

  if (!value.match(firstNameRegex) || value.length < 2) {
    errorDescription.textContent = "Le champ prénom doit comporter au minimum 2 caractères ou le prénom n'est pas valide.";
    inputFirstName.style.border = "2px solid #e54858";
  } else {
    errorDescription.remove();
    inputFirstName.style.border = "2px solid #279e7a";
  }
}

// Last name checker (minimum de 2 caractères / n'est pas vide)

function lastNameChecker(value) {
  console.log(value);
}

// E-mail checker (l'adresse est valide)

function emailChecker(value) {
  console.log(value);
}

// Tounament checker (une valeur numérique est saisie)

function tournamentChecker(value) {
  console.log(value);
}

// Cities radio checker (un bouton radio est selectionné)

function citiesChecker() {

}

// Conditions checkbox checker (la case des conditions générales est cochée, l'autre case est facultative / peut être laissée décochée)

function checkboxConditionsChecker() {

}


// Si un champ n'est pas bon alors on appele cette fonction :

function checkError() {

}
