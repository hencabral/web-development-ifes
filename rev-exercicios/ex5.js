/* Faça um programa que pergunte em que turno você estuda. Peça para digitar M (matutino), V (vespertino) ou 
N (noturno). Imprima a mensagem “Bom dia!”, “Boa tarde”, “Boa Noite” ou “Valor inválido”, conforme o caso. */

let readlineSync = require('readline-sync')

const turno = readlineSync.question('Digite M para matutino, V para vespertino ou N para noturno: ')

const turnoUpper = turno.toUpperCase()

switch (turnoUpper) { 
    case 'M':
        console.log(`${turnoUpper}: Bom dia!`)
    break
    case 'V':
        console.log(`${turnoUpper}: Boa tarde!`)
    break
    case 'N':
        console.log(`${turnoUpper}: Boa noite!`)
    break
}