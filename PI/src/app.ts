import express from 'express';
import { Dispositivo } from './models/dispositivo';
import { DispositivoService } from './service/dispositivoService';
import { DispositivoController } from './controller/dispositivoController';

const app = express();
const controller = new DispositivoController(new DispositivoService());

const dispositivo = new Dispositivo(1, 'Lâmpada da Sala', false);
controller.ligarDispositivo(dispositivo);

export default app;