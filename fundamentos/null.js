let valor // não inicializada
console.log(valor) // valor undefined

valor = null

console.log(valor)//ausência de valor

const produto = {}
console.log(produto.preco)

produto.preco = 3.50
console.log(produto.preco)


produto.preco = undefined // evitar atribuir undefined
