import { Router } from "express";

import { getSearch } from "../controllers/busquedas.controllers.js";

const router = Router();

router.get("/school/:id", getSearch);

export default router