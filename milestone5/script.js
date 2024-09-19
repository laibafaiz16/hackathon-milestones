// Collect input values
var username = document.getElementById('username').value;
var Name = document.getElementById('name').value;
var email = document.getElementById('email').value;
var phone = document.getElementById('phone').value;
var education = document.getElementById('education').value;
var experience = document.getElementById('experience').value;
var skills = document.getElementById('skills').value;
// Save form data in localStorage with the username as the key
var resumeData = {
    email: email,
    phone: phone,
    education: education,
    experience: experience,
    skills: skills
};
localStorage.setItem(username, JSON.stringify(resumeData)); // Saving the
// Autofill form if data is found in localStorage
var savedResumeData = localStorage.getItem(username);
if (savedResumeData) {
    var resumeData_1 = JSON.parse(savedResumeData);
    document.getElementById('username').value =
        username;
    document.getElementById('name').value =
        resumeData_1.name;
    document.getElementById('email').value =
        resumeData_1.email;
    document.getElementById('phone').value =
        resumeData_1.phone;
    document.getElementById('education').value =
        resumeData_1.education;
    document.getElementById('experience').value
        = resumeData_1.experience;
    document.getElementById('skills').value =
        resumeData_1.skills;
}
// Generate the resume content dynamically
