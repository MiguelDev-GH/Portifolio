const tabsEstudos = document.getElementById("estudosTab")
const tabsExperiencias = document.getElementById("experienciasTab")
const tabsCuriosidades = document.getElementById("curiosidadesTab")

let tabSobre = 1

tabsEstudos.addEventListener("click", () =>{tabSobre = 1})
tabsExperiencias.addEventListener("click", () =>{tabSobre = 2})
tabsCuriosidades.addEventListener("click", () =>{tabSobre = 3})

function mudarTab(op1,op2,op3){
    document.getElementById("estudos").style.opacity = op1
    document.getElementById("experiencias").style.opacity = op2
    document.getElementById("curiosidades").style.opacity = op3
}

function loop(){
    requestAnimationFrame(loop)

    console.log(tabSobre)

    if(tabSobre == 1){
        mudarTab(1,0,0)
    }else if(tabSobre == 2){
        mudarTab(0,1,0)
    }else if(tabSobre == 3){
        mudarTab(0,0,1)
    }

}

loop()