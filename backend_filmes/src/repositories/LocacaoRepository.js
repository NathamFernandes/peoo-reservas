import Locacao from "../models/Locacao.js";
import connection1 from "../config/dbConnect.js";

const LocacaoRepository = {

    // Função para buscar todas as locações
    async findAll() {
        const rows = await connection1.query("SELECT * FROM locacao", []);
        return rows.map(row => new Locacao(row.id, row.data_inicio, row.data_final, row.data_devolucao, row.cliente_id));
    },

    // Função para criar uma nova locação
    async createLocacao(locacao) {
        const result = await connection1.query("INSERT INTO locacao (data_inicio, data_final, cliente_id) VALUES (?, ?, ?)",
            [locacao.data_inicio, locacao.data_final, locacao.cliente_id]
        );
        locacao.id = result.insertId;
        return locacao;
    },

    // Função para buscar uma locação por ID
    async findById(id) {
        const [row] = await connection1.query("SELECT * FROM locacao WHERE id = ?", [id]);
        if (row) {
            return new Locacao(row.id, row.data_inicio, row.data_final, row.data_devolucao, row.cliente_id);
        }
        return null;
    },

    // Função para atualizar uma locação
    async updateLocacao(id, dados) {
        const result = await connection1.query(
            "UPDATE locacao SET data_inicio = ?, data_final = ?, data_devolucao = ?, cliente_id = ? WHERE id = ?",
            [dados.data_inicio, dados.data_final, dados.data_devolucao, dados.cliente_id, id]
        );

        if (result.affectedRows === 0) {
            return null; // Se nenhuma linha for afetada, significa que não encontrou o id
        }

        return { ...dados, id }; // Retorna os dados atualizados
    },

    // Função para excluir uma locação
    async deleteLocacao(id) {
        const result = await connection1.query("DELETE FROM locacao WHERE id = ?", [id]);

        if (result.affectedRows === 0) {
            return null; // Se nenhuma linha for afetada, significa que não encontrou o id
        }

        return true; // Retorna true se a locação foi excluída com sucesso
    }
}

export default LocacaoRepository;
