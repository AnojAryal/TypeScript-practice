const addUID = (obj : object) => {
    let uid = Math.floor(Math.random() * 100);
    return {...obj, uid};
}

let docOne = addUID({name : 'yoshi', age : 40});


console.log(docOne);