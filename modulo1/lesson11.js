//função anonima (função será variavél) (arrow function)
//sem retorno

// let teste = function (){
// 	console.log ("olá, mundo!")
// }

// teste ()

// function showfunction (sucesscallback, errorcallback){
// 	if (false){
// 		sucesscallback ("requisição bem sucedidada")
// } else {
// 	errorcallback ("erro na requisição")
// }
// }
// let sucesscallback = function (message){
// 	console.log (message)
// }

// // let errorcallback = function (message){
// // 	console.error(message)
// // }

// //arrow function
// let errorcallback = (message) => {
// 	console.error (message)
// }
// showfunction(sucesscallback, errorcallback)

// //função de somar elementos de um array

// let listaNumeros = [10, 20, 40, 30]

// // let arrSum = function(arr){ //ou function [nome](){}
// // 	let sum = 0

// // 	for(let i = 0; i < arr.length; i++){
// // 		sum += arr [i]
// // 	}
// // 	return sum
// // }

// // let sum = arrSum(arr)
// // console.log (sum)


// //função de encontrar o maior número no array

// function findMax (listaNumeros){
// 	let maior = listaNumeros[0]

// 	for (let i = 0; i < listaNumeros.length; i++){
// 		if (listaNumeros[i] > maior){
// 			maior = listaNumeros[i]
// 		}
// 	}

// 	return maior
// }

// let maior = findMax (listaNumeros)
// console.log (maior)

// //reverter um array

// function reverseArray (listaNumeros){
// 	let reversed = []

// 	for (let i = listaNumeros.length - 1; i >= 0 - 1; i--){
// 		reversed.push (listaNumeros[i])
// 	}
// 	return reversed
// }

// let reversed = reverseArray (listaNumeros)
// console.log (reversed)

// array com somente números pares


//contar ocorrencias de um valor


//funções importantes de tratamento de strings

let nome = "nicolly"

console.log (nome.length) //tamanho da string
console.log (nome.charAt(0)) //volta a posição de um caractere 
console.log(nome.indexOf("o")) //procura onde ta o caractere
console.log(nome.replace("nico", "mico"))//substitui a string

console.log(nome.substr(0, 4)) //extrair uma parte da string (a partir de qual posição, quantos caracteres vc quer mostrar)

console.log(nome.toLowerCase())//passar para letra minuscula
console.log(nome.toUpperCase())//passar para maiuscula

console.log ("-" + nome.trim() + "-")// remove extremidades em branco da string

//funçoes matemáticas

console.log(Math.ceil(100.73)) //arredonda pra cima
console.log(Math.floor(100.73)) //arredonda pra baixo
console.log(Math.round(100.73))// acima de meio p baixo acima p cima
console.log(Math.sqrt(100)) // raiz quadrada
console.log(Math.pow(100, 2))// potenciação
console.log(Math.cbrt(100)) // raiz cubica
console.log(Math.abs (100.20)) //numero absoluto
console.log(Math.random() * 100)//numero aleatorio entre 0 e 1

//funções de datas

let date = new Date()//com base no sistema dele

console.log (date.getDate())//retorna o dia de hoje
console.log(date.getMonth() + 1)//mostra o mes (+1 pra sair de zero)
console.log(date.getFullYear())//mostra ano


console.log(date.toString())//mostra a data escrita (string)
date.setDate(date.getDate() + 720)//mostra a data completa
console.log(date.toString()) //720 dias dps

date.setFullYear(date.getFullYear() + 720) //vai mudar o ano e mostrar o escrito -->
console.log(date.toString())




let date1 = new Date (2024, 7, 6)
let date2 = new Date (2023, 7, 6)

console.log(date1.toString())

console.log (date1.getTime())//vai pegar o horario (milesegundos de 1970 ate hoje)

let mileseconds_between_dates = Math.abs (date1.getTime() - date2.getTime())
console.log(mileseconds_between_dates) //quantidade de milisegundos entre datas

let mileseconds_per_day = (1 * 24 * 60 * 60 * 1000)
console.log(`um dia tem ${mileseconds_per_day} milisegundos por dia`) //quantos milisegundos tem num dia

console.log(`a diferença entre as datas é de ${Math.ceil(mileseconds_between_dates/mileseconds_per_day)} dias`) //formula para saber a diferença de dias entre as datas usando os milisegundos

//inverter uma string

let nominho = "nicollao"

function inverterString (nominho){
	for (i = nominho.length; i >= 0; i--){
		console.log(nominho.charAt(i))
	}
}
//contar vogais


//gerar número aleátorio


//dias entre duas datas


//formatar data