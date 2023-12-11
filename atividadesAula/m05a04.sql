/* Calculando um aumento de 10% no valor do frete. */

SELECT CodigoDoCliente, Frete,
(Frete * 1.1) AS
frete_aumentado_em_10_porcento
FROM pedidos

/* Realizar uma consulta (SELECT) na tabela categorias que exiba: CodigoDaCategoria,
NomeDaCategoria e a Descrição. */

SELECT CodigoDaCategoria, NomeDaCategoria, Descricao
FROM categorias;

/* Realizar uma consulta na tabela fornecedores realizar uma consulta que exiba:
NomeDaEmpresa, NomeDoContato, endereço, telefone, homepage.*/

SELECT NomeDaEmpresa, NomeDoContato, Endereco, Telefone, HomePage
FROM fornecedores;

/* Na tabela transportadoras realizar uma consulta que exiba: NomeDaEmpresa, Telefone. */

SELECT NomeDaEmpresa, Telefone
FROM transportadoras;

/* Na tabela transportadoras inserir(INSERT) o seguinte dado: Mercado Livre, 4020 1735. */

INSERT INTO transportadoras (NomeDaEmpresa, Telefone)
VALUES ('Mercado Livre', '4020 1735');

/* Na tabela transportadoras excluir(DELETE) o cliente Mercado Livre. */

DELETE FROM transportadoras
WHERE NomeDaEmpresa = 'Mercado Livre';

/* O Gerente precisa de um relatório que exiba o nome da empresa e endereço de
todos os clientes, a consulta deve ser ordenada pelo nome da empresa.
(Pesquisar ORDER BY). */

SELECT NomeDaEmpresa, Endereco
FROM clientes
ORDER BY NomeDaEmpresa;

/* O Gerente precisa de um relatório que exiba todos os pedidos que foram
realizados entre os dias 01/09/1996 e 30/09/1996 (Pesquisar BETWEEN). */

SELECT *
FROM pedidos
WHERE DataDoPedido BETWEEN '1996-09-01' AND '1996-09-30';

/* O Gerente precisa de um relatório que exiba o nome dos funcionário dos que
começam com a letra P, a consulta deve ser ordenada pelo nome do funcionário
(Pesquisar LIKE). O relatório deve conter: Nome, Cargo, telefone. */

SELECT Nome, Cargo, Telefone
FROM funcionarios
WHERE Nome LIKE 'P%'
ORDER BY Nome;

/* O Gerente precisa saber o nome do funcionário cuja formação acadêmica seja
em economia. O relatório de deve exibir o nome e o cargo do funcionário.
Dica: Utilizar o operador LIKE na coluna observações. */

SELECT Nome, Cargo
FROM funcionarios
WHERE Observacoes LIKE '%economia%';

/* O Gerente precisa de um relatório que exiba os clientes que são da cidade de
Marseille. O relatório deve exibir o nome da empresa, cidade e o país. */

SELECT NomeDaEmpresa, Cidade, Pais
FROM clientes
WHERE Cidade = 'Marseille';

-- which is the name of the customer who placed this order?
SELECT clientes.NomeDaEmpresa
FROM clientes
JOIN pedidos ON clientes.CodigoDoCliente = pedidos.CodigoDoCliente
WHERE pedidos.NumeroDoPedido = 10285

