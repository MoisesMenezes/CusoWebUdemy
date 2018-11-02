function criarProdutos (nome , preco){
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProdutos('Notebook',2199.40))
console.log(criarProdutos('Ipad',1199.50))