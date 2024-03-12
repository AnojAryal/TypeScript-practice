var user = 'FraNzY';
console.log(user);
var input1 = document.querySelectorAll('input');
console.log(input1);
input1.forEach(function (input) {
    console.log(input);
});
var age = 21;
var isGirl = false;
//we can change the value of a variable of same type.
age = 22;
//cant change the value to different type
//age = 'twenty two 22'
//circumference of a circle
var circ = function (diameter) {
    return diameter * Math.PI;
};
console.log(circ(12));
//ts allow us to typecheck during development 
//objects and arrays
//arrays
var names = ['FraNzY', 'Kriti', 'Tatto'];
names.push('Bini');
var numbers = [18, 19, 20];
numbers.push(21);
var mixed = ['Ram', 1, 'Virat Kohli', 18];
mixed.push('Anoj');
mixed.push(10);
mixed[0] = 3;
//objects
var ninja = {
    name: 'mario',
    belt: 'black',
    age: 21
};
ninja.age = 22;
ninja.belt = 'white';
//re - assignable of same type
ninja = {
    name: 'franco',
    belt: 'orange',
    age: 27
};
