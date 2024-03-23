"use strict";
// console.log('Hello');
// const form = document.querySelector('form')!;
//class
class Invoice {
    // readonly client : string;
    // private details : string;
    // public amount : number;
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
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
invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format());
});
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
