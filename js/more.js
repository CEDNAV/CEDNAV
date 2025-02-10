// Seleccionar el botón con la clase 'dropdown-button'
const dropdownButton = document.querySelector('.dropdown-button');

// Agregar evento de clic para desplazar la página basado en un porcentaje de la altura
dropdownButton.addEventListener('click', () => {
    // Calcular el 10% de la altura total de la página
    const porcentaje = 21; // El porcentaje que quieres desplazar (10% en este caso)
    const desplazamiento = document.documentElement.scrollHeight * (porcentaje / 100); // Desplazamiento en píxeles

    window.scrollBy({
        top: desplazamiento, // Desplazarse hacia abajo según el porcentaje
        behavior: 'smooth' // Desplazamiento suave
    });
});