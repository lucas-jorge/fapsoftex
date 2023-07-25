//uma função calculadora que os números e as operações serão feitas pelo usuário. O código deve ficar rodando infinitamente até que o usuário escolha a opção de sair. No início, o programa mostrará a seguinte lista de operações:
//1: Soma
//2: Subtração
//3: Multiplicação
//4: Divisão
//0: Sair

//Digite o número para a operação correspondente e caso o usuário introduza qualquer outro, o sistema deve mostrar a mensagem “Essa opção não existe” e voltar ao menu de opções.

//Após a seleção, o sistema deve pedir para o usuário inserir o primeiro e segundo valor, um de cada. Depois precisa executar a operação e mostrar o resultado na tela. Quando o usuário escolher a opção “Sair”, o sistema irá parar. 

//É necessário que o sistema mostre as opções sempre que finalizar uma operação e mostrar o resultado. 

const prompt = require('prompt-sync')();

function soma(){

    let x = prompt("Primeiro numero: ");
    x = Number(x);
    let y = prompt("Segundo numero: ");
    y = Number(y);
    console.log("Soma: ",x+y)
}

function subtracao(){
    let x = prompt("Primeiro numero: ");
    x = Number(x);
    let y = prompt("Segundo numero: ");
    y = Number(y);
    console.log("Subtracao: ",x-y)
}

function multiplicacao(){
    let x = prompt("Primeiro numero: ");
    x = Number(x);
    let y = prompt("Segundo numero: ");
    y = Number(y);
    console.log("Multiplicacao: ",x*y)
}

function divisao(){
    let x = prompt("Primeiro numero: ");
    x = Number(x);
    let y = prompt("Segundo numero: ");
    y = Number(y);
    console.log("Divisao: ",x/y)
}

opcao=1

while (opcao!=0){
    console.log("Escolha uma das opções para começar a usar: ")
    console.log("0. Sair")
    console.log("1. Somar")
    console.log("2. Subtrair")
    console.log("3. Multiplicação")
    console.log("4. Divisão ")

    opcao = prompt("Digite a opção desejada: ")

    if (opcao!=0 && opcao!=1 && opcao!=2 && opcao!=3 && opcao!=4){
        console.log("Essa opção não existe, retornando ao menu principal");
    }

    if(opcao==1){
        soma()
    }
    if(opcao==2){
        subtracao()
    }
    if(opcao==3){
        multiplicacao()
    }
    if(opcao==4){
        divisao();
    }
} console.log("Saindo do programa");