const readline = require('readline-sync');
const Tarea = require('./Tarea');
const Lista = require('./Lista');

function introduccion() {
    console.log("[1] Ver tarea");
    console.log("[2] Buscar Tarea");
    console.log("[3] Agregar Tarea");
    console.log("[4] Cerrar");
}

function CasoUno() {
    console.log("[1] Todo");
    console.log("[2] Pendiente");
    console.log("[3] En Curso");
    console.log("[4] Finalizado");
    console.log("[5] Volver");
}

let botonS;
let boton = 0;
let condicion = 2;
let condicion_caso_uno = 0;

do {
    introduccion();
    botonS = readline.question("Dime Cual de estas opciones deseas:\n");
    try {
        boton = parseInt(botonS, 10);
    } catch (error) {
        boton = -1;
    }
    switch (boton) {
        case 1:
            do {
                CasoUno();
                boton = readline.questionInt("Dime Cual de estas opciones deseas:\n");
                console.clear();
                switch (boton) {
                    case 1:
                        Lista.verLista_todo(Lista.lista);
                        if (Lista.lista.length > 0) {
                            Lista.editar_detalle(Lista.lista, Lista.detalle_tarea(Lista.lista));
                        }
                        break;
                    case 2:
                        Lista.verLista_pendiente(Lista.lista);
                        if (Lista.lista.length > 0) {
                            Lista.editar_detalle(Lista.lista, Lista.detalle_tarea(Lista.lista));
                        }
                        break;
                    case 3:
                        Lista.verLista_curso(Lista.lista);
                        if (Lista.lista.length > 0) {
                            Lista.editar_detalle(Lista.lista, Lista.detalle_tarea(Lista.lista));
                        }
                        break;
                    case 4:
                        Lista.verLista_terminado(Lista.lista);
                        if (Lista.lista.length > 0) {
                            Lista.editar_detalle(Lista.lista, Lista.detalle_tarea(Lista.lista));
                        }
                        break;
                    case 5:
                        condicion_caso_uno = 1;
                        break;
                    default:
                        console.log("El valor Ingresado es incorrecto, inténtelo de nuevo \n");
                        break;
                }
            } while (condicion_caso_uno === 0);
            break;
        case 2:
            const encontrados = Tarea.buscar(Lista.lista); // buscar crea una sub lista con los objetos encontrados
            Lista.mostrar_encontrados(encontrados); // mostrar_encontrados muestra los elementos de este sublista

            if (encontrados.length > 0) { // verifica que la sublista no esté vacía para poder ver en detalle un elemento de la sublista
                Lista.detalle_tarea(encontrados); // detalle_tarea muestra los detalles de la tarea que selecciona el usuario, si es que selecciona
            }
            break;
        case 3:
            Lista.lista.push(Tarea.ingresar());
            break;
        case 4:
            console.log("Gracias por usarnos");
            condicion = 1;
            break;
        default:
            console.log("Opcion incorrecta");
            break;
    }
} while (condicion === 2);
