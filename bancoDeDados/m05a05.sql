-- 1. Inserção de dados: insira alguns registros nas tabelas "Autores" e "Livros". Certifique-se de que existam, pelo menos, três autores e cinco

-- Criação da tabela Autores
CREATE TABLE Autores (
    AutorID INT PRIMARY KEY,
    Nome VARCHAR(255),
    Nacionalidade VARCHAR(100)
);

-- Criação da tabela Livros
CREATE TABLE Livros (
    LivroID INT PRIMARY KEY,
    Titulo VARCHAR(255),
    AutorID INT,
    FOREIGN KEY (AutorID) REFERENCES Autores(AutorID)
);

/* 2. Consulta simples: realize uma consulta simples para listar todos os autores e seus livros associados; */

SELECT * FROM Autores;
SELECT * FROM Livros;

/* 3. Consulta com junção INNER JOIN: crie uma consulta que utilize INNER JOIN para listar os detalhes dos livros e seus autores
correspondentes; */

SELECT Livros.Titulo, Autores.Nome
FROM Livros
INNER JOIN Autores ON Livros.AutorID = Autores.AutorID;


/* 4. Consulta com junção LEFT JOIN: elabore uma consulta que utilize LEFT JOIN para exibir todos os autores, independentemente de terem
livros associados. Inclua informações dos livros, se disponíveis; */

SELECT Autores.Nome, Livros.Titulo
FROM Autores
LEFT JOIN Livros ON Autores.AutorID = Livros.AutorID;

/* 5. Consulta com filtro por nacionalidade: realize uma consulta que liste os autores e seus livros, mas restrinja os resultados apenas aos
autores de uma nacionalidade específica; */

SELECT Autores.Nome, Livros.Titulo
FROM Autores
INNER JOIN Livros ON Autores.AutorID = Livros.AutorID
WHERE Autores.Nacionalidade = 'Inglaterra';

/* 6. Consulta agregada: crie uma consulta que agregue dados para contar quantos livros cada autor escreveu. */

SELECT Autores.Nome, COUNT(Livros.LivroID) AS 'Quantidade de Livros'
FROM Autores
LEFT JOIN Livros ON Autores.AutorID = Livros.AutorID
GROUP BY Autores.Nome;
