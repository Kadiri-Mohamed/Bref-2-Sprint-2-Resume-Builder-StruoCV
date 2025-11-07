// Hardcoded extraction of main input values
export function getHardcodedFormElements() {
	// Personal Information
	let firstName = document.getElementById('firstName');
	let lastName = document.getElementById('lastName');
	let email = document.getElementById('email');
	let phone = document.getElementById('phone');
	let address = document.getElementById('address');
	let city = document.getElementById('city');
	let country = document.getElementById('country');
	let summary = document.getElementById('summary');

	// Education
	let institution = document.getElementById('institution');
	let degree = document.getElementById('degree');
	let fieldOfStudy = document.getElementById('fieldOfStudy');
	let startDate = document.getElementById('startDate');
	let endDate = document.getElementById('endDate');
	let educationDescription = document.getElementById('educationDescription');

	// Work Experience
	let jobTitleExp = document.getElementById('jobTitleExp');
	let company = document.getElementById('company');
	let startDateExp = document.getElementById('startDateExp');
	let endDateExp = document.getElementById('endDateExp');
	let experienceDescription = document.getElementById('experienceDescription');

	// Skills 
	let skills = document.getElementsByClassName('skill');

	// Languages (example for 2 languages)
	let languages = document.getElementsByClassName('language');

	return {
		firstName,
		lastName,
		email,
		phone,
		address,
		city,
		country,
		summary,
		institution,
		degree,
		fieldOfStudy,
		startDate,
		endDate,
		educationDescription,
		jobTitleExp,
		company,
		startDateExp,
		endDateExp,
		experienceDescription,
		skills,
		languages
	};
}

