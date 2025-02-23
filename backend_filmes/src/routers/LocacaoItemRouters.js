import express from "express";
import LocacaoItemController from "../controllers/LocacaoItemController.js";

const LocacaoItemRouters = express.Router();

LocacaoItemRouters.get("/", LocacaoItemController.getAll);
LocacaoItemRouters.post("/", LocacaoItemController.create);
LocacaoItemRouters.get("/:id", LocacaoItemController.getById);
// LocacaoItemRouters.put("/", LocacaoItemController.update);
// LocacaoItemRouters.delete("/", LocacaoItemController.destroy);

export default LocacaoItemRouters;
