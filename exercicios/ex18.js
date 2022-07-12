let mega = []

for (let i = 0; i < 6; i++) {
  num = random(1, 60)
  if (verificarMega(num)) {
    mega.push(num)
  } else {
    console.log(num)
    i--
  }
}

console.log(mega)

function verificarMega(num) {
  for (let i = 0; i < mega.length; i++) {
    if (num == mega[i]) {
      return false
    }
  }
  return true
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}