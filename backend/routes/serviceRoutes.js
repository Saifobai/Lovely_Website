import express from "express";
import { SERVICES } from "../config/services.js";

const router = express.Router();

router.get("/", (req, res) => {
    res.json(SERVICES);
});

export default router;
