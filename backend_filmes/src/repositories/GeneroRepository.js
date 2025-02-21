import Genero from "../models/Genero.js";
import connection1 from "../config/dbConnect.js";

const GeneroRepository = {

    async findAll() {
        const rows = await connection1.query("select * from genero", []);
        return rows.map(row => new Genero(row.id, row.nome));
    },

    async createGenero(genero) {
        const result = await connection1.query("insert into genero (nome) values (?)",
            [genero.nome]
        );
        genero.id = result.insertId;
        return genero;
    }
}

export default GeneroRepository;