/* 20. Faça um programa que crie uma lista inicializada com 5 números inteiros desordenados e mostre-os em ordem decrescente. */

let lista = []
let num

for (i = 0; i <= 5; i++) {
    num = random(1, 20)
    lista.push(num)
}

console.log(lista.sort((a, b) => {
    return b - a
}))

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}