const Lista1 = ["E", "es", "progr", "usa", "lis"]
const Lista2 = ["u", "tou", "amando", "ndo", "tas"]
let lista3 = []

for (let i = 0; i < Lista1.length; i++) {
    lista3.push(Lista1[i] + Lista2[i])
}

console.log(lista3.join(' '))