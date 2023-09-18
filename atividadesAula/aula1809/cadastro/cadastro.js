var area = document.getElementById("area");
area.innerHTML = "PPS - Padrão de Projeto de Software";

function mensagem() {
    alert("Bem vindo(a) ao sistema de cadastro!");
}

window.onload = mensagem;

class Cliente {
    constructor(nome, sobrenome, dataNascimento, sexo) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.dataNascimento = dataNascimento;
        this.sexo = sexo;
    }

    exibirNome() {
        console.log(this.nome);
    }
}
//definir a funçao cadastrar onlick do botao
function cadastrar() {
    //pegar os valores dos inputs
    let nome = document.getElementById("nome").value;
    let sobrenome = document.getElementById("sobrenome").value;
    let dataNascimento = document.getElementById("dataNascimento").value;
    let sexo = document.getElementById("sexo").value;
    //criar um objeto cliente
    let cliente = new Cliente(nome, sobrenome, dataNascimento, sexo);
    //chamar a funcao handleRegistration
    handleRegistration(cliente);
}

function handleRegistration(cliente) {//funcao que recebe um objeto cliente
    try {
        console.log(cliente);//imprime o objeto cliente
        cliente.exibirNome();//chama o metodo exibirNome do objeto cliente
    } catch (error) {//trata o erro
        console.error("An error occurred during the registration: ", error);//imprime o erro
    }
}

const form = document.getElementById("cadastro");// Obter referência ao formulário de cadastro

// Adicionar um evento de submit ao formulário
form.addEventListener("submit", function(event) {
  event.preventDefault(); // Impede que o formulário seja enviado

  // Obter os valores dos campos do formulário
  const nome = document.getElementById("nome").value;
  const sobrenome = document.getElementById("sobrenome").value;

  // Exibir mensagem de sucesso
    alert(`Cliente ${nome} ${sobrenome} cadastrado com sucesso!`);
  /* const mensagem = `Cliente ${nome} ${sobrenome} cadastrado com sucesso!`;
  document.getElementById("area").textContent = mensagem; */

  // Limpar os campos do formulário
  form.reset();
});
