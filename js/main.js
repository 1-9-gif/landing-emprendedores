const boton = document.getElementById('menuBtn');
const links = document.querySelector('.nav__links');

// Interacción del menú móvil (Entrega 1)
boton.addEventListener('click', () => {
    links.classList.toggle('is-open');
});

// ==========================================
// Animación 10: Scroll Reveal (Intersection Observer)
// ==========================================
const observador = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
        // Cuando el elemento entra en la pantalla...
        if (entrada.isIntersecting) {
            // Le agregamos la clase 'visible' para que aparezca
            entrada.target.classList.add("visible");
        }
    });
}, { threshold: 0.2 }); // Se activa cuando el 20% de la sección es visible

// Le decimos al observador que vigile a la sección 'oculto'
document.querySelectorAll(".oculto").forEach((el) => {
    observador.observe(el);
});

console.log('¡Animaciones y Scroll Reveal operativos!');