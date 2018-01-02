document.addEventListener('DOMContentLoaded', initialize)

function initialize () {
    var numberButtons = document.getElementsByClassName("number");

    console.log(numberButtons.length,"chicken");

    for (var i = 0; i < numberButtons.length; i++) {
        numberButtons[i].addEventListener("click", numberFunction);
    }
    
    var symbolButtons = document.getElementsByClassName("symbol");

    for (var i = 0; i < symbolButtons.length; i++) {
        symbolButtons[i].addEventListener("click", symbolFunction);
    }

    var clearButtons = document.getElementsByClassName("clearButton")
    for (var i = 0; i < clearButtons.length; i++) {
        clearButtons[i].addEventListener("click", clearFunction);
    }

    document.getElementById("equals").addEventListener("click", calculateResult);
}

function numberFunction (e) { 
    document.getElementById("answer").value += e.currentTarget.value;
}

function symbolFunction (e) {
    document.getElementById("answer").value += e.currentTarget.value;

}
function clearFunction (e) {
    document.getElementById("answer").value = "";

}
function calculateResult (e) {
    var result = readFormula(document.getElementById("answer").value)
    document.getElementById("answer").value = result;
}

function readFormula (formula) {
    splitFormula = formula.split(/(\+|-|\/|x)/);
    if (splitFormula[1] === "+") {
        return parseFloat(splitFormula[0]) + parseFloat(splitFormula[2]);
    } else if (splitFormula[1] === "-") {
        return splitFormula[0] - splitFormula[2];
    } else if (splitFormula[1] === "/") {
        return splitFormula[0] / splitFormula[2];
    } else if (splitFormula[1] === "x") {
        return splitFormula[0] * splitFormula[2];
    }
}


//when you click on a class that is a number it needs to appear in the value section
//when you click on a class that is a symbol it should not change the value selection at first
//when you click on a class that is an extrabutton it should clear everything in the value field

//equals and decimal need to be changed into different classes or an if statement should happen