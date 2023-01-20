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

  firstNameChecker();
  lastNameChecker();
  emailChecker();
  birthdayChecker();
  tournamentChecker();

  checkboxChecker();

  validModal();
}

main();



function validModal() {
  const submitForm = document.getElementById('submitForm');

  submitForm.addEventListener('click', (e) => {
    e.preventDefault();
    const formModal = document.querySelectorAll(".formData");

    if (checkFormValid(formModal)) {
      console.log("ok");
      alert('Merci, votre demande de réservation a bien été prise en compte')
    } else {
      console.log("c'est pas bon");
    }
  })
};


function checkFormValid(formModal) {
  // Pour determiner sur quel input on travaille :
  let validForm = true;

  formModal.forEach((input) => {
    switch (input.id) {
      case "cityData":
        validForm = cityChecker(input.value) && validForm;
        break;
      case "checkboxData":
        validForm = checkboxChecker(input.value) && validForm;
        break;
      default:
        null;
    }
  });
  return validForm;
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





function firstNameChecker() {
  const firstNameForm = document.getElementById('firstNameData');
  let firstNameRegex = /^[a-zA-Z-]+$/;

  firstNameForm.addEventListener('input', (e) => {
    console.log(e.target.value);

    if (!e.target.value.match(firstNameRegex) || e.target.value.length < 2) {
      firstNameForm.setAttribute('data-error-visible', 'true');
      return false;
    } else {
      firstNameForm.removeAttribute('data-error-visible');
      return true;
    }
  })
}



//--------------//
// Last name checker (minimum de 2 caractères / n'est pas vide)
//--------------//


function lastNameChecker() {
  const lastNameForm = document.getElementById('lastNameData');
  let lastNameRegex = /^[a-zA-Z-]+$/;

  lastNameForm.addEventListener('input', (e) => {
    console.log(e.target.value);

    if (!e.target.value.match(lastNameRegex) || e.target.value.length < 2) {
      lastNameForm.setAttribute('data-error-visible', 'true');
      return false;
    } else {
      lastNameForm.removeAttribute('data-error-visible', 'false');
      return true;
    }
  })
}


//--------------//
// E-mail checker (l'adresse est valide)
//--------------//


function emailChecker() {
  const emailForm = document.getElementById('emailData');
  let emailRegex = /[^\s@]+@[^\s@]+\.[^\s@]+/;

  emailForm.addEventListener('input', (e) => {
    console.log(e.target.value);

    if (!e.target.value.match(emailRegex)) {
      emailForm.setAttribute('data-error-visible', 'true');
      return false;
    } else {
      emailForm.setAttribute('data-error-visible', 'false');
      return true;
    }
  })
}


//--------------//
// Le champ date de naissance a été rempli
//--------------//



function birthdayChecker() {
  const birthdayForm = document.getElementById('birthdayData');

  let birthdayRegex = /^(19|20)\d{2}[-](0?[1-9]|1[012])[-](0[1-9]|[12]\d|3[01])$/;
  // Cette regex vérifie que le nombre de caractères correspond à une date au format "AAAA-MM-JJ" où AAAA est une année comprise entre 1900 et 2099, MM est un mois de 01 à 12, et JJ est un jour de 01 à 31

  birthdayForm.addEventListener('input', (e) => {
    console.log(e.target.value);

    if (!e.target.value.match(birthdayRegex)) {
      birthdayForm.setAttribute('data-error-visible', 'true');
      return false;
    } else {
      birthdayForm.setAttribute('data-error-visible', 'false');
      return true;
    }
  })
}

//--------------//
// Tournament checker (une valeur numérique est saisie)
//--------------//



function tournamentChecker() {
  const tournamentForm = document.getElementById('tournamentData');

  tournamentForm.addEventListener('input', (e) => {
    console.log(e.target.value);

    if (e.target.value === "" || e.target.value >= 20) {
      tournamentForm.setAttribute('data-error-visible', 'true');
      return false;
    } else {
      tournamentForm.setAttribute('data-error-visible', 'false');
      return true;
    }
  })
}

//--------------//
// Cities radio checker (un bouton radio est selectionné)
//--------------//


function cityChecker() {
  let radioCheck = document.querySelector('input[name = "location"]:checked');
  const cityForm = document.getElementById('cityData');

  if (radioCheck !== null) {
    cityForm.setAttribute('data-error-visible', 'false');
    return true;
  } else {
    cityForm.setAttribute('data-error-visible', 'true');
    return false;
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
    return true;

  } else {
    checkboxForm.setAttribute('data-error-visible', 'true');
    return false;
  }

}
