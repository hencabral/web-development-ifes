/* 27. Faça um programa que permita ao usuário digitar uma lista de valores inteiros até que o valor 0 seja digitado. 
Ao fim, o programa deve mostrar a soma, a média, o máximo, o mínimo e a quantidade dos valores digitados, usando uma função para cada operação. */

const readlineSync = require('readline-sync')

let lista = []
let elemento


do {
    elemento = readlineSync.questionInt('Digite um numero: ')
    if (elemento != 0) {
        lista.push(elemento)
    }
} while (elemento != 0)

console.log('Lista: ' + lista)
console.log('Soma: ' + soma(lista))
console.log('Media: ' + media(lista))
console.log('Maximo: ' + maximo(lista))
console.log('Minimo: ' + minimo(lista))

function soma(lista) {
    let soma = 0

    for (i = 0; i < lista.length; i++) {
        soma += lista[i]
    }
    return soma
}

function media(lista) {
    let media = 0
    let soma = 0

    for (i = 0; i < lista.length; i++) {
        soma += lista[i]
        media = soma / lista.length
    }
    return media
}

function maximo(lista) {
    let maximo = 0

    for (i = 0; i < lista.length; i++) {
        if (lista[i] > maximo) {
            maximo = lista[i]
        }
    }
    return maximo
}

function minimo(lista) {
    let minimo = lista[0]

    for (i = 0; i < lista.length; i++) {
        if (lista[i] < minimo) {
            minimo = lista[i]
        }
    }
    return minimo
}
