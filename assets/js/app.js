import * as helpers from './helpers.js';
import * as validation from './validation.js';

const progress = document.getElementById("progress");
const nextButton = document.getElementById("nextButton");
const prevButton = document.getElementById("prevButton");
const downloadButton = document.getElementById("telechargerButton");
const choiceButton = document.getElementById("choiceButton");
const formSteps = document.querySelectorAll(".stepper__form__step");
let data = {};
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
            helpers.saveData();
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
                data = helpers.loadData();
                helpers.displayCVReview(data);
                choiceButton.style.display = "block";
                choiceButton.previousElementSibling.style.display = "none";
                // choiceButton.addEventListener("click", () => {
                //     // helpers.downloadCV();
                // })
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
            if (counter == 3) {
                nextButton.style.display = "block";
                choiceButton.style.display = "none";
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
        } else {
            document.getElementById("educationArrow").classList.remove("fa-chevron-down");
            document.getElementById("educationArrow").classList.add("fa-chevron-up");
        }
    })
    document.getElementById("experienceArrow").addEventListener("click", (e) => {
        document.getElementById("experienceEntry").classList.toggle("hidden");
        if (document.getElementById("experienceEntry").classList.contains("hidden")) {
            document.getElementById("experienceArrow").classList.remove("fa-chevron-up");
            document.getElementById("experienceArrow").classList.add("fa-chevron-down");
        } else {
            document.getElementById("experienceArrow").classList.remove("fa-chevron-down");
            document.getElementById("experienceArrow").classList.add("fa-chevron-up");
        }
    })
    document.getElementById("addLanguage").addEventListener("click", (e) => {
        e.preventDefault();
        helpers.addLanguage(e);
    })
    document.getElementById("addExperience").addEventListener("click", (e) => {
        e.preventDefault();
        helpers.addExperience(e);
    })
    document.getElementById("addEducation").addEventListener("click", (e) => {
        e.preventDefault();
        helpers.addEducation(e);
    })
    document.getElementById("addSkill").addEventListener("click", (e) => {
        e.preventDefault();
        helpers.addSkill(e);
    })
    document.getElementById("cvPicInput").addEventListener("change", (e) => {
        e.preventDefault();
        helpers.getPicture(e);
    });

    // downloadButton.addEventListener("click", (e) => {
    //     e.preventDefault();
    //     var element = document.getElementById('step4');
    //     var opt = {
    //         margin: 0,
    //         filename: 'myCV.pdf',
    //         image: { type: 'jpeg'},
    //         html2canvas: { scale: 2 },
    //         jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    //     };

    //     // New Promise-based usage:
    //     html2pdf().set(opt).from(element).save();
    // })


    // Array(document.getElementsByClassName("deleteSkill")).forEach((element) => {
    //     element.addEventListener("click", (e) => {
    //         helpers.de(e);
    //     })
    // })

    intializeApp();
});