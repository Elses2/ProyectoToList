const tarea = require('./Tarea');
const ingreso_datos = require('readline-sync');

// Función que muestra el menú de opciones.
function presentacion() {
    console.log("1 Ver tarea ");
    console.log("2 Buscar Tarea");
    console.log("3 Agregar Tarea");
    console.log("4 Cerrar ");
}

//funcion limpiar pantalla
function clearScreem(){
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
    while(dificultad != 1 && dificultad != 2 && dificultad != 3 ){
        dificultad = ingreso_datos.questionInt("Dificultad(1-facil 2-medio 3-dificil): \n");
    }
    return new tarea(titulo, descripcion, vencimiento, dificultad);
}


// Función para ver los detalles de una tarea.
function detalle_tarea(lista) {
    let desicion = 0;// variable de entrada, si decide o no editar la tarea "seleccionada"
    let seleccion = ingreso_datos.question("Si deseas ver en detalle una de estas tareas selecciona su indice, si no, presiona 0 u otra tecla distinta de los indices existentes\n");
  
    if (!isNaN(seleccion) && seleccion > 0 && seleccion <= lista.length) {
      detalle_tarea_complemento(lista, seleccion);
      desicion = ingreso_datos.question("Si deseas modificar esta tarea presiona 'e'. Si no, presiona cualquier otra tecla.\n");
  
      if (desicion.toLowerCase() === "e") {
        lista[seleccion - 1].editar();
      }
    }
  }
// Función para mostrar los detalles de una tarea.
function detalle_tarea_complemento(lista, indice) {
    const elemento = lista[indice - 1];
    console.log("Detalles de la tarea:");
    console.log(`Título: ${elemento.titulo}`);
    console.log(`Descripción: ${elemento.descripcion}`);
    console.log(`Estado: ${elemento.estado}`);
    console.log(`Dificultad: ${elemento.dificultad}`);
    console.log(`Fecha de Creación: ${formatDate(elemento.creacion)}`);
    console.log(`Última Edición: ${formatDate(elemento.ultima_edicion)}`);
    console.log(`Fecha de Vencimiento: ${formatDate(elemento.vencimiento) || 'No especificada'}`);
}

// Función para formatear una fecha. Lo siento por el nombre en ingles xd 
function formatDate(dateString) {
    if (!dateString) {
        return '';
    }
    const date = new Date(dateString);
    return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
}
// Función que muestra un submenú para el Caso 1.
function CasoUno() {
    console.log("1 Todo");
    console.log("2 Pendiente");
    console.log("3 En Curso");
    console.log("4 Finalizado");
    console.log("5 Volver");
}
// no es en si una funcion buscar, solo muestra los elementos de una lista. El nombre es por conveniencia 
function buscar_elemento(lista) {
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
function verLista_todo(lista) {
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
function verLista_pendiente(lista) {
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
function verLista_curso(lista) {
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
function verLista_terminado(lista) {
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
const lista = [];

console.log("Bienvenido");

do {
    presentacion();
    ingreso = ingreso_datos.questionInt("Dime Cual de estas opciones deseas:\n")
    switch (ingreso) {
        case 1:
            do {
                CasoUno();
                ingreso = ingreso_datos.questionInt("Dime Cual de estas opciones deseas:\n")
                clearScreem();
                switch (ingreso) {
                    case 1:
                        verLista_todo(lista);
                        if (lista.length != 0) {
                            detalle_tarea(lista)
                        }

                        break;
                    case 2:
                        verLista_pendiente(lista);
                        if (lista.length != 0) {
                            detalle_tarea(lista)
                        }

                        break;
                    case 3:
                        verLista_curso(lista);
                        if (lista.length != 0) {
                            detalle_tarea(lista)
                        }

                        break;
                    case 4:
                        verLista_terminado(lista);
                        if (lista.length != 0) {
                            detalle_tarea(lista)
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
            //Esta linea crea otra lista conteniendo aquellos elementos que cumplan la busqueda en "lista"  esta busqueda no diferencia mayusculas de minusculas con el metodo thelowercase 
            resultado_busqueda = lista.filter((objeto) => objeto.titulo.toLowerCase().includes(ingreso_datos.question("Dime el titulo de la tarea que deseas buscar: \n").toLowerCase())); 
            if (lista.length != 0) {
                buscar_elemento(resultado_busqueda);//reutilizo la funcion
                detalle_tarea(lista)
            }else{console.log("No hay ningun resultado en la agenda");}

            break;
        case 3:
            lista.push(agregar_elemento());
            break;
        case 4:
            condicion = 3;
            console.log("Gracias por usar el programa");
            break;
        default:
            console.log("El valor ingresado es incorrecto");
            break;
    }
} while (condicion === 0);
