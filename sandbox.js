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
