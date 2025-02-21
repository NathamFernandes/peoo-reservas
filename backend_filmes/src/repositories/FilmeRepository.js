import Categoria from "../models/Categoria.js";
import connection1 from "../config/dbConnect.js";

const CategoriaRepository = {

    async findAll() {
        const rows = await connection1.query("select * from categoria", []);
        return rows.map(row => new Categoria(row.id, row.nome));
    },

    async createCategoria(categoria) {
        const result = await connection1.query("insert into categoria (nome) values (?)",
            [categoria.nome]
        );
        categoria.id = result.insertId;
        return categoria;
    }
}

export default CategoriaRepository;