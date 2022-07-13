/* 21. Faça um programa que crie uma lista inicializada com 10 números inteiros e armazene em uma segunda lista os quadrados dos números da primeira lista, mostrando-os ao final separados por vírgula. */

let lista = []
let listaQuadrado = []

let num

for (i = 0; i <= 10; i++) {
    num = random(1, 20)
    lista.push(num)
    listaQuadrado.push((num * num))
}

for (i = 0; i <= 10; i++) {
    console.log(`Numero: ${lista[i]}, ${listaQuadrado[i]}`)
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}