import dotenv from "dotenv";
dotenv.config();

import app from "./src/app.js";
import connection from "./src/config/dbConnect.js";
import GeneroRouters from "./src/routers/GeneroRouters.js";
import ClienteRouters from "./src/routers/ClienteRouters.js";

//Definição de uma constante para a porta TCP
const PORT = process.env.PORT || 3000;

app.use("/generos", GeneroRouters);
// app.use("/filmes", FilmeRouters);
app.use("/clientes", ClienteRouters);

//Inicialização de um servidor WEB
app.listen(PORT, () => {
    console.log("Servidor inicializado");
});