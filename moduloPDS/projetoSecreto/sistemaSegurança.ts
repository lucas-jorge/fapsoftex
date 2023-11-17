class SistemaSeguranca {
    private static instance: SistemaSeguranca;
    private senhaSecreta: string = "123456";  // Senha da Base Secreta

    private constructor() { }

    public static getInstance(): SistemaSeguranca {
        if (!SistemaSeguranca.instance) {
            SistemaSeguranca.instance = new SistemaSeguranca();
        }
        return SistemaSeguranca.instance;
    }

    public acessarBaseSecreta(senha: string): string {
        if (senha === this.senhaSecreta) {
            return "Acesso concedido";
        } else {
            return "Acesso negado";
        }
    }
}

// Programa principal
let sistema = SistemaSeguranca.getInstance();
console.log(sistema.acessarBaseSecreta("123456"));  // Acesso concedido
console.log(sistema.acessarBaseSecreta("654321"));  // Acesso negado
