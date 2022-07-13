/* 17. Faça um programa semelhante ao da questão anterior, porém, para duas pessoas (A e B) tentarem adivinhar de forma alternada. Ao fim, o programa deve informar o usuário vencedor (A ou B). */


const readlineSync = require('readline-sync')

let numSort = random(1, 10)
let tentativasA = 0
let tentativasB = 0
let numUser
let i = 1


do {
    numUser = readlineSync.questionInt(`Player ${i}, digite um numero: `)

    if (numUser == numSort) {
        console.log('O Jogador ' + i + ' ganhou')
        console.log('Tentativas \n Jogador 1: ' + tentativasA + '\n Jogador 2: ' + tentativasB)

    } else {
        if (i == 1) {
            tentativasA++
            i = 2
        } else if (i == 2) {
            tentativasB++
            i = 1
        }
    }

} while (numUser != numSort)

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}