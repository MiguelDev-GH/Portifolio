const popup = document.getElementById("popup")
const popupText = document.getElementById("popupText")

function criarPopup(texto){
    popupText.innerText = texto
    popup.style.opacity = 1
    popup.style.top = "10vh"
    setInterval(()=>{
        popup.style.top = "-10vh"
        popup.style.opacity = 0
    },3000)
}