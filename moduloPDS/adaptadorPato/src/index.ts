import { AdaptadorPato } from "./models/adaptadorPato";
import { Galinha } from "./models/galinha";
import { Pato } from "./models/pato";

let galinha: Galinha = new Galinha();

let pato: Pato = new AdaptadorPato(galinha);

console.log("Pato pensando que é galinha:");
pato.emitirSom();