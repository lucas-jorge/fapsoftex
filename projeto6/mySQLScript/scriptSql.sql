CREATE TABLE chamados (
    id INT PRIMARY KEY AUTO_INCREMENT,
    funcionario_nome VARCHAR(255),
    funcionario_cargo VARCHAR(255),
    descricao TEXT,
    local VARCHAR(255),
    data_abertura DATE,
    data_fechamento DATE,
    status ENUM('aberto', 'em_execucao', 'fechado')
);
