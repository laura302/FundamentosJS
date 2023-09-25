// Strings
const firstName = 'Laura';
const lastName = 'Contreras';
const fullName = firstName + ' ' + lastName;

console.log("I'm " + firstName);
console.log("I'm " + firstName);

// String Multilinea
const menu = `
elige:
1 - opcion 1
2 - opcion 2
3 - opcion 3
`;

console.log(menu);

// String Templates
// Placeholder $ {}

const city = 'Humantla';
const phone = '2471813880';
const rol = 'alumno';

const presentation = `
Hola,
soy ${fullName}, ${rol} en la utt.
Vivo en ${city}.
Te puedes comunicar conmigo en ${phone}.
`;

console.log(presentation);