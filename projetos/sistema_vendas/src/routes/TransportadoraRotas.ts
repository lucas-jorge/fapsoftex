import express, { Request, Response } from "express";
import { cadastrar } from "../services/TransportadoraService"; // Correct the path if necessary

const router = express.Router();

router.post('/transportadoras', cadastrar);

export default router;
