document.addEventListener('DOMContentLoaded', function() {
    var path = window.location.pathname;
    console.log("URL actual:", path);
    var parts = path.split('/').filter(Boolean);
    // Tomar la primera parte como sección, manejar subpáginas
    var section = parts[0] || '';
    console.log("Sección detectada:", section);

    // Limpiar clases previas para evitar conflictos
    document.body.classList.remove('trigger', 'action', 'constraint');

    if (section === 'triggers' || section === 'disparadores') {
        document.body.classList.add('trigger');
        console.log("Clase agregada: trigger");
    } else if (section === 'actions' || section === 'acciones') {
        document.body.classList.add('action');
        console.log("Clase agregada: action");
    } else if (section === 'constraints' || section === 'restricciones') {
        document.body.classList.add('constraint');
        console.log("Clase agregada: constraint");
    } else {
        console.log("No se agregó ninguna clase específica");
    }
});