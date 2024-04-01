const addUID = <T extends object>(obj : T) => {
    let uid = Math.floor(Math.random() * 100);
    return {...obj, uid};
}

let docOne = addUID({name : 'yoshi', age : 40});
//let docTwo = addUID('FraNzY')

console.log(docOne.name);


//ENUMS
enum ResourceType {
    BOOK, AUTHOR, FLIM, DIRECTOR, PERSON
}


//with interfaces

interface Resource<T> {
    uid : number;
    resourceName : ResourceType;
    data : T;
};

const docThree: Resource<object> = {
    uid : 1,
    resourceName : ResourceType.BOOK,
    data : {name : 'Ramu'}
}

console.log(docThree);