/* 10. Faça um programa que mostre todos os números pares entre 0 e um valor inteiro digitado pelo usuário. */

let readlineSync = require('readline-sync')

const valor = readlineSync.questionInt('Digite um numero inteiro: ')

let i = 0

while (i <= valor) {
    i % 2 == 0 ? console.log(i) : ''

    i++
}