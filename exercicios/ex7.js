const readline = require('readline-sync')

console.log('Responda 1 para VERDADEIRO e 0 para FALSO')
var q1 = readline.questionInt("Telefonou para a vítima? ")
var q2 = readline.questionInt("Esteve no local do crime? ")
var q3 = readline.questionInt("Mora perto da vítima? ")
var q4 = readline.questionInt("Devia para a vítima? ")
var q5 = readline.questionInt("Já trabalhou com a vítima? ")

let somaResult = q1 + q2 + q3 + q4 + q5

switch (somaResult) {
    case 2:
        console.log('Suspeita')
        break;
    case 3:
        console.log('Cúmplice')
        break;
    case 4:
        console.log('Cúmplice')
        break;
    case 5:
        console.log('Assassino')
        break;
    default:
        console.log('Inocente')
}






