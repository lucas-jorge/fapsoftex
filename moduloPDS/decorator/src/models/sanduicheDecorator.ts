import { iSanduiche } from "./iSanduiche";

export abstract class SanduicheDecorator implements iSanduiche {
    sanduicheProduzido: iSanduiche;

    public constructor(sanduiche: iSanduiche) {
        this.sanduicheProduzido = sanduiche;
    }

    public abstract preco(): number;
}