import express from "express";
import FilmeController from "../controllers/FilmeController.js";

const FilmeRouters = express.Router();

FilmeRouters.get("/", FilmeController.getAll);
FilmeRouters.post("/", FilmeController.create);

export default FilmeRouters;
