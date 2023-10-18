CREATE TABLE Chamado (
    id INT PRIMARY KEY AUTO_INCREMENT,
    funcionario VARCHAR(255),
    matricula INT,
    cargo VARCHAR(255),
    descricao TEXT,
    local VARCHAR(255),
    dataAbertura DATE,
    dataFechamento DATE,
    status VARCHAR(255)
);
--inserindo alguns dados

INSERT INTO Chamado (funcionario, matricula, cargo, descricao, local, dataAbertura, status)
VALUES ('Lucas Jorge', 123456, 'eletricista', 'Ventilador de teto quebrado no apartamento 601', 'Apartamento 601', CURRENT_DATE, 'Aberto');

-- selecionando os dados

SELECT * FROM Chamado;

--fazer uma consulta que traga o nome do funcionario e a descrição

SELECT funcionario, descricao 
FROM Chamado;
