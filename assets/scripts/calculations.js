let errors = [];

function query() {
    let values = [];

    // Type de véhicule
    values.push(document.querySelector("#type").value);

    // Énergie
    values.push(document.querySelector("#energie").value);

    // Kilométrage annuel
    values.push(document.querySelector("#km").value);

    // Année de fabrication
    values.push(document.querySelector("#annee").value);

    return values;
}

function calculateScore(values) {
    let score = 0;

    let type = values[0];
    if (type == "citadine") {
        score += 8;
    } else if (type == "cabriolet") {
        score += 6;
    } else if (type == "berline") {
        score += 6.5;
    } else if (type == "suv") {
        score += 4;
    }

    let energie = values[1];
    if (energie == "essence") {
        score += 5;
    } else if (energie == "electrique") {
        score += 9;
    } else if (energie == "gaz") {
        score += 6;
    } else if (energie == "diesel") {
        score += 4;
    } else if (energie == "hybride") {
        score += 7;
    } else {
        errors.push("energie");
    }

    let km = parseInt(values[2]);
    if (km >= 5000 && km <= 30000) {
        if (km < 10000) {
            score += 9;
        } else if (km < 15000) {
            score += 7;
        } else if (km < 20000) {
            score += 5;
        } else if (km < 25000) {
            score += 3;
        } else if (km < 30000) {
            score += 1;
        }
    } else {
        errors.push("km");
    }

    let annee = parseInt(values[3]);
    if (annee < 1960) {
        errors.push("annee");
    } else if (annee < 1970) {
        score += 1;
    } else if (annee < 1980) {
        score += 2;
    } else if (annee < 1990) {
        score += 3;
    } else if (annee < 2000) {
        score += 4;
    } else if (annee < 2010) {
        score += 5;
    } else {
        score += 7;
    }

    return score;
}

function rateCalculation(score) {

    let rate = 0;

    if (score <= 10) {
        rate = 3;
    } else if (score <= 15) {
        rate = 2.74;
    } else if (score <= 25) {
        rate = 2.52;
    } else if (score <= 33) {
        rate = 2.10;
    } else {
        rate = 1.85;
    }

    let nbPassenger = parseInt( document.querySelector("#passagers").value);

    if (nbPassenger == 1) {
        rate += 0.11;
    } else if (nbPassenger == 2) {
        rate -= 0.17;
    } else if (nbPassenger == 3) {
        rate -= 0.29;
    } else if (nbPassenger == 4) {
        rate -= 0.53;
    } else {
        errors.push("passagers");
    }

    return rate;

}

function display() {

    if (errors.length == 0) {
        displayRate();
    } else {
        ui.displayErrors(errors);
    }

}