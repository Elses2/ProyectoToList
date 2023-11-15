import * as tarea from './tarea';
import * as ingreso_datos from 'readline-sync'; // ingreso de datos asincrono
import * as kleur from 'kleur'; // cambia de color texto en terminal
import * as emoji from 'node-emoji'; // poner emojis

// Función que muestra el menú de opciones.
function presentacion() {
    console.log(`${kleur.green('1')} Ver tarea `);
    console.log(`${kleur.green('2')} Buscar Tarea`);
    console.log(`${kleur.green('3')} Agregar Tarea`);
    console.log(`${kleur.green('4')} Cerrar `);
}

// Función para limpiar la pantalla
function clearScreem() {
    console.clear();
}

// Función para agregar un elemento a la lista.
function agregar_elemento() {
    let titulo, descripcion, vencimiento, dificultad;
    titulo = ingreso_datos.question("Titulo: \n");
    descripcion = ingreso_datos.question("Descripcion: \n");
    do {
        const fechaTexto = ingreso_datos.question('Ingresa fecha de Vencimiento (YYYY-MM-DD):\n');
        // Intentar convertir la cadena a un objeto Date
        vencimiento = new Date(fechaTexto);
    } while (isNaN(vencimiento.getTime()));
    while (dificultad !== 1 && dificultad !== 2 && dificultad !== 3) {
        ///utilizo un console.log en vez de poner la descripcion en el questionInt, porque si no no muestra los emojis
        console.log(`${kleur.green(`1.Facil ${emoji.get('smile')}`)}\n${kleur.yellow(`2.Medio ${emoji.get('neutral_face')}`)}\n${kleur.red(`3.Dificil ${emoji.get('rage')}`)}`);
        dificultad = ingreso_datos.questionInt();
    }
    return new tarea.Tarea(titulo, descripcion, vencimiento, dificultad);
}

// Función para ver los detalles de una tarea.
function detalle_tarea(lista: tarea.Tarea[]) {
    let desicion = 0; // variable de entrada, si decide o no editar la tarea "seleccionada"
    let seleccion = ingreso_datos.question(`${kleur.blue('Selecciona la tarea que deseas ver')} si no ${kleur.blue('presiona 0')}\n`);

    if (!isNaN(Number(seleccion)) && Number(seleccion) > 0 && Number(seleccion) <= lista.length) {
        detalle_tarea_complemento(lista, Number(seleccion));
        desicion = ingreso_datos.question(`Si deseas modificar esta tarea ${kleur.blue('presiona e')}. Si no, presiona cualquier otra tecla.\n`);

        if (desicion.toLowerCase() === "e") {
            lista[Number(seleccion) - 1].editar();
        }
    }
}

// Función para mostrar los detalles de una tarea.
function detalle_tarea_complemento(lista: tarea.Tarea[], indice: number) {
    const elemento = lista[indice - 1];
    // separadorLength obtiene la longitud de la terminal, si no lo deja en 80
    const separadorLength = process.stdout.columns || 80;
    /// uso separadorLength para saber la cantidad de veces que voy a repetir '-', para adaptarse a cualquier terminal
    const separador = "-".repeat(separadorLength);

    // Función para obtener el texto correspondiente al estado
    function obtenerTextoEstado(estado: number) {
        switch (estado) {
            case 1:
                return kleur.red(`Pendiente ${emoji.get('tada')}`);
            case 2:
                return kleur.yellow(`En curso  ${emoji.get('hourglass')}`);
            case 3:
                return kleur.green(`Finalizado ${emoji.get('white_check_mark')}`);
            default:
                return 'Desconocido';
        }
    }

    // Función para obtener el texto correspondiente a la dificultad
    function obtenerTextoDificultad(dificultad: number) {
        switch (dificultad) {
            case 1:
                return kleur.green(`Facil ${emoji.get('smile')}`);
            case 2:
                return kleur.yellow(`Medio ${emoji.get('neutral_face')}`);

            case 3:
                return kleur.red(`Dificil ${emoji.get('rage')}`);
            default:
                return 'Desconocido';
        }
    }

    console.log(separador);
    console.log("Detalles de la tarea:");
    console.log(`Título: ${elemento.titulo}`);
    console.log(`Descripción: ${elemento.descripcion}`);
    console.log(`Estado: ${obtenerTextoEstado(elemento.estado)}`);
    console.log(`Dificultad: ${obtenerTextoDificultad(elemento.dificultad)}`);
    console.log(`Fecha de Creación: ${formatDate(elemento.creacion)}`);
    console.log(`Última Edición: ${formatDate(elemento.ultima_edicion)}`);
    console.log(`Fecha de Vencimiento: ${formatDate(elemento.vencimiento) || 'No especificada'}`);
    console.log(separador);
}

// Función para formatear una fecha. Lo siento por el nombre en ingles xd 
function formatDate(dateString: string | undefined) {
    if (!dateString) {
        return '';
    }
    const date = new Date(dateString);
    return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
}

