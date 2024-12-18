import Splide from "@splidejs/splide";

// Función para inicializar una instancia de Splide
export function initializeSplide(selector, options) {
  const element = document.querySelector(selector);
  if (element) {
    new Splide(element, options).mount();
  }
}
