
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x'); // changes icon to X
    navbar.classList.toggle('active'); // shows/hides menu
});


const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navbar a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100; // offset for header height
        if (scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});

const btns = document.querySelectorAll('.btn, .gradient-btn');

btns.forEach(btn => {
    btn.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(btn.getAttribute('href'));
        if(target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

const homeImg = document.querySelector('.home-img img');
window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;
    homeImg.style.boxShadow = `0 0 ${40 + scrollPos/10}px rgba(0,200,255,0.7)`;
});
