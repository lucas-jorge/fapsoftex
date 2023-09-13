//Questão 2.

/* Criação de Classe: Como você define uma classe chamada Cliente em
JavaScript? */

class Cliente {
    constructor(nome, sobrenome, dataNascimento, sexo, cpf, idade) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.dataNascimento = dataNascimento;
        this.sexo = sexo;
        this.cpf = cpf;
        this.idade = idade;
    }

    getNome() {
        return this.nome;
    }

    setNome(nome) {
        this.nome = nome;
    }

/* Criação de Método: Como você adiciona um método chamado statusCliente à
classe Cliente que exibe "Cliente ativo no Sistema." quando chamado? */

    statusCliente() {
        return 'Cliente ativo no Sistema.';
    }

/* Criação de Propriedade: Como você adiciona as propriedades nome,
sobreNome, idade, sexo, email, telefoneFixo, telefoneMovel, endereço, status
à classe Cliente? */

    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
    this.sexo = sexo;
    this.email = email;
    this.telefoneFixo = telefoneFixo;
    this.telefoneMovel = telefoneMovel;
    this.endereco = endereco;
    this.status2 = status2;

//Construtor: Criar o construtor da classe Cliente.

    constructor(nome, sobrenome, dataNascimento, sexo, cpf, idade) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.dataNascimento = dataNascimento;
        this.sexo = sexo;
        this.cpf = cpf;
        this.idade = idade;
        }

//Método Getter e Setter: Crie os métodos get e set da classe Carro.

  class Carro {
    constructor(marca, modelo, ano, cor, preco) {
      this.marca = marca;
      this.modelo = modelo;
      this.ano = ano;
      this.cor = cor;
      this.preco = preco;
    }
  
    getMarca() {
      return this.marca;
    }
  
    setMarca(marca) {
      this.marca = marca;
    }
  
    getModelo() {
      return this.modelo;
    }
  
    setModelo(modelo) {
      this.modelo = modelo;
    }
  
    getAno() {
      return this.ano;
    }
  
    setAno(ano) {
      this.ano = ano;
    }
  
    getCor() {
      return this.cor;
    }
  
    setCor(cor) {
      this.cor = cor;
    }
  
    getPreco() {
      return this.preco;
    }
  
    setPreco(preco) {
      this.preco = preco;
    }
  }


/* Herança: Crie uma classe chamada ClientePessoFisica e outra
ClientePessoaJuridica que herde da classe Cliente. Adicione a propriedade
CPF à ClientePessoaFisica, e CNPJ à ClientePessoaJuridica. */

class ClientePessoaFisica extends Cliente {
    constructor(nome, sobrenome, dataNascimento, sexo, cpf, idade) {
        super(nome, sobrenome, dataNascimento, sexo, cpf, idade);
        this.cpf = cpf;
    }
}

class ClientePessoaJuridica extends Cliente {
    constructor(nome, sobrenome, dataNascimento, sexo, cpf, idade) {
        super(nome, sobrenome, dataNascimento, sexo, cpf, idade);
        this.cnpj = cnpj;
    }
}

/* Propriedade Estática: Adicione uma propriedade estática chamada
totalClientes na classe Cliente para saber o número total de clientes criados. */

// Inicializa a propriedade estática totalClientes

Cliente.totalClientes = 0;

/* Instanciando Objetos: Como você cria uma instância de um
ClientePessoaFisica e ClientePessoaJuridica, a partir da classe Cliente? */

const cliente1 = new ClientePessoaFisica('Lucas', 'Jorge', '29/05/1986', 'H', '12345678901', 35);
const cliente2 = new ClientePessoaJuridica('Bruna', 'Jorge', '29/05/1986', 'M', '12345678901', 33);

/* Chamada de Métodos: Cria dois objetos para cada classe, no caso
ClientePessoaFisica e ClientePessoaJuridica? */

//imprime as propriedades do cliente1
console.log(cliente1.nome);
console.log(cliente1.sobrenome);
console.log(cliente1.dataNascimento);
console.log(cliente1.sexo);
console.log(cliente1.cpf);
console.log(cliente1.idade);
console.log(cliente1.statusCliente());

//imprime as propriedades do cliente2
console.log(cliente2.nome);
console.log(cliente2.sobrenome);
console.log(cliente2.dataNascimento);
console.log(cliente2.sexo);
console.log(cliente2.cpf);
console.log(cliente2.idade);
console.log(cliente2.statusCliente());

/* Contagem de Carros: Como você acessa a propriedade estática totalClientes
para saber quantos clientes foram criados no total? */

console.log(Cliente.totalClientes);