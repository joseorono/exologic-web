import Splide from "@splidejs/splide";

// Función para inicializar una instancia de Splide
export function initializeSplide(selector: string, options: object) {
  const element = document.querySelector(selector) as HTMLElement;
  if (element) {
    return new Splide(element, options);
  }
  return null;
}
