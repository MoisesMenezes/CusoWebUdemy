function MeuObjeto () {}
console.log(MeuObjeto.prototype)

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto
console.log(obj1.__proto__ === obj2.__proto__)
console.log(obj1.prototype === obj2.__proto__)

MeuObjeto.prototype.nome = 'Anonimo'
MeuObjeto.prototype.falar = function (){
    console.log(`Bom dia Meu nome e ${this.nome}`)
}

obj1.falar()

obj2.nome = 'Moises'
obj2.falar()

const obj3 = {}
obj3.proto = MeuObjeto.prototype
obj3.nome = 'Obj3'
obj3.falar()

