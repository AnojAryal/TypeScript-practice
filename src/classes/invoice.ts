import {HasFormatter} from '../interfaces/hasFormatter.js'

//class
export class Invoice implements HasFormatter{
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