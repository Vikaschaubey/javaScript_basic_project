function calculateAge(){
    const today=new Date();
    const birthdateInput=document.getElementById("birthdate").value;
    const birthdateParts=birthdateInput.split("-");
    const birthDay=birthdateParts[0];
    const birthMonth = birthdateParts[1]-1;
    const birthYear = birthdateParts[2];
    const birthDate=new Date(birthYear,birthMonth,birthDay);

    console.log(birthdateInput);
    console.log(birthdateParts);
    console.log(birthDay);
    console.log(birthMonth);
    console.log(birthYear);

    const isValidDate = (date) =>{
    return(
        // Object.prototype.toString.call(date) === ["object Date"] && !isNaN(date)
        Object.prototype.toString.call(date)==="[object Date]" && !isNaN(date)
    );
    };

    if(!isValidDate(birthDate)){
        alert("Invalid Data Format: Please enter a valid date in DD-MM-YYYY format.");
        return;
    }

    const ageInMiliseconds =  today - birthDate;
    const ageInseconds = Math.floor(ageInMiliseconds/1000);
    const ageInminutes = Math.floor(ageInseconds/60);
    const ageInhours = Math.floor(ageInminutes/60);
    const ageInDays = Math.floor(ageInhours/24);
    const ageInweeks = Math.floor(ageInDays/7);
    const ageInmonths = Math.floor(ageInDays/30.436875);
    const ageInyears = Math.floor(ageInDays/365.25);

    const resultContainer = document.getElementById("resultContainer");
    const result = document.getElementById("result");

    result.innerHTML = `
    <div class="result-item">
        <h3>Age:</h3>
        <p>${ageInyears} Years ${ageInmonths % 12} Months ${ageInDays % 30} Days</p>
    </div>
    <div class="result-item">
        <h3>Months Passed:</h3>
        <p>${ageInmonths}</p>
    </div>
    <div class="result-item">
        <h3>Weeks Passed:</h3>
        <p>${ageInweeks}</p>
    </div>
    <div class="result-item">
        <h3>Days Passed:</h3>
        <p>${ageInDays}</p>
    </div>
    <div class="result-item">
        <h3>Hours Passed:</h3>
        <p>${ageInhours}</p>
    </div>
    <div class="result-item">
        <h3>Minutes Passed:</h3>
        <p>${ageInminutes}</p>
    </div>
    <div class="result-item">
        <h3>Seconds Passed:</h3>
        <p>${ageInseconds}</p>
    </div>
    `;

    resultContainer.style.display = "block";


}

const ageCalculatorForm = document.getElementById("ageCalculator");
ageCalculatorForm.addEventListener("submit",(event)=>{
    event.preventDefault();
    calculateAge(); 
})