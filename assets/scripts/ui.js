window.onload = function () {
    //Event listeners
    document.querySelector("button").addEventListener("click", buttonClick);
};

function buttonClick() {
    displayRate();
}

function displayErrors(errors) {
  errors.forEach((error) => {
    document.querySelector("#" + error).style.border = "1px solid red";
  });
}

function displayRate() {
    let score = calculateScore(query());
    alert("Rate : " + rateCalculation(score) + "\nScore : " + score);
}