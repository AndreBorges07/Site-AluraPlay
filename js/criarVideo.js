import { conectaApi } from "./conectaApi.js";

const formulario = document.querySelector("[data-formulario]"); //esses "data atributos" precisam dessa forma com [] dentro das aspas. 

async function criarVideo(evento) {

    evento.preventDefault(); //Serve para a página não atualizar sozinha. 

    //Nesse caso não queremos exatamente o "elemento inteiro", por isso coloca ".value", pois é o valor digitado que interessa. 

    const imagem = document.querySelector("[data-imagem]").value;
    const url = document.querySelector("[data-url]").value;
    const titulo = document.querySelector("[data-titulo]").value;

    //A descrição com o número de visualizações não pode ficar na conta do usuário de cadastrar. Por não termos um contador, vai pegar um número aleatório e multiplicar por 10. 

    const descricao = Math.floor(Math.random() * 10).toString();
    try {

        await conectaApi.criaVideo(titulo, descricao, url, imagem); // a ordem é importante

        window.location.href = "../pages/envio-concluido.html"; //depois de enviado, irá direcionar para essa tela. 
    }catch{
        
    }
}

formulario.addEventListener("submit", elemento => criarVideo(elemento));



