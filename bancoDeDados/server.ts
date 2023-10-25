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