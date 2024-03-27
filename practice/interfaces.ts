//interfaces
interface IsPerson {
    name : string;
    age : number;
    speak(a: string) : void;
    spend(a : number) : void;
}

const me: IsPerson = {
    name : 'Anoj',
    age : 21,
    speak(text : string ): void {
        console.log(text);
    },
    spend(amount : number) : number {
        console.log('I spend', amount);
        return amount;
        
    }
};

const greetPerson = (person : IsPerson) => {
    console.log('hello',person.name);
    
}

greetPerson(me);

console.log(me);