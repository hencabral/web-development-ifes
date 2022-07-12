const prompt = require('readline-sync')

resp = true
let x = 0

while (resp) {
    x = prompt.questionInt("Numero: ")
    if (!(x < 0 || x > 10)) {
        resp = false
    }
}

for (let i = 0; i <= 10; i++) {
    console.log(`${i} * ${x} = ${i * x}`)
}