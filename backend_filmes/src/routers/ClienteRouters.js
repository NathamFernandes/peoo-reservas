import express from "express";
import ClienteController from "../controllers/ClienteController.js";

const ClienteRouters = express.Router();

ClienteRouters.get("/", ClienteController.getAll);
ClienteRouters.post("/", ClienteController.create);
// ClienteRouters.put("/", ClienteController.update);
// ClienteRouters.delete("/", ClienteController.destroy);

export default ClienteRouters;
