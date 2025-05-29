// Detectar cambios en la navegación
function applySectionColors() {
  // Función para obtener la sección base
  function getBaseSection() {
    const path = window.location.pathname;
    const segments = path.split('/').filter(segment => segment.trim() !== '');
    
    // Para rutas en español
    if (path.startsWith('/es/')) {
      return segments[1] || ''; // Ej: /es/disparadores/ → disparadores
    }
    
    // Para rutas en inglés
    return segments[0] || ''; // Ej: /triggers/ → triggers
  }
  
  // Mapeo de secciones a colores
  const sectionMap = {
    'triggers': 'trigger',
    'disparadores': 'trigger',
    'actions': 'action',
    'acciones': 'action',
    'constraints': 'constraint',
    'restricciones': 'constraint',
    'magic_text': 'magic',
    'texto_mágico': 'magic',
    'index': 'home' // Para la página principal
  };
  
  // Obtener sección actual
  const currentSection = getBaseSection();
  const sectionClass = sectionMap[currentSection] || '';
  
  // Limpiar clases anteriores
  document.body.classList.remove(
    'trigger-section', 
    'action-section', 
    'constraint-section', 
    'magic-section',
    'home-section'
  );
  
  // Aplicar nueva clase al body si se detectó una sección
  if (sectionClass) {
    document.body.classList.add(sectionClass + '-section');
  }
  
  // Verificación en consola
  console.log('Sección base:', currentSection);
  console.log('Clase aplicada:', sectionClass ? sectionClass + '-section' : 'ninguna');
  
  // Actualizar test visual
  const testDiv = document.getElementById('section-test-div') || document.createElement('div');
  testDiv.id = 'section-test-div';
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
  testDiv.textContent = sectionClass ? `Sección: ${sectionClass}` : 'Home';
  
  if (!document.getElementById('section-test-div')) {
    document.body.appendChild(testDiv);
  }
}

// Ejecutar en carga inicial
document.addEventListener('DOMContentLoaded', applySectionColors);

// Observar cambios de navegación
if (typeof app !== 'undefined' && app.document$) {
  // Usar el sistema de observables de Material for MkDocs
  app.document$.subscribe(function() {
    setTimeout(applySectionColors, 100);
  });
} else {
  // Alternativa para navegación con History API
  window.addEventListener('popstate', function() {
    setTimeout(applySectionColors, 100);
  });
  
  // Capturar clics en enlaces
  document.addEventListener('click', function(e) {
    if (e.target.tagName === 'A' && e.target.href) {
      setTimeout(applySectionColors, 300);
    }
  });
}

// Observar cambios en el contenido principal como respaldo
const observer = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    if (mutation.type === 'childList') {
      setTimeout(applySectionColors, 200);
    }
  });
});

observer.observe(document.querySelector('main'), {
  childList: true,
  subtree: true
});