const readline = require('readline-sync')

let aux = readline.questionInt("Digite um valor: ")

function par() {
    for (i = 0; i <= aux; i++) {
        if (i % 2 == 0) {
            console.log(i)
        }
    }

}

par()