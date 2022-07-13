/* 11. Faça um programa que leia um valor inteiro digitado pelo usuário e mostre todos os múltiplos desse valor 
entre 0 e 100. */

let readlineSync = require('readline-sync')

const valor = readlineSync.questionInt('Digite um numero inteiro: ')

let i = 0

while (i <= 100) {
    console.log(valor * i)

    i++
}