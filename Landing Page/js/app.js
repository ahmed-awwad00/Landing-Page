// Define sections and navbar
const sections = document.querySelectorAll('section');
const navList = document.getElementById('nav-list');
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

function buildNavbar() {
    sections.forEach(section => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = `#${section.id}`;
        a.innerText = section.querySelector('h2').innerText;
        a.addEventListener('click', (event) => {
            event.preventDefault();
            document.getElementById(section.id).scrollIntoView({ behavior: 'smooth' });
        });
        li.appendChild(a);
        navList.appendChild(li);
    });
}

function setActiveSection() {
    const scrollPos = window.scrollY + window.innerHeight / 2;
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;
        if (scrollPos >= sectionTop && scrollPos <= sectionBottom) {
            document.querySelector(`#nav-list a[href='#${section.id}']`).classList.add('active');
        } else {
            document.querySelector(`#nav-list a[href='#${section.id}']`).classList.remove('active');
        }
    });
}

function toggleScrollToTopBtn() {
    if (window.scrollY > 300) {
        scrollToTopBtn.classList.add('show');
    } else {
        scrollToTopBtn.classList.remove('show');
    }
}

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
    setActiveSection();
    toggleScrollToTopBtn();
});

document.addEventListener('DOMContentLoaded', () => {
    buildNavbar();
    setActiveSection();
});
