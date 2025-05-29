// docs/javascripts/section-colors.js

// Configuración base para GitHub Pages
const BASE_PATH = '/macrodroid-wiki/';

// Función para normalizar rutas
function normalizePath(path) {
  // Eliminar BASE_PATH si existe
  if (path.startsWith(BASE_PATH)) {
    return path.substring(BASE_PATH.length);
  }
  
  // Eliminar parámetros de consulta y fragmentos
  return path.split('?')[0].split('#')[0];
}

// Función para detectar sección
function detectSection() {
  const rawPath = window.location.pathname;
  const path = normalizePath(rawPath);
  
  // Detección de sección
  if (path.startsWith('es/')) {
    // Rutas en español
    if (path.includes('disparadores')) return 'trigger';
    if (path.includes('acciones')) return 'action';
    if (path.includes('restricciones')) return 'constraint';
    if (path.includes('texto_mágico')) return 'magic';
  } else {
    // Rutas en inglés
    if (path.includes('triggers')) return 'trigger';
    if (path.includes('actions')) return 'action';
    if (path.includes('constraints')) return 'constraint';
    if (path.includes('magic_text')) return 'magic';
  }
  
  return 'home';
}

// Aplicar clase de sección
function applySectionClass(section) {
  // Limpiar clases anteriores
  const sections = ['trigger', 'action', 'constraint', 'magic', 'home'];
  sections.forEach(s => document.body.classList.remove(`${s}-section`));
  
  // Aplicar nueva clase
  document.body.classList.add(`${section}-section`);
  
  // Actualizar test visual
  const testDiv = document.getElementById('section-test') || document.createElement('div');
  testDiv.id = 'section-test';
  testDiv.textContent = `Sección: ${section}`;
  testDiv.style.cssText = `
    position: fixed;
    top: 10px;
    right: 10px;
    background: red;
    color: white;
    padding: 10px;
    z-index: 9999;
    font-weight: bold;
    border-radius: 5px;
  `;
  
  if (!document.getElementById('section-test')) {
    document.body.appendChild(testDiv);
  }
}

// Función principal
function updateSection() {
  const section = detectSection();
  applySectionClass(section);
  console.log('Ruta detectada:', window.location.pathname, 'Sección:', section);
}

// Inicialización
document.addEventListener('DOMContentLoaded', updateSection);

// Manejar navegación instantánea
if (typeof app !== 'undefined' && app.document$) {
  app.document$.subscribe(updateSection);
}

// Manejar cambios de ruta
window.addEventListener('popstate', updateSection);
window.addEventListener('pushstate', updateSection);
window.addEventListener('replacestate', updateSection);

// Observador de mutación como respaldo
const observer = new MutationObserver(mutations => {
  if (mutations.some(m => m.type === 'childList')) {
    updateSection();
  }
});

observer.observe(document.documentElement, {
  childList: true,
  subtree: true
});