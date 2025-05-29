document.addEventListener('DOMContentLoaded', function() {
  // Detectar sección basada en la URL
  const detectSection = () => {
    const path = window.location.pathname;
    const langPrefix = path.startsWith('/es') ? '/es' : '';
    
    if (path.includes(`${langPrefix}/triggers/`)) {
      return 'trigger-section';
    } else if (path.includes(`${langPrefix}/actions/`)) {
      return 'action-section';
    } else if (path.includes(`${langPrefix}/constraints/`)) {
      return 'constraint-section';
    }
    return null;
  };

  // Aplicar clase de sección al body
  const sectionClass = detectSection();
  if (sectionClass) {
    document.body.classList.add(sectionClass);
    
    // Resaltar elemento activo en la barra lateral
    const activeNavItem = document.querySelector('.md-nav__link--active');
    if (activeNavItem) {
      activeNavItem.closest('.md-nav__item').classList.add(sectionClass);
    }
  }
});