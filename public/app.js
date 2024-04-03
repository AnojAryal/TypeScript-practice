import { Invoice } from './classes/invoice.js';
import { LIstTemplate } from './classes/listTemplates.js';
import { Payment } from './classes/payment.js';
// let docOne : HasFormatter;
// let docTwo : HasFormatter;
// docOne = new Invoice('FraNzY', 'Web Work', 250);
// docTwo = new Payment('Asmi', 'Plumbing Work', 200);
// let docs : HasFormatter[] =[];
// docs.push(docOne);
// docs.push(docTwo);
// console.log(docs);
// // const form = document.querySelector('form')!;
// const invOne = new Invoice('FraNzY', 'WOrk on FraNzY website', 350);
// const invTwo = new Invoice('Asmi', 'WOrk on Asmi website', 250);
// let invoices : Invoice[] = [];
// invoices.push(invOne);
// invoices.push(invTwo);
// invoices.forEach(inv => {
//     console.log(inv.client, inv.amount, inv.format());
// })
const form = document.querySelector('.new-item-form');
//inputs 
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
//list template instance
const ul = document.querySelector('ul');
const list = new LIstTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let values;
    values = [tofrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    // console.log(doc);   
    list.render(doc, type.value, 'end');
});
