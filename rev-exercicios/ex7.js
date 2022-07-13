/* 7. Faça um programa que faça 5 perguntas para uma pessoa sobre um crime. As perguntas são:
a. “Telefonou para a vítima?”
b. “Esteve no local do crime?”
c. “Mora perto da vítima?”
d. “Devia para a vítima?”
e. “Já trabalhou com a vítima?”
Ao fim o programa deve emitir uma classificação sobre a participação da pessoa no crime. Se a pessoa 
responder positivamente a 2 questões ela deve ser classificada como “Suspeita”, entre 3 e 4 como 
“Cúmplice” e 5 como “Assassino”. Caso contrário, ele será classificado como “Inocente”. */

let readlineSync = require('readline-sync')

console.log('Responda com 1 para VERDADEIRO e 0 para FALSO')
const pergA = readlineSync.questionInt('Telefonou para a vítima? ')
const pergB = readlineSync.questionInt('Esteve no local do crime? ')
const pergC = readlineSync.questionInt('Mora perto da vítima? ')
const pergD = readlineSync.questionInt('Devia para a vítima? ')
const pergE = readlineSync.questionInt('Já trabalhou com a vítima? ')

soma = pergA + pergB + pergC + pergD + pergE

switch (soma) {
    case 2:
        console.log('Suspeita')
    break
    case 3:
        console.log('Cúmplice')
    break
    case 4:
        console.log('Cúmplice')
    break
    case 5:
        console.log('Assassino')
}
