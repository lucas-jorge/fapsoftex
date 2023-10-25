import FuncionarioService from '../service/FuncionarioService';
import { Request, Response } from 'express';

class FuncionarioController {
    private funcionarioService: FuncionarioService;

    constructor() {
        this.funcionarioService = new FuncionarioService();
    }

    public buscarFuncionarios(req: Request, res: Response): void {
        const funcionarios = this.funcionarioService.listaFuncionarios();
        res.json(funcionarios);
    }

    public criarFuncionario(req: Request, res: Response): void {
        const { nome } = req.body;
        const funcionario = this.funcionarioService.criarFuncionario(nome);
        res.json(funcionario);
    }
}

export default new FuncionarioController();
