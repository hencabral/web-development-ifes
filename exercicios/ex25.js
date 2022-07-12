const vet = [8, 9, 6, 3, 7, 2, 5, 4, 1, 2, 7, 8, 5, 9, 4, 2, 3]

for (let i in vet) {
    if (vet[i] % 2 == 0) {
        vet.splice(i, 1)
    }
}

console.log(vet)