// // navbarLink => section
const navLinks = document.querySelectorAll('header nav a');
const logoLinks = document.querySelector('.logo');
const sections = document.querySelectorAll('section');
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('header nav');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});



const  activePage = () =>{
    const header = document.querySelector('header');
    const barbox = document.querySelector('.bars-box');

    navLinks.forEach(link => {
        link.classList.remove('active');
    });

    header.classList.remove('active');
    setTimeout(() => {
        header.classList.add('active');
    }, 1100);

    barbox.classList.remove('active');
    setTimeout(() => {
        barbox.classList.add('active');
    }, 1100);

    sections.forEach(section => {
        section.classList.remove('active');
    });

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
} 

navLinks.forEach((link, idx) => {
    link.addEventListener('click' , ()=> {
        if (!link.classList.contains('active')) {
            activePage();

            link.classList.add('active');

            setTimeout(() => {
                sections[idx].classList.add('active');
            }, 1100);
        }
    });
});

logoLinks.addEventListener('click', () => {
    if (!navLinks[0].classList.contains('active')) {
        activePage();

        navLinks[0].classList.add('active');

        setTimeout(() => {
            sections[0].classList.add('active');
        }, 1100);
    }
});

// resume section => active button
const resumeBtns = document.querySelectorAll('.resume-btn');

resumeBtns.forEach((btn, idx)=>{
    btn.addEventListener('click', ()=>{
        const resumeDetails = document.querySelectorAll('.resume-detail');

        resumeBtns.forEach(btn => {
            btn.classList.remove('active');
        });
        btn.classList.add('active');


        resumeDetails.forEach(detail => {
            detail.classList.remove('active');
        });
        resumeDetails[idx].classList.add('active');

    });
});

// section protoflio
const arrowRight= document.querySelector('.Portfolio-box .navigation .arrow-right');
const arrowLeft= document.querySelector('.Portfolio-box .navigation .arrow-left');

let index = 0;

const activePortfolio = () => {
    const imgSlide= document.querySelector('.Portfolio-carousel .img-slide');
    const PortfolioDetail=document.querySelectorAll('.Portfolio-detail');

    imgSlide.style.transform = `translateX(calc( ${index * -100}% - ${index * 2}rem))`;

    PortfolioDetail.forEach(detail => {
        detail.classList.remove('active')
    });
    PortfolioDetail[index].classList.add('active')

}
arrowRight.addEventListener('click', () =>{
    if(index < 3 ){
        index++;
        arrowLeft.classList.remove('disabled');
    }
    else {
        index = 4;
        arrowRight.classList.add('disabled');
    }

    activePortfolio();
});

arrowLeft.addEventListener('click', () =>{
    if(index > 1 ){
        index--;
        arrowRight.classList.remove('disabled');
    }
    else {
        index = 0;
        arrowLeft.classList.add('disabled');
    }

    activePortfolio();
});

