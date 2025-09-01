const hoverP = document.getElementById("hover")

function hover(){hoverP.style.opacity = 1;}
function hoverout(){hoverP.style.opacity = 0;}

document.getElementById("imagens").addEventListener("mouseout",hoverout);

const imagensZoomDiv = document.getElementById("imagensZoom");

const setaDireta = document.getElementById("p2")
const setaEsquerda = document.getElementById("p1")

const overlay = document.getElementById("overlay")

let zoom = false;

let fotoAtual = 2;

async function zoomFunc() {
    if(zoom){
        overlay.classList.add("visivel")
        imagensZoomDiv.style.zIndex = 5;
        imagensZoomDiv.style.opacity = 1;
        setaDireta.style.zIndex = 6;
        setaEsquerda.style.zIndex = 6;
    } else{
        imagensZoomDiv.style.opacity = 0;
        overlay.classList.remove("visivel")
        setTimeout(() => {
            imagensZoomDiv.style.zIndex = -5;
            setaDireta.style.zIndex = -1;
            setaEsquerda.style.zIndex = -1;
        },500);
    }
}

setaDireta.addEventListener("click",()=>{
    if(fotoAtual < 4){
        fotoAtual += 1
    }
})

setaEsquerda.addEventListener("click",()=>{
    if(fotoAtual > 1){
        fotoAtual -= 1
    }
})

function loop(){
    requestAnimationFrame(loop)
    zoomFunc()

    setaDireta.style.opacity = imagensZoomDiv.style.opacity;
    setaEsquerda.style.opacity = imagensZoomDiv.style.opacity;

    if(fotoAtual === 1){
        imagensZoomDiv.style.left = "775px"
        setaEsquerda.style.opacity = 0;
    } else if(fotoAtual === 2){
        imagensZoomDiv.style.left = "-825px"
    } else if(fotoAtual === 3){
        imagensZoomDiv.style.left = "-2425px"
     } else if(fotoAtual === 4){
        imagensZoomDiv.style.left = "-4025px"
        setaDireta.style.opacity = 0;
     }
}

loop()