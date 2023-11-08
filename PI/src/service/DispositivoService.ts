import {Dispositivo} from "../models/dispositivo";

class DispositivoService {
    renderizar(dispositivo: Dispositivo) {
        return `<div>${dispositivo.nome}: ${dispositivo.status ? 'Ligado' : 'Desligado'}</div>`;
    }
}

export {DispositivoService};