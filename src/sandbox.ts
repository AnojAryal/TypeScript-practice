const user1 = 'FraNzY';
console.log(user1);

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


//explict types

let char1 : string;
let age2 : number;
let isLoggedIn : boolean;

age2 = 29;
char1 = 'Ramu';
isLoggedIn : true;

let pandas : string[];

pandas = ['shyam', 'raju', ' babu bhaiya'];

let animals : string[] = [];
animals.push('tiger');

//union types
let mixed11 : (string | number)[] = [];

mixed11.push(112, 'geeta');

console.log(mixed11);

let uid : string|number;

uid = 1;

console.log(uid);

//declare variables as an obj
let ninjaOne : object;
ninjaOne= {name : 'prakash' , age : 11}

let ninjaTwo : {
    name : string,
    age : number,
    completed : boolean,
};

ninjaTwo= {name : 'paru' , age : 17, completed : false};


//dynamic any type

let age3 :any = 25;

age3 = true;

console.log(age3);

age3 = 'hello';

console.log(age3);

let mixed3 : any []= [];

mixed3.push(3)


let sanjo :{
    name : any,
    age : any
}


sanjo = {name : 'hari', age :73};


//function type
let greet =()=> {
    console.log('Hello world!!');
    
}

let greet1 : Function;

greet1 =()=> {
    console.log('Hello FraNzY!!');
    
}

const add = (a : number, b: number) =>{
    console.log(a+ b);
    
}
add(5,10);

const minus = (a : number, b: number) =>{
    return a - b
    
}
let result = minus(10,8);


type StringOrNum = string | number;

const logDetails =(uid : StringOrNum, item: string)=> {
    console.log(`${item} has a uid of ${uid}`);
    
}