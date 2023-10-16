/* O hotel sossego precisa criar um sistema computacional para registrar a
abertura de chamados. A abertura de um novo chamado consiste em
registrar problemas e solicitações de acordo com as necessidades do
hotel.
Exemplo: O apartamento 601 está com o ventilador de teto quebrado.
É preciso registrar essa ocorrência, para que a equipe de manutenção
tome conhecimento sobre o serviço a ser realizado. O sistema deve
registrar o nome do funcionário, cargo. O chamado deve possuir
descrição, local, data de abertura, data de fechamento, status (aberto, em
execução, fechado).*/

import express from 'express';

// Definindo a interface para um chamado
interface Chamado {
  funcionario: string;
  matricula: number;
  cargo: string;
  descricao: string;
  local: string;
  dataAbertura: Date;
  dataFechamento?: Date;
  status: string;
}

// Classe que representa o sistema de registro de chamados
class SistemaDeChamados {
  chamados: Chamado[];

  constructor() {
    this.chamados = [];// Inicializando o array de chamados
  }

  // Método para abrir um novo chamado
  abrirChamado(chamado: Chamado) {
    chamado.dataAbertura = new Date();
    chamado.status = "Aberto";
    this.chamados.push(chamado);// Adicionando o chamado ao array de chamados
  }

  // Método para fechar um chamado existente
  fecharChamado(index: number) {
    const chamado = this.chamados[index];// Obtendo o chamado pelo índice
    if (chamado) {
      chamado.dataFechamento = new Date();
      chamado.status = "Fechado";
    }
  }

  // Método para imprimir todos os chamados registrados
  imprimirChamados() {
    this.chamados.forEach((chamado, index) => {// Percorrendo o array de chamados
      console.log(`Chamado ${index + 1}:`);
      console.log(`Funcionário: ${chamado.funcionario}`);
      console.log(`Matricula: ${chamado.matricula}`);
      console.log(`Cargo: ${chamado.cargo}`);
      console.log(`Descrição: ${chamado.descricao}`);
      console.log(`Local: ${chamado.local}`);
      console.log(`Data de abertura: ${chamado.dataAbertura}`);
      if (chamado.dataFechamento) {// Verificando se o chamado foi fechado
        console.log(`Data de fechamento: ${chamado.dataFechamento}`);
      }
      console.log(`Status: ${chamado.status}`);
      console.log("==============================");
    });
  }
}

// Exemplo de uso do sistema de registro de chamados
const sistemaChamados = new SistemaDeChamados();

const chamado1: Chamado = {// Criando um novo chamado
  funcionario: "Lucas Jorge",
  matricula: 123456,
  cargo: "eletricista",
  descricao: "Ventilador de teto quebrado no apartamento 601",
  local: "Apartamento 601",
  dataAbertura: new Date(),
  status: "Aberto",
};

sistemaChamados.abrirChamado(chamado1);// Abrindo o chamado
sistemaChamados.imprimirChamados();// Imprimindo os chamados

sistemaChamados.fecharChamado(0);// Fechando o chamado
sistemaChamados.imprimirChamados();// Imprimindo os chamados
