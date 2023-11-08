import express from 'express';
import { Dispositivo } from './models/Dispositivo';
/* import { DispositivoView } from './view/DispositivoView'; */
import { DispositivoController } from './controller/DispositivoController';

/* const view = new DispositivoView(); */
const controller = new DispositivoController(view);

const dispositivo = new Dispositivo(1, 'Lâmpada da Sala', false);
controller.ligarDispositivo(dispositivo);