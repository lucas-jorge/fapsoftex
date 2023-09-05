/* Instruções

Com base no que estudamos, escolha dois objetos materiais e dois abstratos. Em seguida, faça uma lista com, pelo menos, três atributos e três métodos para cada tipo de objeto. Para finalizar, demonstre esses objetos em JavaScript e exemplifique as suas características e ações */

// Objetos materiais
const celular = {
    marca: 'Samsung',
    modelo: 'Galaxy A53',
    cor: 'Preto',
    ligar: function() {
        console.log('Ligando...')
    },
    desligar: function() {
        console.log('Desligando...')
    },
    tocar: function() {
        console.log('Tocando...')
    }
}

const carro = {
    marca: 'Ford',
    modelo: 'Ka',
    cor: 'Branco',
    ligar: function() {
        console.log('Ligando...')
    },
    desligar: function() {
        console.log('Desligando...')
    },
    acelerar: function() {
        console.log('Acelerando...')
    }
}

// Objetos abstratos
const pessoa = {
    nome: 'Lucas',
    idade: 35,
    sexo: 'Masculino',
    falar: function() {
        console.log('Falando...')
    },
    andar: function() {
        console.log('Andando...')
    },
    comer: function() {
        console.log('Comendo...')
    }
}

const animal = {
    nome: 'Gato',
    idade: 5,
    sexo: 'Masculino',
    miar: function() {
        console.log('Miau miau...')
    },
    andar: function() {
        console.log('Andando...')
    },
    comer: function() {
        console.log('Comendo...')
    }
}

// Exemplos
console.log(celular)
console.log(carro)
console.log(pessoa)
console.log(animal)

celular.ligar()
carro.ligar()
pessoa.falar()
animal.miar()
