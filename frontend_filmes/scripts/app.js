
import carregarGeneros from "./entities/generoRender.js";

const route = routeName => {
    console.log(routeName);
    switch (routeName) {
        case "home":
            document.getElementById("app-content").innerHTML = "Home";
            break;
        case "generos":
            carregarGeneros();
            break;
        case "clientes":
            break;
        case "filmes":
            break;
    }
};


const init = () => {
    document.querySelectorAll('[data-route]').forEach(link => {
        link.addEventListener('click', (e) => {
            const routeName = e.target.getAttribute('data-route');
            document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
            e.target.classList.add('active');
            route(routeName);
        })
    })

    route("home");
};

window.onload = init;