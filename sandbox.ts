const user = 'FraNzY';
console.log(user);

const input1 = document.querySelectorAll('input');
console.log(input1);


input1.forEach(input => {
    console.log(input)
})


let age = 21;
let isGirl = false;

//we can change the value of a variable of same type.
age = 22;

//cant change the value to different type
//age = 'twenty two 22'


//circumference of a circle
const circ = (diameter : number) => {  // in ts we can define the type of a variable 
    return diameter * Math.PI;
}

console.log(circ(12));
//ts allow us to typecheck during development 

//objects and arrays

//arrays
let names = ['FraNzY', 'Kriti', 'Tatto'];

names.push('Bini');

let numbers = [18,19,20];

numbers.push(21);

let mixed = ['Ram', 1, 'Virat Kohli', 18];

mixed.push('Anoj');
mixed.push(10);

mixed[0] = 3;


//objects
let ninja = {
    name : 'mario',
    belt : 'black',
    age : 21
};

ninja.age = 22;
ninja.belt = 'white';

//re - assignable of same type
ninja = {
    name : 'franco',
    belt : 'orange',
    age : 27
};
