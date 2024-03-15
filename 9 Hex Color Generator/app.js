let generateBtn = document.getElementById("generateBtn");
generateBtn.addEventListener("click",updateColor);

function updateColor(){

    const colorBox = document.getElementById("box");
    const colorText = document.getElementById("colorText");

    const randomColor = getRandomColor();
    // body.style.backgroundColor=randomColor;
    colorBox.style.backgroundColor=randomColor;
    colorText.textContent=randomColor;
    
}

// Función que devuelve un
function getRandomColor(){
    const letters = "0123456789ABCDEF";
    let color="#";

    for(let i=0;i<6;i++){
        color += letters[Math.floor(Math.random()*16)];
        console.log(color);
    }

    return color;
}