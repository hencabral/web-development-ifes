/* 18. Usando o código a função de números aleatórios mostrado na questão anterior, faça um programa que sorteie os 6 números da Mega-Sena, lembrando que os números variam de 1 a 50 e são diferentes entre eles (dica: use vetores). */


let resultadoMega = []

for (let i = 0; i < 6; i++) {
    numSort = random(1, 50)
    if (verificarNum(numSort)) {
        resultadoMega.push(numSort)
    } else {
        i--
    }
}

console.log(resultadoMega)

function verificarNum(numSort) {
    for (let i = 0; i < resultadoMega.length; i++) {
        if (numSort == resultadoMega[i]) {
            return false
        }
    }
    return true
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}