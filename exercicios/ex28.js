const prompt = require('readline-sync')

let produto = []
let valor = []
let item
let soma = 0

while (item != 'sair') {
    item = prompt.question('Digite o nome do produto: ')
    if (item != 'sair') {
        produto.push(item)
        valor.push(prompt.questionFloat('Digite o valor do produto: '))
        soma += valor[valor.length - 1]
    }
}

PrintProduto(produto, valor)

function PrintProduto(produto, valor) {
    console.log('\n\nProdutos acima da media')
    for (let i = 0; i < produto.length; i++) {
        if (valor[i] > (soma / valor.length)) {
            console.log(`${produto[i]} - R$ ${valor[i].toFixed(2)}`)
        }
    }
}