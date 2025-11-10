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

let languagesList = [];
let skillList = [];
export function addLanguage(e) {
  languagesList.push({language : document.getElementById("language").value , level : document.getElementById("languageLevel").value});
  document.getElementById("languagesList").innerHTML += `<li>${document.getElementById("language").value} - ${document.getElementById("languageLevel").value}</li>`;
  document.getElementById("language").value = "";
  document.getElementById("languageLevel").value = "";
  console.log(languagesList);

}
export function addSkill(e) {
  skillList.push(document.getElementById("skill").value);
  document.getElementById("skillsList").innerHTML += `<li>${document.getElementById("skill").value}</li>`;
  document.getElementById("skill").value = "";
  console.log(skillList);
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
    skills: skillList,
    languages: languagesList
  };
  
  localStorage.setItem('cvData', JSON.stringify(userData));
}
function saveData() {
  
}
function loadData() {
  const userData = JSON.parse(localStorage.getItem('cvData'));
  if (userData) return userData;
}

