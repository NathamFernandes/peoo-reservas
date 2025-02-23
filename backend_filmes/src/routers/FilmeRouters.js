import express from "express";
import FilmeController from "../controllers/FilmeController.js";

const FilmeRouters = express.Router();

FilmeRouters.get("/", FilmeController.getAll);
FilmeRouters.post("/", FilmeController.create);
FilmeRouters.get("/:id", FilmeController.getById);
// FilmeRouters.put("/", FilmeController.update);
// FilmeRouters.delete("/", FilmeController.destroy);

export default FilmeRouters;
