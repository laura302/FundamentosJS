const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const result = document.getElementById('res');

const getValues = () => {
    const numero1 = Number(num1.value) || 0;
    const numero2 = Number(num2.value) || 0;
    return [ numero1, numero2];
}

const sumar = () => {
    const values = getValues();
    const reultado = values[0] + values[1];
    result.value = reultado;
}

const limpiar = () => {
    num1.value = 0;
    num2.value = 0;
    result.value = 0;
}

const restar = () => {
    const values = getValues();
    const reultado = values[0] - values[1];
    result.value = reultado;
}

const multiplicar = () => {
    const values = getValues();
    const reultado = values[0] * values[1];
    result.value = reultado;
}

const dividir = () => {
    const values = getValues();
    const reultado = values[0] / values[1];
    result.value = reultado;
}