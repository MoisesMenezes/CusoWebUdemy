const obj = { a: 1, b: 2, c: 3, soma(){return a+b+c}}

// transformar em JSON
console.log(JSON.stringify(obj))


//Ler em JSON
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3}'))
