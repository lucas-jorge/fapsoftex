// Modelo
/* class Dispositivo {
    constructor(public id: number, public nome: string, public status: boolean) {}
} */

// View
/* class DispositivoView {
    renderizar(dispositivo: Dispositivo) {
        return `<div>${dispositivo.nome}: ${dispositivo.status ? 'Ligado' : 'Desligado'}</div>`;
    }
} */

// Controller
/* class DispositivoController {
    constructor(private view: DispositivoView) {}

    ligarDispositivo(dispositivo: Dispositivo) {
        dispositivo.status = true;
        this.view.renderizar(dispositivo);
    }

    desligarDispositivo(dispositivo: Dispositivo) {
        dispositivo.status = false;
        this.view.renderizar(dispositivo);
    }
} */

// Uso
/* const view = new DispositivoView();
const controller = new DispositivoController(view);

const dispositivo = new Dispositivo(1, 'Lâmpada da Sala', false);
controller.ligarDispositivo(dispositivo); */
