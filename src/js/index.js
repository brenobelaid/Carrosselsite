
const imagens = document.querySelectorAll(".imagem");
const informacoes= document.querySelectorAll(".informacoes");

const BotoesCarrossel = document.querySelectorAll(".botao");
BotoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        const botaoSelecionado = document.querySelector(".selecionado");
        botaoSelecionado.classList.remove("selecionado");
        botao.classList.add("selecionado");

        const ativos = document.querySelectorAll(".ativa");
        ativos[0].classList.remove("ativa");
        ativos[1].classList.remove("ativa");
        imagens[indice].classList.add("ativa");
        informacoes[indice].classList.add("ativa");
    }
    )
}
)
