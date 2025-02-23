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
    }

}

export default LocacaoItemController;