// Función que muestra un submenú para el Caso 1.
function CasoUno() {
    console.log(`${kleur.bgMagenta('1')} todo `);
    console.log(`${kleur.bgMagenta('2')} Pendientes`);
    console.log(`${kleur.bgMagenta('3')} Tareas en Curso`);
    console.log(`${kleur.bgMagenta('4')} Tareas Finalizadas`);
    console.log(`${kleur.bgMagenta('5')} Volver`);
}

// no es en sí una función buscar, solo muestra los elementos de una lista. El nombre es por conveniencia 
function buscar_elemento(lista: tarea.Tarea[]) {
    if (lista.length > 0) {
        lista.forEach((elemento, index) => {
            console.log(`${index + 1}. ${elemento.titulo}`);
        });
    } else {
        clearScreem();
        console.log("Elemento no encontrado");
    }
}

// Función para ver la lista de tareas en estado "Todo".
function verLista_todo(lista: tarea.Tarea[]) {
    if (lista.length > 0) {
        lista.forEach((elemento, index) => {
            console.log(`${index + 1}. ${elemento.titulo}`);
        });
    } else {
        clearScreem();
        console.log("La agenda está vacía");
    }
}

// Función para ver la lista de tareas en estado "Pendiente".
function verLista_pendiente(lista: tarea.Tarea[]) {
    if (lista.length > 0) {
        lista.forEach((elemento, index) => {
            if (elemento.estado === 1) {
                console.log(`${index + 1}. ${elemento.titulo}`);
            }
        });
    } else {
        clearScreem();
        console.log("La agenda está vacía");
    }
}

// Función para ver la lista de tareas en estado "En Curso".
function verLista_curso(lista: tarea.Tarea[]) {
    if (lista.length > 0) {
        lista.forEach((elemento, index) => {
            if (elemento.estado === 2) {
                console.log(`${index + 1}. ${elemento.titulo}`);
            }
        });
    } else {
        clearScreem();
        console.log("La agenda está vacía");
    }
}

// Función para ver la lista de tareas en estado "Finalizado".
function verLista_terminado(lista: tarea.Tarea[]) {
    if (lista.length > 0) {
        lista.forEach((elemento, index) => {
            if (elemento.estado === 3) {
                console.log(`${index + 1}. ${elemento.titulo}`);
            }
        });
    } else {
        clearScreem();
        console.log("La agenda está vacía");
    }
}

let ingreso = 0;
let condicion = 0;
let CondicionCasoUno = 0;
let seleccion = 0;
const lista: tarea.Tarea[] = [];

/// mensaje de presentacion, usando unicode y ansi 
console.log('\x1b[36mBienvenido al proyecto \x1b[35mAgenda\x1b[0m: aquí podrás organizar tus tareas \u2764️');

do {
    presentacion();
    ingreso = ingreso_datos.questionInt("Dime Cual de estas opciones deseas:\n");
    switch (ingreso) {
        case 1:
            do {
                CasoUno();
                ingreso = ingreso_datos.questionInt("Dime Cual de estas opciones deseas:\n");
                clearScreem();
                switch (ingreso) {
                    case 1:
                        verLista_todo(lista);
                        if (lista.length !== 0) {
                            detalle_tarea(lista);
                        }

                        break;
                    case 2:
                        verLista_pendiente(lista);
                        if (lista.length !== 0) {
                            detalle_tarea(lista);
                        }

                        break;
                    case 3:
                        verLista_curso(lista);
                        if (lista.length !== 0) {
                            detalle_tarea(lista);
                        }

                        break;
                    case 4:
                        verLista_terminado(lista);
                        if (lista.length !== 0) {
                            detalle_tarea(lista);
                        }

                        break;
                    case 5:
                        CondicionCasoUno = 1;

                        break;
                    default:
                        console.log("El valor Ingresado es incorrecto, inténtelo de nuevo \n");
                        break;
                }
            } while (CondicionCasoUno === 0);

            break;
        case 2:
            // Esta linea crea otra lista conteniendo aquellos elementos que cumplan la busqueda en "lista"  esta busqueda no diferencia mayúsculas de minúsculas con el método thelowercase 
            const resultado_busqueda = lista.filter((objeto) => objeto.titulo.toLowerCase().includes(ingreso_datos.question("Dime el titulo de la tarea que deseas buscar: \n").toLowerCase()));
            if (lista.length !== 0) {
                buscar_elemento(resultado_busqueda); // reutilizo la función
                detalle_tarea(lista);
            } else {
                console.log("No hay ningún resultado en la agenda");
            }

            break;
        case 3:
            lista.push(agregar_elemento());
            /// ordenar lista en orden alfabetico
            if (lista.length > 1) {
                lista.sort((a, b) => {

                    if (a.titulo.toLowerCase() === b.titulo.toLowerCase()) {
                        return 0;
                    }
                    if (a.titulo.toLowerCase() < b.titulo.toLowerCase()) {
                        return -1;
                    }
                    return 1;
                });
            }

            break;
        case 4:
            condicion = 3;
            console.log('\x1b[36mGracias por usar \x1b[35mAgenda\x1b[0m: no olvides organizar tus tareas \u2764️');
            break;
        default:
            console.log("El valor ingresado es incorrecto");
            break;
    }
} while (condicion === 0);
