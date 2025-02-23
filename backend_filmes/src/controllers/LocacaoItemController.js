import LocacaoItemRepository from "../repositories/LocacaoItemRepository.js";

const LocacaoItemController = {

    async getAll(req, res) {
        try {
            const locacaoItem = await LocacaoItemRepository.findAll();
            res.json(locacaoItem);
        } catch (err) {
            res.status(500).json({ error: "Erro na busca de locações item", err });
        }
    },

    async create(req, res) {
        const { locacao_id, filme_id, preco } = req.body;
        try {
            const novaLocacaoItem = { locacao_id, filme_id, preco };
            const locacaoItemCriada = await LocacaoItemRepository.createLocacaoItem(novaLocacaoItem);
            res.status(201).json(locacaoItemCriada);
        } catch (err) {
            res.status(500).json({ error: "Erro na criação da locação item", err });
        }
    },

    async getById(req, res) {
        const { id } = req.params; // O ID será passado como parâmetro na URL
        try {
            const locacaoItem = await LocacaoItemRepository.findById(id);
            if (locacaoItem) {
                res.json(locacaoItem);
            } else {
                res.status(404).json({ error: "Locação item não encontrado" });
            }
        } catch (err) {
            res.status(500).json({ error: "Erro na busca do locação item", err });
        }
    }

}

export default LocacaoItemController;