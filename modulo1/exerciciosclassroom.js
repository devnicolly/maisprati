const prompt = require ("prompt-sync")()

// verifique se um número é positivo, negativo ou zero

// let number1 = Number(prompt("digite o valor:"));

// if (number1 === 0){
// 	console.log ("esse número é nulo");
// } else if (number1 > 0) {
// 	console.log("esse número é positivo");
// } else if (number1 < 0){
// 	console.log ("esse número é negativo");
// } else {
// 	console.log ("erro: informe um número.")
// }

//Escreva um programa que leia um ano e use uma estrutura if para verificar se o ano é bissexto. Um ano é bissexto se for divisível por 4, mas não por 100, exceto se também for divisível por 400.

// let year = Number(prompt("digite o ano:"));

// if ((year % 4 === 0 && year % 100 !== 0 ) || (year % 400 === 0)){
// 	console.log ("esse ano é bissexto.") 
// } else {
// 	console.log ("esse ano não é bissexto.")
// }

//Escreva um programa que leia três notas de um aluno, calcule a média e use uma estrutura if/else para determinar o conceito (A, B, C, D, E, F) baseado na média. Imprima o conceito.

// let nota1 = Number(prompt("digite a primeira nota:"));
// let nota2 = Number(prompt("digite a segunda nota:"));
// let nota3 = Number(prompt("digite a terceira nota:"));
// media = (nota1 + nota2 + nota3) / 3;

// console.log (`a média é igual a: ${media.toFixed(2)}`);

// if (media >= 8){
// 	console.log ("desempenho: A");
// } else if (media < 8 && media >= 5){
// 	console.log ("desempenho: B");
// } else if (media < 5 && media >= 3){
// 	console.log ("desempenho: C");
// } else {
// 	console.log ("desempenho: D");
// }

// Escreva um programa que leia a idade de um nadador e use uma estrutura if/else para determinar a categoria do nadador de acordo com a idade:
//        Infantil A: 5 - 7 anos
//        Infantil B: 8 - 10 anos
//        Juvenil A: 11 - 13 anos
//        Juvenil B: 14 - 17 anos
//        Adulto: 18 anos ou mais

// let ageSwimmer = Number(prompt("digite a idade do atleta: "));

// if ((ageSwimmer >= 5 && ageSwimmer <=7) || (ageSwimmer < 5 && ageSwimmer > 0)){
// 	console.log ("CATEGORIA: Infantil A");
// } else if (ageSwimmer >= 8 && ageSwimmer <= 10){
// 	console.log ("CATEGORIA: Infantil B");
// } else if (ageSwimmer >= 11 && ageSwimmer <= 13){
// 	console.log ("CATEGORIA: Juvenil A");
// } else if (ageSwimmer >= 14 && ageSwimmer <=17){
// 	console.log ("CATEGORIA: Juvenil B");
// } else {
// 	console.log ("CATEGORIA: Adulto");
// }


// 9 - Verifique a faixa etária de uma pessoa
// Escreva um programa que leia a idade de uma pessoa e use uma estrutura if/else para determinar a faixa etária:
//             Criança: 0 - 12 anos
//             Adolescente: 13 - 17 anos
//             Adulto: 18 - 59 anos
//             Idoso: 60 anos ou mais

// Dica: Utilize uma estrutura switch dentro do bloco if/else para imprimir uma mensagem específica para cada faixa etária.


// let age =  Number(prompt("Informe a sua idade:"))
// ageRange

// if (age >=0 && age <= 12){
// 	ageRange = "criança"
// } else if (age>= 13 && age <= 17) {
// 	ageRange = "adolescente"
// } else if (age >= 18 && age <= 60){
// 	ageRange = "adulto"
// } else {
// 	ageRange = "idade inválida"
// }

// switch (ageRange){
// 	case "criança":
// 		console.log ("você é criança")
// 		break
// 	case "adolescente":
// 		console.log ("você é adolescente")
// 		break
// 	case "adulto":
// 		console.log ("você é adulto")
// 	default:
// 		console.log ("idade inválida")
// }


// Encontre o maior divisor comum (MDC) de dois números
// Escreva um programa que use um loop do while para encontrar o maior divisor comum (MDC) de dois números fornecidos (por exemplo, 56 e 98).

// Dica: Utilize o algoritmo de Euclides, onde você repete o processo de substituir o maior número pela diferença dos dois números até que ambos sejam iguais.

let num1 = Number(prompt("Informe o primeiro valor:"))
let num2 = Number(prompt("Informe o segundo valor:"))

let a = num1
let b = num2

do {
	let temp = b
	b = a % b
	a = temp
} while (b !== 0)

const MDC = a

console.log (`o maior divisor comum de ${num1} e ${num2} é ${MDC}`)

// Escreva um algoritmo para imprimir os 50 primeiros número primos maior que 100.
// Obs.: Número primo é aquele divisível somente por 1 e ele mesmo.

// let prime = Number(prompt("digite o número:"))

// for (let i = 1; i < prime; i++){
// 	if ((prime % i === 0) && (i !== 1)){
// 		console.log ("não é primo")
// 		break
// 	}

// 	if (i === (prime - 1)){
// 		console.log ("é primo")
// 	}
// }

// let count = 0
// let numero = 100

// do {
// 	let primo = 0
// 	for (let i = 1; i <= numero; i++){
// 		if (numero % i === 0){
// 			primo++
// 		}
// 	}

// 	if (primo === 2){
// 		console.log (numero)
// 		count++
// 	}

// 	numero++
// } while (count < 50)

let carros = Array()

carros [0] = "civic"

