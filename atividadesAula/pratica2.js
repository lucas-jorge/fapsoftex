const operacao = {
    soma: 3,
    sub: 2,
    multi: 4,
    div: 2
};

operacao.soma = 6 + operacao.soma ;
operacao.sub = 1 - operacao.sub ;
operacao.multi = 4 * operacao.multi ;
operacao.div = 2 / operacao.div ;

console.log('Bem vindo ao TABUATOR 2000!');
console.log(`As operações solicitadas são: ${operacao.soma}, ${operacao.sub}, ${operacao.multi}, ${operacao.div}.`);
console.log('Obrigado por usar o TABUATOR');