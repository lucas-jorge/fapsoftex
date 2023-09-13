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
      Carro.totalCarros++;//Incrementa a propriedade estática totalCarros
    }
  
    acelerar(velocidade) {//método acelerar
      this.velocidade += velocidade || 10;
    }
  
    desacelerar(velocidade) {//método desacelerar
      this.velocidade -= velocidade || 10;
    }
  
    exibirInformacoes() {//método exibirInformacoes
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

class CarroEsportivo extends Carro {//classe CarroEsportivo que herda da classe Carro
    constructor(marca, modelo, ano, velocidade, turbo) {
        super(marca, modelo, ano, velocidade);
        this.turbo = turbo;
    }

    acelerar() {//método acelerar da classe CarroEsportivo
        if (this.turbo) {
            this.velocidade += 20;
        } else {
            this.velocidade += 10;
        }
    }
}

/* c) Implemente um método estático chamado totalCarros na classe Carro para
rastrear o número total de carros criados.*/

Carro.totalCarros = 0;//Inicializa a propriedade estática totalCarros


/*d) Crie uma instância de um carro comum e uma instância de um carro esportivo.
Use os métodos para acelerar e desacelerar os carros e exiba suas informações,
incluindo a marca, modelo, ano e velocidade. */

  const carroComum = new Carro("Ford", "Ka", 2016);//Criar uma instância de um carro comum (Ford Ka)
  
  carroComum.acelerar(60);//Acelerar o carro comum para 60 km/h
  
  console.log("Informações do Carro Comum:");
  carroComum.exibirInformacoes();//Exibir informações do carro comum
  
  const carroEsportivo = new Carro("Porsche", "911", 2023);//Criar uma instância de um carro esportivo (Porsche 911)
  
  carroEsportivo.acelerar(180);//Acelerar o carro esportivo para 180 km/h
  
  console.log("Informações do Carro Esportivo:");
  carroEsportivo.exibirInformacoes();//Exibir informações do carro esportivo
  
  carroEsportivo.desacelerar(60);//Desacelerar o carro esportivo em 60 km/h
  
  console.log("Informações do Carro Esportivo (após desacelerar):");
  carroEsportivo.exibirInformacoes();//Exibir informações do carro esportivo após desacelerar

console.log(Carro.totalCarros);//imprime o total de carros criados r = 2
