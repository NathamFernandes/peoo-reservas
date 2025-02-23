import LocacaoRepository from "../repositories/LocacaoRepository.js";

const LocacaoController = {

    async getAll(req, res) {
        try {
            const locacao = await LocacaoRepository.findAll();
            res.json(locacao);
        } catch (err) {
            res.status(500).json({ error: "Erro na busca de locações", err });
        }
    },

    async create(req, res) {
        const { data_inicio, data_final, data_devolucao, cliente_id } = req.body;
        try {
            const novaLocacao = { data_inicio, data_final, data_devolucao, cliente_id };
            const locacaoCriada = await LocacaoRepository.createLocacao(novaLocacao);
            res.status(201).json(locacaoCriada);
        } catch (err) {
            res.status(500).json({ error: "Erro na criação da locação", err });
        }
    }

}

export default LocacaoController;