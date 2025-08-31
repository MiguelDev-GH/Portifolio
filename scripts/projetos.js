const setaDireita = document.getElementById("ProjDireita");
const setaEsquerda = document.getElementById("ProjEsquerda");

const contadorDiv = document.getElementById(`contadorProjDiv`);

const projQntd = 2;
let projAtual = 1;

function atualizarDisplayProjetos() {
    contadorDiv.innerHTML = ""
    for (let i = 1; i <= projQntd; i++) {

        let contElem = document.createElement("div");
        contElem.classList.add("contadorprojeto");
        contElem.id = `cp${i}`;

        if(i === projAtual){
            contElem.classList.add("contadorativo");
        }

        contadorDiv.appendChild(contElem);

        const projetoEl = document.getElementById(`projeto${i}`);

        if (projetoEl) {
            projetoEl.style.opacity = (i === projAtual) ? 1 : 0;
            projetoEl.style.zIndex = (i === projAtual) ? 1 : 0;
        }
    }
}

function avancarProjeto() {
    if (projAtual < projQntd) {
        projAtual++;
        atualizarDisplayProjetos();
    }
}

function retrocederProjeto() {
    if (projAtual > 1) {
        projAtual--;
        atualizarDisplayProjetos();
    }
}

atualizarDisplayProjetos();

setaDireita.addEventListener("click", avancarProjeto);
setaEsquerda.addEventListener("click", retrocederProjeto);

function loop(){
    requestAnimationFrame(loop)

    if(projAtual == 1){
        setaEsquerda.style.opacity = 0;
        setaEsquerda.style.cursor = "auto"
    } else{
        setaEsquerda.style.opacity = 1;
        setaEsquerda.style.cursor = "pointer"
    }

    if(projAtual == projQntd){
        setaDireita.style.opacity = 0;
        setaDireita.style.cursor = "auto"
    } else {
        setaDireita.style.opacity = 1;
        setaDireita.style.cursor = "pointer"
    }

}

loop()