document.addEventListener('DOMContentLoaded', async function () {
  const isGitHubPages = window.location.hostname === 'josueg28.github.io';
  const basePath = isGitHubPages ? '/macrodroid-wiki/' : '/';

  // Cargar JSON de categorías
  const response = await fetch(`${basePath}assets/categories.json`);
  const categories = await response.json();

  // Quitar ruta base (por ejemplo "/macrodroid-wiki/")
  const cleanPath = window.location.pathname.replace(basePath, '');
  const segments = cleanPath.split('/').filter(Boolean);

  let lang = 'en';
  let slug = segments[0] || '';

  // Detectar idioma: si está presente, está en [0], y el slug queda en [1]
  if (segments[0] === 'es') {
    lang = 'es';
    slug = segments[1] || '';
  }

  // Buscar categoría correspondiente
  let currentCategory = categories.default;
  for (const key in categories) {
    if (categories[key][lang] === slug) {
      currentCategory = categories[key];
      break;
    }
  }

  // Aplicar estilos dinámicos
  const style = document.createElement('style');
  style.textContent = `
    .md-header {
      background-color: ${currentCategory.color} !important;
    }

    .md-tabs__link {
      color: rgba(255,255,255,0.9) !important;
    }

    .md-tabs__link:hover {
      color: white !important;
      background-color: ${currentCategory.hover} !important;
    }

    a:hover {
      color: ${currentCategory.color} !important;
    }

    .md-nav__link svg {
      color: ${currentCategory.color} !important;
    }

    .page-title {
      border-bottom: 3px solid ${currentCategory.color};
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
      background-color: ${currentCategory.color};
      border-radius: 2px;
    }

    .md-button:not(.md-button--primary):hover {
      background-color: ${currentCategory.color} !important;
      border-color: ${currentCategory.color} !important;
      color: white !important;
    }
  `;
  document.head.appendChild(style);

  // Título de página
  const pageTitle = document.querySelector('.md-content h1');
  if (pageTitle) {
    pageTitle.classList.add('page-title');
  }

  // Navegación activa
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.md-nav__link');
  navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPath) {
      link.classList.add('active-category');
    }
  });
});
