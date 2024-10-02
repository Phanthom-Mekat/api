const people ={
    name: 'pok',
    address:{   
        block:'c',
        number:2,
        bar : true

    },
    num:1234,
    yousure:false,
    ok:[12,123,23]
}
console.log(people)
const jsonkorlam=JSON.stringify(people);
console.log(jsonkorlam)
const jsonthekeback =JSON.parse(jsonkorlam);
console.log(jsonthekeback);
