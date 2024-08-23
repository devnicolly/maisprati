const prompt = require ("prompt-sync")()

// um programa que solicite um número e verifica se é impar ou par

// let number = prompt ("digite um número:");

// if (number%2 == 0){
// 	console.log ("esse número é par!");
// } else {
// 	console.log ("esse número é ímpar!");
// }

// // um programa que compare 3 números e diga qual é o maior

// let n1 = prompt ("digite o 1º número:");
// let n2 = prompt ("digite o 2º número:");
// let n3 = prompt ("digite o 3º número:");
// let maior = n1;

// if ((n2 > n1) && (n2 > n3)){
// 	maior = n2;
// } else if ((n3 > n1) && (n3 > n2)){
// 	maior = n3;
// }

// console.log (`o maior número é ${maior}`);

// //programa que implemente uma calculadora simples com adição, subtração, multiplicação e divisão.


// let numb1 = Number(prompt ("digite o primeiro valor:"));
// let numb2 = Number(prompt ("digite o segundo valor:"));
// let operacao = Number(prompt ("digite a operação que deseja fazer (1) adição. (2) subtração. (3) divisão. (4) multiplicação."));
// let resultado = 0;

// if (operacao == 1){
// 	resultado = numb1 + numb2;
// } else if (operacao == 2){
// 	resultado = numb1 - numb2;
// } else if (operacao == 3){
// 	if (numb2 !== 0){
// 	resultado = numb1 / numb2;
// 	} else {
// 		console.log ("erro: divisão por 0.");
// 		resultado = undefined
// 	}
// } else if (operacao == 4){
// 	resultado = numb1 * numb2;
// }

// console.log (`o resultado é igual à: ${resultado}`);

//switch case (igual o escolha do portugol) melhor que utilizar muitos if else

let option = Number(prompt("escolha uma opção (1-2)"));

switch(option){
	case 1:
		console.log("você selecionou a primeira opção");
		break
	case 2:
		console.log ("você selecionou a segunda opção.");
		break
	default:
		console.log ("você não escolheu nenhuma das opções.");
}

//Verifiquem um dia da semana utilizando switch case (1 segunda...2 terça...etc)

let day = Number(prompt('Digite o dia da semana pela ordem (ex: 1 - segunda-feira):'));


switch (day){
	case 1:
		console.log ("segunda-feira!");
		break
	case 2:
		console.log ("terça-feira");
		break
	case 3:
		console.log ("quarta-feira");
		break
	case 4:
		console.log ("quinta-feira");
		break
	case 5:
		console.log ("sexta-feira");
		break
	case 6:
		console.log ("sábado");
		break
	case 7:
		console.log ("domingo");
		break
	default:
		console.log ("dia inválido");
}

//refaça o exercício da calculadora anterior utilizando switch case.
//programa que implemente uma calculadora simples com adição, subtração, multiplicação e divisão.


number1 = Number(prompt("digite o primeiro valor:"));
number2 = Number(prompt("digite o segundo valor:"));
result = 0;

let operation = Number(prompt("digite a operação que deseja fazer (1) adição, (2) subtração, (3) multiplicação, e (4) divisão."));

switch (operation){
	case 1:
		result = number1 + number2;
		console.log (`o resultado é: ${result}`);
		break;
	case 2:
		result = number1 - number2;
		console.log (`o resultado é: ${result}`);
		break;
	case 3:
		result = number1 * number2;
		console.log (`o resultado é: ${result}`);
		break;
	case 4:
		if (number2 !== 0){
			result = number1 / number2;
			console.log (`o resultado é: ${result}`);
			break;
		} else{
			console.log ("erro: divisão nula.")
		}
	default:
		console.log ("erro: operação invalida");
}






