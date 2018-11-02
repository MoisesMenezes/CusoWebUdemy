
const pessoa ={nome: 'Joao'}
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa  -> 456 -> {....}
//pessoa = {nome: 'Ana'}

Object.freeze(pessoa) // congelar o objeto

// não altera o Objeto
pessoa.nome = 'Maria'
console.log(pessoa.nome)