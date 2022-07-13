// 2. Faça um programa que peça um valor e mostre na tela se o valor é positivo ou negativo.

let readlineSync = require('readline-sync')

const valor = readlineSync.questionInt('Digite um valor: ')

if (valor == 0) {
    console.log(`O valor ${valor} é neutro!`)
} else {
    valor > 0 ? console.log(`O valor ${valor} é positivo`) : console.log(`O valor ${valor} é negativo`)
}