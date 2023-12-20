import express, { Request, Response, RequestHandler } from 'express';
import Transportadora from '../models/Transportadora';

export const cadastrar: RequestHandler = async (req: Request, res: Response) => {
  try {
    const { nome, email } = req.body;
    const usuario = await Transportadora.create({ nome, email });
    res.json(usuario); // mostra a transportadora cadastrada
  } catch (error) {
    res.status(500).json({ error: "Erro ao cadastrar a transportadora" });
  }
};
