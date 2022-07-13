/* 4. Faça um programa que leia duas notas parciais de um aluno e mostre:
a. A mensagem “Aprovado”, se a média alcançada for maior ou igual a sete;
b. A mensagem “Aprovado com Louvor”, se a média for igual a dez;
c. A mensagem “Reprovado” se a média for menor do que sete; */

let readlineSync = require('readline-sync')

const nota1 = readlineSync.questionFloat('Digite a primeira nota: ')
const nota2 = readlineSync.questionFloat('Digite a segunda nota: ')

const media = (nota1 + nota2) / 2

if (media == 10) {
    console.log('Aprovado com Louvor')
} else if (media >= 7) {
    console.log('Aprovado')
} else {
    console.log('Reprovado')
}
