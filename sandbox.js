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
//explict types
var char1;
var age2;
var isLoggedIn;
age2 = 29;
char1 = 'Ramu';
isLoggedIn: true;
var pandas;
pandas = ['shyam', 'raju', ' babu bhaiya'];
var animals = [];
animals.push('tiger');
//union types
var mixed11 = [];
mixed11.push(112, 'geeta');
console.log(mixed11);
var uid;
uid = 1;
console.log(uid);
//declare variables as an obj
var ninjaOne;
ninjaOne = { name: 'prakash', age: 11 };
var ninjaTwo;
ninjaTwo = { name: 'paru', age: 17, completed: false };
//dynamic any type
var age3 = 25;
age3 = true;
console.log(age3);
age3 = 'hello';
console.log(age3);
var mixed3 = [];
mixed3.push(3);
var sanjo;
sanjo = { name: 'hari', age: 73 };
