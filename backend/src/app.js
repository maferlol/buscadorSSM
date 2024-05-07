import express from "express";
import path from 'path';
import { fileURLToPath } from 'url' ;
import { PORT } from "./config.js";

import indexRoutes from "./routes/index.routes.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const app = express();

app.use(express.static(path.join(__dirname, '..', 'public')));

app.use(express.json());
app.use('/api', indexRoutes);

app.listen(PORT);
console.log(`Server running on port ${PORT}`)
export default app