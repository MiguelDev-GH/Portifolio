const tabsEstudos = document.getElementById("estudosTab")
const tabsExperiencias = document.getElementById("experienciasTab")
const tabsCuriosidades = document.getElementById("curiosidadesTab")

let tabSobre = 1

tabsEstudos.addEventListener("click", () =>{tabSobre = 1})
tabsExperiencias.addEventListener("click", () =>{tabSobre = 2})
tabsCuriosidades.addEventListener("click", () =>{tabSobre = 3})

function mudarTab(op1,op2,op3){
    fundoDegFunction(tabSobre)

    const estudosDiv = document.getElementById("estudos")
    const experienciasDiv = document.getElementById("experiencias")
    const curiosidadesDiv = document.getElementById("curiosidades")

    estudosDiv.style.opacity = op1
    estudosDiv.style.zIndex = op1

    experienciasDiv.style.opacity = op2
    experienciasDiv.style.zIndex = op2
    
    curiosidadesDiv.style.opacity = op3
    curiosidadesDiv.style.zIndex = op3
}

function loop(){
    requestAnimationFrame(loop)

    if(tabSobre == 1){
        mudarTab(1,0,0)
    }else if(tabSobre == 2){
        mudarTab(0,1,0)
    }else if(tabSobre == 3){
        mudarTab(0,0,1)
    }

}

loop()