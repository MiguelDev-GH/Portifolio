const copyLinkGit = document.getElementById("copyLinkGit")
const copyLinkInsta = document.getElementById("copyLinkInsta")
const copyLinkX = document.getElementById("copyLinkX")

function linkClicado(link,obj){
    navigator.clipboard.writeText(link)
    
    criarPopup("Link copiado com sucesso!")

    obj.style.opacity = 1;

    setInterval(()=>{
        obj.style.opacity = 0.5;
    },500)

}

copyLinkGit.addEventListener("click", () => {
    linkClicado("https://github.com/migueldev",copyLinkGit)
})

copyLinkInsta.addEventListener("click", () => {
    linkClicado("https://www.instagram.com/migueldev._/",copyLinkInsta)
})

copyLinkX.addEventListener("click", () => {
    linkClicado("https://x.com/migueldev_x",copyLinkX)
})