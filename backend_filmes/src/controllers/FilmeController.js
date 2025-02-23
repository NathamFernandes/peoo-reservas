import FilmeRepository from "../repositories/FilmeRepository.js";

const FilmeController = {

    async getAll(req, res) {
        try {
            const filmes = await FilmeRepository.findAll();
            res.json(filmes);
        } catch (err) {
            res.status(500).json({ error: "Erro na busca de filmes", err });
        }
    },

    async create(req, res) {
        const { titulo, genero_id, ano, diretor, sinopse, classificacao, elenco, status } = req.body;
        try {
            const novoFilme = { titulo, genero_id, ano, diretor, sinopse, classificacao, elenco, status };
            const filmeCriado = await FilmeRepository.createFilme(novoFilme);
            res.status(201).json(filmeCriado);
        } catch (err) {
            res.status(500).json({ error: "Erro na criação do filme", err });
        }
    }

}

export default FilmeController;