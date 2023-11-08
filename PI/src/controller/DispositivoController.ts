import { Dispositivo } from "../models/dispositivo";
import { DispositivoService } from "../service/dispositivoService";

class DispositivoController {
    constructor(private view: DispositivoService) {}

    ligarDispositivo(dispositivo: Dispositivo) {
        dispositivo.status = true;
        this.view.renderizar(dispositivo);
    }

    desligarDispositivo(dispositivo: Dispositivo) {
        dispositivo.status = false;
        this.view.renderizar(dispositivo);
    }
}

export { DispositivoController };