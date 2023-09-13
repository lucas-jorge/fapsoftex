/* Questão EXTRA: Suponha que você está desenvolvendo um sistema de
gerenciamento de veículos em JavaScript. Você precisa criar classes para
representar carros comuns e carros esportivos. Os carros têm propriedades como
marca, modelo, ano e velocidade. Além disso, você deseja rastrear o número total
de carros criados.

a) Crie uma classe chamada Carro que tenha as propriedades marca, modelo, ano
e velocidade. Implemente também um método acelerar que aumenta a velocidade
em 10 unidades e um método desacelerar que diminui a velocidade em 10
unidades. */

class Carro {
    constructor(marca, modelo, ano) {
      this.marca = marca;
      this.modelo = modelo;
      this.ano = ano;
      this.velocidade = 0;
      Carro.totalCarros++;
    }
  
    acelerar(velocidade) {
      this.velocidade += velocidade;
    }
  
    desacelerar(velocidade) {
      this.velocidade -= velocidade;
    }
  
    exibirInformacoes() {
      console.log(`Marca: ${this.marca}`);
      console.log(`Modelo: ${this.modelo}`);
      console.log(`Ano: ${this.ano}`);
      console.log(`Velocidade: ${this.velocidade} km/h\n`);
    }
  }

/* b) Crie uma classe chamada CarroEsportivo que herda da classe Carro. Além
disso, ela tem uma propriedade chamada turbo que armazena true ou false. O
método acelerar da classe CarroEsportivo deve aumentar a velocidade em 20
unidades se o turbo for true. */

class CarroEsportivo extends Carro {
    constructor(marca, modelo, ano, velocidade, turbo) {
        super(marca, modelo, ano, velocidade);
        this.turbo = turbo;
    }

    acelerar() {
        if (this.turbo) {
            this.velocidade += 20;
        } else {
            this.velocidade += 10;
        }
    }
}

/* c) Implemente um método estático chamado totalCarros na classe Carro para
rastrear o número total de carros criados.*/

// Inicializa a propriedade estática totalCarros
Carro.totalCarros = 0;


/*d) Crie uma instância de um carro comum e uma instância de um carro esportivo.
Use os métodos para acelerar e desacelerar os carros e exiba suas informações,
incluindo a marca, modelo, ano e velocidade. */
  
  // Criar uma instância de um carro comum (Ford Ka)
  const carroComum = new Carro("Ford", "Ka", 2016);
  
  // Acelerar o carro comum para 60 km/h
  carroComum.acelerar(60);
  
  // Exibir informações do carro comum
  console.log("Informações do Carro Comum:");
  carroComum.exibirInformacoes();
  
  // Criar uma instância de um carro esportivo (Porsche 911)
  const carroEsportivo = new Carro("Porsche", "911", 2023);
  
  // Acelerar o carro esportivo para 180 km/h
  carroEsportivo.acelerar(180);
  
  // Exibir informações do carro esportivo
  console.log("Informações do Carro Esportivo:");
  carroEsportivo.exibirInformacoes();
  
  // Desacelerar o carro esportivo para 120 km/h
  carroEsportivo.desacelerar(60);
  
  // Exibir informações atualizadas do carro esportivo
  console.log("Informações do Carro Esportivo (após desacelerar):");
  carroEsportivo.exibirInformacoes();  

/* e) Verifique quantos carros foram criados no total usando o método estático
totalCarros da classe Carro. */

console.log(Carro.totalCarros);//imprime o total de carros criados r = 2
