import * as helpers from './helpers.js';
import * as validation from './validation.js';

const progress = document.getElementById("progress");
const nextButton = document.getElementById("nextButton");
const prevButton = document.getElementById("prevButton");
const formSteps = document.querySelectorAll(".stepper__form__step");

let counter = 0;

window.addEventListener("DOMContentLoaded", () => {
    


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
        
        });
        document.getElementById("stepper__form").addEventListener("submit", (e) => {
            e.preventDefault();
            helpers.saveData();
            // alert("Form Submitted Successfully");
        })

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

    document.getElementById("educationArrow").addEventListener("click", (e) => {
            document.getElementById("educationEntry").classList.toggle("hidden");
            if (document.getElementById("educationEntry").classList.contains("hidden")) {
                document.getElementById("educationArrow").classList.remove("fa-chevron-up");
                document.getElementById("educationArrow").classList.add("fa-chevron-down");
            }else{
                document.getElementById("educationArrow").classList.remove("fa-chevron-down");
                document.getElementById("educationArrow").classList.add("fa-chevron-up");
            }
    })
    document.getElementById("experienceArrow").addEventListener("click", (e) => {
            document.getElementById("experienceEntry").classList.toggle("hidden");
            if (document.getElementById("experienceEntry").classList.contains("hidden")) {
                document.getElementById("experienceArrow").classList.remove("fa-chevron-up");
                document.getElementById("experienceArrow").classList.add("fa-chevron-down");
            }else{
                document.getElementById("experienceArrow").classList.remove("fa-chevron-down");
                document.getElementById("experienceArrow").classList.add("fa-chevron-up");
            }
    })
    document.getElementById("addLanguage").addEventListener("click", (e) => {
        e.preventDefault();
        helpers.addLanguage(e);
    })
    document.getElementById("addSkill").addEventListener("click", (e) => {
        e.preventDefault();
        helpers.addSkill(e);
    })

    

    intializeApp();
});