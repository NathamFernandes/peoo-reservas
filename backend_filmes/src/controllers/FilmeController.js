import FilmeRepository from "../repositories/FilmeRepository.js";

const FilmeController = {

    async getAll(req, res) {
        try {
            const filmes = await FilmeRepository.findAll(req.headers.innerjoin);
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
    },

    async getById(req, res) {
        const { id } = req.params; // O ID será passado como parâmetro na URL
        try {
            const filme = await FilmeRepository.findById(id);
            if (filme) {
                res.json(filme);
            } else {
                res.status(404).json({ error: "Filme não encontrado" });
            }
        } catch (err) {
            res.status(500).json({ error: "Erro na busca do filme", err });
        }
    }
}

export default FilmeController;