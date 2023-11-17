/* Modelo Lógico:

Livro (ISBN: string, Título: string, Ano_Publicação: date)
Autor (ID_Autor: int, Nome: string, Sobrenome: string)
Usuário (ID_Usuário: int, Nome: string, Sobrenome: string, Endereço: string)
Empréstimo (ID_Empréstimo: int, ID_Usuário: int, ISBN: string, Data_Emprestimo: date, Data_Devolução: date)
Livro_Autor (ISBN: string, ID_Autor: int) */

-- Criação das tabelas

create schema atividadeJoy;

CREATE TABLE Livro (
    ISBN VARCHAR(13) NOT NULL,
    Título VARCHAR(50) NOT NULL,
    Ano_Publicação DATE NOT NULL,
    PRIMARY KEY (ISBN)
);

CREATE TABLE Autor (
    ID_Autor INT NOT NULL,
    Nome VARCHAR(50) NOT NULL,
    Sobrenome VARCHAR(50) NOT NULL,
    PRIMARY KEY (ID_Autor)
);

CREATE TABLE Usuário (
    ID_Usuário INT NOT NULL,
    Nome VARCHAR(50) NOT NULL,
    Sobrenome VARCHAR(50) NOT NULL,
    Endereço VARCHAR(50) NOT NULL,
    PRIMARY KEY (ID_Usuário)
);

CREATE TABLE Empréstimo (
    ID_Empréstimo INT NOT NULL,
    ID_Usuário INT NOT NULL,
    ISBN VARCHAR(13) NOT NULL,
    Data_Emprestimo DATE NOT NULL,
    Data_Devolução DATE NOT NULL,
    PRIMARY KEY (ID_Empréstimo),
    FOREIGN KEY (ID_Usuário) REFERENCES Usuário(ID_Usuário),
    FOREIGN KEY (ISBN) REFERENCES Livro(ISBN)
);

CREATE TABLE Livro_Autor (
    ISBN VARCHAR(13) NOT NULL,
    ID_Autor INT NOT NULL,
    PRIMARY KEY (ISBN, ID_Autor),
    FOREIGN KEY (ISBN) REFERENCES Livro(ISBN),
    FOREIGN KEY (ID_Autor) REFERENCES Autor(ID_Autor)
);

/* crie um Modelo Entidade-Relacionamento (MER) usando o BrModelo e identifique as
entidades, os seus atributos e os seus relacionamentos. Alguns exemplos de entidades podem ser: Livro,
Autor, Usuário, Empréstimo, Devolução etc. Crie os relacionamentos apropriados, como "Usuário faz
Empréstimo" ou "Livro é escrito por Autor". Converta o MER em um Modelo Lógico, especificando os tipos
de dados dos atributos e criando chaves primárias e estrangeiras. */

