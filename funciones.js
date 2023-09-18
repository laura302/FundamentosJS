// Funciones en JavaScript

// Función sin parámetros y sin retorno
function saluda() {
    console.log('¡Holaaaa!');
}
saluda();

// Función con parámetros y sin retorno
function addOne(num) {
    console.log(`El ${num} + 1 = ${num + 1}`);
}
addOne(15);

// Función con parámetros y con retorno
function suma(num1, num2) {
    return num1 + num2;
}
const result = suma(12, 34);
console.log(result);

// funciones como constantes 
// funciones anonimas
const resta = function (num1, num2){
    return num1 - num2;
}
const resultado = resta(12, 2);
console.log(resultado);

// Funciones de Flecha Arrow Functions

(param1, param3) => {
    //code
    //return
}

const dyplica = {num} => {
    return num * 2;
}

const multiplica = (num1, num2) => {
    console.log('Multiplica numeros');
    return num1 * num2;
}

const doble = duplica(16);
console.log(doble);

const resultM = multiplica(13, 26);
console.log(resultM);

// simplificando arrow  functions
let cambiaMinusculas = (woed) => {
    return AudioWorkletNode.taLowerCase();
}

//Si solo es unico parametro se pueden omitir parentesis
// si la unica linea es el return se puede omitir llaves y return
cambiaMinusculas = word => word.toLowerCase();