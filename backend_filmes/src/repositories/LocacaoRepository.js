import Locacao from "../models/Locacao.js";
import connection1 from "../config/dbConnect.js";

const LocacaoRepository = {

    async findAll() {
        const rows = await connection1.query("select * from locacao", []);
        return rows.map(row => new Locacao(row.id, row.data_inicio, row.data_final, row.data_devolucao, row.cliente_id));
    },

    async createLocacao(locacao) {
        const result = await connection1.query("insert into locacao (data_inicio, data_final, data_devolucao, cliente_id) values (?, ?, ?, ?)",
            [locacao.data_inicio, locacao.data_final, locacao.data_devolucao, locacao.cliente_id]
        );
        locacao.id = result.insertId;
        return locacao;
    },

    async findById(id) {
        const [row] = await connection1.query("select * from locacao where id = ?", [id]);
        if (row) {
            return new Locacao(row.id, row.data_inicio, row.data_final, row.data_devolucao, row.cliente_id);
        }
        return null; // Retorna null se não encontrar o gênero
    }
}

export default LocacaoRepository;