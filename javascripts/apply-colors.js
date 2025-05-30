document.addEventListener('DOMContentLoaded', async function () {
  const response = await fetch('/assets/categories.json');
  const categories = await response.json();

  const pathSegments = window.location.pathname.split('/').filter(Boolean);
  const lang = pathSegments[0] === 'es' ? 'es' : 'en';
  const categorySegment = lang === 'es' ? pathSegments[1] : pathSegments[0];

  const currentCategory = Object.values(categories).find(
    cat => cat[lang] === categorySegment
  ) || categories.default;

  const { color, hover } = currentCategory;
  const neutralHover = '#b0bec5'; // Color neutro para elementos de otras categorías

  const css = `
    .md-header {
      background-color: ${color} !important;
    }

    .md-tabs__link {
      color: rgba(255,255,255,0.9) !important;
    }

    .md-tabs__link[data-category="${categorySegment}"]:hover {
      background-color: ${hover} !important;
      color: white !important;
    }

    .md-tabs__link:not([data-category="${categorySegment}"]):hover {
      background-color: ${neutralHover} !important;
      color: white !important;
    }

    a:hover {
      color: ${color} !important;
    }

    .md-nav__link svg {
      color: ${color} !important;
    }

    .page-title {
      border-bottom: 3px solid ${color};
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
      background-color: ${color};
      border-radius: 2px;
    }

    .md-button:not(.md-button--primary)[data-category="${categorySegment}"]:hover {
      background-color: ${color} !important;
      border-color: ${color} !important;
      color: white !important;
    }

    .md-button:not(.md-button--primary):not([data-category="${categorySegment}"]):hover {
      background-color: ${neutralHover} !important;
      border-color: ${neutralHover} !important;
      color: white !important;
    }
  `;

  const styleEl = document.createElement('style');
  styleEl.textContent = css;
  document.head.appendChild(styleEl);

  // Agregar clase y data-category al título
  const pageTitle = document.querySelector('.md-content h1');
  if (pageTitle) {
    pageTitle.classList.add('page-title');
  }

  // Navegación activa
  const currentPath = window.location.pathname;
  document.querySelectorAll('.md-nav__link').forEach(link => {
    if (link.getAttribute('href') === currentPath) {
      link.classList.add('active-category');
    }
  });

  // Asignar data-category para hover selectivo
  document.querySelectorAll('.md-button, .md-tabs__link').forEach(el => {
    el.setAttribute('data-category', categorySegment);
  });
});
