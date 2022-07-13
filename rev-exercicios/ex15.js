/* 15. Faça um programa que leia um valor monetário a ser investido, a taxa de juros mensal sobre o investimento e a quantidade de meses que o valor ficará investido. O programa deve calcular e mostrar quanto foi o rendimento do valor investido. */

const readlineSync = require('readline-sync')

let valorInvest = readlineSync.questionInt('Digite valor investido: ')
let taxa = readlineSync.questionInt('Digite a taxa mensal do investimento: ')
let meses = readlineSync.questionInt('Digite o prazo do investimento ')

let percentFinal = (taxa * meses)

let valorFinal = valorInvest

valorFinal += (valorInvest * percentFinal) / 100

console.log(valorFinal)

