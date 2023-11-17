/* Você é o gerente de uma loja de eletrônicos e deseja utilizar um banco de dados para rastrear o estoque de seus produtos. Para isso,
você precisa executar várias ações de gerenciamento no banco de dados da loja.
Nesse caso, a tabela de banco de dados disponível é:

Produtos
Colunas: ProdutoID (Chave Primária), Nome do Produto, Preço, Quantidade em Estoque.

Crie os seguintes comandos para inserção e manipulação de dados, partindo do pressuposto de que os de criação da tabela já foram
criados. Eles são:

1. inserção de produtos (INSERT): insira três novos produtos na tabela "Produtos" com os seguintes dados:
- produto 1: Nome - "Smartphone", Preço - 799.99, Quantidade - 20 unidades em estoque;
- produto 2: Nome - "Tablet", Preço - 349.99, Quantidade - 10 unidades em estoque;
- produto 3: Nome - "Fone de Ouvido", Preço - 49.99, Quantidade - 50 unidades em estoque.

2. atualização de estoque (UPDATE): atualize o estoque do "Smartphone" para 25 unidades e o preço para 849.99 na tabela
"Produtos." */

-- Resolução:
INSERT INTO Produtos (NomeProduto, Preco, QuantidadeEstoque)
 VALUES ("Smartphone", 799.99, 20),
 ("Tablet", 349.99, 10),
 ("Fone de Ouvido", 49.99, 50);
-- 
 UPDATE Produtos
 SET QuantidadeEstoque = 25, Preco = 849.99
 WHERE NomeProduto = "Smartphone";
