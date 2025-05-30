document.addEventListener('DOMContentLoaded', async () => {
  // Determinar si estamos en GitHub Pages o localhost
  const isGitHubPages = window.location.hostname === 'josueg28.github.io';
  const basePath = isGitHubPages ? '/macrodroid-wiki/' : '/';

  // Cargar JSON de categorías
  let categories;
  try {
    const response = await fetch(`${basePath}assets/categories.json`);
    if (!response.ok) throw new Error('No se pudo cargar categories.json');
    categories = await response.json();
  } catch (error) {
    console.error('Error al cargar categories.json:', error);
    categories = { default: { color: '#607d8b', hover: '#90a4ae' } };
  }

  // Normalizar la ruta
  const cleanPath = window.location.pathname
    .replace(basePath, '') // Eliminar basePath
    .replace(/\/$/, '') // Eliminar barra final
    .toLowerCase(); // Normalizar a minúsculas
  const segments = cleanPath.split('/').filter(Boolean);

  // Determinar idioma y slug
  let lang = 'en';
  let slug = segments[0] || '';

  if (['es', 'en'].includes(segments[0])) {
    lang = segments[0];
    slug = segments[1] || '';
  }

  // Buscar categoría correspondiente
  let currentCategory = categories.default;
  for (const key in categories) {
    if (categories[key][lang] && categories[key][lang].toLowerCase() === slug) {
      currentCategory = categories[key];
      break;
    }
  }

  // Crear estilos dinámicos
  const style = document.createElement('style');
  style.textContent = `
    :root {
      --category-color: ${currentCategory.color};
      --category-hover: ${currentCategory.hover};
    }

    .md-header {
      background-color: var(--category-color) !important;
    }

    .md-tabs__link {
      color: rgba(255, 255, 255, 0.9) !important;
    }

    .md-tabs__link:hover {
      color: white !important;
      background-color: var(--category-hover) !important;
    }

    a:hover {
      color: var(--category-color) !important;
    }

    .md-nav__link svg {
      fill: var(--category-color) !important;
    }

    .page-title {
      border-bottom: 3px solid var(--category-color);
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
      background-color: var(--category-color);
      border-radius: 2px;
    }

    .md-button:not(.md-button--primary):hover {
      background-color: var(--category-color) !important;
      border-color: var(--category-color) !important;
      color: white !important;
    }
  `;
  document.head.appendChild(style);

  // Aplicar clase al título de la página
  const pageTitle = document.querySelector('.md-content h1');
  if (pageTitle) {
    pageTitle.classList.add('page-title');
  }

  // Resaltar enlace de navegación activo
  const navLinks = document.querySelectorAll('.md-nav__link');
  navLinks.forEach(link => {
    const href = link.getAttribute('href')?.replace(/\/$/, '').toLowerCase();
    const currentPath = window.location.pathname.replace(/\/$/, '').toLowerCase();
    if (href === currentPath) {
      link.classList.add('active-category');
    }
  });
});