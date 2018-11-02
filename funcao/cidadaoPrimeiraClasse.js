// funcao em JS é first-class object 
// higher-order function

//criar de forma literal
function fun1(){}

// armazenar em uma variavel 
const fun2 = function (){}

// Armazenar em um array
const array = [function(a,b){return a+b},fun1, fun2]

//armazenar em um atributo de objeto
const obj = {}
obj.falar = function() {return 'Opa'}
console.log(obj.falar())

//Passar função como para
function run(fun){
    fun()
}

run(function(){ console.log('Executando...')})

// Uma função pode retornar / conter uma função
function soma(a,b){
    return function(c){
        console.log(a+b+c)
    }
}

soma(2,3)(4)
const cincoMais =  soma(2,3 )