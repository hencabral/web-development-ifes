/* 11. Faça um programa que leia um valor inteiro digitado pelo usuário e mostre todos os múltiplos desse valor 
entre 0 e 100. */

let readlineSync = require('readline-sync')

let verifica = true
let valor = 0

while (verifica) {
    valor = readlineSync.questionInt('Digite um numero entre 1 e 10: ')

    valor >= 1 && valor <= 10 ? verifica = false : verifica = true
}

let i = 0

while (i <= 10) {
    console.log(valor * i)

    i++
}