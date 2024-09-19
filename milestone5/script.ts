
// Collect input values
const username = (document.getElementById('username') as
HTMLInputElement).value;
const Name = (document.getElementById('name') as HTMLInputElement).value;
const email = (document.getElementById('email') as HTMLInputElement).value;
const phone = (document.getElementById('phone') as HTMLInputElement).value;
const education = (document.getElementById('education') as
HTMLTextAreaElement).value;
const experience = (document.getElementById('experience') as
HTMLTextAreaElement).value;
const skills = (document.getElementById('skills') as
HTMLTextAreaElement).value;
// Save form data in localStorage with the username as the key
const resumeData = {

email,
phone,
education,
experience,
skills
};
localStorage.setItem(username, JSON.stringify(resumeData)); // Saving the
// Autofill form if data is found in localStorage
const savedResumeData = localStorage.getItem(username);
if (savedResumeData) {
const resumeData = JSON.parse(savedResumeData);
(document.getElementById('username') as HTMLInputElement).value =
username;
(document.getElementById('name') as HTMLInputElement).value =
resumeData.name;
(document.getElementById('email') as HTMLInputElement).value =
resumeData.email;
(document.getElementById('phone') as HTMLInputElement).value =
resumeData.phone;
(document.getElementById('education') as HTMLTextAreaElement).value =
resumeData.education;
(document.getElementById('experience') as HTMLTextAreaElement).value
= resumeData.experience;
(document.getElementById('skills') as HTMLTextAreaElement).value =
resumeData.skills;
}
// Generate the resume content dynamically