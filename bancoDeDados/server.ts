import express, { json } from "express";
import mysql from "mysql2";

const app = express();

const conexao = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "hotel",
});

app.use(json());

app.get("/", (req, res) => {
    res.send("hello world!");
});

app.listen(3000, () => {
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
            res.status(201).json(resultado);
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

app.post("/servico", (req, res) => {
    const dados = req.body;
    const sql = "INSERT INTO hotel.servico SET ?";
    conexao.query(sql, dados, (erro, resultado) => {
        if (erro) {
            console.log(erro);
            res.status(400).json({ erro: erro });
        } else {
            res.status(201).json(resultado);
        }
    });
});

//Inserindo os dados

app.get("/servico", (req, res) => {
    const consulta =
        "SELECT servico.descricao, servico.local, servico.dataAbertura, servico.dataFechamento, servico.status FROM hotel.servico";

    conexao.query(consulta, (erro, resultado) => {
        if (erro) {
            console.log(erro);
            res.status(400).json({ erro: erro });
        } else {
            res.status(200).json(resultado);
        }
    });
});

app.get("/servico/:id", (req, res) => {
    const id = Number(req.params.id);
    const sql = "SELECT * FROM hotel.servico WHERE idServico = ?;";
    conexao.query(sql, id, (erro, resultado) => {
        if (erro) {
            console.log(erro);
            res.status(400).json({ erro: erro });
        } else {
            res.status(201).json(resultado);
        }
    });
});

app.put("/servico/:id", (req, res) => {
    const id = Number(req.params.id);
    const dados = req.body;
    const sql = "UPDATE servico SET ? WHERE idServico =?";
    conexao.query(sql, [dados, id], (erro, resultado) => {
        if (erro) {
            console.log(erro);
            res.status(400).json({ erro: erro });
        } else {
            res.status(201).json(resultado);
        }
    });
});

app.delete("/servico/:id", (req, res) => {
    const id = Number(req.params.id);
    const sql = "DELETE FROM hotel.servico WHERE idServico =?;";
    conexao.query(sql, id, (erro, resultado) => {
        if (erro) {
            console.log(erro);
            res.status(400).json({ erro: erro });
        } else {
            res.status(201).json(resultado);
        }
    });
});