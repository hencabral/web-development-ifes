// 3. Faça um programa que verifique se uma letra digitada é vogal ou consoante.

let readlineSync = require('readline-sync')

const vogais = ['a', 'e', 'i', 'o', 'u']

const letra = readlineSync.question('Digite uma letra: ')

vogais.includes(letra) ? result = 'Vogal' : result = 'Consoante'

console.log(`A letra digitada é uma ${result}`)