/* 28. Faça um programa com uma função para solicitar ao usuário digitar os nomes e os preços de produtos até que seja digitado "sair" no nome de um produto. Crie também uma função que receba ambos os vetores como parâmetros e exiba os produtos (nome e preço) cujo preço esteja acima da média */
const readlineSync = require('readline-sync')

let nomeProduto
let produtos = []

let precoProduto
let precos = []

do {
    nomeProduto = readlineSync.question('Digite o nome do produto: ').toUpperCase()

    if (nomeProduto != 'SAIR') {
        precoProduto = readlineSync.questionFloat('Digite o preço do produto: ')

        produtos.push(nomeProduto)
        precos.push(precoProduto)
    }

} while (nomeProduto != 'SAIR')

console.log(produtos)
console.log(precos)
verificarMedia(produtos, precos)

function verificarMedia(produtos, precos) {
    let soma = 0
    let media = 0

    for (i = 0; i < precos.length; i++) {
        soma += precos[i]
        media = soma / precos.length
    }

    console.log('\n\nProdutos acima da media')

    for (i = 0; i < produtos.length; i++) {
        if (precos[i] > media) {
            console.log(`${produtos[i]} - R$ ${precos[i].toFixed(2)}`)
        }
    }
}