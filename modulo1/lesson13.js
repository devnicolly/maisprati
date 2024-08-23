/*
    Objetivo: Calcular a média das notas dos alunos de um professor e verificar se está acima da média 
    de aprovação. Use um loop for...in para iterar sobre as propriedades dentro de professor.grades.
    Imprima se o professor está acima da média de aprovação (considerando 3.0 como média).
*/

let professor = {
	nome: "girafales",
	materia: "literatura",
	notas: {
		aluno1: 20,
		aluno2: 2,
		aluno3: 3,
	}
}

let soma = 0
let numeroDeEstudantes = 0


for (let chave in professor.notas){
	soma += professor.notas[chave]
	numeroDeEstudantes++
}

let media = soma / numeroDeEstudantes

console.log(media.toFixed(2))

if (media>= 6){
	console.log(`o professor ${professor.nome} tem a média ${media.toFixed(2)} e está acima da média.`)
} else {
	console.log (`o professor ${professor.nome} está abaixo da média`)
}

/*
    Objetivo: Verificar e listar livros publicados antes de 2000.
    Use um loop for...of para iterar sobre o array biblioteca.
    Imprima o título e o ano dos livros que atendem a essa condição.
*/

let biblioteca = [
	{ titulo: "o hobbit", autor:"J. J. R Tolkien", ano: 1925 },
	{ titulo: "duna", autor: "frank hebert", ano: 1965 },
	{ titulo: "pare de se odiar", autor: "nem sei", ano: 2019}
]

for (let livro of biblioteca){
	if (livro.ano < 2000){
		console.log(`o livro ${livro.titulo}, escrito por ${livro.autor}, foi publicado em ${livro.ano}`)
	}
}

/*
    Objetivo: Contar a quantidade de filmes por gênero.
    Use o método forEach para iterar sobre o array filmes.
    Para cada filme, verifique se o gênero já existe no objeto de contagem. 
    Se existir, incremente a contagem; se não, adicione o gênero ao objeto com a contagem inicial de 1.
*/

const movies = [
	{ title: "the red shoes", genre: "musical" },
	{ title: "little women", genre: "romance" },
	{ title: "psycho", genre: "horror" },
	{ title: "singin in the rain", genre: "musical" }
]

let genreCount = {}

movies.forEach(movie => {
    if(genreCount[movie.genre]){
        genreCount[movie.genre]++
    } else {
		genreCount[movie.genre] = 1
    }
})

for(let genre in genreCount){
    console.log(`Existem ${genreCount[genre]} filmes do gênero ${genre}`)
}

