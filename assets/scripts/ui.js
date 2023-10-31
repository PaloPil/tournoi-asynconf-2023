/**
 * Cette fonction configure les écouteurs d'événements pour les champs de saisie et les boutons de la page.
 * @function
 */
window.onload = function () {
    //Écouteurs d'événements
    document.querySelectorAll("input").forEach((input) => {
        input.addEventListener("keypress", keyPressed);
    });
    document.querySelector("button").addEventListener("click", buttonClick);
    document.querySelector("div#result a").addEventListener("click", hidePane);
};

/**
 * Cette fonction empêche les caractères non numériques d'être saisis dans certains champs de saisie.
 * Elle empêche également les champs de saisie d'accepter plus de caractères qu'une certaine limite.
 * @function
 * @param {Object} e - L'objet événement.
 */
function keyPressed(e) {
  if (e.which < 48 || e.which > 57) {e.preventDefault();} //Empêcher les caractères non numériques
  
  if (e.target.id == "km" && e.target.value.length >= 5) {e.preventDefault();} //Empêcher plus de 5 caractères dans le champ km
  if (e.target.id == "annee" && e.target.value.length >= 4) {e.preventDefault();} //Empêcher plus de 4 caractères dans le champ annee
  if (e.target.id == "passagers" && e.target.value.length >= 1) {e.preventDefault();} //Empêcher plus de 1 caractère dans le champ passagers
    
}

/**
 * Cette fonction est appelée lorsque le bouton de la page est cliqué.
 * Elle calcule le score en fonction des valeurs saisies et affiche le résultat.
 * @function
 */
function buttonClick() {
  document.querySelectorAll(".underline").forEach((underline) => {
    underline.style.backgroundColor = "var(--main-text-color)";
  });
  let score = calculateScore(query());
  if (errors.length == 0) {
    displayRate(score);
  } else {
    displayErrors(errors);
  }
}

/**
 * Cette fonction affiche les messages d'erreur pour les valeurs de saisie invalides.
 * @function
 * @param {Array} errors - Un tableau de chaînes de caractères représentant les erreurs à afficher.
 */
function displayErrors(errors) {
  errors.forEach((error) => {
    document.querySelector(".underline[name="+error+"]").style.backgroundColor = "red";
  });
  errorMessage = "Merci de corriger ces erreurs avant de continuer :\n";
  if (errors.includes("type")) {errorMessage += "\n- Le type de véhicule doit être renseigné\n";}
  if (errors.includes("energie")) {errorMessage += "\n- Le type d'énergie utilisée par le véhicule doit être renseigné\n";}
  if (errors.includes("km")) {errorMessage += "\n- Le nombre de kilomètres parcourus par an doit être compris entre 5 000km et 30 000km\n";}
  if (errors.includes("annee")) {errorMessage += "\n- L'année de fabrication du véhicule doit être postérieure à 1959\n";}
  if (errors.includes("passagers")) {errorMessage += "\n- Le nombre de passagers du véhicule doit être inférieur à 4\n";}

  alert(errorMessage);
}

/**
 * Cette fonction affiche le taux calculé sur la page.
 * @function
 * @param {number} score - Le score calculé en fonction des valeurs saisies.
 */
function displayRate(score) {
  document.querySelector("div#result p b").textContent = rateCalculation(score) + "%";
  document.querySelector("div#result").style.display = "block";
}

/**
 * Cette fonction masque le panneau de résultat sur la page.
 * @function
 */
function hidePane() {
    document.querySelector("div#result").style.display = "none";
}