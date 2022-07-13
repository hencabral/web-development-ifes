/* Crie um programa com uma lista inicializada com os valores a seguir:
{ 8, 9, 6, 3, 7, 2, 5, 4, 1, 2, 7, 8, 5, 9, 4, 2, 3 }
O programa deve remover da lista todos os elementos pares e, ao fim, exibir a lista com os elementos separados por vírgula. */

let lista = [8, 9, 6, 3, 7, 2, 5, 4, 1, 2, 7, 8, 5, 9, 4, 2, 3]

for (i = 0; i < lista.length; i++) {
    if (lista[i] % 2 == 0) {
        lista.splice(i, 1)
    }
}

console.log(lista)