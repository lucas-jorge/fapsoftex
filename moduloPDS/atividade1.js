/* Considere que:

- os produtos devem implementar uma interface comum;
- o cliente deve utilizar apenas a fábrica para criar instâncias do tipo abstrato da interface; - todo computador deve ter, com getters, os atributos: ram, hdd, cpu e type;
- há dois tipos de computadores: pc e server; - RAM e HD devem estar em GB; CPU deve estar em GHz;
- através do tipo informado, a fábrica decide qual tipo de computador irá instanciar; 
-quando o método .toString() for aplicado a um computador, ele deve imprimir seus atributos */

// Solução:

class Computador {
    constructor(ram, hdd, cpu, type) {
        this._ram = ram;
        this._hdd = hdd;
        this._cpu = cpu;
        this._type = type;
    }

    get ram() {
        return this._ram + "GB";
    }

    get hdd() {
        return this._hdd + "GB";
    }

    get cpu() {
        return this._cpu + "GHz";
    }

    get type() {
        return this._type;
    }

    toString() {
        return `RAM: ${this.ram}\nHDD: ${this.hdd}\nCPU: ${this.cpu}\nType: ${this.type}\n`;
    }
}

class ComputadorFactory {
    static computador(ram, hdd, cpu, type) {
        switch (type) {
            case "PC":
                return new PC(ram, hdd, cpu, type);
            case "Server":
                return new Server(ram, hdd, cpu, type);
            default:
                throw new Error("Tipo de computador inválido");
        }
    }
}

class PC extends Computador {
    constructor(ram, hdd, cpu, type) {
        super(ram, hdd, cpu, type);
    }
}

class Server extends Computador {
    constructor(ram, hdd, cpu, type) {
        super(ram, hdd, cpu, type);
    }
}

try {
    let pc = ComputadorFactory.computador(8, 500, 2.5, "PC");
    let server = ComputadorFactory.computador(32, 500, 3.0, "Server");
    console.log(pc.toString());
    console.log(server.toString());
} catch (e) {
    console.log(e.message);
} finally {
    console.log("Fim do programa");
}