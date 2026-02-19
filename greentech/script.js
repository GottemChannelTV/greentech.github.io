// 1. OVLÁDANIE MODÁLNYCH OKIEN
function openModal(id) {
    document.getElementById(id).style.display = "block";
    document.body.style.overflow = "hidden"; // Zákaz skrolovania pri otvorenom okne
}

function closeModal(id) {
    document.getElementById(id).style.display = "none";
    document.body.style.overflow = "auto"; // Opätovné povolenie skrolovania
}

// Zavrieť modál pri kliknutí mimo neho
window.onclick = function(event) {
    if (event.target.className === 'modal') {
        event.target.style.display = "none";
        document.body.style.overflow = "auto";
    }
}

// 2. OVLÁDANIE MODERNÉHO HAMBURGER MENU
const menuBtn = document.getElementById('mobile-menu-btn');
const navMenu = document.getElementById('nav-menu');

if (menuBtn && navMenu) {
    menuBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        
        // Animácia ikonky (zmena na X)
        const icon = menuBtn.querySelector('i');
        if (navMenu.classList.contains('active')) {
            icon.classList.replace('fa-bars', 'fa-times');
        } else {
            icon.classList.replace('fa-times', 'fa-bars');
        }
    });

    // Zavrieť menu po kliknutí na odkaz
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            menuBtn.querySelector('i').classList.replace('fa-times', 'fa-bars');
        });
    });
}