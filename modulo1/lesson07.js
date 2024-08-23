 const prompt = require ("prompt-sync")()

// //variavel; condição; incremento (estrutura de repetição for)

// let multiplier = Number(prompt("digite o número da tabuada:"))

// for (let counter = 0; counter <= 10; counter++){
// 	console.log (`${multiplier} * ${counter} =`, multiplier * counter)
// }

// // imprimir valores pares entre 0 e 20

// for (let i = 0; i <=20; i =+ 2){
// 	console.log (i)
// }

// calcular a soma dos números de 1 atw 100
//  let sum = 0

// for (let j= 1; j <= 100; j++){
// 	sum += j
// }

// //imprimam os valores de 1 até 10 em ordem decrescente

// for (let contador = 10; (contador >= 1); contador--){
// 	console.log (contador)
// }

//estrutura de repetição enquanto (while)
//

// let i = 10

// while (i > 0){
// 	console.log(i)
// 	i--
// }

//calcular as somas dos números de 1 ate 100 com while

// let sum = 0
// let i = 1

// while (i <= 100){
// 	sum += i
// 	i++
// }
// console.log (sum)

//fazer um algoritmo para receber números decimais até que o usuario digite 0 e fazer a media aritmetica desses números

// let numb = Number(prompt ("digite o valor:"))
// let counter = 0
// let soma = 0

// while (numb !== 0){
// 	numb = Number(prompt("digite o valor:"))
// 	soma += numb
// 	counter++
// }

// console.log ("a média aritmetica é:", soma/counter)

//escreva um algoritmo para imprimir os 50 primeiros número primos maiores que 100
//obs: número primo é aquele que é divisivel apenas por 1 e ele mesmo


// do while faz a verificação apenas no final, ou seja ele funciona pelo menos uma vez

//solicitar números ao usuário até ele inserir um número negativo
let numb

do {
	numb = Number(prompt("digite um número:"))
} while (numb >= 0)


