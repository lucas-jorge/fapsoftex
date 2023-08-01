//Faça um algoritmo de ordenação utilizando o método insertion sort.
//Crie um método que execute as seguintes operações:

//- Tamanho do vetor: 30;
//- Utilize números ímpares;
//- Opere em ordem crescente.

function insertionSort(arr) {
    const n = arr.length;
    for (let i = 1; i < n; i++) {
      let current = arr[i];
      let j = i - 1;
  
      while (j >= 0 && arr[j] > current) {
        arr[j + 1] = arr[j];
        j--;
      }
  
      arr[j + 1] = current;
    }
  }
  function generateOddNumbersArray(size) {
    const arr = [1, 27, 55, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21,23, 25, 29, 31, 33, 35, 37, 39, 41, 43, 45,47, 49, 51, 53, 57, 59];
    for (let i = 0; arr.length < size; i += 2) {
      arr.push(i);
    }
    return arr;
  }
  
  function main() {
    const size = 30;
    const numbersArray = generateOddNumbersArray(size);
  
    console.log("Array antes da ordenação:");
    console.log(numbersArray);
  
    insertionSort(numbersArray);
  
    console.log("Array após a ordenação:");
    console.log(numbersArray);
  }
  
  main();