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
       <div class="flex gap-16 justify-between">
         <span class="font-semibold px-5 text-gray-900 dark:text-white languageName">${document.getElementById("language").value} </span> 
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

// add
export function addSkill(e) {
  skillsList.push(document.getElementById("skill").value);
  document.getElementById("skillsList").innerHTML += ` <li class="skill flex justify-between bg-tertiary items-center w-full rounded-2xl mt-2">
        <span class="font-semibold text-gray-900 dark:text-white skillName px-5">${document.getElementById("skill").value}</span> 
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
export function addEducation() {
  //  institution: document.getElementById('institution').value,
  //       degree: document.getElementById('degree').value,
  //       fieldOfStudy: document.getElementById('fieldOfStudy').value,
  //       startDate: document.getElementById('startDate').value,
  //       endDate: document.getElementById('endDate').value,
  //       educationDescription: document.getElementById('educationDescription').value,


  const institution = document.getElementById("institution").value;
  const degree = document.getElementById("degree").value;
  const fieldOfStudy = document.getElementById("fieldOfStudy").value;
  const startDate = document.getElementById("startDate").value;
  const endDate = document.getElementById("endDate").value;
  const educationDescription = document.getElementById("educationDescription").value;

  if (institution === "" || degree === "" || fieldOfStudy === "" || startDate === "" || educationDescription === "") {
    alert("Please fill out all fields of the education ");
    return;
  }
  if (endDate) {
    if (startDate > endDate) {
      alert("Please enter a valid date");
      return;
    }
  }
  const education = {
    institution,
    degree,
    fieldOfStudy,
    startDate,
    endDate: endDate === "" ? "Present" : endDate,
    educationDescription,

  }
  educationsList.push(education);
  console.log(educationsList);
  // institution = "";
  // degree = "";
  // fieldOfStudy = "";
  // startDate = "";
  // endDate = "";
  // educationDescription = "";


  displayEducation();
  const deleteEducationButtons = document.getElementsByClassName("deleteEducation");
  // console.log(deleteEducationButtons[0]);
  for (const element of deleteEducationButtons) {
    element.addEventListener("click", (e) => {
      // console.log(e.target);
      deleteEducation(e);
    })
  }
  return education;

}
export function addExperience(e) {
  //  jobTitleExp: document.getElementById('jobTitleExp').value,
  //         company: document.getElementById('company').value,
  //         startDateExp: document.getElementById('startDateExp').value,
  //         endDateExp: document.getElementById('endDateExp').value,
  //         experienceDescription: document.getElementById('experienceDescription').value,
  const jobTitleExp = document.getElementById("jobTitleExp").value;
  const company = document.getElementById("company").value;
  const startDateExp = document.getElementById("startDateExp").value;
  const endDateExp = document.getElementById("endDateExp").value;
  const experienceDescription = document.getElementById("experienceDescription").value;

  if (jobTitleExp === "" || company === "" || startDateExp === "" || experienceDescription === "") {
    // test on date value
    alert("Please fill all fields of experience");
    return;
  }
  if (endDateExp) {
    if (startDateExp > endDateExp) {
      alert("Please enter a valid date");
      return;
    }
  }
  const experience = {
    jobTitleExp,
    company,
    startDateExp,
    endDateExp: endDateExp === "" ? "Present" : endDateExp,
    experienceDescription,

  }
  experiencesList.push(experience);
  displayExperiences();
  const deleteExprienceButtons = document.getElementsByClassName("deleteExprience");
  // console.log(deleteExprienceButtons[0]);
  for (const element of deleteExprienceButtons) {
    element.addEventListener("click", (e) => {
      // console.log(e.target);
      deleteExperience(e);
    })
  }
  console.log(experiencesList);
}
// display
function displayEducation() {
  document.getElementById("EducationsList").innerHTML = "";
  educationsList.forEach((education) => {

    document.getElementById("EducationsList").innerHTML += `
    <tr class="education bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 ">
                <th scope="row"  class="educationName px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    ${education.institution}
                </th>
                <td class="px-6 py-4">
                    ${education.degree}
                </td>
                <td class="px-6 py-4">
                    ${education.fieldOfStudy}
                </td>
                <td class="px-6 py-4">
                    ${education.startDate} - ${education.endDate}
                </td>
                <td class="px-6 py-4">
                 <button type="button" class="text-white deleteEducation bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">remove</button>
                </td>
              </tr>
    `
  })
}
function displayExperiences() {
  document.getElementById("ExperiecesList").innerHTML = ""
  experiencesList.forEach((experience) => {
    document.getElementById("ExperiecesList").innerHTML += `
    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 experience">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white experienceName">
                    ${experience.jobTitleExp}
                </th>
                <td class="px-6 py-4">
                    ${experience.company}
                </td>
                <td class="px-6 py-4">
                    ${experience.startDateExp} - ${experience.endDateExp}
                </td>
                <td class="px-6 py-4">
                    <button type="button" class="text-white deleteExprience bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">remove</button>
                </td>
            </tr>
                      `
  });
}

// delete


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
export function deleteExperience(e) {
  const experienceElement = e.target.closest('.experience');
  const experienceName = experienceElement.querySelector('.experienceName').textContent.trim();
  experienceElement.remove();
  experiencesList = experiencesList.filter((experience) => experience.jobTitleExp !== experienceName);
}
export function deleteEducation(e) {
  const educationElement = e.target.closest('.education');
  const educationName = educationElement.querySelector('.educationName').textContent.trim();
  educationElement.remove();
  educationsList = educationsList.filter((education) => education.institution !== educationName);
}


// helpers 
export function getPicture(e) {
  const file = e.target.files[0];
  if (file && file.size <= 2 * 1024 * 1024) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e) => {
      document.getElementById("cvPic").style.width = "150px";
      document.getElementById("cvPic").nextElementSibling.style.display = "none";
      document.getElementById("cvPic").nextElementSibling.nextElementSibling.style.display = "none";
      document.getElementById("cvPic").src = e.target.result;
      
      //stok temporary
      document.getElementById("cvPic").dataset.imageData = e.target.result;
    }
  } else {
    alert("File size should be less than 2MB");
  }

}


export function saveData() {
  const cvPicElement = document.getElementById("cvPic");
  const cvPic = cvPicElement.dataset.imageData;
  
  const userData = {
    personalData: {
      cvPic: cvPic,
      firstName: document.getElementById('firstName').value,
      lastName: document.getElementById('lastName').value,
      email: document.getElementById('email').value,
      phone: document.getElementById('phone').value,
      address: document.getElementById('address').value,
      city: document.getElementById('city').value,
      country: document.getElementById('country').value,
      summary: document.getElementById('summary').value,
    },
    educations: educationsList,
    experiences: experiencesList,
    skills: skillsList,
    languages: languagesList
  };

  localStorage.setItem('cvData', JSON.stringify(userData));
}

export function loadData() {
  const userData = JSON.parse(localStorage.getItem('cvData'));
  if (userData) return userData;
}

export function displayCVReview(data) {
    // Profile Picture
    const cvPicElement = document.getElementById('cv-review-pic');
    if (data.personalData.cvPic) {
        cvPicElement.src = data.personalData.cvPic;
        cvPicElement.style.display = 'block';
    } else {
        cvPicElement.style.display = 'none';
    }

    // Personal Information
    document.getElementById('cv-review-name').textContent = `${data.personalData.firstName} ${data.personalData.lastName}`;
    document.getElementById('cv-review-email').textContent = data.personalData.email;
    document.getElementById('cv-review-phone').textContent = data.personalData.phone;
    document.getElementById('cv-review-address').textContent = `${data.personalData.address}, ${data.personalData.city}, ${data.personalData.country}`;
    document.getElementById('cv-review-summary').textContent = data.personalData.summary;

    // Education
    const educationsList = document.getElementById('cv-review-educations');
    educationsList.innerHTML = '';
    if (data.educations && data.educations.length > 0) {
        data.educations.forEach(edu => {
            const li = document.createElement('li');
            li.innerHTML = `<strong>${edu.degree}</strong> in ${edu.fieldOfStudy} - ${edu.institution} (${edu.startDate} - ${edu.endDate})`;
            educationsList.appendChild(li);
        });
    } else {
        educationsList.innerHTML = '<li>No education added</li>';
    }

    // Experience
    const experiencesList = document.getElementById('cv-review-experiences');
    experiencesList.innerHTML = '';
    if (data.experiences && data.experiences.length > 0) {
        data.experiences.forEach(exp => {
            const li = document.createElement('li');
            li.innerHTML = `<strong>${exp.jobTitleExp}</strong> at ${exp.company} (${exp.startDateExp} - ${exp.endDateExp})`;
            experiencesList.appendChild(li);
        });
    } else {
        experiencesList.innerHTML = '<li>No experience added</li>';
    }

    // Skills
    const skillsList = document.getElementById('cv-review-skills');
    skillsList.innerHTML = '';
    if (data.skills && data.skills.length > 0) {
        data.skills.forEach(skill => {
            const li = document.createElement('li');
            li.textContent = skill;
            skillsList.appendChild(li);
        });
    } else {
        skillsList.innerHTML = '<li>No skills added</li>';
    }

    // Languages
    const languagesList = document.getElementById('cv-review-languages');
    languagesList.innerHTML = '';
    if (data.languages && data.languages.length > 0) {
        data.languages.forEach(lang => {
            const li = document.createElement('li');
            li.textContent = `${lang.language} - ${lang.level}`;
            languagesList.appendChild(li);
        });
    } else {
        languagesList.innerHTML = '<li>No languages added</li>';
    }
}