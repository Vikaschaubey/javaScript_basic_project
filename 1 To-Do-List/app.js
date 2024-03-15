let listContainer=document.getElementById("list-container")
let inputValue = document.getElementById("input-box")

function addtask(){
    if(inputValue.value ===""){
        alert("Please enter a task!")
    }
    else{
        let li=document.createElement('li')
        //create text node
        li.innerHTML=inputValue.value;
        listContainer.appendChild(li);

        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputValue.value="";
    saveTask();
}

listContainer.addEventListener( "click", function(e){
    if (e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveTask();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveTask();
    }
}) 

function saveTask(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();