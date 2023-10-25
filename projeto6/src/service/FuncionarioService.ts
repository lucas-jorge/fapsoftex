import Funcionario from '../models/funcionario';

class FuncionarioService {
    private funcionarios: Funcionario[];
    public listaFuncionarios(): Funcionario[] {
        return this.funcionarios;
    }

    public criarFuncionario(nome: string): Funcionario {
        const funcionario = new Funcionario();
        funcionario.setNome(nome);
        this.funcionarios.push(funcionario);
        return funcionario;
    }
}

export default FuncionarioService;