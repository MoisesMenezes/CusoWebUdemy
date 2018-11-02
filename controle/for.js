let contador = 1

for(let i = 1; i <= 10; i++){
    console.log(`i = ${i}`)
}

const notas = [6.7, 7.2, 9.8, 10]

for(i = 0; i < notas.length; i++){
    console.log(`Nota = ${notas[i]}`)
}

for(let i in notas){
    console.log(i,notas[i])
}

const pessoa = {
    nome ='Moises',
    sobrenome ='Menezes',
    idade = 28
}

for(let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}