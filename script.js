function mostrar(elemento) {
    const descricao = elemento.querySelector(".descricao");

    if (descricao.style.display === "block") {
        descricao.style.display = "none";
    } else {
        descricao.style.display = "block";
    }
}

function mostrarTudo() {
    const descricoes = document.querySelectorAll(".descricao");

    descricoes.forEach(item => {
        if (item.style.display === "block") {
            item.style.display = "none";
        } else {
            item.style.display = "block";
        }
    });
}
