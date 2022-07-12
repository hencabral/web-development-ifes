const readline = require('readline-sync')

var num = readline.question("Digite um numero: ")

if (num >= 0) {
    console.log(`${num} é positivo`)
} else {
    console.log(`${num} é negativo`)
}