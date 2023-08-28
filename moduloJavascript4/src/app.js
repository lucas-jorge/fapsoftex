const express = require('express');
const app = express();

// Banco Object Definition
const banco = {
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
};

// API Routes
app.get("/saldo", (req, res) => {
  res.send('Saldo: ' + banco.buscarSaldo()); 
});

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send("Internal Server Error");
});

// Listen for incoming requests
const port = 3000; // Change this to your desired port number
app.listen(port, () => console.log('Servidor iniciado!'));