document.addEventListener('DOMContentLoaded', function() {
  // Obtener la ruta actual
  const path = window.location.pathname;
  
  // Determinar la categoría basada en la URL
  let themeClass = '';
  
  if (path.includes('/triggers/') || path.endsWith('/triggers')) {
    themeClass = 'theme-trigger';
  } 
  else if (path.includes('/actions/') || path.endsWith('/actions')) {
    themeClass = 'theme-action';
  } 
  else if (path.includes('/constraints/') || path.endsWith('/constraints')) {
    themeClass = 'theme-constraint';
  }
  
  // Aplicar la clase al elemento raíz
  if (themeClass) {
    document.documentElement.classList.add(themeClass);
    
    // También aplicar a la barra de navegación
    const navItems = document.querySelectorAll('.md-nav__link');
    navItems.forEach(item => {
      if (item.href && (
          item.href.includes('/triggers/') || 
          item.href.includes('/actions/') || 
          item.href.includes('/constraints/'))) {
        item.classList.add(themeClass + '-nav');
      }
    });
  }
});