// Get refrences to the form and display area

const formm =  document.getElementById('resume-form') as HTMLFormElement;

const resumedisplayelementt = document.getElementById('resume-display') as HTMLDivElement;

// Handel form submission

formm.addEventListener('submit',(event: Event)=>{
    event.preventDefault(); //prevent page reload 

    // collecting input values

    const name = (document.getElementById('name')as HTMLInputElement).value
    const email = (document.getElementById('email')as HTMLInputElement).value
    const phone = (document.getElementById('Phoneno')as HTMLInputElement).value
    const education = (document.getElementById('education')as HTMLInputElement).value
    const experience = (document.getElementById('experience')as HTMLInputElement).value
    const skills = (document.getElementById('skills')as HTMLInputElement).value
    
    //Generate the resume content dynamically 

    const resumehtml = `
    <h2><b>Resume</b></h2>
    <h3>Personal Information</h3>
    <p><b>Name:</b>${name}</p>
    <p><b>Name:</b>${email}</p>
    <p><b>Name:</b>${phone}</p>

    <h3>Education</h3>
    <p>${education}</p>

    <h3>Experience</h3>
    <p>${experience}</p>

    <h3>Skills</h3>
    <p>${skills}</p>

    `;

     //Display the genrated resume 
     if(resumedisplayelementt){
        resumedisplayelementt.innerHTML = resumehtml;
     }else{
        console.error('the resume display element is missing. ');
     }
});