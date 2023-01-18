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
  const formModal = document.querySelectorAll(".formulaire");

  if (checkForm(formModal)) {
    firstNameChecker();
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
    // console.log(input);
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
        case "birthdate":
          birthdayChecker(e.target.value)
          break;
        case "quantity_tournament":
          tournamentChecker(e.target.value)
          break;
        case "location1 && location2":
          cityChecker(e.target.value)
          break;
        case "checkbox1":
          checkboxChecker(e.target.value)
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

//--------------//
// First name checker (minimum de 2 caractères / n'est pas vide)
//--------------//

function firstNameChecker(value) {
  const firstNameForm = document.getElementById('firstNameData');
  let firstNameRegex = /^[a-zA-Z-]+$/;

  if (!value.match(firstNameRegex) || value.length < 2) {
    firstNameForm.setAttribute('data-error-visible', 'true');
  } else {
    firstNameForm.setAttribute('data-error-visible', 'false');
  }
}


//--------------//
// Last name checker (minimum de 2 caractères / n'est pas vide)
//--------------//


function lastNameChecker(value) {
  const lastNameForm = document.getElementById('lastNameData');
  let firstNameRegex = /^[a-zA-Z-]+$/;

  if (!value.match(firstNameRegex) || value.length < 2) {
    lastNameForm.setAttribute('data-error-visible', 'true');
  } else {
    lastNameForm.setAttribute('data-error-visible', 'false');
  }
}


//--------------//
// E-mail checker (l'adresse est valide)
//--------------//


function emailChecker(value) {
  const emailForm = document.getElementById('emailData');
  let emailRegex = /[^\s@]+@[^\s@]+\.[^\s@]+/;

  if (!value.match(emailRegex)) {
    emailForm.setAttribute('data-error-visible', 'true');
  } else {
    emailForm.setAttribute('data-error-visible', 'false');
  }
}


//--------------//
// Le champ date de naissance a été rempli
//--------------//


function birthdayChecker(value) {
  let dateOfTheDay = new Date(); //Date du jour
  let yearDate = dateOfTheDay.getFullYear(); //Année en cours
  let dataDate = new Date(value);

  let birthdayRegex = /^(19|20)\d{2}[-](0?[1-9]|1[012])[-](0[1-9]|[12]\d|3[01])$/;
  // Cette regex vérifie que le nombre de caractères correspond à une date au format "AAAA-MM-JJ" où AAAA est une année comprise entre 1900 et 2099, MM est un mois de 01 à 12, et JJ est un jour de 01 à 31
  const birthdayForm = document.getElementById('birthdayData');

  if (!value.match(birthdayRegex) || (yearDate - dataDate.getFullYear() < 18)) {
    birthdayForm.setAttribute('data-error-visible', 'true');
  } else {
    birthdayForm.setAttribute('data-error-visible', 'false');
  }

}


//--------------//
// Tournament checker (une valeur numérique est saisie)
//--------------//


function tournamentChecker(value) {
  const tournamentForm = document.getElementById('tournamentData');

  if (value === "" || value >= 20) {
    tournamentForm.setAttribute('data-error-visible', 'true');
  } else {
    tournamentForm.setAttribute('data-error-visible', 'false');
  }
}


//--------------//
// Cities radio checker (un bouton radio est selectionné)
//--------------//


function cityChecker() {
  let radioCheck = document.querySelector('input[name = "location"]:checked');
  const cityForm = document.getElementById('cityData');

  if (radioCheck !== null) {
    cityForm.setAttribute('data-error-visible', 'true');
  } else {
    cityForm.setAttribute('data-error-visible', 'false');
  }
}


//--------------//
// Conditions checkbox checker (la case des conditions générales est cochée, l'autre case est facultative / peut être laissée décochée)
//--------------//


function checkboxChecker() {
  let conditionsCheck = document.getElementById('checkbox1');
  const checkboxForm = document.getElementById('checkboxData');

  if (conditionsCheck.checked) {
    checkboxForm.setAttribute('data-error-visible', 'false');
  } else {
    checkboxForm.setAttribute('data-error-visible', 'true');
  }

}

let conditionsCheck = document.getElementById('checkbox1');
const checkboxForm = document.getElementById('checkboxForm');
console.log(conditionsCheck);


//--------------//
// Si un champ n'est pas bon alors on appele cette fonction :
//--------------//


function checkError() {

}

// voir objet test ( a la place du switch)