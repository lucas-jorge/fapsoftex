import express, { Request, Response, response } from 'express';
import Cliente from '../models/Cliente';
const router = express. Router();
router.post('/clientes', async (req: Request, res: Response) => {
try {
const { nome, email } = req.body;
const cliente = await Cliente.create({ nome, email });
res.json(cliente);
} catch (error) {
res.status(500). json({ error: 'Erro ao cadastrar cliente.' });
}
}
);

export default router;