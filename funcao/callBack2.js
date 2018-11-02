const notas = [9.0, 8.1, 7.2, 5.2, 3.7, 2.1]

//sem callback
let notasBaixa = []
for(let i in notas){
    if(notas[i] < 7){
        notasBaixa.push(notas[i])
    }
}

console.log(notasBaixa)

// Com  callback

notasBaixas = notas.filter(function(nota){
    return nota < 7
})

console.log(notasBaixas)

// com arrow
const notasBaixa3 = notas.filter(notas => notas < 7)
console.log(notasBaixa3)