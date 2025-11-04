import * as helpers from './helpers.js';

const progress = document.getElementById("progress");
const nextButton = document.getElementById("nextButton");
const prevButton = document.getElementById("prevButton");
const formSteps = document.querySelectorAll(".stepper__form__step");
const formStepper = document.getElementById("stepper__form");
const stepper = document.getElementById("stepper");
let counter = 0;
window.addEventListener("DOMContentLoaded", () => {

   
   function handleFormDisplay() {
         for(let i = 0; i < formSteps.length; i++){
        if(i !== counter){
            formSteps[i].style.display = "none";
        }
        else{
            formSteps[i].style.display = "block";
        }    
        
    }
    }

    function intializeApp() {
        handleFormDisplay();
        nextButton.addEventListener("click", () => {
            helpers.NextProgress(progress);
            counter++;
            if(counter >= formSteps.length){
                counter = formSteps.length - 1;
            }
            handleFormDisplay();
        });

        prevButton.addEventListener("click", () => {
            helpers.PrevProgress(progress);
            counter--;
            if(counter < 0){
                counter = 0;
            }
            handleFormDisplay();
        });
    }

    intializeApp();

});
