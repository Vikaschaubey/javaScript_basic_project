const paragraphs = [ 
    "JavaScript, born in the mid-1990s, revolutionized web development by enabling dynamic and interactive content.",
"Its versatility extends from simple scripts to complex web applications, making it a cornerstone of modern web development.",
"JavaScript's lightweight nature and compatibility with all major browsers ensure widespread adoption and seamless user experiences.",
"With frameworks like React and Angular, JavaScript empowers developers to build scalable and responsive web applications effortlessly.",
"Its asynchronous capabilities facilitate non-blocking operations, enhancing performance and responsiveness in web development.",
"JavaScript's client-side scripting enables manipulation of HTML and CSS, dynamically altering webpage content based on user interactions.",
"Through Node.js, JavaScript expands its domain to server-side programming, offering a unified language for both client and server environments.",
"Its extensive ecosystem, including libraries like jQuery and lodash, accelerates development by providing pre-built solutions for common tasks.",
"JavaScript's evolution continues with ES6 and beyond, introducing features like arrow functions and classes, enhancing code readability and maintainability.",
"As technology advances, JavaScript remains indispensable, powering the dynamic web experiences that define modern digital interactions."
]

const items=document.getElementById("items");
const dataContainer = document.getElementById("data");

function shuffle(array){
    let currentIndex = array.length;
    let randomIndex;

    while(currentIndex!=0){
        randomIndex=Math.floor(Math.random()*currentIndex);
        currentIndex--;
        //swap
        [array[currentIndex],array[randomIndex]]=[array[randomIndex],array[currentIndex]];
    }

    return array

}

function generate(){
    if(items.value==0){
        alert("The value cannot be Zero");
    }
    else if(items.value > paragraphs.length){
        const randomIndex = Math.floor(Math.random() * paragraphs.length);
        dataContainer.innerHTML=`${paragraphs[randomIndex]}`;
    }
    else{
        const shuffleParagraphs = paragraphs;
        shuffle(paragraphs);

        const selectedParagraphs = shuffleParagraphs.slice(0,items.value);

        const paragraphsHTML = selectedParagraphs.map(paragraphs => `<p> ${paragraphs} </p>`).join("");

        dataContainer.innerHTML=paragraphsHTML;
    }
}