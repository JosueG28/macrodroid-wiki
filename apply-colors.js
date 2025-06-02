document.addEventListener('DOMContentLoaded', async function () {
  // 1. Forzar tema oscuro al cargar (si no hay preferencia guardada)
  if (!localStorage.getItem('__palette')) {
    const darkModeConfig = {
      index: 0, // 0 = dark, 1 = light
      color: {
        scheme: 'slate',
        primary: 'deep purple',
        accent: 'deep purple'
      }
    };
    localStorage.setItem('__palette', JSON.stringify(darkModeConfig));
    // Recarga para que el tema se aplique antes de pintar categorías
    setTimeout(() => window.location.reload(), 100);
    return;
  }

  // 2. Configuración base
  const isGitHubPages = window.location.hostname === 'josueg28.github.io';
  const basePath = isGitHubPages ? '/macrodroid-wiki/' : '/';

  // 3. Cargar categorías con manejo de errores
  let categories;
  try {
    const response = await fetch(`${basePath}assets/categories.json`);
    categories = await response.json();
  } catch (error) {
    console.error("Error loading categories.json", error);
    categories = {};
  }

  // 4. Palabras clave para búsqueda
  const allKeywords = [];
  for (const key in categories) {
    if (key !== 'default') {
      allKeywords.push(key, categories[key].en, categories[key].es);
    }
  }

  // 5. Obtener ruta actual
  let currentPath = window.location.pathname;
  if (basePath !== '/' && currentPath.startsWith(basePath)) {
    currentPath = currentPath.substring(basePath.length);
  }

  // 6. Buscar categoría en la ruta
  let foundCategory = null;
  for (const keyword of allKeywords) {
    const regex = new RegExp(`(^|/)${keyword}($|/)`);
    if (regex.test(currentPath)) {
      for (const key in categories) {
        if (
          key === keyword ||
          categories[key].en === keyword ||
          categories[key].es === keyword
        ) {
          foundCategory = categories[key];
          break;
        }
      }
      if (foundCategory) break;
    }
  }
  
  // 7. Fallback con colores púrpura
  const defaultCategory = {
    color: '#673AB7',
    hover: '#9575CD'
  };
  const currentCategory = foundCategory || (categories.default || defaultCategory);

  // 8. Aplicar estilos de categoría
  applyCategoryStyles(currentCategory);
});

// Función para ajustar colores (para gradientes) - CORREGIDA
function adjustColor(hex, amount) {
  // 1. Quitamos el '#' inicial
  const stripped = hex.replace(/^#/, '');
  // 2. Recorremos cada par de caracteres (canal de color)
  const result = stripped.replace(/../g, color => {
    // Convertimos a entero, ajustamos el rango 0–255
    const num = Math.min(255, Math.max(0, parseInt(color, 16) + amount));
    // Convertimos de vuelta a hex de dos dígitos
    return num.toString(16).padStart(2, '0');
  });
  // 3. Devolvemos el color completo con '#'
  return `#${result}`;
}

// Función principal para aplicar estilos
function applyCategoryStyles(category) {
  const style = document.createElement('style');
  style.textContent = `
    .md-header {
      background: linear-gradient(135deg, ${category.color} 0%, ${adjustColor(category.color, -20)} 100%) !important;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
      transition: background 0.3s ease;
    }
    
    .md-tabs__link {
      color: rgba(255,255,255,0.9) !important;
      font-weight: 600;
      font-size: 0.85rem;
      padding: 0.8rem 1rem;
    }
    
    .md-tabs__link--active {
      border-bottom: 3px solid white !important;
      padding-bottom: calc(0.8rem - 3px);
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
      display: flex;
      align-items: center;
      gap: 10px;
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
      padding: 2px 10px;
      border-radius: 12px;
      color: white;
      font-size: 0.85rem;
      font-weight: 500;
    }
    
    /* Estilos para el logo */
    .md-header__button.md-logo {
      padding: 0.2rem;
      background: rgba(255,255,255,0.15);
      border-radius: 50%;
    }
    
    .md-header__button.md-logo img {
      filter: drop-shadow(0 0 4px rgba(0,0,0,0.5));
      transition: transform 0.3s ease;
    }
    
    .md-header__button.md-logo:hover img {
      transform: scale(1.1);
    }
    
    /* Correcciones móviles */
    @media (max-width: 960px) {
      .md-nav--primary .md-nav__title {
        background-color: ${category.color} !important;
      }
      
      .md-nav__item {
        padding: 0.25rem 0.5rem;
      }
    }
  `;
  document.head.appendChild(style);
}
