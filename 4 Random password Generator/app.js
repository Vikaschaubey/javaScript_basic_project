const inputSlider=document.getElementById("inputSlider");
const sliderValue=document.getElementById("sliderValue");
const passBox=document.getElementById("passBox");
const lowercaseE=document.getElementById("lowercase");
const uppercaseE=document.getElementById("uppercase");
const numbersE=document.getElementById("numbers");
const symbolsE=document.getElementById("symbols");
const generateBtn=document.getElementById("getBtn");

const copyIcon=document.getElementById("copyIcon");

const lowercaseLetters="abcdefghijklmnopqrstuvwxyz";
const uppercaseLetters="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const  numbers="0123456789";
const symbols = `!@#$%^&*()_-+={}[]|\\?<>,.;:"'`;

sliderValue.textContent=inputSlider.value;
inputSlider.addEventListener("input",()=>{
    sliderValue.textContent=inputSlider.value;
})

generateBtn.addEventListener("click",function(){
    passBox.value=generatePassword();
})

function generatePassword(){

    const length = inputSlider.value;
    let characters="";
    let password="";

    characters += lowercaseE.checked ? lowercaseLetters : "";
    characters += uppercaseE.checked ? uppercaseLetters : "";
    characters += numbersE.checked ? numbers : "";
    characters += symbolsE.checked ? symbols : "";

    for (let i = 0; i<length;i++){
        password+=characters.charAt(Math.floor(Math.random()*characters.length));
        console.log(password)
    }

    return password

}

copyIcon.addEventListener("click",()=>{
    if(passBox.value != "" || passBox.value.length >= 5){
        navigator.clipboard.writeText(passBox.value);
        copyIcon.classList="fa-solid fa-check";
        // <i class="fa-solid fa-check"></i>
        setTimeout(()=>{
            copyIcon.classList="fa-regular fa-copy";
        },500)
    }
});