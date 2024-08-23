//objetos em javascript

let serie = {
	nome: "the boys",
	genero: ["ação, paródia, heróis"],
	nrTemporadas: 4,
	status: "em andamento",
	classificacao: 18,
	nrEpsodios:{
		temp1: 10,
		temp2: 20
	},

	mostrarCaracteristicas: function () {
		 return `o nome da série é: ${this.nome} E sua classificação é +${this.classificacao}`
	},
} //tem que usar this pois é uma função que está dentro do objeto

//utilizar return e tirar parenteses

// console.log(serie.mostrarCaracteristicas())//objeto.parametro


//objeto livro

let livro = {
	nome: "senhor dos aneis",
	genero: "ficção",
	paginas: 300,
	tipoDeCapa: "dura",
	nrCapitulos: {
		cap1: 100,
		cap2: 100,
		cap3: 100
	},

	mostrarLivro: function (){
		return `O livro ${this.nome} é do genero ${this.genero} e possui ${this.paginas} páginas`
	}
}

// console.log (livro.mostrarLivro())


//objeto carro

let carro ={
	modelo:"hb20",
	marca:"fiat",
	cor:"branco",
	portas:4,
	ano:2010,
	mostrarCarro: function (){
		return `O carro ${this.modelo} da marca ${this.marca} possui ${this.portas} portas, na cor ${this.cor} e ano de ${this.ano}`
	}
}

// console.log(carro.mostrarCarro())


//outra forma de criar um objeto

let motor = "1000"
let nome = "bmw s1000rr"
let tipo = "esportiva"

let moto = {
	nome:nome,
	tipo: tipo,
	motor: motor
}

// console.log(moto)

let atleta = {
	nome: "rayssa leal",
	esporte: "skate sreet",
	idade: 16
}
//adiciona coisas ao objeto
atleta.medalhas = {
	ouro: 10,
	prata:1,
	bronze: 1
}

atleta.nacionalidade = "brasil" //adicionar uma caracteristica

atleta.celebrarVitoria = function () { return "ganhei!!!" }//função do objeto

// console.log (atleta)
// console.log(atleta.celebrarVitoria()) 

let obj1 = {
	nome: "bruce",
	profissao: "batman"
}


let obj2 = obj1 //eles serão iguais

obj2.companheiro = "robin" //muda nos 2, pois objetos são por referencia, se muda 1 vai mudar o 2

// console.log (obj1)
// console.log(obj2)


//função construtora

function computador (processador, gpu, ram, armazenamento){
	this.processador = processador
	this.gpu = gpu
	this.armazenamento = armazenamento
	this.ram = ram 

	this.ligar = function (){
		console.log (`O ${this.processador} est´funcionando!`)
	}

	this.mostrarEspecificacoes = function (){
	return (`processador: ${this.processador}
			gpu: ${this.gpu}
			ram: ${this.ram}
			armazenamento: ${this.armazenamento}`)
	}
}

let pc =  new computador ("i9", "rtx200", "16gb", "500gb")

// console.log (pc.mostrarEspecificacoes())


//são objetos vazios que serão preenchidos e estruturados
//new cria um novo objeto
//constroi um objeto a partir dos parametros indicados 



//design pattern

//função construtra, mais simples e sem utilizar new, apenas por parametros

function jogos (titulo, genero, anoLancamento, empresa, jogar){
	return{
		titulo,
		genero,
		anoLancamento,
		empresa,
		jogar
	}
}

	let jogo1 = jogos("final Fantasy", "rpg", "1997","saquere-soft", () => { return ("jogando") })

// console.log(jogo1.jogar())


//novas estruturas de repetição, que interam sobre arrays e objetos
//for in, for off e forEach


//iterar sobre propiedades de um objeto, percorre por todo o objeto e key representa a chave 
//key representa cada atributo do meu objeto
//chaves ou indices de algo enumeravel

for(let key in jogo1){
// 	console.log (`${key}: ${jogo1[key]}`)
 }

const jogadores = ["pelé", "messi", "cr7"]

for(let key in jogadores){
	// console.log(jogadores[key])
}


//atua somente se for iteravel, pois acessa a posição do valor em si
//não possui chave

const NOME = "silva"

//vai mostrar os caracteres por posição s i l v a
for(let char of NOME){
	// console.log(char)
}

for(let jogador of jogadores){
	// console.log(jogador)
}


//transforma o objeto em iteravel

for(let jogo of Object.keys(jogo1)){
	// console.log(jogo1[jogo])
}

//iterem sobre objetos criados na aula com in e of 

for (let chave in livro){
	console.log (livro[chave])
}


for (let teste of Object.keys(carro)){
	console.log(carro[teste])
}

