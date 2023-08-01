//Construa um algoritmo de ordenação, utilizando o método bubble sort estudado. (Lembre-se que se trata de uma série de instruções que devem ser seguidas passo a passo).
//Para isso, você deve criar um método em que o tamanho do vetor seja dez e deve estar em ordem crescente.

// vetor deverá:
//- comparar seus elementos dois a dois adjacentes;
//- se os elementos não estiverem em ordem, então ordenar;
//- senão, avançar para o próximo par;
//- repetir a operação até que nenhuma troca possa ser feita no vetor inteiro.


function bubbleSort(array) {
    let n = array.length;
    let troca;
  
    do {
      troca = false;
  
      for (let i = 0; i < n - 1; i++) {
        if (array[i] > array[i + 1]) {
          [array[i], array[i + 1]] = [array[i + 1], array[i]];
          troca = true;
        }
      }
  
      n--;
    } while (troca);
  
    return array;
  }
  
  const arr = [0, 23, 46, 39, 52, 65, 78, 91, 104, 117];
  bubbleSort(arr);
  console.log("Array ordenado:", arr);