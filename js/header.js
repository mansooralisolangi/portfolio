// Mobile Navigation Toggle
const burger = document.getElementById('burger');
const nav = document.getElementById('nav');
const body = document.body;

burger.addEventListener('click', () => {
    nav.classList.toggle('active');
    burger.classList.toggle('active');
    body.classList.toggle('menu-open');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
        burger.classList.remove('active');
        body.classList.remove('menu-open');
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (nav.classList.contains('active') && 
        !nav.contains(e.target) && 
        !burger.contains(e.target)) {
        nav.classList.remove('active');
        burger.classList.remove('active');
        body.classList.remove('menu-open');
    }
});