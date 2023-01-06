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

const = "test"
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
