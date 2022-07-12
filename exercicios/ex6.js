const readline = require('readline-sync')

var num1 = readline.questionFloat("Digite o primeirao numero: ")
var num2 = readline.questionFloat("Digite o segundo numero: ")
var op = readline.question("Digite a operação desejada (+, -, *, /): ")

let result = 0

switch (op) {
    case '+':
        result = (num1 + num2)
        break;
    case '-':
        result = (num1 - num2)
        break;
    case '*':
        result = (num1 * num2)
        break;
    case '/':
        result = (num1 / num2)
        break;
}

if (result >= 0) {
    if ((result % 2 == 0)) {
        console.log(result + ' é positivo e par')
    } else {
        console.log(result + ' é positivo e impar')
    }
} else {
    if ((result % 2 == 0)) {
        console.log(result + ' é negativo e par')
    } else {
        console.log(result + ' é negativo e impar')
    }
}