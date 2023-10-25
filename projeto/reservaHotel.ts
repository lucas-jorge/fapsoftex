/* SISTEMA RESERVA DE HOTEL
Um hotel deseja registrar os dados de reservas feitas por telefone, então resolveu criar um sistema
para isso;
• Para cada clientes devem ser registrados CPF, nome, telefone e sexo. Deve ser registrado também
a quantidade de pessoas que participaram da reserva.
• É interessante registrar a nacionalidade do Cliente.
• Os clientes podem reservar um tipo de quarto do hotel para uma determinada data e por uma
certa quantidade de dias.
• Os quartos são cadastrados por número, andar e tipo.
• Para a confirmação da reserva é necessário fazer um pagamento de no mínimo 50% do valor,
através de cartão de crédito. Devem ser registrados os dados da operadora com código e nome da
operadora. Do cliente basta o número do cartão de crédito.
• As reservas devem apresentar um status, indicando se a reserva foi confirmada, cancelada ou
utilizada.
faça em typescript */

class Cliente {
    cpf: string;
    nome: string;
    telefone: string;
    sexo: string;
    nacionalidade: string;
    num_cartao: string;

    constructor(cpf: string, nome: string, telefone: string, sexo: string, nacionalidade: string, num_cartao: string) {
        this.cpf = cpf;
        this.nome = nome;
        this.telefone = telefone;
        this.sexo = sexo;
        this.nacionalidade = nacionalidade;
        this.num_cartao = num_cartao;
    }
}

class Quarto {
    numero: number;
    andar: number;
    tipo: string;

    constructor(numero: number, andar: number, tipo: string) {
        this.numero = numero;
        this.andar = andar;
        this.tipo = tipo;
    }
}

class ReservaHotel {
    cliente: Cliente;
    quarto: Quarto;
    data_inicio: Date;
    num_dias: number;
    valor_total: number;
    operadora: string;
    status: string;

    constructor(cliente: Cliente, quarto: Quarto, data_inicio: Date, num_dias: number, valor_total: number, operadora: string, status: string) {
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
    valor: number;
    operadora: string;
    status: string;

    constructor(valor: number, operadora: string) {
        this.valor = valor;
        this.operadora = operadora;
    }

    efetuarPagamento() {
        this.status = "pago";
    }
}
