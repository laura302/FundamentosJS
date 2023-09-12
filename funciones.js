// funciones en Javascript 

f
// funcion sin parametros y sin retornos 
function saluda(){
    console.log('Holaa');
}
saluda();
// funcion con parametros y sin retorno 
function add0ne(num){
    console.log('el ${ num } + 1 = ${ num + 1}');
}
add0ne(15);

// funcion con parametros y con retorno
function sujma(num1, num2){
    return num1 + num2;
}
const result = suma(12,34);
console.log(result);