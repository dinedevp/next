// Gestion du menu mobile
const toggleButton = document.getElementById('menu-toggle');
const navList = document.querySelector('#navbar ul');

if (toggleButton) {
    toggleButton.addEventListener('click', () => {
        const isOpen = navList.style.display === 'flex';
        navList.style.display = isOpen ? 'none' : 'flex';
    });
}

// Simple gestion du formulaire de contact
const form = document.getElementById('contact-form');
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Merci pour votre message!');
        form.reset();
    });
}
