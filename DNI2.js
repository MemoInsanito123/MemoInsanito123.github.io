/*
Cálculo de la letra del Documento Nacional de Identidad (DNI) es un proceso matemático sencillo que se basa en obtener el resto de la división entera del número de DNI y el número 23. A partir del resto de la división, se obtiene la letra seleccionándola dentro de un array de letras.
El array de letras es:

var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
Por tanto si el resto de la división es 0, la letra del DNI es la T y si el resto es 3 la letra es la A. Con estos datos, elaborar un pequeño script que:
Almacene en una variable el número de DNI indicado por el usuario y en otra variable la letra del DNI que se ha indicado.
En primer lugar (y en una sola instrucción) se debe comprobar si el número es menor que 0 o mayor que 99999999. Si ese es el caso, se muestra un mensaje al usuario indicando que el número proporcionado no es válido y el programa no muestra más mensajes.
Si el número es válido, se calcula la letra que le corresponde según el método explicado anteriormente.
Una vez calculada la letra, se debe comparar con la letra indicada por el usuario. Si no coinciden, se muestra un mensaje al usuario diciéndole que la letra que ha indicado no es correcta. En otro caso, se muestra un mensaje indicando que el número y la letra de DNI son correctos.
*/

const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

const input00 = document.getElementById("input00");
const input01 = document.getElementById("input01");

const button00 = document.getElementById("button00");
const button01 = document.getElementById("button01");

const label01 = document.getElementById("label01");

function verifyDNI(){
    let input00Value = input00.value;
    

    //DNI is valid
    if(input00Value > 0 && input00Value <= 99999999){
        console.log("The DNI is valid");
        alert("The DNI is valid");
        showInputAndButton01();

        //Show Letter
        console.log(letras[input00Value % 23]);

    }
    //DNI is invalid
    else{
        console.log("The DNI is invalid");
        alert("The DNI is invalid");
        hideInputAndButton01();
    }

}

function verifyLetter(){

    //Letter is correct
    if(input01.value.toUpperCase() == (letras[input00.value % 23])){
        console.log("The letter is correct");
        alert("The letter is correct");
    }
    //Letter isn't correct
    else{
        console.log("The letter is incorrect");
        alert("The Letter is incorrect");
    }
}

//Ocultar y mostrar con hojas de estilo el input01 y el button011
function hideInputAndButton01(){
    input01.style.visibility = "hidden";
    button01.style.visibility = "hidden";
    label01.style.visibility = "hidden";
    
}

function showInputAndButton01(){
    input01.style.visibility = "visible";
    button01.style.visibility = "visible";
    label01.style.visibility = "visible";
}

//Esconder desde que se ejecuta la pagina el input01 y button01
hideInputAndButton01();