import express from 'express';
import { Dispositivo } from './models/dispositivo';
import { DispositivoService } from './service/dispositivoService';
import { DispositivoController } from './controller/dispositivoController';

const app = express();
const controller = new DispositivoController(new DispositivoService());

const dispositivo = new Dispositivo(1, 'Lâmpada da Sala', false);
controller.ligarDispositivo(dispositivo);

const dispositivo2 = new Dispositivo(2, 'Lâmpada do Quarto', false);
controller.desligarDispositivo(dispositivo2);

const dispositivo3 = new Dispositivo(3, 'Fechadura da entrada', false);
controller.ligarDispositivo(dispositivo3);

export default app;