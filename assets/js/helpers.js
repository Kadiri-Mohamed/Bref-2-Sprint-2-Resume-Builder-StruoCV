let pro = 0;
export let languagesList = [];
export let skillsList = [];
export let educationsList = [];
export let experiencesList = [];

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
export function addLanguage(e) {
  languagesList.push({ language: document.getElementById("language").value, level: document.getElementById("languageLevel").value });
  document.getElementById("languagesList").innerHTML += ` <li class="language flex justify-between bg-tertiary items-center rounded-2xl mt-2">
       <div class="flex gap-16">
         <span class="font-semibold text-gray-900 dark:text-white languageName">${document.getElementById("language").value} </span> 
        <span class="font-semibold text-gray-900 dark:text-white">${document.getElementById("languageLevel").value}</span> 
       
       </div>
        <button type="button" class="text-white deleteLanguage bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center  dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">remove</button>
    </li>  `;
  document.getElementById("language").value = "";
  document.getElementById("languageLevel").value = "";
  for (let element of document.getElementsByClassName("deleteLanguage")) {
    element.addEventListener("click", (e) => {
      deleteLanguage(e);
    })
  }
  console.log(languagesList);

}
export function addSkill(e) {
  skillsList.push(document.getElementById("skill").value);
  // <li>
  //     <span class="font-semibold text-gray-900 dark:text-white">Bonnie Green</span> with <span class="font-semibold text-gray-900 dark:text-white">70</span> points
  // </li>
  document.getElementById("skillsList").innerHTML += ` <li class="skill flex justify-between bg-tertiary items-center rounded-2xl mt-2">
        <span class="font-semibold text-gray-900 dark:text-white skillName">${document.getElementById("skill").value}</span> 
        <button type="button" class="text-white deleteSkill bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">remove</button>
    </li>  `;
  document.getElementById("skill").value = "";
  const deleteSkillButtons = document.getElementsByClassName("deleteSkill");
  for (const element of deleteSkillButtons) {
    element.addEventListener("click", (e) => {
      deleteSkill(e);
    })
  }
  console.log(skillsList);
}

export function deleteLanguage(e) {
  const languageElement = e.target.closest('.language');
  const languageName = languageElement.querySelector('.languageName').textContent.trim();
  languageElement.remove();
  languagesList = languagesList.filter((language) => language.language !== languageName);
}
export function deleteSkill(e) {
  const skillElement = e.target.closest('.skill');
  const skillName = skillElement.querySelector('.skillName').textContent.trim();
  skillElement.remove();
  skillsList = skillsList.filter((skill) => skill !== skillName);
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
    skills: skillsList,
    languages: languagesList
  };

  localStorage.setItem('cvData', JSON.stringify(userData));
}

function loadData() {
  const userData = JSON.parse(localStorage.getItem('cvData'));
  if (userData) return userData;
}

