"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatDate = exports.detalle_tarea_complemento = exports.editar_detalle = exports.detalle_tarea = exports.verLista_terminado = exports.verLista_curso = exports.verLista_pendiente = exports.mostrar_encontrados = exports.verLista_todo = exports.lista = void 0;
const Tarea_js_1 = require("./Tarea.js");
const ingreso_teclado = __importStar(require("readline-sync"));
exports.lista = [];
// Función para ver la lista de tareas en estado "Todo".
function verLista_todo(lista) {
    if (lista.length > 0) {
        lista.forEach((elemento, index) => {
            console.log(`${index + 1}. ${elemento.titulo}`);
        });
    }
    else {
        console.clear();
        console.log("La agenda está vacía");
    }
}
exports.verLista_todo = verLista_todo;
function mostrar_encontrados(lista) {
    if (lista.length > 0) {
        lista.forEach((elemento, index) => {
            console.log(`${index + 1}. ${elemento.titulo}`);
        });
    }
    else {
        console.clear();
        console.log("No se encontro un elemento");
    }
}
exports.mostrar_encontrados = mostrar_encontrados;
// Función para ver la lista de tareas en estado "Pendiente".
function verLista_pendiente(lista) {
    if (lista.length > 0) {
        lista.forEach((elemento, index) => {
            if (elemento.estado === 1) {
                console.log(`${index + 1}. ${elemento.titulo}`);
            }
        });
    }
    else {
        console.clear();
        console.log("La agenda está vacía");
    }
}
exports.verLista_pendiente = verLista_pendiente;
// Función para ver la lista de tareas en estado "En Curso".
function verLista_curso(lista) {
    if (lista.length > 0) {
        lista.forEach((elemento, index) => {
            if (elemento.estado === 2) {
                console.log(`${index + 1}. ${elemento.titulo}`);
            }
        });
    }
    else {
        console.clear();
        console.log("La agenda está vacía");
    }
}
exports.verLista_curso = verLista_curso;
// Función para ver la lista de tareas en estado "Finalizado".
function verLista_terminado(lista) {
    if (lista.length > 0) {
        lista.forEach((elemento, index) => {
            if (elemento.estado === 3) {
                console.log(`${index + 1}. ${elemento.titulo}`);
            }
        });
    }
    else {
        console.clear();
        console.log("La agenda está vacía");
    }
}
exports.verLista_terminado = verLista_terminado;
// Función para ver los detalles de una tarea, retorna indice de la tarea seleccionada, es un complemento para la funcion editar_detalle
function detalle_tarea(lista) {
    let seleccion = ingreso_teclado.question("Si deseas ver en detalle una de estas tareas selecciona su índice, si no, presiona 0 u otra tecla distinta de los índices existentes\n");
    let seleccion2 = parseInt(seleccion, 10);
    if (!isNaN(seleccion2) && seleccion2 > 0 && seleccion2 <= lista.length) {
        detalle_tarea_complemento(lista, seleccion2);
        return seleccion2;
    }
    else {
        ///no hace nada, presiono una tecla distinta que las opciones existentes
        return -1; ///el -1 me indica que la lista no tiene nada 
    }
}
exports.detalle_tarea = detalle_tarea;
function editar_detalle(lista, indice) {
    if (indice != -1) {
        let seleccion_string = ingreso_teclado.question("Si deseas modificar la tarea seleccionada preciona 'e', si no, presiona cualquier otra tecla\n");
        if (seleccion_string.toLowerCase() === "e") {
            (0, Tarea_js_1.editar)(lista[indice - 1]);
        }
    }
}
exports.editar_detalle = editar_detalle;
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
exports.detalle_tarea_complemento = detalle_tarea_complemento;
// Función para formatear una fecha. Lo siento por el nombre en ingles xd 
function formatDate(dateString) {
    if (!dateString) {
        return '';
    }
    const date = new Date(dateString);
    return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
}
exports.formatDate = formatDate;
