const prompt = require('readline-sync')

const mapa = [' ', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

console.log(' -------- Menu --------')
console.log(' 1 - Criptografar')
console.log(' 2 - Descriptografar')
let opcao = prompt.questionInt('Digite a opcao desejada: ')

if (opcao == 1) {
    let texto = prompt.question('Digite o texto a ser criptografado: ')
    console.log('Texto criptografado: ' + Encriptografar(texto).join(''))
} else if (opcao == 2) {
    let texto = prompt.question('Digite o texto a ser descriptografado: ')
    console.log('Texto descriptografado: ' + Descriptografar(texto).join(''))
} else {
    console.log('Opção inválida')
}

function Encriptografar(texto) {
    let textoCriptografado = []
    let letra
    texto = texto.toUpperCase()
    for (let i = 0; i < texto.length; i++) {
        letra = mapa.indexOf(texto[i])
        if (letra < 10) {
            textoCriptografado.push('0' + letra)
        } else {
            textoCriptografado.push(letra)
        }
    }
    return textoCriptografado;
}

function Descriptografar(texto) {
    let textoDescriptografado = []
    let letra
    for (let i = 0; i < texto.length; i += 2) {
        letra = parseInt(texto[i] + texto[i + 1])
        textoDescriptografado.push(mapa[letra])
    }
    return textoDescriptografado
}