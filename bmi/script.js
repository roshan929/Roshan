
function (e)

{
const height = document.getElementById("height").value;

const weight = document.getElementById("weight").value;
const result = document.getElementById("result");

if(!height || !weight || height <= 0 || weight <=){
    result.textContent = "Please enter a valid number";
    return;
}

const heightInMeter = height / 100;
const bmi = (weight / (heightInMeter * heightInMeter)).toFixed(2);

let category = "";
if (bmi < 18.5){
    category = Underweight;
}
if (bmi < )
}