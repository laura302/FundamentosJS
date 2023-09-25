const resultado = document.getElementById('resultado')
const inputFood = document.getElementById('')
// Arrays en Javascript 
// coleccion ordenada de datos 

//Declaration o inicializacion
const enteros =new Array(1,2,3,4,6);
console.log(enteros);
console.log(enteros[0]);//ultimo .length -1
enteros[0]=10;
enteros[2] *=2;
console.log(enteros);

const fruits = ['apple', '🍉', '🍓', '🍒', '🍄'];
console.log(fruits);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
console.log(fruits.length); //Numero de elementod
fruits[0]='🍒';
console.log(fruits);
resultado.innerText = fruits.join(' - ');


//Metodos para agregar/eleminar elementos
const food = [];
food.push('🍔'); // push inserta al final
food.push('🍿');
food.push('🍟');
food.unshift('🌯'); // unshit inserta al inicio
food.unshift('🥪');
food.unshift('🍜');
console.log(food);

let itemFood = food.pop() // Extremo del final
console.log(itemFood);
itemFood = food.shift(); // Extremo del inicio
console.log(itemFood);
console.log(food);

const showLista = ()=> {
// Ciclo for para Iterar arrays
let listaHML
for(let i = 0; i < food.length; i++){
    listaHML += '<li>${ food[i] }</li>';
    }
}
//console.log(listaHML);
const ulFood = document.getElementById('comida');
ulFood.innerHTML = listaHML;

const addFruit = () => {
    const fruit = inputFood.value;
    food.push(fruit);
    inputFood.value ='';
    showLista();
}
