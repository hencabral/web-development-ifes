/* 26. Considere as informações a seguir relacionadas a um mapa de criptografia:
Mapa: Epaço=00, A=01, B=02, C=03, D=04, E=05, F=06, G=07, H=08, I=09, J=10, K=11, L=12, M=13, N=14, 
O=15, P=16, Q=17, R=18, S=19, T=20, U=21, V=22, W=23, X=24, Y=25, Z=26.
Crie uma função para criptografar e outra para decriptografar um texto usando esse mapa de criptografia. */

const readlineSync = require('readline-sync')
let op
let texto

const mapa = [' ', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']


console.log('1 - Encriptografar')
console.log('2 - Descriptografar')
op = readlineSync.questionInt('Escolha uma opção: ')

switch (op) {
    case 1:
        texto = readlineSync.question('Digite o texto: ')
        console.log('Texto criptografado: ' + encriptografar(texto).join(''))
        break
    case 2:
        texto = readlineSync.question('Digite o texto: ')
        console.log('Texto descriptografado: ' + descriptografar(texto).join(''))
        break
}

function encriptografar(texto) {
    let textoEncriptografado = []
    let letra
    texto = texto.toUpperCase()

    for (i = 0; i < texto.length; i++) {
        letra = mapa.indexOf(texto[i])
        if (letra < 10) {
            textoEncriptografado.push('0' + letra)
        } else {
            textoEncriptografado.push(letra)
        }
    }

    return textoEncriptografado
}

function descriptografar(texto) {
    let textoDescriptografado = []
    let letra
    for (let i = 0; i < texto.length; i += 2) {
        letra = parseInt(texto[i] + texto[i + 1])
        textoDescriptografado.push(mapa[letra])
    }
    return textoDescriptografado
}



