/*Crie um código com um objeto chamado "Banco". Ele deverá ter propriedades que incluem conta, saldo, tipo de conta e agência e os seus métodos devem ser: buscar saldo, depósito, saque e número da conta.

Observações:

- buscar saldo deve retornar o valor atual do saldo;

- para o depósito, você deverá passar um valor como parâmetro e adicioná-lo no saldo final do

objeto;

-para o saque, você deverá passar um valor como parâmetro e subtraí-lo no saldo final do objeto;

- o número da conta deve retornar o número da conta.*/

let banco = {
    conta: 123456,
    saldo: 1000,
    tipoConta: "corrente",
    agencia: 1234,
    buscarSaldo: function () {
        return this.saldo;
    },
    deposito: function (valor) {
        this.saldo += valor;
    },
    saque: function (valor) {
        this.saldo -= valor;
    },
    numeroConta: function () {
        return this.conta;
    }
}

console.log(banco.buscarSaldo());
banco.deposito(300);
console.log(banco.buscarSaldo());
banco.saque(400);
console.log(banco.buscarSaldo());
console.log(banco.numeroConta());