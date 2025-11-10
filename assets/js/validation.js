function checkEmpty(input) {
  if (input.value.trim() === "") {
    showError(input, "This field is required");
    return false;
  }
  clearError(input);
  return true;
}

function checkEmail(input) {
  const value = input.value.trim();
  if (value === "") {
    showError(input, "Email is required");
    return false;
  }
  if (!value.includes("@") || !value.includes(".")) {
    showError(input, "Please enter a valid email");
    return false;
  }
  clearError(input);
  return true;
}

function checkPhone(input) {
  const value = input.value.trim();
  if (value === "") {
    showError(input, "Phone is required");
    return false;
  }
  const numbers = value.replace(/[^0-9]/g, '');
  if (numbers.length < 10) {
    showError(input, "Phone must have at least 10 digits");
    return false;
  }
  clearError(input);
  return true;
}

function checkText(input, minLength = 20) {
  const value = input.value.trim();
  if (value === "") {
    showError(input, "This field is required");
    return false;
  }
  if (value.length < minLength) {
    showError(input, `Please write at least ${minLength} characters`);
    return false;
  }
  clearError(input);
  return true;
}

function showError(input, message) {
  clearError(input);
  input.classList.add('border-red-500');
  input.classList.remove('border-gray-300');
  
  const error = document.createElement('div');
  error.className = 'error-message text-red-500 text-sm mt-1';
  error.textContent = message;
  input.parentElement.appendChild(error);
}

function clearError(input) {
  input.classList.remove('border-red-500');
  input.classList.add('border-gray-300');
  
  const error = input.parentElement.querySelector('.error-message');
  if (error) {
    error.remove();
  }
}

export function validateCurrentStep(step) {
  let valid = true;
  
  if (step === 0) {
    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const address = document.getElementById('address');
    const city = document.getElementById('city');
    const country = document.getElementById('country');
    const summary = document.getElementById('summary');
    
    if (!checkEmpty(firstName)) valid = false;
    if (!checkEmpty(lastName)) valid = false;
    if (!checkEmail(email)) valid = false;
    if (!checkPhone(phone)) valid = false;
    if (!checkEmpty(address)) valid = false;
    if (!checkEmpty(city)) valid = false;
    if (!checkEmpty(country)) valid = false;
    if (!checkText(summary, 10)) valid = false;
    
    return valid;
  }
  
  if (step === 1) {
    const inputs = [
      document.getElementById('institution'),
      document.getElementById('degree'),
      document.getElementById('fieldOfStudy'),
      document.getElementById('startDate'),
      document.getElementById('endDate'),
      document.getElementById('educationDescription'),
      document.getElementById('jobTitleExp'),
      document.getElementById('company'),
      document.getElementById('startDateExp'),
      document.getElementById('endDateExp'),
      document.getElementById('experienceDescription')
    ];
    
    for (let input of inputs) {
      if (!checkEmpty(input)) {
        valid = false;
      }
    }
    
    return valid;
  }
  
  if (step === 2) {
    const skill = document.getElementById('skill');
    const language = document.getElementById('language');
    
    if (!checkEmpty(skill)) valid = false;
    if (!checkEmpty(language)) valid = false;
    
    return valid;
  }
  
  return true;
}