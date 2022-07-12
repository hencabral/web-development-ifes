const lista1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let lista2 = []

for (let i = 0; i < lista1.length; i++) {
    lista2.push(Math.pow(lista1[i], 2))
}

console.log(lista2)