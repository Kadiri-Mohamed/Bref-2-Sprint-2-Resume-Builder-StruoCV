const downloadButton = document.getElementById("telechargerButton");

function loadCVData() {
    const data = JSON.parse(localStorage.getItem('cvData'));
    if (!data) {
        alert('No CV data found!');
        return;
    }

    // Profile Picture
    if (data.personalData.cvPic) {
        document.getElementById('template-pic').src = data.personalData.cvPic;
    } else {
        document.getElementById('template-pic').style.display = 'none';
    }

    // Personal Information
    document.getElementById('template-name').textContent =
        `${data.personalData.firstName} ${data.personalData.lastName}`;
    document.getElementById('template-email').textContent = data.personalData.email;
    document.getElementById('template-phone').textContent = data.personalData.phone;
    document.getElementById('template-address').textContent =
        `${data.personalData.address}, ${data.personalData.city}, ${data.personalData.country}`;
    document.getElementById('template-summary').textContent = data.personalData.summary;

    // Experiences
    const experiencesContainer = document.getElementById('template-experiences');
    if (data.experiences && data.experiences.length > 0) {
        data.experiences.forEach(exp => {
            const expDiv = document.createElement('div');
            expDiv.className = 'mb-4';
            expDiv.innerHTML = `
                        <h3 class="text-lg font-bold text-gray-800">${exp.jobTitleExp}</h3>
                        <p class="text-secondary font-semibold">${exp.company}</p>
                        <p class="text-sm text-gray-600 mb-2">${exp.startDateExp} - ${exp.endDateExp}</p>
                        <p class="text-gray-700">${exp.experienceDescription}</p>
                    `;
            experiencesContainer.appendChild(expDiv);
        });
    }

    // Education
    const educationsContainer = document.getElementById('template-educations');
    if (data.educations && data.educations.length > 0) {
        data.educations.forEach(edu => {
            const eduDiv = document.createElement('div');
            eduDiv.className = 'mb-4';
            eduDiv.innerHTML = `
                        <h3 class="text-lg font-bold text-gray-800">${edu.degree}</h3>
                        <p class="text-secondary font-semibold">${edu.institution}</p>
                        <p class="text-sm text-gray-600 mb-2">${edu.fieldOfStudy}</p>
                        <p class="text-sm text-gray-600 mb-2">${edu.startDate} - ${edu.endDate}</p>
                        <p class="text-gray-700">${edu.educationDescription}</p>
                    `;
            educationsContainer.appendChild(eduDiv);
        });
    }

    // Skills
    const skillsContainer = document.getElementById('template-skills');
    if (data.skills && data.skills.length > 0) {
        data.skills.forEach(skill => {
            const skillDiv = document.createElement('div');
            skillDiv.className = 'flex items-center bg-white p-2 rounded shadow-sm';
            skillDiv.innerHTML = `
                        <i class="fas fa-check-circle text-secondary mr-2"></i>
                        <span class="text-gray-700">${skill}</span>
                    `;
            skillsContainer.appendChild(skillDiv);
        });
    }

    // Languages
    const languagesContainer = document.getElementById('template-languages');
    if (data.languages && data.languages.length > 0) {
        data.languages.forEach(lang => {
            const langDiv = document.createElement('div');
            langDiv.className = 'flex justify-between items-center bg-white p-2 rounded shadow-sm';
            langDiv.innerHTML = `
                        <span class="text-gray-700 font-semibold">${lang.language}</span>
                        <span class="text-sm bg-secondary text-white px-2 py-1 rounded">${lang.level}</span>
                    `;
            languagesContainer.appendChild(langDiv);
        });
    }
}
 downloadButton.addEventListener("click", (e) => {
        e.preventDefault();
        var element = document.getElementById('cv-content');
        var opt = {
            margin: 0,
            filename: 'myCV.pdf',
            image: { type: 'jpeg'},
            // html2canvas: { scale: 2 },
            jsPDF: { unit: 'mm', format: 'letter', orientation: 'portrait' }
        };

        // New Promise-based usage:
        html2pdf().set(opt).from(element).save();
    })

window.addEventListener('DOMContentLoaded', loadCVData);