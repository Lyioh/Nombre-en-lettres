let number = prompt("Donne moi un numero ou un chiffre entre 1 and 999");
let ten = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let tenWords = ["", "un", "deux", "trois", "quatre", "cinq", "six", "sept", "huit", "neuf"];
let btwTenAndTwenty = ["", "onze", "douze", "treize", "quatorze", "quinze", "seize", "dix-sept", "dix-huit", "dix-neuf"];
let btwTwentyAndHundred = ["", "", "vingt", "trente", "quarante", "cinquante", "soixante", "soixante-dix", "quatre-vingt", "quatre-vingt-dix"];

console.log("modulo " + number % 10)
let numberArray = number.split("")

test();
function hundred() {
    let finalNumber = "";
    let numberArray = number.split("")
    //First boucle pour les hundreds
    for (i = 0; i < 11; i++) {
        if (numberArray[0] == 1 && numberArray[1] == 0 && numberArray[2] == 0) {
            finalNumber = "Cent"
            i = 11;
        }
        else if (ten[i] === numberArray[0]) {
            if (number % 10 === 0 && numberArray[2] == 0) {
                finalNumber = tenWords[i] + "-cents";
                i = 11;
            }
            else {
                finalNumber = tenWords[i] + "-cent";
            }
        }
    }
    console.log(finalNumber)
    // SI modulo = 0 alors c'est 20 30 40 50 60 70 etc...
    //let numberArrayDeuxChiffre = numberArray.slice(1, 3);
    if (number % 10 === 0) {
        for (y = 0; y < 11; y++) {
            if (ten[y] === numberArray[1] && numberArray[1] != 8) {
                finalNumber = finalNumber + "-" + btwTwentyAndHundred[y];
                y = 11;
            }
            else if (numberArray[1] == 8) {
                finalNumber = finalNumber + "-" + "quatre-vingts";
                y = 11;
            }
        }
        console.log(finalNumber)
    }
    //SInon si = 1 alors c'est 11 12 13 14 15 16 17 etc...
    else if (number[1] == 1) {
        for (j = 0; j < 11; j++) {
            if (ten[j] === numberArray[2]) {
                finalNumber = finalNumber + "-" + btwTenAndTwenty[j];
                j = 11;
            }
        }
        console.log(finalNumber)
    }
    //Sinon c'est le reste
    else {
        for (k = 0; k < 11; k++) {
            if (ten[k] === numberArray[1] && numberArray[1] != 7 && numberArray[1] != 9 && numberArray[2] != 1) {
                for (u = 0; u < 11; u++) {
                    if (ten[u] === numberArray[2]) {
                        finalNumber = finalNumber + "-" + btwTwentyAndHundred[k] + "-" + tenWords[u];
                        u = 11;
                        k = 11;
                    }
                }
            }
            else if (numberArray[1] === "7") {
                for (b = 0; b < 11; b++) {
                    if (ten[b] === numberArray[2]) {
                        finalNumber = finalNumber + "-soixante-" + btwTenAndTwenty[b];
                        b = 11;
                    }
                }
                k = 11;
            }
            else if (numberArray[1] === "9") {
                for (q = 0; q < 11; q++) {
                    if (ten[q] === numberArray[2]) {
                        finalNumber = finalNumber + "-quatre-vingt-" + btwTenAndTwenty[q];
                        q = 11;
                    }
                }
                k = 11;
            }
            else if (ten[k] === numberArray[1] && numberArray[2] === "1") {
                for (z = 0; z < 11; z++) {
                    if (ten[z] === numberArray[2]) {
                        finalNumber = finalNumber + "-" + btwTwentyAndHundred[k] + "-et-un";
                        z = 11;
                    }
                }
                k = 11;
            }
        }
    }
    return finalNumber;
}

function deuxChiffre() {
    let finalNumber = "";
    let numberArray = number.split("")
    // SI modulo = 0 alors c'est 20 30 40 50 60 70 etc...
    //let numberArrayDeuxChiffre = numberArray.slice(1, 3);
    if (number % 10 === 0) {
        for (y = 0; y < 11; y++) {
            if (ten[y] === numberArray[0] && numberArray[0] != 8) {
                finalNumber = finalNumber + "-" + btwTwentyAndHundred[y];
                y = 11;
            }
            else if (numberArray[1] == 8) {
                finalNumber = finalNumber + "-" + "quatre-vingts";
                y = 11;
            }
        }
        console.log(finalNumber)
    }
    //SInon si = 1 alors c'est 11 12 13 14 15 16 17 etc...
    else if (number[0] == 1) {
        for (j = 0; j < 11; j++) {
            if (ten[j] === numberArray[1]) {
                finalNumber = finalNumber + "-" + btwTenAndTwenty[j];
                j = 11;
            }
        }
        console.log(finalNumber)
    }
    //Sinon c'est le reste
    else {
        for (k = 0; k < 11; k++) {
            if (ten[k] === numberArray[0] && numberArray[0] != 7 && numberArray[0] != 9 && numberArray[1] != 1) {
                for (u = 0; u < 11; u++) {
                    if (ten[u] === numberArray[1]) {
                        finalNumber = btwTwentyAndHundred[k] + "-" + tenWords[u];
                        u = 11;
                        k = 11;
                    }
                }
            }
            else if (numberArray[0] === "7") {
                for (b = 0; b < 11; b++) {
                    if (ten[b] === numberArray[1]) {
                        finalNumber = "soixante-" + btwTenAndTwenty[b];
                        b = 11;
                    }
                }
                k = 11;
            }
            else if (numberArray[0] === "9") {
                for (q = 0; q < 11; q++) {
                    if (ten[q] === numberArray[1]) {
                        finalNumber = "quatre-vingt-" + btwTenAndTwenty[q];
                        q = 11;
                    }
                }
                k = 11;
            }
            else if (ten[k] === numberArray[0] && numberArray[1] === "1") {
                for (z = 0; z < 11; z++) {
                    if (ten[z] === numberArray[1]) {
                        finalNumber = btwTwentyAndHundred[k] + "-et-un";
                        z = 11;
                    }
                }
                k = 11;
            }
        }
    }
    return finalNumber;
}

function single() {
    let finalNumber = "";
    let numberArray = number.split("")
    for (i = 0; i < 11; i++) {
        if (ten[i] === numberArray[0]) {
            finalNumber = tenWords[i];
            i = 11;
        }
    }
    return finalNumber;
}

function test() {
    if (numberArray.length === 3) {
        alert(hundred());
    }
    else if (numberArray.length === 2) {
        alert(deuxChiffre());
    }
    else {
        alert(single());
    }

    number = prompt("Give me un number")
    test();
}

