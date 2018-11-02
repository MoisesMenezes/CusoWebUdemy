const pilotos = ['Vettel', 'Alonso','Massa','Raikkonen']
pilotos.pop()// massa quebrou o carro !
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift() //remove da primeira posição
console.log(pilotos)

pilotos.unshift('Hamilton')
console.log(pilotos)

//splice pode adicionar e remover objetos

//Adicionar
pilotos.splice(2,0,'Bottas','Massa')
console.log(pilotos)

//remover
pilotos.splice(3,1)// massa quebrou
console.log(pilotos)

const algunsPilotos = pilotos.slice(2) // novo array
console.log(algunsPilotos)

const algunsPilotos2 = pilotos.slice(1,4)
console.log(algunsPilotos2)