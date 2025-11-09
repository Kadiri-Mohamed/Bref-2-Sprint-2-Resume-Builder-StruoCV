export function validateInput(input, minLength = 2) {
    const value = input.value.trim();
    
    if (value.length === 0) {
        showError(input, "This field is required");
        return false;
    }
    
    if (input.type === "email") {
        showError(input, "Please enter a valid email");
        return false;
    }
    
    if (input.type === "tel") {
        showError(input, "Phone must have at least 10 digits");
        return false;
    }
    
    if (input.tagName === "TEXTAREA" && value.length < 10) {
        showError(input, "Please provide at least 20 characters");
        return false;
    }
    
    if (value.length < minLength) {
        showError(input, `Must be at least ${minLength} characters`);
        return false;
    }
    
    clearError(input);
    return true;
}

export function showError(input, message) {
    clearError(input);
    input.classList.add("error-border");
    
    const error = document.createElement("div");
    error.className = "error-text";
    error.textContent = message;
    input.parentElement.appendChild(error);
}

export function clearError(input) {
    input.classList.remove("error-border");
    const error = input.parentElement.querySelector(".error-text");
    if (error) error.remove();
}

export function validateStep(step) {
    let inputs = [];
    
    if (step === 0) {
        inputs = [
            document.getElementById("firstName"),
            document.getElementById("lastName"),
            document.getElementById("email"),
            document.getElementById("phone"),
            document.getElementById("address"),
            document.getElementById("city"),
            document.getElementById("country"),
            document.getElementById("summary")
        ];
    } 
    else if (step === 1) {
        inputs = [
            document.getElementById("institution"),
            document.getElementById("degree"),
            document.getElementById("fieldOfStudy"),
            document.getElementById("startDate"),
            document.getElementById("endDate"),
            document.getElementById("educationDescription"),
            document.getElementById("jobTitle"),
            document.getElementById("company"),
            document.getElementById("startDateExp"),
            document.getElementById("endDateExp"),
            document.getElementById("experienceDescription")
        ];

    } 
    else if (step === 2) {
        inputs = [
            document.getElementById("skill1"),
            document.getElementById("language1")
        ];
    }
    
    let allValid = true;
    inputs.forEach(input => {
        if (!validateInput(input)) {
            allValid = false;
        }
    });
    
    return allValid;
}

export function getFormData() {
    return {
        firstName: document.getElementById("firstName").value,
        lastName: document.getElementById("lastName").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        address: document.getElementById("address").value,
        city: document.getElementById("city").value,
        country: document.getElementById("country").value,
        summary: document.getElementById("summary").value,
        institution: document.getElementById("institution").value,
        degree: document.getElementById("degree").value,
        fieldOfStudy: document.getElementById("fieldOfStudy").value,
        startDate: document.getElementById("startDate").value,
        endDate: document.getElementById("endDate").value,
        educationDescription: document.getElementById("educationDescription").value,
        jobTitle: document.getElementById("jobTitle").value,
        company: document.getElementById("company").value,
        startDateExp: document.getElementById("startDateExp").value,
        endDateExp: document.getElementById("endDateExp").value,
        experienceDescription: document.getElementById("experienceDescription").value,
        skill1: document.getElementById("skill1").value,
        language1: document.getElementById("language1").value,
        language1Level: document.getElementById("language1Level").value
    };
}
