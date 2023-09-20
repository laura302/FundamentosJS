//High Order Funtions
//Funciones que reciben otras funciones como parametros 

const myfuntionWithBigName=() =>{
    console.log('Este es una funcion');
}
myfuntionWithBigName();

const myFun=myfuntionWithBigName;

myFun();

const funOne =()=>{
    console.log('Ejecuta funcion 1');

}

const funTwo = (name) =>{
    console.log('Hola'+name)
    console.log('Ejecuta funcion 2');
}

funOne();
funTwo('Imanol ');

const funThree=(otherFuntion)=>{
    otherFuntion();
    console('Ejecuta funcion 3');
}
funThree(funOne);