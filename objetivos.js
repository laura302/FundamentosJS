// objetos en javascrip
/*
objeti ={
    key: value,
    key: value
}

obejeto.key
onjeto['key]
*/

const subject = {
    name: 'Aplicaciones Web',
    cuatri: 3,
    profesor: 'Francisco',
    classroom: 'Lab Redes I',
    'total hours': 70,
    weekHours: 5
}

console.log(subject);
console.log(subject.name);
console.log(subject.profesor);
console.log(subject['classroom']);
console.log(subject['total hours']);

subject.profesor= 'Francisco Lopez';
subject.career = 'TIDSM';
console.log(subject);

const student = {
    name: 'Laura Alicis',
    age: 21,
    califications: (10, 10, 8),
    city : 'Apizaco'
}

const group = {
    name:'4B',
    student: (student, student, student),
    subject: (subject, subject, subject)
}

console.log(group);
console.log(group.subject[0].profesor);
console.log(group.student[1].califications);
console.log(group.student[1].califications[0]);

