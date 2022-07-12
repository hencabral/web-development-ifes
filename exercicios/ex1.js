const readline = require('readline-sync')

var num1 = readline.question("Digite um numero: ")

var num2 = readline.question("Digite outro numero: ")

if (num1 > num2) {
    console.log(`Maior numero é: ${num1}`)
} else {
    console.log(`Maior numero é: ${num2}`)
}