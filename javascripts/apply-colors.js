document.addEventListener('DOMContentLoaded', async function () {
  const isGitHubPages = window.location.hostname === 'josueg28.github.io';
  const basePath = isGitHubPages ? '/macrodroid-wiki/' : '/';
  
  // Cargar JSON de categorías
  const response = await fetch(`${basePath}assets/categories.json`);
  const categories = await response.json();
  
  // Obtener el último segmento significativo de la URL
  const pathSegments = window.location.pathname.split('/').filter(segment => segment && segment !== 'es' && segment !== 'en');
  const lastSegment = pathSegments.pop() || '';
  
  // Buscar categoría por clave (no por traducción)
  const categoryKey = Object.keys(categories).find(key => 
    key === lastSegment || 
    categories[key].en === lastSegment || 
    categories[key].es === lastSegment
  );
  
  const currentCategory = categoryKey ? categories[categoryKey] : categories.default;
  
  // Aplicar estilos
  applyCategoryStyles(currentCategory);
});

function applyCategoryStyles(category) {
  const style = document.createElement('style');
  style.textContent = `
    .md-header {
      background-color: ${category.color} !important;
      transition: background-color 0.3s ease;
    }
    
    .md-tabs__link {
      color: rgba(255,255,255,0.9) !important;
    }
    
    .md-tabs__link:hover {
      color: white !important;
      background-color: ${category.hover} !important;
    }
    
    a:hover {
      color: ${category.color} !important;
    }
    
    .md-nav__link svg {
      color: ${category.color} !important;
    }
    
    .page-title {
      border-bottom: 3px solid ${category.color};
      padding-bottom: 0.5rem;
    }
    
    .active-category {
      position: relative;
      padding-left: 1.2rem !important;
    }
    
    .active-category::before {
      content: "";
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 5px;
      height: 80%;
      background-color: ${category.color};
      border-radius: 2px;
    }
    
    .md-button:not(.md-button--primary):hover {
      background-color: ${category.color} !important;
      border-color: ${category.color} !important;
      color: white !important;
    }
    
    .category-badge {
      background: ${category.color};
      padding: 2px 8px;
      border-radius: 12px;
      color: white;
      font-size: 0.75em;
      margin-left: 8px;
      vertical-align: middle;
    }
  `;
  document.head.appendChild(style);
  
  ;
}