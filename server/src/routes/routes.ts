// Rotas do servidor.

import { Router } from "express";
import { getCars, createCars } from "../controllers/car-controller";

const router: Router = Router();

router.get("/", getCars);
router.post("/", createCars);

export default router;
