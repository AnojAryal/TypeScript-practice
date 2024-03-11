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