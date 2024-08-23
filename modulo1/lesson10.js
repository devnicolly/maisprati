let thingslist = Array()

thingslist ["hardware"] = Array()
thingslist ["fruits"] = Array ()

thingslist ["hardware"][0]= "notebook"
thingslist ["fruits"][0] = "laranja"
thingslist ["fruits"][1] = "maça"
thingslist ["hardware"][1] = "teclado"

console.table (thingslist)  //exibe como tabela

let  fruitslist = Array()

fruitslist[0] = "maça"
fruitslist[1] = "banana"
fruitslist[2] = "melancia"
fruitslist[3] = "morango"
fruitslist[4] = "uva"

console.log (fruitslist.sort()) //coloca os itens do array em ordem

let index = fruitslist.indexOf("morango") //retorna a posição em que o elemento está

if (index === -1){
	console.log ("Elemento não existe")
} else{ 
	console.log (`o elemento existe e está na posição: ${index}`)
}

let numberList = []

numberList [0] = 10
numberList [1] = 12
numberList [2] = 16
numberList [3] = 0

console.log(numberList.sort((a, b) => a - b)) //coloca os números em ordem 
// verifica se a primeira posiçao do array (a) é menor que a última (b) e reordena a partir disso, se retorna negativo (a-b) significa que a é menor que b, ou seja fica na frente e ao contrário.



//funções (evitar redundancia de codigo e fazer tarefas repetitivas)

function calculateArea (width, height){
	let area = width * height
	return area
}

let width = 10
let height = 200

let area = calculateArea (width, height)

console.log (`a área possui ${area} metros quadrados.`)

//funçao de ordenar array

let alfabeto = ["A", "C", "F", "D", "B"]

function ordena (arrayASerOrdenado){
	return arrayASerOrdenado.sort ()
}

console.log(ordena(alfabeto))



