const fruits = ['apple', 'prange', 'melon', 'water', 'melon'];

console.log('for');
// recorido con for
for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

console.log('for of')
// recorrido con for of
for (conts fruit of fruits ){
    console.log(fruit);
}

// Iteradores de Arrays
// forEach ()
console.log('forEach');
fruits.forEach(
    fuction (fruit){
        console.log(fruit);
    }
);

fruits.forEach {
    (fruit) => {
        console.log(fruit);
    }
};

fruits.forEach(fruit => console.log(fruit));

// map
// Itera un array y genera una nueva a partir del original

const numbers = [1, 2, 3, 4, 5, 6, 6];

const squares = numbers.map(num => num ** 2);
/*
(num) => {

}
*/
console.log(numbers);
console.log(squares);

// filter
// Itera un array y regresa uno nuevo con valores que cumplan 
// condicion

const mayores = numbers.filter(num => num > 4);
/*
(num) => {
    if(num > 4){
        return num;
    }
}
*/
console.log(numbers);
console.log(mayores);

// reduce 
// regresa un unico valor a partir de los valores de array


const sumatoria = numbers.reduce((a, b) => a + b);
const fact = numbers.reduce((a, b) => a*b);

console.log(numbers);
console.log(sumatoria);
console.log(fact);

const minusculas = 'abcdefghi'.split('');

const mayusculas = minusculas.map(letra => letra.toUpperCase());

console.log(minusculas);
console.log(mayusculas);


// some 
// regresa Trur si ak menos uno de los elemnetos cumplen

const equaTos = numbers.some(num => num === 5);
console.log(equaTos);

