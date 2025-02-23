import Filme from "../models/Filme.js";
import connection1 from "../config/dbConnect.js";

const FilmeRepository = {
    async findAll() {
        const rows = await connection1.query(` select * from filme`, []);

        return rows.map(row => new Filme(
            row.id,
            row.titulo,
            row.genero_id,
            row.ano,
            row.diretor,
            row.sinopse,
            row.classificacao,
            row.elenco,
            row.status,
        ));
    },

    async createFilme(filme) {
        const result = await connection1.query("insert into filme (titulo, genero_id, ano, diretor, sinopse, classificacao, elenco, status) values (?, ?, ?, ?, ?, ?, ?, ?)",
            [
                filme.titulo,
                filme.genero_id,
                filme.ano,
                filme.diretor,
                filme.sinopse,
                filme.classificacao,
                filme.elenco,
                filme.status
            ]
        );
        filme.id = result.insertId;
        return filme;
    },

    async findById(id) {
        const [row] = await connection1.query("select * from filme where id = ?", [id]);
        if (row) {
            return new Filme(
                row.id,
                row.titulo,
                row.genero_id,
                row.ano,
                row.diretor,
                row.sinopse,
                row.classificacao,
                row.elenco,
                row.status
            );
        }
        return null; // Retorna null se não encontrar o gênero
    }
}

export default FilmeRepository;