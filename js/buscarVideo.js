import { conectaApi } from "./conectaApi.js";
import constroiCard from "./mostrarVideos.js";

async function buscaVideo(evento) {
    evento.preventDefault(); //impede que a página atualise ao clicar

    const dadosDePesquisa = document.querySelector("[data-pesquisa]").value;
    const busca = await conectaApi.buscaVideo(dadosDePesquisa);    

    const lista = document.querySelector("[data-lista]");

    while(lista.firstChild){
        lista.removeChild(lista.firstChild);
    }

    busca.forEach(elemento => lista.appendChild(
        constroiCard(elemento.titulo, elemento.descricao, elemento.url, elemento.imagem )))

     if (busca.length == 0 ){
        lista.innerHTML = `<h2 class"mensagem__titulo"> Não existe vídeos com este termo</h2>  ` 
     }   

}

const botaoDepesquisa = document.querySelector("[data-botao-pesquisa]");

botaoDepesquisa.addEventListener("click", evento => buscaVideo(evento))


