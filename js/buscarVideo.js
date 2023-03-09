import { conectaApi } from "./conectaApi.js";

async function buscaVideo(evento) {
    evento.preventDefault(); //impede que a página atualise ao clicar

    const dadosDePesquisa = document.querySelector("[data-pesquisa]").value;
    const busca = await conectaApi.buscaVideo(dadosDePesquisa);    

    console.log(busca);
}

const botaoDepesquisa = document.querySelector("[data-botao-pesquisa]");

botaoDepesquisa.addEventListener("click", evento => buscaVideo(evento))


