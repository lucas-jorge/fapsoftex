import {Router, Request, Response} from 'express';

const router = Router();
router.get('/teste', (req: Request, res: Response) => {
    res.json({ funcionario: 'Lucas Jorge' });
});

export {router};