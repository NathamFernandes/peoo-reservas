import FilmeRepository from "../repositories/FilmeRepository.js";

const FilmeController = {

    async getAll(req, res) {
        try {
            const filmes = await FilmeRepository.findAll();
            res.json(filmes);
        } catch (err) {
            res.status(500).json({ error: "Erro na busca de categorias", err });
        }
    },

    async create(req, res) {
        const { nome, } = req.body;
        try {
            const novaCategoria = { nome };
            const categoriaCriada = await FilmeRepository.createCategoria(novaCategoria);
            res.status(201).json(categoriaCriada);
        } catch (err) {
            res.status(500).json({ error: "Erro na criação de categorias", err });
        }
    }

}

export default FilmeController;