const alunos = [
    {nome: 'João', nota: 8.0, bolsista:false},
    {nome: 'Maria', nota: 7.0, bolsista:false},
    {nome: 'Miguel', nota: 5.0, bolsista:true}
]

//Desafio 1 : todos os alunos são bolsista 
const todosBolsista = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista). reduce(todosBolsista))


//Desafio 2 : ALgum aluno e bolsista
const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a=> a.bolsista).reduce(algumBolsista))