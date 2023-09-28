class Cliente {
    constructor(
//aqui colocar atributos da classe
    ) { }
}

class Produto {
    constructor(
//aqui colocar atributos da classe
    ) { }
}

class Compra {
    constructor(
//aqui colocar atributos da classe
    ) { }
}

class Floricultura {
    private clientes: Cliente[] = [];
    private produtos: Produto[] = [];
    private compras: Compra[] = [];

    // Métodos para gerenciar clientes
    cadastrarCliente(cliente: Cliente) {
        this.clientes.push(cliente);
    }

    listarClientes(): Cliente[] {
        return this.clientes;
    }

    // Métodos para gerenciar produtos
    cadastrarProduto(produto: Produto) {
        this.produtos.push(produto);
    }

    listarProdutos(): Produto[] {
        return this.produtos;
    }

    // Métodos para gerenciar compras
    realizarCompra(cliente: Cliente, dataCompra: Date, produtosComprados: Produto[]) {
        const valorTotal = produtosComprados.reduce((total, produto) => total + produto.preco, 0);
        const compra = new Compra(cliente, dataCompra, valorTotal, produtosComprados);
        this.compras.push(compra);
        produtosComprados.forEach((produto) => {
            const produtoExistente = this.produtos.find((p) => p.nome === produto.nome);
            if (produtoExistente) {
                produtoExistente.quantidadeEstoque -= 1;
            }
        });
    }

    listarCompras(): Compra[] {
        return this.compras;
    }
}


//testes
// Nova floricultura
const floricultura = new Floricultura();

const cliente1 = new Cliente("123456789", "João", "9999-9999", "Rua A, 123");
floricultura.cadastrarCliente(cliente1);

//Cadastro de produtos
const produto1 = new Produto("Astromélia", "flor", 15.0, 20);
floricultura.cadastrarProduto(produto1);

const produto2 = new Produto("Amarílis", "flor", 5.0, 25);
floricultura.cadastrarProduto(produto2);


const dataCompra = new Date();
floricultura.realizarCompra(cliente1, dataCompra, [produto1]);

const compras = floricultura.listarCompras();
console.log(compras);