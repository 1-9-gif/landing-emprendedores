// Afirmamos los tipos exactos de los elementos del DOM
const boton = document.getElementById('menuBtn') as HTMLButtonElement;
const links = document.querySelector('.nav__links') as HTMLUListElement;

// Interacción del menú móvil
boton?.addEventListener('click', () => {
    links?.classList.toggle('is-open');
});

// ==========================================
// Animación 10: Scroll Reveal tipado
// ==========================================
const observador = new IntersectionObserver((entradas: IntersectionObserverEntry[]) => {
    entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
            // Le decimos a TypeScript que el 'target' es un HTMLElement
            (entrada.target as HTMLElement).classList.add("visible");
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll(".oculto").forEach((el: Element) => {
    observador.observe(el);
});

console.log('¡TypeScript, Animaciones y Scroll Reveal operativos!');