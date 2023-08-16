function verificarEntrada(entrada) {
    if (typeof entrada === 'number') {
        if (entrada % 2 === 0) {
            console.log('A entrada é um número par.');
        } else {
            console.log('A entrada é um número ímpar.');
        }
    } else if (typeof entrada === 'string') {
        console.log('A entrada é uma string.');
    } else {
        console.log('A entrada não é um número nem uma string.');
    }
}

// Testando a função
verificarEntrada(4);      // A entrada é um número par.
verificarEntrada(7);      // A entrada é um número ímpar.
verificarEntrada('texto'); // A entrada é uma string.