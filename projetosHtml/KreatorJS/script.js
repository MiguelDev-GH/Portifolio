const hoverP = document.getElementById("hover")

function hover(){
    hoverP.style.opacity = 1;
}

function hoverout(){
    hoverP.style.opacity = 0;
}

document.getElementById("imagens").addEventListener("mouseout",hoverout);