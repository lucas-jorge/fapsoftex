class Dispositivo {
    constructor(public id: number, public nome: string, public status: boolean) {}
}

class DispositivoService {
    renderizar(dispositivo: Dispositivo) {
        return `<div>${dispositivo.nome}: ${dispositivo.status ? 'Ligado' : 'Desligado'}</div>`;
    }
}

export { Dispositivo };