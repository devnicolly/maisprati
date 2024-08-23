//estruturas de controle condicionais

//simples

const grade = 5;

if (grade>= 60){
	console.log ("aprovado");
	console.log ("fim do código!");
}


//composta

if (grade >= 60){
	console.log ("aprovado");
} else {
	console.log ("reprovado");
}

// conferir se a pessoa pode prestrar concurso público a partir da idade

const age = 19;

if ((age >= 18) && (age <= 32)){
	console.log ("pode realizar o concurso!");
} else {
	console.log ("não pode realizar o concurso!");
}

// operador ternário (condição ? verdadeiro : falso)

let ternaryREsult = (10 < 100) ? "verdadeira" : "falsa";
console.log (ternaryREsult);