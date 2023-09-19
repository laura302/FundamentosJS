// ciclo for
for(let i = 0; i <= 10; i++){
    console.log(i);
}
for(let i = 10; i >= 0; i--){
    console.log(i);
}

// whilw
let contador = 0;
whilw(contador < 5){
    console.log(contador);
    contador++;
}

// do whilw
contador = 0;
do {
    console.log(contador);
    contador++;
} while(contador !== 0);

// for ... of
const animales = ['perro', 'gato', 'loro', 'pez'];
for(const animal of animales){
    console.log(animal);
}
