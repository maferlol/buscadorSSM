import { Router } from "express";

import busquedasRoutes from "./busquedas.routes.js";

const router = Router();

router.use('/search', busquedasRoutes);

export default router