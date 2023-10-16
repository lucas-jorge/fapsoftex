var Cliente = /** @class */ (function () {
    function Cliente(
    //aqui colocar atributos da classe
    ) {
    }
    return Cliente;
}());
var Produto = /** @class */ (function () {
    function Produto(
    //aqui colocar atributos da classe
    ) {
    }
    return Produto;
}());
var Compra = /** @class */ (function () {
    function Compra(
    //aqui colocar atributos da classe
    ) {
    }
    return Compra;
}());
var Floricultura = /** @class */ (function () {
    function Floricultura() {
        this.clientes = [];
        this.produtos = [];
        this.compras = [];
    }
    // Métodos para gerenciar clientes
    Floricultura.prototype.cadastrarCliente = function (cliente) {
        this.clientes.push(cliente);
    };
    Floricultura.prototype.listarClientes = function () {
        return this.clientes;
    };
    // Métodos para gerenciar produtos
    Floricultura.prototype.cadastrarProduto = function (produto) {
        this.produtos.push(produto);
    };
    Floricultura.prototype.listarProdutos = function () {
        return this.produtos;
    };
    // Métodos para gerenciar compras
    Floricultura.prototype.realizarCompra = function (cliente, dataCompra, produtosComprados) {
        var _this = this;
        var valorTotal = produtosComprados.reduce(function (total, produto) { return total + produto.preco; }, 0);
        var compra = new Compra(cliente, dataCompra, valorTotal, produtosComprados);
        this.compras.push(compra);
        produtosComprados.forEach(function (produto) {
            var produtoExistente = _this.produtos.find(function (p) { return p.nome === produto.nome; });
            if (produtoExistente) {
                produtoExistente.quantidadeEstoque -= 1;
            }
        });
    };
    Floricultura.prototype.listarCompras = function () {
        return this.compras;
    };
    return Floricultura;
}());
//testes
// Nova floricultura
var floricultura = new Floricultura();
var cliente1 = new Cliente("123456789", "João", "9999-9999", "Rua A, 123");
floricultura.cadastrarCliente(cliente1);
//Cadastro de produtos
var produto1 = new Produto("Astromélia", "flor", 15.0, 20);
floricultura.cadastrarProduto(produto1);
var produto2 = new Produto("Amarílis", "flor", 5.0, 25);
floricultura.cadastrarProduto(produto2);
var dataCompra = new Date();
floricultura.realizarCompra(cliente1, dataCompra, [produto1]);
var compras = floricultura.listarCompras();
console.log(compras);
//# sourceMappingURL=floricultura.js.map