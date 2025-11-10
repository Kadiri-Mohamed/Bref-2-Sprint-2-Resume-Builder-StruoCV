let pro = 0;

export function NextProgress(progress) {
  if (pro < 75) {
    pro += 25;
    progress.style.left = `${pro}%`;
  }
}

export function PrevProgress(progress) {
  if (pro > 0) {
    pro -= 25;
    progress.style.left = `${pro}%`;
  }
}

export function saveData() {
  const userData = {
    personalData: {
      firstName: document.getElementById('firstName').value,
      lastName: document.getElementById('lastName').value,
      email: document.getElementById('email').value,
      phone: document.getElementById('phone').value,
      address: document.getElementById('address').value,
      city: document.getElementById('city').value,
      country: document.getElementById('country').value,
      summary: document.getElementById('summary').value,
    },
    educations: {
      education1: {
        institution: document.getElementById('institution').value,
        degree: document.getElementById('degree').value,
        fieldOfStudy: document.getElementById('fieldOfStudy').value,
        startDate: document.getElementById('startDate').value,
        endDate: document.getElementById('endDate').value,
        educationDescription: document.getElementById('educationDescription').value,
      }
    },
    experiences: {
      experience1: {
        jobTitleExp: document.getElementById('jobTitleExp').value,
        company: document.getElementById('company').value,
        startDateExp: document.getElementById('startDateExp').value,
        endDateExp: document.getElementById('endDateExp').value,
        experienceDescription: document.getElementById('experienceDescription').value,
      }
    },
    skills: {
      skill1:document.getElementById('skill1').value,

    },
    languages: {
      language1: {
        language: document.getElementById('language1').value,
        languageLevel: document.getElementById('language1-level').value,
      }
    }
  };

  localStorage.setItem('cvData', JSON.stringify(userData));
}

