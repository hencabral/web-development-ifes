let readlineSync = require('readline-sync')

const num1 = readlineSync.question('Digite o primeiro número: ')

const num2 = readlineSync.question('Digite o primeiro número: ')

num1 > num2 ? console.log(num1) : console.log(num2)
