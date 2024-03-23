// console.log('Hello');

// const form = document.querySelector('form')!;

//class
class Invoice {
    // readonly client : string;
    // private details : string;
    // public amount : number;

    constructor(
        readonly client : string,
        private details : string,
        public amount : number,
    ){}

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
    console.log(inv.client, inv.amount, inv.format());
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