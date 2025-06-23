import express from "express";
import { createFormEntry } from "../controllers/formController.js";

const router = express.Router();

router.post("/submit", createFormEntry); // <-- confere aqui

export default router;

