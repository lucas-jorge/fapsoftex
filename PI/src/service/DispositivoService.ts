class DispositivoView {
    renderizar(dispositivo: Dispositivo) {
        return `<div>${dispositivo.nome}: ${dispositivo.status ? 'Ligado' : 'Desligado'}</div>`;
    }
}