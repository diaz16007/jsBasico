var op1 = "piedra";
var op2 = "papel";
var op3 = "tigera";

var resultado = function (user, cpu) {

    switch (user != cpu) {

        case (user === op1 && cpu === op1):
            console.log("Empate, los dos  sacaron " + op1);
            break;

        case (user === op1 && cpu === op2):
            console.log("Gano cpu con " + op2);
            break;
        case (user === op1 && cpu === op3):
            console.log("Gano user con  " + op1);
            break;
        case (user === op2 && cpu === op1):
            console.log("Gano user con " + op2);
            break;
        case (user === op2 && cpu === op2):
            console.log("Empate, los dos sacaron  " + op2);
            break;
        case (user === op2 && cpu === op3):
            console.log("Gano cpu con " + op3);
            break;
        case (user === op3 && cpu === op1):
            console.log("Gano cpu con  " + op1);
            break;
        case (user === op3 && cpu === op2):
            console.log("Gano user con  " + op3);
            break;
        case (user === op3 && cpu === op3):
            console.log("Empate, los dos sacaron  " + op3);
            break;

    }
}