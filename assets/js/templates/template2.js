const downloadButton = document.getElementById("telechargerButton");

function loadCVData() {
    const data = JSON.parse(localStorage.getItem('cvData'));
    if (!data) {
        alert('No CV data found!');
        return;
    }

    // Pic
    if (data.personalData.cvPic) {
        document.getElementById('template-pic').src = data.personalData.cvPic;
    } else {
        document.getElementById('template-pic').style.display = 'none';
    }

    document.getElementById('template-name').textContent =
        `${data.personalData.firstName} ${data.personalData.lastName}`;
    document.getElementById('template-email').textContent = data.personalData.email;
    document.getElementById('template-email').setAttribute('href', `mailto:${data.personalData.email}`);
    document.getElementById('template-phone').textContent = data.personalData.phone;
    document.getElementById('template-address').textContent =
        `${data.personalData.address}, ${data.personalData.city}, ${data.personalData.country}`;
    document.getElementById('template-summary').textContent = data.personalData.summary;

    // Experiences
    const experiencesContainer = document.getElementById('template-experiences');
    if (data.experiences && data.experiences.length > 0) {
        data.experiences.forEach((exp, index) => {
            const expDiv = document.createElement('div');
            expDiv.className = 'relative pl-8 border-l-2 border-tertiary';
            expDiv.innerHTML = `
                        <div class="absolute left-0 top-0 w-4 h-4 bg-secondary rounded-full -ml-2"></div>
                        <h3 class="text-xl font-bold text-gray-800">${exp.jobTitleExp}</h3>
                        <p class="text-secondary font-semibold text-lg">${exp.company}</p>
                        <p class="text-sm text-gray-500 mb-2">
                            <i class="far fa-calendar-alt mr-1"></i>${exp.startDateExp} - ${exp.endDateExp}
                        </p>
                        <p class="text-gray-700 leading-relaxed">${exp.experienceDescription}</p>
                    `;
            experiencesContainer.appendChild(expDiv);
        });
    } else {
        experiencesContainer.innerHTML = '<p class="text-gray-500 italic">No experience added</p>';
    }

    // Education
    const educationsContainer = document.getElementById('template-educations');
    if (data.educations && data.educations.length > 0) {
        data.educations.forEach(edu => {
            const eduDiv = document.createElement('div');
            eduDiv.className = 'relative pl-8 border-l-2 border-tertiary';
            eduDiv.innerHTML = `
                        <div class="absolute left-0 top-0 w-4 h-4 bg-secondary rounded-full -ml-2"></div>
                        <h3 class="text-xl font-bold text-gray-800">${edu.degree}</h3>
                        <p class="text-secondary font-semibold text-lg">${edu.institution}</p>
                        <p class="text-sm text-gray-600 mb-1">${edu.fieldOfStudy}</p>
                        <p class="text-sm text-gray-500 mb-2">
                            <i class="far fa-calendar-alt mr-1"></i>${edu.startDate} - ${edu.endDate}
                        </p>
                        <p class="text-gray-700 leading-relaxed">${edu.educationDescription}</p>
                    `;
            educationsContainer.appendChild(eduDiv);
        });
    } else {
        educationsContainer.innerHTML = '<p class="text-gray-500 italic">No education added</p>';
    }

    // Skills
    const skillsContainer = document.getElementById('template-skills');
    if (data.skills && data.skills.length > 0) {
        data.skills.forEach(skill => {
            const skillDiv = document.createElement('div');
            skillDiv.className = 'flex items-center bg-white p-3 rounded-lg shadow-sm ';
            skillDiv.innerHTML = `
                        <div class="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                        <span class="text-gray-700 font-medium">${skill}</span>
                    `;
            skillsContainer.appendChild(skillDiv);
        });
    } else {
        skillsContainer.innerHTML = '<p class="text-gray-500 italic">No skills added</p>';
    }

    // Languages
    const languagesContainer = document.getElementById('template-languages');
    if (data.languages && data.languages.length > 0) {
        data.languages.forEach(lang => {
            const langDiv = document.createElement('div');
            langDiv.className = 'bg-white p-3 rounded-lg shadow-sm ';
            langDiv.innerHTML = `
                        <div class="flex justify-between items-center">
                            <span class="text-gray-700 font-semibold">${lang.language}</span>
                            <span class="text-xs bg-secondary text-white px-3 py-1 rounded-full font-bold">
                                ${lang.level}
                            </span>
                        </div>
                    `;
            languagesContainer.appendChild(langDiv);
        });
    } else {
        languagesContainer.innerHTML = '<p class="text-gray-500 italic">No languages added</p>';
    }
}

downloadButton.addEventListener("click", (e) => {
    e.preventDefault();
    var element = document.getElementById('cv-content');
    var opt = {
        margin: 0,
        filename: 'MyCV.pdf',
        image: { type: 'jpeg' },
        // html2canvas: { scale: 2, useCORS: true },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(element).save().then(() => {

    });
});

window.addEventListener('DOMContentLoaded', loadCVData);