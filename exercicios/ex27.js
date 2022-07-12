const prompt = require('readline-sync')
const Soma = x => soma += x
const Quantidade = () => quantidade = lista.length
const Media = () => soma / quantidade
const Max = () => Math.max(...lista)
const Min = () => Math.min(...lista)

let lista = []
let x
let soma = 0
let quantidade = 0

while (x != 0) {
    x = prompt.questionInt('Digite um numero: ')
    if (x != 0) {
        lista.push(x)
        Soma(x)
    }
}

console.log('------- Valores --------')
console.log('Lista: ' + lista)
console.log('Soma: ' + soma)
console.log('Quantidade: ' + Quantidade())
console.log('Media: ' + Media().toFixed(2))
console.log('Maior: ' + Max())
console.log('Menor: ' + Min())