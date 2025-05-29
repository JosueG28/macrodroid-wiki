document.addEventListener('DOMContentLoaded', function() {
    var path = window.location.pathname;
    console.log("URL actual:", path); // Para depuración
    var parts = path.split('/').filter(Boolean); // Divide la URL y elimina vacíos
    var section = parts.length >= 2 && ['en', 'es'].includes(parts[0]) ? parts[1] : parts[0];
    console.log("Sección detectada:", section); // Para depuración

    if (section === 'triggers') {
        document.body.classList.add('trigger');
    } else if (section === 'actions') {
        document.body.classList.add('action');
    } else if (section === 'constraints') {
        document.body.classList.add('constraint');
    }
});
console.log("URL actual:", window.location.pathname);
console.log("Sección detectada:", section);