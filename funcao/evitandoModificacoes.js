// Object. preventExtensions: prevenir que aumenta atributos

const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'Promocao'
})

console.log('Extensivel', Object.isExtensible)

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag

console.log(produto)


//Object.seal    selar objetos não adiciona nem deleta novos elementos so alterar
const pessoa = {nome: 'Moises', idade: 35}
Object.seal(pessoa)

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)


