SELECT * FROM transacoes;

SELECT 
    id AS ID_Transacao,
    data AS Data,
    valor AS Valor,
    produto_id AS ID_Produto,
    usuario_id AS ID_Usuario
FROM transacoes;

SELECT * FROM transacoes
WHERE valor > 100;

SELECT * FROM transacoes
ORDER BY valor DESC;

SELECT 
    AVG(valor) AS Valor_Medio,
    MAX(valor) AS Valor_Maximo,
    MIN(valor) AS Valor_Minimo,
    COUNT(*) AS Total_Transacoes
FROM transacoes;

SELECT 
    produto_id,
    AVG(valor) AS Media_Valor
FROM transacoes
GROUP BY produto_id;

SELECT 
    categoria,
    COUNT(*) AS Total_Produtos_Vendidos,
    SUM(valor) AS Valor_Total_Vendas,
    AVG(valor) AS Media_Valor_Transacao
FROM transacoes
JOIN produtos ON transacoes.produto_id = produtos.id
GROUP BY categoria;

/* Insights a partir dos Resultados das Consultas
Tendências de Vendas e Desempenho do Produto: Analisando a média, o valor máximo e mínimo das transações, podemos identificar produtos com desempenho excepcional ou abaixo do esperado.
Comportamento do Consumidor: A consulta filtrada por transações acima de R$ 100,00 pode revelar padrões de consumo de clientes de alto valor.
Eficácia das Campanhas de Marketing: Agrupando as vendas por categoria de produto, é possível avaliar o impacto de campanhas de marketing específicas.
Otimização de Estoque e Preços: As informações sobre produtos mais vendidos e o valor médio das transações podem ajudar na otimização do estoque e na estratégia de preços. */