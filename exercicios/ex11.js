const readline = require('readline-sync')

//Faça um programa que leia um valor inteiro digitado pelo usuário e mostre todos os múltiplos desse valor entre 0 e 100.

let aux = readline.questionInt("Digite um valor: ")

function mult() {
    for (i = 0; i <= 100; i++) {
        if ((aux % i) == 0) {
            console.log(i)
        }
    }

}

mult()