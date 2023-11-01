const readline = require('readline-sync');

function crearTarea(titulo, descripcion, vencimiento, dificultad) {
    return {
        titulo,
        descripcion,
        estado: 1,
        creacion: new Date(),
        ultima_edicion: new Date(),
        vencimiento,
        dificultad
    };
}

function ingresar() {
    let titulo, descripcion, vencimiento, dificultad;
    titulo = readline.question("Titulo: \n");
    descripcion = readline.question("Descripcion: \n");
    do {
        const fechaTexto = readline.question('Ingresa fecha de Vencimiento (YYYY-MM-DD):\n');
        vencimiento = new Date(fechaTexto);
    } while (isNaN(vencimiento.getTime()));
    while (dificultad != 1 && dificultad != 2 && dificultad != 3) {
        dificultad = parseInt(readline.question("Dificultad(1-facil 2-medio 3-dificil): \n"));
    }
    return crearTarea(titulo, descripcion, vencimiento, dificultad);
}

function editar(x) {
    x.titulo = readline.question("Titulo: \n");
    x.descripcion = readline.question("Descripcion: \n");
    x.estado = parseInt(readline.question("Estado(1 pendiente, 2 en curso, 3 finalizado): \n"));
    x.ultima_edicion = new Date();
    do {
        const fechaTexto = readline.question('Ingresa fecha limite (YYYY-MM-DD): ');
        x.vencimiento = new Date(fechaTexto);
    } while (isNaN(x.vencimiento.getTime()));
    x.dificultad = parseInt(readline.question("Dificultad(1 fácil, 2 medio, 3 dificil): \n"));
    console.log("Datos guardados!\n");
}

function buscar(lista) {
    const cadenaABuscar = readline.question("Dime el título de la tarea que deseas buscar: ").toLowerCase();

    const tareasEncontradas = lista.filter((object) => {
        return object.titulo.toLowerCase().includes(cadenaABuscar);
    });

    return tareasEncontradas;
}

module.exports = {
    crearTarea,
    ingresar,
    editar,
    buscar
};
