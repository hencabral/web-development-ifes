/* 8. Crie um programa que peça um número ao usuário e armazene ele na variável x. Depois peça outro número 
e armazene na variável y. Mostre esses números. Em seguida, faça com que x passe a ter o valor de y, e que y 
passe a ter o valor de x. */

let readlineSync = require('readline-sync')

let x = readlineSync.questionInt('Digite o primeiro número: ')
let y = readlineSync.questionInt('Digite o segundo número: ')

console.log(`Valor de x: ${x}`)
console.log(`Valor de y: ${y}`)


const aux = x

x = y
y = aux

console.log(`Valor de x: ${x}`)
console.log(`Valor de y: ${y}`)