// Get refrences to the form and display area
var form = document.getElementById('resume-form');
var resumedisplayelement = document.getElementById('resume-display');
// Handel form submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); //prevent page reload 
    // collecting input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('Phoneno').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    //Generate the resume content dynamically 
    var resumehtml = "\n    <h2><b>Resume</b></h2>\n    <h3>Personal Information</h3>\n    <p><b>Name:</b>".concat(name, "</p>\n    <p><b>Name:</b>").concat(email, "</p>\n    <p><b>Name:</b>").concat(phone, "</p>\n\n    <h3>Education</h3>\n    <p>").concat(education, "</p>\n\n    <h3>Experience</h3>\n    <p>").concat(experience, "</p>\n\n    <h3>Skills</h3>\n    <p>").concat(skills, "</p>\n\n    ");
    //Display the genrated resume 
    if (resumedisplayelement) {
        resumedisplayelement.innerHTML = resumehtml;
    }
    else {
        console.error('the resume display element is missing. ');
    }
});