const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']

pilotos.pop() // Retira o último elemento

console.log(pilotos)

pilotos.push("Verstappen")
console.log(pilotos)

pilotos.shift() // Retira o primeiro elemento
console.log(pilotos)

pilotos.unshift('Hamilton') // Inclui na primeira possição
console.log(pilotos)

// Splice pode adicionar e remover elementos

// adicionar
// Vai adicionar entre o alonso e o Raikkonen, no indice 2, o Bottas e Massa
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

// remover elementos. A partir do indice 3, remove 1 elemento
pilotos.splice(3, 1)
console.log(pilotos)

// Slice. Gera um novo array
// pega o array a partir do indice 2 até o final
const algunsPilotos1 = pilotos.slice(2)
console.log(algunsPilotos1)

// pega a partir do indice 1 até o 4, mas o 4 fica de fora.
const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)