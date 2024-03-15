const message=document.getElementById("message");
const password=document.getElementById("password");
const strength=document.getElementById("strength");
const sumbitButton=document.querySelector("button");
let ic=document.getElementById("icon");

password.addEventListener("input",function(){
    const passwordValue=password.value;
    const passwordLength=passwordValue.length;

    let strengthValue ='';

    if (password===0){
        strengthValue ='';
    }
    else if(passwordLength<6) {
        strengthValue ='Weak';
        message.style.color="green";
    }
    else if(passwordLength<11) {
        strengthValue ='Medium';
        message.style.color="orange";
    }
    else{
        strengthValue ='Strong';
        message.style.color="red";
    }
    strength.textContent=strengthValue;
    message.style.display="block";
})

sumbitButton.addEventListener("click",function(e){
    const passtype=password.getAttribute("type");
    

    if (passtype==="password"){
        password.setAttribute('type','text');
        // ic.classList.remove("fa-regular fa-eye");
        ic.className="fa-regular fa-eye";
        
    }
    else{
        password.setAttribute('type','password');
        // ic.classList.remove("fa-regular fa-eye-slash");
        // ic.classList.add("fa-regular fa-eye");
        ic.className="fa-regular fa-eye-slash";
    }
})