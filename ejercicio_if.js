var op1 = "piedra";
var op2 = "papel";
var op3 = "tigera";

var resultado = function (user, cpu) {
    if (user != cpu) {
        if (user === op1 && cpu === op1) {
            console.log("Empate, los dos  sacaron " + op1)
        }
        else if (user === op1 && cpu === op2) {
            console.log("Gano cpu con " + op2)
        }
        else if (user === op1 && cpu === op3) {
            console.log("Gano user con  " + op1)
        }
        else if (user === op2 && cpu === op1) {
            console.log("Gano user con " + op2)
        }
        else if (user === op2 && cpu === op2) {
            console.log("Empate, los dos sacaron  " + op2)
        }
        else if (user === op2 && cpu === op3) {
            console.log("Gano cpu con " + op3)
        }
        else if (user === op3 && cpu === op1) {
            console.log("Gano cpu con  " + op1)
        }
        else if (user === op3 && cpu === op2) {
            console.log("Gano user con  " + op3)
        }
        else if (user === op3 && cpu === op3) {
            console.log("Empate, los dos sacaron  " + op3)
        }
    }

};