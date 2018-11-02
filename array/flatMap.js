const escola = [
    {nome:'Tuma M1',
    alunos: [{
        nome: 'Gustavo',
        nota: 8.1
    },  {
        nome: 'Ana',
        nota: 9.2
    }]
    },
    {nome:'Tuma M2',
    alunos: [{
        nome: 'Joao',
        nota: 4.1
    },  {
        nome: 'Maria',
        nota: 7.2
    }]
    }
]

const getNotaDoAluno = a => a.nota
const getNotasDaTurma = turma => turma.alunos.map(getNotaDoAluno)

const notas1 = escola.map(getNotasDaTurma)
console.log(notas1)

Array.prototype.flatMap = function(callback){
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatMap(getNotasDaTurma)
console.log(notas2)