const readline = require('readline-sync')

var turno = readline.question("Digite o turno em que você estuda - M (matutino) / V (vespertino) / N (noturno): ")

const turnoUpper = turno.toUpperCase()

switch (turnoUpper) {
    case 'M':
        console.log('Bom dia!')
        break;
    case 'V':
        console.log('Boa tarde!')
        break;
    case 'N':
        console.log('Boa noite!')
        break;
}