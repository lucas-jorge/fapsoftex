import express from 'express'
import bodyParser from 'body-parser'

//server
const server = express();

//porta
const port = 3000;

//rota
server.get('/', (req, res) => {
    res.send('Sistema Educacional');
});

server.listen(port, () => {
    console.log(`Servidor rodando no endereço http://localhost: ${port}`)
});

//criar CRUD o aluno

const alunos = [
    {
        id: 1,
        nome: 'Lucas',
        idade: 36,
        email: 'lucasajorge@gmail.com'}
];

//rota para listar todos os alunos
server.get('/aluno', (req, res) => {
    res.send(alunos);
});

//inserir

server.post('/aluno', (req, res) => {
    try {
        alunos.push(req.body);
        res.status(201).send('Aluno inserido com sucesso!');
    } catch (error) {
        console.log(error);
    }
});

//testando o post
server.post('/aluno', (req, res) => {
    try {
        alunos.push(req.body);
        res.status(201).send('Aluno inserido com sucesso!');
    } catch (error) {
        console.log(error);
    }
});

//função para buscar aluno por id

function buscarAlunoPorId(id: number) {
    return alunos.filter(aluno => aluno.id == id);
}

function buscarIndiceAluno(id: number) {
    return alunos.findIndex(aluno => aluno.id == id);
}


server.delete('/aluno/:id', (req, res) => {
    let indice = buscarIndiceAluno(Number(req.params.id));
    if (indice !== -1) {
        alunos.splice(indice, 1);
        res.status(200).send('Aluno excluído com sucesso!');
    } else {
        res.status(404).send('Aluno não encontrado!');
    }
});
