window.onload = function () {
    //Event listeners
    document.querySelectorAll("input").forEach((input) => {
        input.addEventListener("keypress", keyPressed);
    });
    document.querySelector("button").addEventListener("click", buttonClick);
};

function keyPressed(e) {
  if (e.which < 48 || e.which > 57) {e.preventDefault();} //Prevent non-numeric characters
  
  if (e.target.id == "km" && e.target.value.length >= 5) {e.preventDefault();} //Prevent more than 5 characters in km input
  if (e.target.id == "annee" && e.target.value.length >= 4) {e.preventDefault();} //Prevent more than 4 characters in annee input
  if (e.target.id == "passagers" && e.target.value.length >= 1) {e.preventDefault();} //Prevent more than 1 character in passagers input
    
}

function buttonClick() {
  if (errors.length != 0) {
    displayErrors(errors);
  } else {
    displayRate();
  }
}

function displayErrors(errors) {
  errors.forEach((error) => {
    document.querySelector("#" + error).style.border = "1px solid red";
  });
}

function displayRate() {
    let score = calculateScore(query());
    alert("Rate : " + rateCalculation(score) + "\nScore : " + score + "\nErrors : " + errors);
}