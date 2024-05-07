import { pool } from "../db.js";

export const getSearch = async (req, res) => {
    try {
        console.log(req.params.id)
        const [rows] = await pool.query("select * from Resultados where Preparatorias = ?", [req.params.id])
        res.status(200).json(rows[0])
    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: error.message });
    }
}