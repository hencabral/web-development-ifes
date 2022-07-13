/* Faça um programa que imprima a tabuada de todos os números de 1 a 10 (dica: use uma estrutura de repetição dentro de outra). */

for (let i = 0; i <= 10; i++) {
    console.log(`Tabuada de ${i}`)
    for (let j = 0; j <= 10; j++){
        console.log(`${j} * ${i} = ${j*i}`)
    }
}