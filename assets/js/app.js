import * as helpers from './helpers.js';
import * as validation from './validation.js';

const progress = document.getElementById("progress");
const nextButton = document.getElementById("nextButton");
const prevButton = document.getElementById("prevButton");
const formSteps = document.querySelectorAll(".stepper__form__step");
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
         if(validation.validateCurrentStep(counter)) {
            helpers.NextProgress(progress);
            counter++;
            if(counter >= formSteps.length){
               counter = formSteps.length - 1;
            }
            handleFormDisplay();
         }
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