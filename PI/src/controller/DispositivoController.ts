import { Dispositivo } from "../model/Dispositivo";
import { DispositivoService } from "../service/DispositivoService";

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