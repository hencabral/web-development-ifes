/* 22. Faça um programa que crie duas listas inicializadas com 10 números inteiros cada e mostre a soma dos  elementos de mesmo índice (obs.: o resultado serão 10 números inteiros). */


let lista1 = []
let lista2 = []

let num

for (i = 0; i < 10; i++) {
    num = random(1, 20)
    lista1.push(num)
}

for (i = 0; i < 10; i++) {
    num = random(1, 20)
    lista2.push(num)
}


for (i = 0; i < 10; i++) {
    console.log(`${lista1[i]} + ${lista2[i]} = ${lista1[i] + lista2[i]}`)
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}