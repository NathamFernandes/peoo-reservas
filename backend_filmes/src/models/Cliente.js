class Categoria {
    constructor(id, nome, endereco, email, cpf) {
        this._id = id;
        this._nome = nome;
        this._endereco = endereco;
        this._email = email;
        this._cpf = cpf;
    }
    setId(id) {
        this._id = id;
    }
    setNome(nome) {
        this._nome = nome;
    }
    setEndereco(endereco) {
        this._endereco = endereco;
    }
    setEmail(email) {
        this._email = email;
    }
    setCpf(cpf) {
        this._cpf = cpf;
    }
    getId() {
        return this._id;
    }
    getNome() {
        return this._nome;
    }
    getEndereco() {
        return this._endereco;
    }
    getEmail() {
        return this._email;
    }
    getCpf() {
        return this._cpf;
    }
}

export default Categoria;