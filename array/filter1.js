const produtos = [
    {nome: 'Notebook', preco:2400, fragil: true},
    {nome: 'Ipad Pro', preco:3000, fragil: true},
    {nome: 'Copo de vidro', preco:40, fragil: true},
    {nome: 'Copo de plastico', preco:2.40, fragil: false},  
]

console.log(produtos.filter(function(p){
    return p.preco > 2300
}))

console.log('Retornando so os produtos que nao e fragil')
const eFragil = e => e.fragil == false
console.log(produtos.filter(eFragil))