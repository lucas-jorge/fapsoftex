import FuncionarioService from '../service/FuncionarioService';
import {Request, Response} from 'express';

class FuncionarioController {

    public buscarFuncionarios(req: Request, res: Response) {
        const funcionarios = new FuncionarioService().listaFuncionarios();
        return res.json(funcionarios);
}

    public criarFuncionario(req: Request, res: Response) {
        const {nome} = req.body;
        const funcionario = new FuncionarioService().criarFuncionario(nome);
        return res.json(funcionario);
    }
}

export default new FuncionarioController();