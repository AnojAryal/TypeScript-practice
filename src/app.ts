import {Invoice} from './classes/invoice.js';
import {Payment} from './classes/payment.js';
import { HasFormatter } from './interfaces/hasFormatter.js';


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


const form = document.querySelector('.new-item-form') as HTMLFormElement;

// console.log(form.children);

//inputs 
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;


form.addEventListener('submit',(e : Event)=> {
    e.preventDefault();

    let doc : HasFormatter;
    if (type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber)
    }else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber)
    }

    console.log(doc);
    
})