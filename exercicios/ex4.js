const readline = require('readline-sync')

var nota1 = readline.questionFloat("Digite a primeira nota: ")
var nota2 = readline.questionFloat("Digite a primeira nota: ")

const somaNotas = nota1 + nota2
const media = somaNotas / 2

console.log(media)

if ((media) >= 7) {

    if (media == 10) {
        console.log('Aprovado com Louvor')
    } else {
        console.log('Aprovado')
    }
} else {
    console.log('Reprovado')
}