const alunos = [
    {nome: 'João', nota: 8.0, bolsista:false},
    {nome: 'Maria', nota: 7.0, bolsista:false},
    {nome: 'Miguel', nota: 5.0, bolsista:true}
]

const resultado = alunos.map(a=> a.nota).reduce(function(acumulador, atula){
    console.log(acumulador, atual)
    return acumulador + atual
})

console.log(resultado)