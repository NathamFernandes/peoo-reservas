import express from "express";
import GeneroController from "../controllers/GeneroController.js";

const GeneroRouters = express.Router();

GeneroRouters.get("/", GeneroController.getAll);
GeneroRouters.post("/", GeneroController.create);
GeneroRouters.get("/:id", GeneroController.getById);
// GeneroRouters.put("/", GeneroController.update);
// GeneroRouters.delete("/", GeneroController.destroy);

export default GeneroRouters;
