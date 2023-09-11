const pessoa = {};
pessoa.nome = "Lucas";
pessoa.sobrenome = "Jorge";
pessoa.idade = 35;
pessoa.sexo = "H";
pessoa.bairro = 'Casa Forte';
pessoa.cidade = 'Recife';
pessoa.saudacao = function () {
    return 'Olá, tudo bem? O meu nome é ' + this.nome + ', meu sobrenome é ' + this.sobrenome + ' e tenho ' + this.idade + ' anos.';
};

console.log(pessoa.saudacao());