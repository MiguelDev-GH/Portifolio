const setaDireita = document.getElementById("ProjDireita");
const setaEsquerda = document.getElementById("ProjEsquerda");

const projQntd = 2;
let projAtual = 1;
function atualizarDisplayProjetos() {
    for (let i = 1; i <= projQntd; i++) {
        const projetoEl = document.getElementById(`projeto${i}`);
        if (projetoEl) {
            projetoEl.style.display = (i === projAtual) ? "flex" : "none";
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