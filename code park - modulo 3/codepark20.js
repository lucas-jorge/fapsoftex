/*Temos o array [15, 8, 10, 25, 12, 30, 5, 20, 18, 7] e precisamos criar um código em JavaScript para encontrar o valor 20.

Para isso, temos que escolher entre realizar uma busca linear ou binária de acordo com a que for mais adequada para essa situação.

Codifique a solução mais eficiente para buscar o número 20 no array.*/

function buscaBinaria(arrayFuncao, alvo) {
    let esquerda = 0;
    let direita = arrayFuncao.length - 1;
  
    while (esquerda <= direita) {
      const meio = Math.floor((esquerda + direita) / 2);
  
      if (arrayFuncao[meio] === alvo) {
        return meio; // Retorna o índice do valor encontrado
      } else if (arrayFuncao[meio] < alvo) {
        esquerda = meio + 1; // Busca na metade direita do array
      } else {
        direita = meio - 1; // Busca na metade esquerda do array
      }
    }
  
    return -1; // Retorna -1 caso o valor não seja encontrado no array
  }
  
  const array = [15, 8, 10, 25, 12, 30, 5, 20, 18, 7];
  const targetValue = 20;
  const index = buscaBinaria(array, targetValue);
  
  if (index !== -1) {
    console.log(`O valor ${targetValue} foi encontrado no índice ${index}.`);
  } else {
    console.log(`O valor ${targetValue} não foi encontrado no array.`);
  }
  