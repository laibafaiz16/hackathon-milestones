// script.js

// Get form elements
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const educationTextarea = document.getElementById('education');
const experienceTextarea = document.getElementById('experience');
const skillsTextarea = document.getElementById('skills');
const resumeDisplay = document.getElementById('resume-display');

// Event listener for form submission
document.getElementById('resume-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    // Get user input
    const email = emailInput.value;
    const phone = phoneInput.value;
    const education = educationTextarea.value;
    const experience = experienceTextarea.value;
    const skills = skillsTextarea.value;

    // Generate the resume HTML
    const resumeHTML = `
        <h1>Your Resume</h1>
        <h2>Personal Information</h2>
        <p>Email: ${email}</p>
        <p>Phone: ${phone}</p>
        <h2>Education</h2>
        <p>${education}</p>
        <h2>Experience</h2>
        <p>${experience}</p>
        <h2>Skills</h2>
        <p>${skills}</p>
    `;

    // Display the generated resume
    resumeDisplay.innerHTML = resumeHTML;
});