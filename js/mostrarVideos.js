import { conectaApi } from "./conectaApi.js";

const lista = document.querySelector("[data-lista]"); //Foi colocado o termo "data-list" lá no html.

export default function constroiCard(titulo, descricao, url, imagem) {
    const video = document.createElement('li'); //é criado o "li" primeiro
    video.className = "videos__item"; //Coloca a classe que é a mesma que está no html
    video.innerHTML = `<iframe width="100%" height="72%" src="${url}"
    title="${titulo}" frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen></iframe>
<div class="descricao-video">
    <img src="${imagem}" alt="logo canal alura">
    <h3>${titulo}</h3>
    <p>${descricao}</p>
</div>
`
    return video;
}

async function listaVideos() {

    try {
    const listaApi = await conectaApi.listaVideos();
    listaApi.forEach(elemento => lista.appendChild(constroiCard(elemento.titulo, elemento.descricao, elemento.url, elemento.imagem))) //Esse "Elemento" são os "itens" que está lá no bd.json. o forEach ele varre cada elemento e pega os atributos específicos. 
    } catch{
        lista.innerHTML = `<h2 class"mensagem__titulo"> Não foi possível carregar a lista de vídeos</h>`
    }
}

listaVideos();