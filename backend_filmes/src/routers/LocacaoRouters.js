import express from "express";
import LocacaoController from "../controllers/LocacaoController.js";

const LocacaoRouters = express.Router();

LocacaoRouters.get("/", LocacaoController.getAll);
LocacaoRouters.post("/", LocacaoController.create);
LocacaoRouters.get("/:id", LocacaoController.getById);
// LocacaoRouters.put("/", LocacaoController.update);
// LocacaoRouters.delete("/", LocacaoController.destroy);

export default LocacaoRouters;
