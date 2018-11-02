//Armazenando uma funcao em uma variavel
const imprimirSoma = function (a,b){
    console.log(a + b )
}

imprimirSoma(2,3)

//Armazenando yma funçao arrow em uma variavel
const soma = (a,b) => {
    return a + b 
}
console.log(soma(2,3))

const subtracao = (a,b) => a - b
console.log(subtracao(10,2))

const imprimir = a => console.log(a)
imprimir('Legal')