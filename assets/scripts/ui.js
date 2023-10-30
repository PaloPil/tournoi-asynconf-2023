window.onload = function () {
  document.querySelector("button").addEventListener("click", buttonClick);
};

function buttonClick() {
    console.log("button clicked");
}

function displayErrors(errors) {
  errors.forEach((error) => {
    document.querySelector("#" + error).style.border = "1px solid red";
  });
}