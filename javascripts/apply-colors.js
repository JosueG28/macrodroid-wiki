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
    return; // detenemos aquí; tras la recarga entra al else
  }

  // 2. Tu código existente para colorear rutas por categoría
  const isGitHubPages = window.location.hostname === 'josueg28.github.io';
  const basePath = isGitHubPages ? '/macrodroid-wiki/' : '/';

  // Cargar JSON de categorías
  const response = await fetch(`${basePath}assets/categories.json`);
  const categories = await response.json();

  // Crear lista de todas las posibles palabras clave
  const allKeywords = [];
  for (const key in categories) {
    if (key !== 'default') {
      allKeywords.push(key, categories[key].en, categories[key].es);
    }
  }

  // Obtener y normalizar ruta actual
  let currentPath = window.location.pathname;
  if (basePath !== '/' && currentPath.startsWith(basePath)) {
    currentPath = currentPath.substring(basePath.length);
  }

  // Buscar categoría en la ruta
  let foundCategory = null;
  for (const keyword of allKeywords) {
    const regex = new RegExp(`(^|/)${keyword}($|/)`);
    if (regex.test(currentPath)) {
      for (const key in categories) {
        if (key === keyword ||
            categories[key].en === keyword ||
            categories[key].es === keyword) {
          foundCategory = categories[key];
          break;
        }
      }
      if (foundCategory) break;
    }
  }
  const currentCategory = foundCategory || categories.default;

  // Aplicar estilos de categoría
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
  `;
  document.head.appendChild(style);
}
