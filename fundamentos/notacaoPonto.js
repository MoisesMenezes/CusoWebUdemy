console.log(Math.ceil(9.11))

const any1 = {}
any1.nome = 'Bola'
//any1['nome'] ='Bola2'

function Obj(nome){
    this.nome = nome
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
console.log(obj2.nome)
console.log(obj3.nome)
