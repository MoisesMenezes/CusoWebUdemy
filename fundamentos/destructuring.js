// novo recurso para tirar de obj e array

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco:{
        logradouro:'Rua Mac',
        numero:2
    }
}

const {nome, idade} = pessoa
console.log(nome,idade)

const {nome: n, idade:i } = pessoa
console.log(n,1)

const {sobrenome, bemHumarada = true} = pessoa
console.log(sobrenome,bemHumarada)

const {endereco: {logradouro, numero, cep}} = pessoa
console.log(logradouro,numero,cep)