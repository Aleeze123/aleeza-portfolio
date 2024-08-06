function changePage(src) {
    window.open(src, "_blank");
}


// Define progress data for each column and skill
const progressData = {
    column1: [
        { width: '90%', color: 'cyan' },
        { width: '85%', color: 'deeppink' },
        { width: '100%', color: 'gold' },
        { width: '97%', color: 'chartreuse' },
        { width: '79%', color: 'red' }
    ],
    column2: [
        { width: '75%', color: 'greenyellow' },
        { width: '95%', color: 'darkgoldenrod' },
        { width: '89%', color: 'hotpink' },
        { width: '80%', color: 'indianred' },
        { width: '100%', color: 'turquoise' }
    ]
};

// Function to update progress bars
function updateProgress() {
// Update column 1
    const column1Skills = document.querySelectorAll('.skills-column:nth-child(1) .skills-content .progress');
    column1Skills.forEach((progress, index) => {
        const span = progress.querySelector('.bar span');
        if (span) {
            span.style.width = progressData.column1[index].width;
            span.style.background = progressData.column1[index].color;
        }
    });

// Update column 2
    const column2Skills = document.querySelectorAll('.skills-column:nth-child(2) .skills-content .progress');
    column2Skills.forEach((progress, index) => {
        const span = progress.querySelector('.bar span');
        if (span) {
            span.style.width = progressData.column2[index].width;
            span.style.background = progressData.column2[index].color;
        }
    });
}

// Call function 
document.addEventListener('DOMContentLoaded', updateProgress);


let menuIcon =document.querySelector('#menu-icon')
let navbar =document.querySelector('.navbar')
let sections =document.querySelectorAll('section')
let navLinks =document.querySelectorAll('header nava')
 window.onscroll =()=>{
    sections.forEach(sec =>{
        let top =window.scrollY;
        let offset =sec.offsetTop -150;
        let height =sec.offsetHeight;
        let id= sec.getAttribute('id')

        if(top >=offset && top < offset + height){
            navLinks.forEach(links=>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active')
            })
        }
    })
 }
menuIcon.onclick =()=>{
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}