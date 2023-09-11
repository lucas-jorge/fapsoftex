var meses = ['Jan', 'Fev', 'Mar', 'Abr'];
const readline = require('readline-sync');
let status = 1;

while (status === 1) {

    console.log("-------Sistema de cadastro de registro--------");

    let op = readline.question("Digite 1 - Inserir, 2 - Alterar, 3 - Excluir, 4 - Listar: ");
    switch (op) {
        case '1':
            inserirMes();
            break;
        case '2':
            alterar();
            break;
        case '3':
            excluirMes();
            break;
        case '4':
            listarMes();
            break;
        default:
            console.log("Opção inválida.");
            break;
    }

    status = readline.question("Digite 1 para continuar no Sistema e 2 para sair: ");
}

function inserirMes() {
    console.log("-------Tela de cadastro de registro--------");
    let mes = readline.question("Digite o mês: ");
    meses.push(mes);
    listarMes();
}

function listarMes() {
    console.log("-------Relatório de todos os registros--------");
    for (var i = 0; i < meses.length; i++) {
        console.log(meses[i]);
    }
}

function retornaIndice(texto) {
    let indice = meses.indexOf(texto);
    return indice;
}

function alterar() {
    console.log("-------Tela para alterar o registro--------");
    listarMes();
    var mesAlterar = readline.question("Escolha o registro a ser alterado: ");
    var novoValor = readline.question("Informe o novo conteúdo: ");
    var registro = retornaIndice(mesAlterar);
    
    if (registro !== -1) {
        meses[registro] = novoValor;
        listarMes();
    } else {
        console.log("Registro não encontrado.");
    }
}

function excluirMes() {
    console.log("-------Tela para excluir o registro--------");
    listarMes();
    var mesExcluir = readline.question("Escolha o registro a ser excluído: ");
    var registro = retornaIndice(mesExcluir);
    
    if (registro !== -1) {
        meses.splice(registro, 1);
        listarMes();
    } else {
        console.log("Registro não encontrado.");
    }
}
