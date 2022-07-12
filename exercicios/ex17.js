const prompt = require('readline-sync')
let n = random(1, 10)
let ErroPlay1 = 0
let ErroPlay2 = 0
let i = 1
let Resp

do {
    Resp = prompt.questionInt('Play ' + i + ' | Digite um numero: ')
    if (Resp == n) {
        console.log('O play ' + i + ' Ganhou')
        console.log('Erros \n Play 1: ' + ErroPlay1 + '\n Play 2: ' + ErroPlay2)
    } else {
        if (i == 1) {
            ErroPlay1++
            i = 2
        } else if (i == 2) {
            ErroPlay2++
            i = 1
        }
    }
} while (Resp != n)

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}