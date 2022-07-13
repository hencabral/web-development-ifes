/* 16. Faça um programa que sorteie um número inteiro entre 1 e 10 e permita ao usuário tentar adivinhar esse número continuamente até conseguir. Ao fim, o programa deve mostrar quantas tentativas foram realizadas até o número ser adivinhado pelo usuário. Use a função abaixo para obter um valor sorteado entre 1 e 10. function random(min, max) { return Math.floor(Math.random() * (max - min + 1) + min) } */

const readlineSync = require('readline-sync')

let numSort = random(1, 10)
let tentativas = 0
let numUser = 0

while (numUser != numSort) {
    numUser = readlineSync.questionInt('Tente adivinhar o número: ')
    tentativas++
}
console.log(`Valor sorteado: ${numSort}`)
console.log(`Tentativas: ${tentativas}`)

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}