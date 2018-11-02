const nome = 'Moises'
const concatenar = 'Ola ' + nome + '!'

const template = `
    Ola 
      ${nome}!`

console.log(concatenar,template)

console.log(`1 + 1 = ${1+1}`)

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}`)