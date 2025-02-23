import LocacaoItem from "../models/LocacaoItem.js";
import connection1 from "../config/dbConnect.js";

const LocacaoItemRepository = {
    async findAll() {
        const rows = await connection1.query("select * from locacao_item", []);
        return rows.map(row => new LocacaoItem(row.id, row.locacao_id, row.filme_id, row.preco));
    },

    async createLocacaoItem(locacaoItem) {
        const result = await connection1.query("insert into locacao_item (locacao_id, filme_id, preco) values (?, ?, ?)",
            [locacaoItem.locacao_id, locacaoItem.filme_id, locacaoItem.preco]
        );
        locacaoItem.id = result.insertId;
        return locacaoItem;
    },

    async findById(id) {
        const [row] = await connection1.query("select * from locacao_item where id = ?", [id]);
        if (row) {
            return new LocacaoItem(row.id, row.locacao_id, row.filme_id, row.preco);
        }
        return null; // Retorna null se não encontrar o item
    },

    // Método para atualizar um locação item
    async updateLocacaoItem(id, locacaoItem) {
        const result = await connection1.query(
            "update locacao_item set locacao_id = ?, filme_id = ?, preco = ? where id = ?",
            [locacaoItem.locacao_id, locacaoItem.filme_id, locacaoItem.preco, id]
        );
        if (result.affectedRows > 0) {
            // Retorna o item atualizado
            return new LocacaoItem(id, locacaoItem.locacao_id, locacaoItem.filme_id, locacaoItem.preco);
        }
        return null; // Retorna null se o item não for encontrado ou atualizado
    },

    // Método para deletar um locação item
    async deleteLocacaoItem(id) {
        const result = await connection1.query("delete from locacao_item where id = ?", [id]);
        return result.affectedRows > 0; // Retorna true se o item for deletado, falso caso contrário
    }
}

export default LocacaoItemRepository;
