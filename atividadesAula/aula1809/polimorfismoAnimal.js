// Classe base
class Animal {
    constructor(name) {
      this.name = name;
    }
  
    makeSound() {
      console.log("O animal faz um som.");
    }
  }
  
  // Subclasse que estende a classe Animal
  class Dog extends Animal {
    makeSound() {
      console.log("O cachorro late.");
    }
  }
  
  // Subclasse que estende a classe Animal
  class Cat extends Animal {
    makeSound() {
      console.log("O gato mia.");
    }
  }
  
  // Função que recebe um objeto Animal e chama o método makeSound
  function makeAnimalSound(animal) {
    animal.makeSound();
  }
  
  // Criando instâncias das classes Dog e Cat
  const dog = new Dog("Rex");
  const cat = new Cat("Whiskers");
  
  // Chamando a função makeAnimalSound com diferentes objetos
  console.log(dog.name);
  makeAnimalSound(dog); // Saída: "O cachorro late."
  console.log(cat.name)
  makeAnimalSound(cat); // Saída: "O gato mia."