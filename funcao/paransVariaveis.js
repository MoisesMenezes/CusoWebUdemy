function soma(){
    let soma = 0
    for(i in arguments){
        soma =+ arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(2,3,4)
console.log(2,3,'Teste')
console.log('a','b','c')