const readline = require('readline-sync')

var x = readline.questionInt("Digite o valor de X: ")
var y = readline.questionInt("Digite o valor de Y: ")

console.log(`Valor de x = ${x} e o valor de y = ${y}`)

const xis = x
const ipsilon = y

x = ipsilon
y = xis

console.log(`Valor de x = ${x} e o valor de y = ${y}`)