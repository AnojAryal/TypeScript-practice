// console.log('Hello');

// const form = document.querySelector('form')!;

//class
class Invoice {
    client : string;
    details : string;
    amount : number;

    constructor(c: string, d: string, a: number){
        this.client = c;
        this.details = d;
        this.amount = a;
    }

    format() {
        return `${this.client} oews ${this.amount} for ${this.details}`
    }
}
const invOne = new Invoice('FraNzY', 'WOrk on FraNzY website', 350);
const invTwo = new Invoice('Asmi', 'WOrk on Asmi website', 250);

let invoices : Invoice[] = [];

invoices.push(invOne);
invoices.push(invTwo);



invoices.forEach(inv => {
    console.log(inv.client, inv.details,inv.amount, inv.format());
})




const form = document.querySelector('.new-item-form') as HTMLFormElement;

// console.log(form.children);


//inputs 

const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;


form.addEventListener('submit',(e : Event)=> {
    e.preventDefault();

    console.log(
        type.value,
        tofrom.value,
        details.value,
        amount.valueAsNumber,
    );
    
})