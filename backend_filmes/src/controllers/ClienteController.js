import ClienteRepository from "../repositories/ClienteRepository.js";

const ClienteController = {

    async getAll(req, res) {
        try {
            const clientes = await ClienteRepository.findAll();
            res.json(clientes);
        } catch (err) {
            res.status(500).json({ error: "Erro na busca de clientes", err });
        }
    },

    async create(req, res) {

        const { nome, endereco, email, cpf } = req.body;
        try {
            const novoCliente = { nome, endereco, email, cpf };
            const clienteCriado = await ClienteRepository.createCliente(novoCliente);
            res.status(201).json(clienteCriado);
        } catch (err) {
            res.status(500).json({ error: "Erro na criação do cliente", err });
        }
    }

}

export default ClienteController;