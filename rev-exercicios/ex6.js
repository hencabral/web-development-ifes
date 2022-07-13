/* 6. Faça um programa que leia 2 números e em seguida pergunte ao usuário qual operação ele deseja realizar (+, 
    -, *, /). O resultado da operação escolhida deve ser acompanhado de uma frase que diga se o número é:
    a. Par ou ímpar;
    b. Positivo ou negativo; */

let readlineSync = require('readline-sync')

const num1 = readlineSync.questionInt('Digite o primeiro número: ')
const num2 = readlineSync.questionInt('Digite o segundo número: ')

const op = readlineSync.question('Digite a operação desejada: ')

let resultOp
let resultParImpar
let resultPosiNeg


switch (op) {
    case '/':
        resultOp = num1 / num2
    break
    case '*':
        resultOp = num1 * num2
    break
    case '+':
        resultOp = num1 + num2
    break
    case '-':
        resultOp = num1 - num2
    break
}

resultOp % 2 == 0 ? resultParImpar = 'Par' : resultParImpar = 'Impar'

resultOp > 0 ? resultPosiNeg = 'Positivo' : resultPosiNeg = 'Negativo'


console.log(`O resultado é ${resultOp}, ${resultParImpar} e ${resultPosiNeg}`)
