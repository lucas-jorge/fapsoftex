//Lista Orientação a Objetos em Javascript

//Questão 1.
//Criação de Classe: Como você define uma classe chamada Aluno em JavaScript?

class Aluno {
    constructor(nome, matricula, curso) {
      this.nome = nome;
      this.matricula = matricula;
      this.curso = curso;
    }
  
    getNome() {
      return this.nome;
    }
  
    setNome(nome) {
      this.nome = nome;
    }
  
    getMatricula() {
      return this.matricula;
    }
  
    setMatricula(matricula) {
      this.matricula = matricula;
    }
  
    getCurso() {
      return this.curso;
    }
  
    setCurso(curso) {
      this.curso = curso;
    }
  }
  
//Criação de Método: Como você adiciona um método chamado statusAluno à
//classe Aluno que exibe "Aluno ativo no Sistema." quando chamado?

    statusAluno() {
        return 'Aluno ativo no Sistema.';
    }

//Criação de Propriedade: Como você adiciona as propriedades nome à classe
//Aluno?

    this.nome = nome;

//Construtor: Criar o construtor da classe Aluno.

    constructor(nome, matricula, curso) {
        this.nome = nome;
        this.matricula = matricula;
        this.curso = curso;
        }

//Método Getter e Setter: Crie os métodos get e set da classe Aluno.

    getNome() {
        return this.nome;
    }

    setNome(nome) {
        this.nome = nome;
    }

    getMatricula() {
        return this.matricula;
    }

    setMatricula(matricula) {
        this.matricula = matricula;
    }

    getCurso() {
        return this.curso;
    }

    setCurso(curso) {
        this.curso = curso;
    }

//Instanciando Objetos: Como você cria uma instância de um Aluno a partir da
//classe Aluno?

    const aluno1 = new Aluno('Lucas', 123, 'ADS');
    const aluno2 = new Aluno('Bruna', 456, 'Direito');

//Chamada de Métodos: Cria dois objetos para Aluno?

    const aluno3 = new Aluno('Lucas', 123, 'ADS');
    const aluno4 = new Aluno('Bruna', 456, 'Direito');

//Contagem de Carros: Exiba os alunos cadastrados no Sistema.

    console.log(aluno3);
    console.log(aluno4);
    