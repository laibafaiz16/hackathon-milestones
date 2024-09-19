// script.ts

// Define an interface for resume data
interface ResumeData {
    personalInfo: {
        name: string;
        email: string;
        phone: string;
    };
    education: string;
    experience: string;
    skills: string;
}

// Initialize an empty resume object
const resume: ResumeData = {
    personalInfo: {
        name: '',
        email: '',
        phone: '',
    },
    education: '',
    experience: '',
    skills: '',
};

// Function to generate the resume
function (data: ResumeData): string {
    return `
        <h1>${data.personalInfo.name}'s Resume</h1>
        <h2>Personal Information</h2>
        <p>Email: ${data.personalInfo.email}</p>
        <p>Phone: ${data.personalInfo.phone}</p>
        <h2>Education</h2>
        <p>${data.education}</p>
        <h2>Experience</h2>
        <p>${data.experience}</p>
        <h2>Skills</h2>
        <p>${data.skills}</p>
    `;
}

// Example usage
resume.personalInfo.name = 'Laiba Faiz';
resume.personalInfo.email = 'laiba@example.com';
resume.personalInfo.phone = '(123) 456-7890';
resume.education = 'Bachelor of Science in Environmental Science, SMIU';
resume.experience = 'Software Developer at ABC Tech Solutions';
resume.skills = 'JavaScript (ES6+), HTML/CSS, React, Node.js';
// Generate and display the resume
const generated  = generateResume(resume);
console.log(generatedResume);
