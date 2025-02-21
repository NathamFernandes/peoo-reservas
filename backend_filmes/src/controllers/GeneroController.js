import GeneroRepository from "../repositories/GeneroRepository.js";

const GeneroController = {

    async getAll(req, res) {
        try {
            const generos = await GeneroRepository.findAll();
            res.json(generos);
        } catch (err) {
            res.status(500).json({ error: "Erro na busca de gêneros", err });
        }
    },

    async create(req, res) {
        const { nome } = req.body;
        try {
            const novoGenero = { nome };
            const generoCriado = await GeneroRepository.createGenero(novoGenero);
            res.status(201).json(generoCriado);
        } catch (err) {
            res.status(500).json({ error: "Erro na criação do gênero", err });
        }
    }

}

export default GeneroController;