/* 24. Considere duas listas com os seguintes valores:
a. Lista1: { "E", "es", "progr", "usa", "lis" }
b. Lista2: { "u", "tou", "amando", "ndo", "tas" }
Faça um programa com duas listas inicializadas conforme acima e que una os elementos de mesmo índice dessas duas listas em uma terceira lista, mostrando os itens da terceira lista separados pelo caractere de espaço (' '). */

const lista1 = ["E", "es", "progr", "usa", "lis"]
const lista2 = ["u", "tou", "amando", "ndo", "tas"]

let lista3 = []

for (i = 0; i < lista1.length; i++) {
    lista3.push(lista1[i] + lista2[i])
}

console.log(lista3.join(' '))