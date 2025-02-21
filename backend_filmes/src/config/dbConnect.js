import mysql from 'mysql2';
import util from "util";
import dotenv from "dotenv";

dotenv.config();

const dbConfig = {
    host: process.env.HOST_DB || "localhost",
    user: process.env.USER_DB || "root",
    password: process.env.PASSWORD_DB || "",
    database: process.env.NAME_DB || "backend_filmes"
};

//Cria objeto de conexão
const connection = mysql.createConnection(dbConfig);

//Tenta abrir a conexão com o banco
connection.connect((error) => {
    if (error) {
        console.log(error);
        console.log("Errro na conexão com o banco: ", error.message);
        process.exit(1);
    }
    console.log("Conexão realizada com sucesso");
})

//Transforma o método query do objeto connection em promise
connection.query = util.promisify(connection.query).bind(connection);

export default connection;