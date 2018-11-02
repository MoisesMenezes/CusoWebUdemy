//para nome/valor
const saudacao = 'Opa' //contexto lexico 1

function exec () {
    const saudacao = 'Fala' // contexto lexico 2
    return saudacao;
}

//Objetos são grupos aninhados de pares nome/valor

const Cliente = {
    nome: 'Pedro',
    idade:29,
    peso:90,
    endereco: {
        lagradouro: 'Rua muito legal',
        numero:123
    }
}

console.log(saudacao)
console.log(exec())
console.log(Cliente)
