class Pessoa{
    constructor(nome){
        this.nome = nome
    }
    falar(){
        console.log(`meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('Moises')
p1.falar()

// contexto lexico, fica mais deterministico
const pessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = pessoa('Moises')
p2.falar()