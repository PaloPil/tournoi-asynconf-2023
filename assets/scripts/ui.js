window.onload = function () {
    //Event listeners
    document.querySelectorAll("input").forEach((input) => {
        input.addEventListener("keypress", keyPressed);
    });
    document.querySelector("button").addEventListener("click", buttonClick);
    document.querySelector("div#result a").addEventListener("click", hidePane);
};

function keyPressed(e) {
  if (e.which < 48 || e.which > 57) {e.preventDefault();} //Prevent non-numeric characters
  
  if (e.target.id == "km" && e.target.value.length >= 5) {e.preventDefault();} //Prevent more than 5 characters in km input
  if (e.target.id == "annee" && e.target.value.length >= 4) {e.preventDefault();} //Prevent more than 4 characters in annee input
  if (e.target.id == "passagers" && e.target.value.length >= 1) {e.preventDefault();} //Prevent more than 1 character in passagers input
    
}

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

function displayRate(score) {
  document.querySelector("div#result p b").textContent = rateCalculation(score) + "%";
  document.querySelector("div#result").style.display = "block";
}

function hidePane() {
    document.querySelector("div#result").style.display = "none";
}