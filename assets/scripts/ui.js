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
}

function displayRate(score) {
  document.querySelector("div#result p b").textContent = rateCalculation(score) + "%";
  document.querySelector("div#result").style.display = "block";
}

function hidePane() {
    document.querySelector("div#result").style.display = "none";
}