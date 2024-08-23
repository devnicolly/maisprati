const prompt = require ("prompt-sync")()

//soma dos elementos de um array

//escreva uma função que receba um array de números como parâmetro e retorne a soma de todos os elementos

let soma = 0
let listaNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let i = 0; i < listaNumeros.length; i++){
	soma += listaNumeros[i]
}

console.log (soma)

//encontre o maior número de um array

let maior = listaNumeros[0]

for (let i = 0; i < listaNumeros.length; i++){
	if (listaNumeros[i] > maior){
		maior = listaNumeros[i]
	}
}

console.log (maior)

//reverter um array mas NÃO em ordem crescente

let reversed = []

//esse - 1 é para atualizar o valor de comprimento de um array mas com um valor a mais
for(let j = listaNumeros.length - 1; j >= 0; j--){
	reversed.push (listaNumeros[j])
}

console.log (reversed)

//criar um novo array com somente os números pares

let pares = []

for (let k = 0; k < listaNumeros.length; k++){
	if (listaNumeros[k] % 2 === 0){
		pares.push (listaNumeros[k])
	}
}

console.log(pares)

//contar ocorrências de um valor 

let arrayal = [10, 20, 20, 5, 20]
let valor = Number(prompt("digite o valor:"))
let ocorrencias = 0
let palavraVez = ocorrencias > 1 ? "vezes" : "vez"


for (let m = 0; m < arrayal.length; m++){
	if (arrayal[m] === valor){
		ocorrencias++
	} 
}


if (ocorrencias > 0){
	console.log(`esse valor ${valor} aparece ${ocorrencias} ${palavraVez} no vetor.`)
} else {
	console.log (`o valor ${valor} não aparece no vetor`)
}



//arrays/vetores multidimensionais (matrizes)

//varios arrays dentro de um array
let matriz = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9]
]

console.table(matriz) //table mostra em colunas
console.log(matriz[0][2])//mostrará o valor do array na posição 0 (primeira linha) na posição 2, ou seja, o número 3


//mostrar posições dos numeros por linha e coluna

for (let linha = 0; linha < matriz.length; linha++){
	for (let coluna = 0; coluna < matriz[linha].length; coluna++){
		console.log(`elemento na posição [${linha}][${coluna}]: ${matriz[linha][coluna]}`)
	}
}

//somar colunas 1(linha1 + coluna1) + 2(linha1 + coluna1) para fazer a soma as matrieze precisam ser do msm tamanho

let arr1 = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9]
]

let arr2 = [
	[9, 8, 7],
	[6, 5, 4],
	[3, 2, 1]
]

let resultado = []

//tamanho da matriz (ela tem 3 arrays) // tamanho interno dos arrays

if (arr1.length !== arr2.length || arr1[0].length !== arr2[0].length){
	throw new Error ("os arrays devem ter o mesmo tamanho")  //comando para criar erro
}

for (let i = 0; i < arr1.length; i++){
	let somaLinha = []
	for (let j = 0; j < arr1[i].length; j++){
		somaLinha.push(arr1[i][j] + arr2[i][j]) //adiciona o resultado a posição [0] e assim por diante
	}
}	

	resultado.push(somaLinha) //aidicona o resultado a posição [0] e assim por diante
// }

console.table(resultado)

//somar diagonal principal da matriz 

let somaDiagonal = 0
let result = 0

for (let l = 0; l < arr1.length; l++){
	for (let c = 0; l < arr1[l].length; c++){
		if (l === c){
			somaDiagonal += arr1[l][c] 
			result += somaDiagonal
		}
	}
}

console.log(result)
