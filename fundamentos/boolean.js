let isActive = false
console.log(isActive)

isActive = true
console.log(isActive)

isActive = 1
console.log(!!isActive)

console.log('Os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!{})
console.log(!!"texto")

console.log("Os falsos...")
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isActive = false))

console.log('Pra finalizar')
console.log(!!('' || null || 0 || ' '))

let nome = ''
console.log(nome || 'Desconecido')
