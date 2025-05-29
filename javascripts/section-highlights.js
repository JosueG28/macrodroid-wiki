document.addEventListener('DOMContentLoaded', function() {
    var path = window.location.pathname;
    var parts = path.split('/').filter(Boolean); // Divide la URL en partes y elimina vacíos
    var section = parts.length >= 2 && ['en', 'es'].includes(parts[0]) ? parts[1] : parts[0];

    if (section === 'triggers') {
        document.body.classList.add('trigger');
    } else if (section === 'actions') {
        document.body.classList.add('action');
    } else if (section === 'constraints') {
        document.body.classList.add('constraint');
    }
});