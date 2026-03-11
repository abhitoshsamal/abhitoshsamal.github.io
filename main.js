// ===========================
// ABHITOSH SAMAL — PORTFOLIO
// main.js
// ===========================

// --- CUSTOM CURSOR ---
const cursor = document.getElementById('cursor');
let mouseX = 0,
    mouseY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.left = mouseX + 'px';
    cursor.style.top = mouseY + 'px';
});

// Enlarge on hover over links/buttons
document.querySelectorAll('a, button, .project-card, .skill-pills span').forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('big'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('big'));
});


// --- NAVBAR SCROLL ---
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});


// --- SCROLL REVEAL ---
const revealElements = document.querySelectorAll(
    '.about-grid, .projects-grid, .project-card, .skill-group, .exp-card, .contact-inner, .section-title, .section-label'
);

// Add reveal class to all of them
revealElements.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));


// --- SMOOTH ACTIVE NAV ---
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.style.color = '';
        if (link.getAttribute('href') === '#' + current) {
            link.style.color = 'var(--accent)';
        }
    });
});


// --- PROJECT CARDS TILT EFFECT ---
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -4;
        const rotateY = ((x - centerX) / centerX) * 4;
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.01)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = '';
    });
});


// --- SKILL PILLS STAGGER ---
document.querySelectorAll('.skill-pills').forEach(group => {
    group.querySelectorAll('span').forEach((pill, i) => {
        pill.style.transitionDelay = `${i * 30}ms`;
    });
});


// --- TYPING EFFECT IN HERO (optional subtitle enhancement) ---
// If you want to add a typing cursor effect, uncomment below:
/*
const heroSub = document.querySelector('.hero-sub');
if (heroSub) {
  heroSub.insertAdjacentHTML('beforeend', '<span class="type-cursor">|</span>');
  setInterval(() => {
    const c = heroSub.querySelector('.type-cursor');
    if (c) c.style.opacity = c.style.opacity === '0' ? '1' : '0';
  }, 500);
}
*/


// --- CONSOLE EASTER EGG ---
console.log('%c 👋 Hey there, fellow developer!', 'color: #7fffb2; font-size: 16px; font-weight: bold;');
console.log('%c Built by Abhitosh Samal — abhitoshsamal66@gmail.com', 'color: #6b6b85; font-size: 12px;');