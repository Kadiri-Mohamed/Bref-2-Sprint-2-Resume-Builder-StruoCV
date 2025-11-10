import * as helpers from './helpers.js';
import * as validation from './validation.js';

const progress = document.getElementById("progress");
const nextButton = document.getElementById("nextButton");
const prevButton = document.getElementById("prevButton");
const formSteps = document.querySelectorAll(".stepper__form__step");
let counter = 0;

window.addEventListener("DOMContentLoaded", () => {

    //    validation.loadFromStorage();

    function handleFormDisplay() {
        for (let i = 0; i < formSteps.length; i++) {
            if (i !== counter) {
                formSteps[i].style.display = "none";
            }
            else {
                formSteps[i].style.display = "block";
            }
        }
    }

    function intializeApp() {
        handleFormDisplay();

        nextButton.addEventListener("click", (e) => {
            if (validation.validateCurrentStep(counter)) {
                helpers.NextProgress(progress);
                counter++;
                if (counter >= formSteps.length) {
                    counter = formSteps.length - 1;
                }
                handleFormDisplay();
            }
            if (counter == 2) {
                nextButton.innerText = "Submit";
                nextButton.setAttribute("type", "submit");
            }
            if (counter == 3) {
                e.preventDefault();
                helpers.saveData();
            }
        });

        prevButton.addEventListener("click", (e) => {
            helpers.PrevProgress(progress);
            if (counter == 2) {
                nextButton.innerText = "Next";
                nextButton.setAttribute("type", "button");

            }
            counter--;
            if (counter < 0) {
                counter = 0;
            }
            handleFormDisplay();
        });
    }

    intializeApp();
});