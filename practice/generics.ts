const addUID = <T extends object>(obj : T) => {
    let uid = Math.floor(Math.random() * 100);
    return {...obj, uid};
}

let docOne = addUID({name : 'yoshi', age : 40});
//let docTwo = addUID('FraNzY')

console.log(docOne.name);


//with interfaces

interface Resource<T> {
    uid : number;
    resourceName : string;
    data : T;
};

const docThree: Resource<object> = {
    uid : 1,
    resourceName : 'person',
    data : {name : 'Ramu'}
}

console.log(docThree);