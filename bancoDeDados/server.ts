import express, { json } from "express";
import mysql from "mysql2";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json());

const conexao = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "hotel",
});

conexao.connect((err) => {
    if (err) {
        console.error("Failed to connect to MySQL:", err);
        return;
    }
    console.log("Connected to MySQL!");
});


app.use(json());

app.get("/", (req, res) => {
    res.send("hello world!");
});

process.on('SIGINT', () => {
    conexao.end();
    process.exit();
});


app.listen(80, () => {
    console.log("listening on port 3000");
});

app.get("/funcionario", (req, res) => {
    const consulta =
        "SELECT funcionario.nome, funcionario.cargo FROM hotel.funcionario";

    conexao.query(consulta, (erro, resultado) => {
        if (erro) {
            console.log(erro);
            res.status(400).json({ erro: erro });
        } else {
            res.status(200).json(resultado);
        }
    });
});

//Inserindo os dados

app.post("/cadastrar", (req, res) => {
    const dados = req.body;
    const sql = "INSERT INTO hotel.funcionario SET ?";
    conexao.query(sql, dados, (erro, resultado) => {
        if (erro) {
            console.log(erro);
            res.status(400).json({ erro: erro });
        } else {
            res.status(201).json(resultado);
        }
    });
});

app.get("/funcionario/:id", (req, res) => {
    const id = Number(req.params.id);
    const sql = "SELECT * FROM hotel.funcionario WHERE idFuncionario = ?;";
    conexao.query(sql, id, (erro, resultado) => {
        if (erro) {
            console.log(erro);
            res.status(400).json({ erro: erro });
        } else {
            res.status(200).json(resultado);
        }
    });
});

app.put("/alterar/:id", (req, res) => {
    const id = Number(req.params.id);
    const dados = req.body;
    const sql = "UPDATE funcionario SET ? WHERE idFuncionario =?";
    conexao.query(sql, [dados, id], (erro, resultado) => {
        if (erro) {
            console.log(erro);
            res.status(400).json({ erro: erro });
        } else {
            res.status(201).json(resultado);
        }
    });
});

app.delete("/excluir/:id", (req, res) => {
    const id = Number(req.params.id);
    const sql = "DELETE FROM hotel.funcionario WHERE idFuncionario =?;";
    conexao.query(sql, id, (erro, resultado) => {
        if (erro) {
            console.log(erro);
            res.status(400).json({ erro: erro });
        } else {
            res.status(201).json(resultado);
        }
    });
});

/*criando uma tabela de serviços 
Tabela de Serviço

O servico é identificado pela descrição, local, data de abertura, data de
fechamento, status (aberto, em execução, fechado). */

//Recuperando os dados da tabela chamado

app.get("/chamados", (req, res) => {
    const consulta = "SELECT idchamado, descricao, data_abertura, data_fechamento, status FROM hotel.chamado";
    
    conexao.query(consulta, (erro, resultado) => {
        if (erro) {
            console.log(erro);
            res.status(500).json({ erro: "Erro interno no servidor" });
        } else {
            res.status(200).json(resultado);
        }
    });
});

app.post('/cadastrarchamados', (req, res) => {
    const dados = req.body;
  
    const sql = "INSERT INTO hotel.chamado SET ?";
    conexao.query(sql, dados, (erro, resultado) => {
      if (erro) {
        console.error(erro);
        return res.status(404).json({ 'erro': erro });
      }
  
      return res.status(200).json(resultado);
    });
  });
  
  //seleção chamado por id
  
    app.get('/chamados/:id', (req, res) => {

        const id = Number(req.params.id);
    
        const sql = "SELECT * FROM hotel.chamado WHERE idchamado = ?;";
        conexao.query(sql, id, (erro, resultado) => {
        if (erro) {
            console.error(erro);
            return res.status(404).json({ 'erro': erro });
        }
    
        return res.status(200).json(resultado);
        });
    });

    //recuperando os dados da tabela funcionario e chamado

    app.get('/funcionariochamado', (req, res) => {

        const consulta = "SELECT funcionario.nome, chamado.descricao FROM hotel.funcionario INNER JOIN hotel.chamado ON funcionario.idFuncionario = chamado.idFuncionario;";


        conexao.query(consulta, (erro, resultado) => {
            if (erro) {
                console.log(erro);
                res.status(404).json({ erro: "Erro interno no servidor" });
            } else {
                res.status(200).json(resultado);
            }
        }
        )
    }
    );

    /* O Gerente precisa de um relatório que exiba o nome do funcionário e a
descrição do chamado, a consulta deve ser ordenada pelo nome do funcionário
(Pesquisar ORDER BY). */

app.get('/funcionariochamado', (req, res) => {

    const consulta = "SELECT funcionario.nome, chamado.descricao FROM hotel.funcionario INNER JOIN hotel.chamado ON funcionario.idFuncionario = chamado.idchamado ORDER BY funcionario.nome;";

    conexao.query(consulta, (erro, resultado) => {
        if (erro) {
            console.log(erro);
            res.status(404).json({ erro: "Erro interno no servidor" });
        } else {
            res.status(200).json(resultado);
        }
    }
    )
}
);

/* O Gerente precisa de um relatório que exiba todos os chamados que foram
abertos no período entre o dia 01/09/2023 e 30/09/2023 (Pesquisar BETWEEN). */

app.get('/chamados', (req, res) => {

    const consulta = "SELECT * FROM hotel.chamado WHERE data_abertura BETWEEN '2023-09-01' AND '2023-09-30';";

    conexao.query(consulta, (erro, resultado) => {
        if (erro) {
            console.log(erro);
            res.status(404).json({ erro: "Erro interno no servidor" });
        } else {
            res.status(200).json(resultado);
        }
    }
    )
}
);

/* O Gerente precisa de um relatório que exiba o nome dos funcionário dos que
começam com a letra P, a consulta deve ser ordenada pelo nome do funcionário
(Pesquisar LIKE). */

app.get('/funcionario', (req, res) => {

    const consulta = "SELECT * FROM hotel.funcionario WHERE nome LIKE 'Pedro%';";

    conexao.query(consulta, (erro, resultado) => {
        if (erro) {
            console.log(erro);
            res.status(404).json({ erro: "Erro interno no servidor" });
        } else {
            res.status(200).json(resultado);
        }
    }
    )
}
);

/* O Gerente precisa de um relatório que exiba o total de chamados (Pesquisar
    COUNT). */

app.get('/chamados', (req, res) => {

    
    const consulta = "SELECT COUNT(*) AS total_chamados FROM hotel.chamado;";

    
        conexao.query(consulta, (erro, resultado) => {
            if (erro) {
                console.log(erro);
                res.status(404).json({ erro: "Erro interno no servidor" });
            } else {
                res.status(200).json(resultado);
            }
        }
        )
    }
    );

/*     O Gerente precisa de um relatório que exiba o nome do funcionário e o de
chamados por funcionário, a consulta deve ser ordenada pelo nome do
funcionário (Pesquisar COUNT e GROUP BY). */

app.get('/funcionariochamado', (req, res) => {

    const consulta = "SELECT funcionario.nome, COUNT(chamado.descricao) AS total_chamados FROM hotel.funcionario INNER JOIN hotel.chamado ON funcionario.idFuncionario = chamado.idFuncionario GROUP BY funcionario.nome;";

    conexao.query(consulta, (erro, resultado) => {
        if (erro) {
            console.log(erro);
            res.status(404).json({ erro: "Erro interno no servidor" });
        } else {
            res.status(200).json(resultado);
        }
    }
    )
}
);