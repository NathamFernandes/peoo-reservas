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
    }
}

export default LocacaoItemRepository;