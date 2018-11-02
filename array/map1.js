const numero = [1,2,3,4,5]

//for com proposito
let resultado = numero.map(function(e){
    return e *2
})

console.log(resultado)

const soma10 = e => e + 10
const triplo = e => e * 3
const dinheiro =  e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`

resultado = numero.map(soma10).map(triplo).map(dinheiro)

console.log(resultado)