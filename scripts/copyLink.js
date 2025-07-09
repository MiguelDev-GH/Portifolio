function linkClicado(link,obj){
    navigator.clipboard.writeText(link)
    
    criarPopup("Link copiado com sucesso!")

    obj.style.opacity = 1;

    setInterval(()=>{
        obj.style.opacity = 0.5;
    },500)

}