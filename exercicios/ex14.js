const prompt = require('readline-sync')

let notas = []
let test = true
let total = 0

while (test) {
    let nota = prompt.questionInt("Nota: ")
    if (nota < 0) {
        test = false
    } else {
        notas.push(nota)
    }
}

for (let i in notas) {
    total += notas[i]
}

console.log('Media: ' + total / notas.length)