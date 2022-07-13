/* Faça um programa que leia continuamente notas entre 0 e 100, até que o usuário informe o valor -1 para a nota. Ao fim, o programa deve mostrar a média das notas digitadas pelo usuário. */

let readlineSync = require('readline-sync')


let nota = 0
let notas = []

while (nota != -1) {
    /*     console.log('Digite -1 para finalizar os lançamentos') */
    nota = readlineSync.questionInt('Digite as notas: ')

    nota != -1 ? notas.push(nota) : ''
}

let soma = 0

for (i = 0; i < notas.length; i++) {
    soma += notas[i]
}

let media = soma / notas.length

console.log(`Notas: ${notas}`)
console.log(`Media: ${media}`)


