function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

//---------------DOM ELEMENTS-----------------//

const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeIconModal = document.querySelectorAll('#closeIcon');

const inputFirstName = document.getElementById('first_name');
const inputLastName = document.getElementById('last_name');
const inputEmail = document.getElementById('email');
const inputBirthdate = document.getElementById('birthdate');
const inputQuantityTournament = document.getElementById('quantity_tournament');

const inputsForm = document.querySelectorAll('input[type="text"], input[type="email"], input[type="number"], input[type="radio"]');

//---------------EVENTS-----------------//

// OPEN modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// CLOSE modal event
closeIconModal.forEach((btn) => btn.addEventListener("click", closeModal));


//---------------FONCTIONS-----------------//

// OPEN modal form
function launchModal() {
  modalbg.style.display = "block";
}

// CLOSE modal form
function closeModal() {
  modalbg.style.display = "none";
}

// First name checker (minimum de 2 caractères / n'est pas vide)

function firstNameChecker(value) {

  const errorDescription = document.getElementById('errorDesc');
  let firstNameRegex =  /^[a-zA-Z]+ [a-zA-Z]+$/;

  if (value.length < 2) {
    //ajouter un p en dessous de l'input avec une phrase expliquant pourquoi ce n'est pas ok
    errorDescription.textContent = "Le champ prénom doit comporter au minimum 2 caractères";
    inputFirstName.style.border = "2px solid #e54858";
  } else if (value.match(firstNameRegex)) {
    errorDescription.textContent = "Veuillez renseigner un prénom valide";
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

// Pour determiner sur quel input on travaille :

inputsForm.forEach((input) => {
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

