const prompt = require('readline-sync')
let n = 0

let r = random(1, 10)
let qtd = 0

while (n != r) {
    n = prompt.questionInt("Informe Numero: ")
    if (n == r) {
        console.log('Acertou o numero era: ' + n)
        console.log('Errou: ' + qtd)
    } else {
        qtd++
    }
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}