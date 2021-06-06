let bmiCalculator = () => {
    let weight = document.querySelector(".weight").value;
    let height = document.querySelector(".height").value;
    let output = document.querySelector(".output");
     
    
    let result = Math.round(weight / (Math.pow(height,2)).toFixed(2));

    if (result < 18.5){
        output.value =  "Your BMI is " + result + ", so you are underweight";
    }
    else if (result >= 18.5 && result <= 24.9){
        output.value = "Your BMI is " + result + ", so you have a normal weight";
    }
    else if (result >= 25 && result <= 29.9) {
        output.value = "Your BMI is "+ result + ", so you are overweight";
    }
    else if (result >= 30 && result <= 34.9) {
        output.value = "Your BMI is " + result + ", so you are obese";
    }
    else {
        output.value = "Your BMI is " + result + ", so you are extremely obese";
    }
}

document.querySelector(".btn").addEventListener("click", bmiCalculator);




