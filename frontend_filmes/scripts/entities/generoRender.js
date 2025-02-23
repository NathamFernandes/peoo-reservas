import { get, post } from "../api.js";
import state from "../state.js";

// Função para carregar os generos
const carregarGeneros = async () => {
    const generos = await get("http://localhost:3000/generos");
    state.generos = generos;

    renderizarListaGeneros(generos);
};

// Função para renderizar a lista de generos
const renderizarListaGeneros = (generos) => {
    let tabela = `
        <button type="button" class="btn btn-primary" id="novo-genero">Cadastrar novo gênero</button>
        <h2 class="py-3">Listagem de Gêneros</h2>
        <table class="table table-hover">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Nome</th>
                </tr>
            </thead>
            <tbody>
    `;

    let bodyTabela = generos.map(genero => `
        <tr>
            <td>${genero.id}</td>
            <td>${genero.nome}</td>
        </tr>
    `).join(" ");

    tabela = tabela + bodyTabela + "</tbody></table>";
    document.getElementById("app-content").innerHTML = tabela;

    document.getElementById("novo-genero").addEventListener("click", () => {
        renderizarFormularioGenero();
    });
};

// Função para renderizar o formulário de genero
const renderizarFormularioGenero = () => {
    const formulario = `
        <form id="form-genero">
            <div class="form-group">
                <label for="nome">Nome</label>
                <input type="text" id="nome" class="form-control" placeholder="Digite o nome do gênero">
            </div>
            <button type="submit" class="btn btn-primary" style="margin-top:10px">Salvar</button>
        </form>
    `;

    document.getElementById("app-content").innerHTML = formulario;

    document.getElementById("form-genero").addEventListener("submit", async (e) => {
        e.preventDefault();
        const nome = document.getElementById("nome").value;
        await post("http://localhost:3000/generos", { nome });
        await carregarGeneros(); // Recarrega os dados
    });
};

export default carregarGeneros;
