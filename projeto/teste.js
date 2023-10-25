class Cliente {
    constructor(cpf, nome, telefone, sexo, nacionalidade, num_cartao) {
      this.cpf = cpf;
      this.nome = nome;
      this.telefone = telefone;
      this.sexo = sexo;
      this.nacionalidade = nacionalidade;
      this.num_cartao = num_cartao;
    }
  }
  
  class Quarto {
    constructor(numero, andar, tipo) {
      this.numero = numero;
      this.andar = andar;
      this.tipo = tipo;
    }
  }
  
  class Reserva {
    constructor(cliente, quarto, data_inicio, num_dias, valor_total, operadora, status) {
      this.cliente = cliente;
      this.quarto = quarto;
      this.data_inicio = data_inicio;
      this.num_dias = num_dias;
      this.valor_total = valor_total;
      this.operadora = operadora;
      this.status = status;
    }
  
    confirmarReserva() {
      this.status = "confirmada";
    }
  
    cancelarReserva() {
      this.status = "cancelada";
    }
  
    utilizarReserva() {
      this.status = "utilizada";
    }
  }
  
  class Pagamento {
    constructor(valor, operadora) {
      this.valor = valor;
      this.operadora = operadora;
    }
  
    efetuarPagamento() {
        this.status = "pago";
    }
  }