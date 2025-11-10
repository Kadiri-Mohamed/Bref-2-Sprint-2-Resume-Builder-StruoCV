// export function getFormData() {
//     return {
//         firstName: document.getElementById("firstName").value,
//         lastName: document.getElementById("lastName").value,
//         email: document.getElementById("email").value,
//         phone: document.getElementById("phone").value,
//         address: document.getElementById("address").value,
//         city: document.getElementById("city").value,
//         country: document.getElementById("country").value,
//         summary: document.getElementById("summary").value,
//         institution: document.getElementById("institution").value,
//         degree: document.getElementById("degree").value,
//         fieldOfStudy: document.getElementById("fieldOfStudy").value,
//         startDate: document.getElementById("startDate").value,
//         endDate: document.getElementById("endDate").value,
//         educationDescription: document.getElementById("educationDescription").value,
//         jobTitle: document.getElementById("jobTitle").value,
//         company: document.getElementById("company").value,
//         startDateExp: document.getElementById("startDateExp").value,
//         endDateExp: document.getElementById("endDateExp").value,
//         experienceDescription: document.getElementById("experienceDescription").value,
//         skill1: document.getElementById("skill1").value,
//         language1: document.getElementById("language1").value,
//         language1Level: document.getElementById("language1Level").value
//     };
// }

function addLanguage(e) {
    e.closest();
    document.getElementById("languagesList").innerHTML += `
    <div class="form__group">
        <label for="language1">Language</label>
        <input type="text" id="language1" name="language1" placeholder="Language">
    </div>  `
}