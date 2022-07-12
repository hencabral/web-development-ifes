const readline = require('readline-sync')

var letra = readline.question("Digite uma letra: ")

isvogal(letra)

function isvogal(letra) {
    switch (letra) {
        case "a":
        case "A":
        case "e":
        case "E":
        case "i":
        case "I":
        case "o":
        case "O":
        case "u":
        case "U":
            return console.log(`${letra} é uma vogal`)

        default:
            return console.log(`${letra} é uma consoante`)
    }
}