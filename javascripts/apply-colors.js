;(function() {
  // 1. Tu JSON embebido
  const categories = {
    triggers:    { en:'triggers',    es:'disparadores', color:'#e53935', hover:'#ff6b6b' },
    actions:     { en:'actions',     es:'acciones',     color:'#1e88e5', hover:'#64b5f6' },
    constraints: { en:'constraints', es:'restricciones', color:'#43a047', hover:'#81c784' },
    magic_text:  { en:'magic_text',  es:'texto_magico',  color:'#9c27b0', hover:'#ba68c8' },
    default:     { color:'#607d8b',  hover:'#90a4ae' }
  };

  // 2. Limpia la ruta y detecta repo/idioma
  let seg = location.pathname.split('/').filter(Boolean);
  if (location.hostname === 'josueg28.github.io' && seg[0]==='macrodroid-wiki') seg.shift();
  let lang = seg[0]==='es' ? 'es' : 'en';
  let slug = (lang==='es' ? seg[1] : seg[0]) || '';

  // 3. Elige categoría
  let cat = categories.default;
  for (let key in categories) {
    if (categories[key][lang] === slug) { cat = categories[key]; break; }
  }

  // 4. Inyecta estilos
  const { color, hover } = cat;
  const css = [
    `.md-header{background:${color}!important}`,
    `.md-tabs__link{color:rgba(255,255,255,0.9)!important}`,
    `.md-tabs__link:hover{background:${hover}!important;color:white!important}`,
    `a:hover{color:${color}!important}`,
    `.md-nav__link svg{color:${color}!important}`,
    `.page-title{border-bottom:3px solid ${color};padding-bottom:.5rem}`,
    `.active-category{position:relative;padding-left:1.2rem!important}`,
    `.active-category::before{content:"";position:absolute;left:0;top:50%;transform:translateY(-50%);width:5px;height:80%;background:${color};border-radius:2px}`,
    `.md-button:not(.md-button--primary):hover{background:${color}!important;border-color:${color}!important;color:white!important}`
  ].join('');

  const s = document.createElement('style');
  s.textContent = css;
  document.head.appendChild(s);

  // 5. Marca título y nav activa
  const h1 = document.querySelector('.md-content h1');
  if (h1) h1.classList.add('page-title');
  document.querySelectorAll('.md-nav__link').forEach(l=>{
    if (l.getAttribute('href')===location.pathname) l.classList.add('active-category');
  });
})();
