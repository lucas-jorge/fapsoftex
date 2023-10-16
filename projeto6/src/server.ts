import express, { Request, Response, NextFunction, json } from 'express';
import { router } from './rotas';

const app = express();

app.use(json());
app.use((req, res, next) => {
    router(req, res, next);
});

app.get('/', (req: Request, res: Response) => {
    res.json({ funcionario: 'Lucas Jorge' });
});

app.listen(3333, () => console.log('Funcionou'));
