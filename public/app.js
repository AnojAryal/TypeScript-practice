"use strict";
// console.log('Hello');
// const form = document.querySelector('form')!;
//class
class Invoice {
    constructor(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    format() {
        return `${this.client} oews ${this.amount} for ${this.details}`;
    }
}
const invOne = new Invoice('FraNzY', 'WOrk on FraNzY website', 350);
const invTwo = new Invoice('Asmi', 'WOrk on Asmi website', 250);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
console.log(invoices);
const form = document.querySelector('.new-item-form');
// console.log(form.children);
//inputs 
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
