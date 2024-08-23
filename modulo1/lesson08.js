const prompt = require ("prompt-sync")()

//arrays ou vetores (listas)

let carros = Array()

carros [0] = "civic"
carros [1] = 10
carros [2] = true
carros ["hyago"] = "10"

let motos = Array("CBR", "ninja", 10)
let livros = ["senhor dos aneis", "o hobbit", "harry potter"]

livros.push("duna") // add ao final
livros.unshift("1984") // add ao inicio
livros.pop() // retira do final
livros.shift() // retira do inicio
livros.splice(2, 0, "duna") // retira da posição escolhida e substitui (posição, delete, substituição/adição) (0 = não vai substituir apenas add) (somente o 2 iria deletar da segunda posição em diante)

console.log(carros)
console.log(livros)