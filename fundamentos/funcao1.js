// fucao sem retorno
function imprimirSoma(a,b){
    console.log(a + b)
}

imprimirSoma(2,3)
imprimirSoma(2)
imprimirSoma(2,10,2,3) // vai pegar somente os 2 numeros o resto ele ignora
imprimirSoma()

//funcao com retorno
function soma(a,b = 0){
    return a + b;
}

console.log('A soma e ' + soma(2,3))
console.log('A soma e ' + soma(2))