async function listaVideos(){
    const conexao = await fetch("http://localhost:3000/videos"); //Aqui é só a promessa. 
    const conexaoConvertida = await conexao.json(); //É preciso converter para usar.

    return conexaoConvertida;

}

async function criaVideo(titulo, descricao, url, imagem) {
    const conexao = await fetch("http://localhost:3000/videos", {
        method: "POST", //Requisições do tipo POST são usadas para enviar dados para a API. Isso vai te acompanhar pela vida toda. 
        headers: {
            "Content-type": "application/json"
        }, 
        body: JSON.stringify({
            titulo: titulo,
            descricao: `${descricao} mil visualizações`, 
            url: url,
            imagem: imagem
        })
    }); 

        if (!conexao.ok){
            throw new Error("Não foi possível enviar o vídeo")
        }

    const conexaoConvertida = await conexao.json();
    
    return conexaoConvertida;
}

async function buscaVideo(termoBusca){
    const conexao = await fetch(`http://localhost:3000/videos?q=${termoBusca}`);

    const conexaoConvertida = conexao.json(); 

    return conexaoConvertida;

}

 export const conectaApi = {
     listaVideos, 
     criaVideo, 
     buscaVideo
 }
