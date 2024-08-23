//estrutura de dados 
//array é a estrutura de dados mais simples do js
//listas podem ter qualquer tamanho
//listas simplesmente encadeadas
//cada elemento representa um nó ou node, com nome, valor e ponteiro

//o primeiro elemento sempre é o head 
//cada item tem que sinalizar o próximo 

class Node {
	constructor(data){
		this.data = data
		this.next = null
		//next representa o próximo elemento
		//começa como null
	}
}

class LinkedList{
	constructor(){
		this.head = null
		this.size = 0
	}

	add(data){
		let newNode = new Node(data)

		if(this.head === null){
			this.head = newNode
		} else {
			let current = this.head
			while(current.next !== null){
				current = current.next
			}

			current.next = newNode
		}
		
		this.size++
	}

insertAt(data, index){
	if(index < 0  || index > this.size){
		return console.log("index fora dos limites")
	}

	let newNode = new Node(data)
	let current = this.head
	let previous 

	if(index === 0){
		newNode.next = this.head
		this.head = newNode
	} else {
		for (let i = 0; i < index; i++){
			previous = current
			current = current.next
		}

		newNode.next = current
		previous.next = newNode
	}

	this.size++
}

removeFrom(index){
	if(index < 0  || index > this.size){
		return console.log("index fora dos limites")
	}

	let current = this.head
	let previous

	if(index === 0){
		this.head = current.next
	} else{
		for(let i = 0; i < index; i++){
			previous = current
			current = current.next
		}

		previous.next = current.next
	}

	this.size--
	return current.data
}

indexOf(data){
	let current = this.head
	let index = 0

	while(current !== null){
		if(current.data === data){
			return index
		}

		index++
		current = current.next
	}

	return -1
}

isEmpty(){
	return this.size === 0
}

sizeOfList(){
	return this.size
}

	printList(){
		let current = this.head
		while(current !== null){
			console.log(current.data)
			current = current.next
		}
	}
}

let list = new LinkedList()

list.add("elemento 0")
list.add ("elemento 1")
list.add("elemento 2")
list.add("elemento 3")

console.log(list.indexOf("elemento 3"))
list.removeFrom(1)
list.printList()

console.log(list.sizeOfList())

// list.insertAt("nicolly", 1)
// list.removeFrom(1)
// list.printList()

