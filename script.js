document.getElementById('form').addEventListener('submit', function(e) {
    e.preventDefault();
    if (!this.checkValidity()) {
        this.classList.add('was-validated');
    } else {
        alert('¡Gracias! Tu mensaje fue enviado correctamente.');
        this.reset();
        this.classList.remove('was-validated');
    }
});

const navbarToggle = document.querySelector('.navbar-toggler');
const navbarCollapse = document.querySelector('.navbar-collapse');

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        if (navbarCollapse.classList.contains('show')) {
            navbarToggle.click();
        }
    });
});
