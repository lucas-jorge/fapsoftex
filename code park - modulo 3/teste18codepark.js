const fila = [3, 7, 9, 1, 0];
const numerosExcluidosFila = [];

while (fila.length > 0) {
  const elementoRemovido = fila.shift(); 
  numerosExcluidosFila.push(elementoRemovido);
}

console.log("Fila - Sequência de números removidos:", numerosExcluidosFila);

const lista = [3, 7, 9, 1, 0];
const numerosExcluidosLista = [];

while (lista.length > 0) {
  const elementoRemovido = lista.shift(); 
  numerosExcluidosLista.push(elementoRemovido);
}

console.log("Lista - Sequência de números removidos:", numerosExcluidosLista);

const pilha = [3, 7, 9, 1, 0];
const numerosExcluidosPilha = [];

while (pilha.length > 0) {
  const elementoRemovido = pilha.pop(); 
  numerosExcluidosPilha.push(elementoRemovido);
}

console.log("Pilha - Sequência de números removidos:", numerosExcluidosPilha);