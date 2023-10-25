import { iSanduiche } from "./iSanduiche";
import { sanduicheDecorator } from "./sanduicheDecorator";

export class FrangoAssado extends sanduicheDecorator {

    public constructor(sanduiche: iSanduiche) {
        super(sanduiche);
    }

    public preco(): number {
        return this.sanduicheProduzido.preco() + 4.5;
    }
}