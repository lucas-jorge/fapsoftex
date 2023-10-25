/* Tarefa:
● Criar um arquivo aluno.ts
● Criar a classe aluno com as propriedades: nome, nota1, nota 2 e media.
● Criar um arquivo index.ts, onde será exibido o nome do aluno, as notas a média e a situação:
○ Se a media for maior que 7 aprovado.
○ Se menor que 7 e maior ou igual a 4 em recuperação.
○ Menor que 4 reprovado. */

class Aluno {
    nome: string;
    nota1: number;
    nota2: number;
    media: number;

    constructor(nome: string, nota1: number, nota2: number, media: number) {
        this.nome = nome;
        this.nota1 = nota1;
        this.nota2 = nota2;
        this.media = media;
    }

    situacao() {
        if (this.media >= 7) {
            return "Aprovado";
        } else if (this.media >= 4) {
            return "Recuperação";
        } else {
            return "Reprovado";
        }
    }
} 

let aluno1 = new Aluno("João", 7, 8, 7.5);