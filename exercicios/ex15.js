const prompt = require('readline-sync')
let i = 0
let redimentoTotal = 0

let valor = prompt.questionFloat("Valor do Invesimento: ")
let taxa = prompt.questionFloat("Valor da taxa: ")
let mes = prompt.questionInt("Tempo [Mes]: ")

while (i < mes) {
    redimento = (valor * taxa) / 100
    valor += redimento
    redimentoTotal += redimento
    i++
}

console.log('Redimento total: ' + redimentoTotal.toFixed(2))
console.log('Valor total:' + valor.toFixed(2))