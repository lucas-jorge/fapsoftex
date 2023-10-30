-- Active: 1697656846758@@127.0.0.1@3306@hotel
CREATE SCHEMA hotel;

CREATE TABLE `hotel`.`funcionario` (
  `idfuncionario` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idfuncionario`)
);

CREATE TABLE `hotel`.`chamado` (
  `idchamado` INT NOT NULL AUTO_INCREMENT,
  `descricao` VARCHAR(45) NOT NULL,
  `data_abertura` DATE NOT NULL,
  `data_fechamento` DATE NOT NULL,
  `status` VARCHAR(10) NOT NULL,
  `fk` INT NOT NULL,
  PRIMARY KEY (`idchamado`),
  INDEX `fk_idx` (`fk` ASC) VISIBLE,
  CONSTRAINT `fk`
    FOREIGN KEY (`fk`)
    REFERENCES `hotel`.`funcionario` (`idfuncionario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
);

ALTER TABLE `hotel`.`funcionario`
  ADD COLUMN `cargo` VARCHAR(45) NOT NULL AFTER `nome`;

INSERT INTO hotel.chamado
  (descricao, data_abertura, data_fechamento, status, fk)
VALUES
  ('Apt 204 Torneira com vazamento', '2023-10-29', '1900-01-01', 'Aberto', 1);

SELECT idchamado, descricao, data_abertura, data_fechamento, status FROM hotel.chamado;

SELECT funcionario.nome, chamado.descricao, chamado.data_abertura, chamado.status
FROM hotel.funcionario
INNER JOIN hotel.chamado ON hotel.funcionario.idfuncionario = hotel.chamado.fk;

INSERT INTO hotel.funcionario
  (nome, cargo, idfuncionario)
  VALUES
  ('João', 'Gerente', 1);