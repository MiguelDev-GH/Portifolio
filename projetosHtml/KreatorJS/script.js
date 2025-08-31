/*

const overlay = document.getElementById("overlay");

const imgs = [
    document.getElementById("img1"),
    document.getElementById("img2"),
    document.getElementById("img3"),
    document.getElementById("img4"),
]

let ativado = false;

imgs.map((img) => {
    img.addEventListener("click",(e)=>{

        thisImg = e.target;
        
        if(!ativado){      
            
            overlay.classList.add('visivel');
            thisImg.classList.add("ativa");
            ativado = true;

        } else {
            
            ativado = false;

            thisImg.style.opacity = 0;

            setInterval(()=>{
                overlay.classList.remove('visivel');
                thisImg.classList.remove("ativa");
                thisImg.style.opacity = 1;
            },500)

        }
})
})

*/