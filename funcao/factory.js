const prod1 = {
    nome: 'Omo',
    preco: 4.2
}

const prod2 = {
    nome: 'Detergente',
    preco: 2.5
}

// factory simples
function criarPessoa(){
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa())
