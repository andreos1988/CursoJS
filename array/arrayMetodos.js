const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // massa quebrou o carro

console.log(pilotos)

pilotos.push('Verstappen') // adiciona no Fim da array
console.log(pilotos)

pilotos.shift()//remove do começo da array
console.log(pilotos)

pilotos.unshift('Hamilton') //adiciona no começo da array
console.log(pilotos)

pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

//remover
pilotos.splice(3,1)
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2)

console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)


//dada a array de pilotos adicione dois 
//pilotos no final da array e dois no começo

pilotos.push('Xuma')
pilotos.push('Kaka')
pilotos.unshift('Ronaldo')
pilotos.unshift('Rivaldo')

console.log(pilotos)

pilotos.shift()
pilotos.shift()

console.log(pilotos)

//adicione um piloto na segunda posição da array

pilotos.splice(2, 0, 'Vettel')

console.log(pilotos)

pilotos.splice(6,1)

console.log(pilotos)

//pegue 2 elementos do 
//fim da array e coloque numa nova array!

let novosPilotos = pilotos.slice(4,6)

console.log(novosPilotos)