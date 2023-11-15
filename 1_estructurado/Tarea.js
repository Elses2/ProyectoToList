const readline = require('readline-sync');
const kleur = require('kleur');///cambia de color texto en terminal 
const emoji = require('node-emoji');///poner emojis

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
        ///utilizo un console.log en vez de poner la descripcion en el questionInt, porque si no no muestra los emojis
        console.log(`${kleur.green(`1.Facil ${emoji.get('smile')}`)}\n${kleur.yellow(`2.Medio ${emoji.get('neutral_face')}`)}\n${kleur.red(`3.Dificil ${emoji.get('rage')}`)}`);
        dificultad = readline.questionInt();
    }
    return crearTarea(titulo, descripcion, vencimiento, dificultad);
}

function editar(x) {
    x.titulo = readline.question("Titulo: \n");
    x.descripcion = readline.question("Descripcion: \n");
    x.estado=5;
    while (x.estado != 1 && x.estado != 2 && x.estado != 3) {
        ///utilizo un console.log en vez de poner la descripcion en el questionInt, porque si no no muestra los emojis
        console.log(`${kleur.red(`1. Pendiente ${emoji.get('tada')}`)}\n${ kleur.yellow(`2. En curso  ${emoji.get('hourglass')}`)}\n${kleur.green(`3. Finalizado ${emoji.get('white_check_mark')}`)}`);
        x.estado = readline.questionInt();
    }
    x.ultima_edicion = new Date();
    do {
        const fechaTexto = readline.question('Ingresa fecha limite (YYYY-MM-DD): ');
        x.vencimiento = new Date(fechaTexto);
    } while (isNaN(x.vencimiento.getTime()));
    ///utilizo un console.log en vez de poner la descripcion en el questionInt, porque si no no muestra los emojis
    x.dificultad=5;
    while (x.dificultad != 1 && x.dificultad != 2 && x.dificultad != 3) {
        ///utilizo un console.log en vez de poner la descripcion en el questionInt, porque si no no muestra los emojis
        console.log(`${kleur.green(`1.Facil ${emoji.get('smile')}`)}\n${kleur.yellow(`2.Medio ${emoji.get('neutral_face')}`)}\n${kleur.red(`3.Dificil ${emoji.get('rage')}`)}`);
        x.dificultad = readline.questionInt();
    }
    console.log("Datos guardados!\n");
}

function buscar(lista) {
    const cadenaABuscar = readline.question("Dime el titulo de la tarea que deseas buscar: ").toLowerCase();

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
