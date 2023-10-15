import {editar} from "./Tarea.js"
import {Tarea} from "./Tarea.js";
import * as ingreso_teclado from 'readline-sync';

export let lista:Tarea[];///lista que contendra las tareas de la agenda 
lista=[];

// Función para ver la lista de tareas en estado "Todo".
export function verLista_todo(lista:Tarea[]) {

    if (lista.length>0) {
        lista.forEach((elemento, index) => {
            console.log(`${index + 1}. ${elemento.titulo}`);
        });
    } else {
        console.clear();
        console.log("La agenda está vacía");
        
    }
}
export function mostrar_encontrados(lista:Tarea[]) {

    if (lista.length>0) {
        lista.forEach((elemento, index) => {
            console.log(`${index + 1}. ${elemento.titulo}`);
        });
    } else {
        console.clear();
        console.log("No se encontro un elemento");
        
    }
}
// Función para ver la lista de tareas en estado "Pendiente".
export function verLista_pendiente(lista:Tarea[]) {
    if (lista.length>0) {
        lista.forEach((elemento, index) => {
            if (elemento.estado === 1) {
                console.log(`${index + 1}. ${elemento.titulo}`);
            }
        });
    } else {
        console.clear();
        console.log("La agenda está vacía");
        
    }
}

// Función para ver la lista de tareas en estado "En Curso".
export function verLista_curso(lista:Tarea[]) {
    if (lista.length>0) {
        lista.forEach((elemento, index) => {
            if (elemento.estado === 2) {
                console.log(`${index + 1}. ${elemento.titulo}`);
            }
        });
    } else {
        console.clear();
        console.log("La agenda está vacía");
      
    }
}

// Función para ver la lista de tareas en estado "Finalizado".
export function verLista_terminado(lista:Tarea[]) {
    if (lista.length>0) {
        lista.forEach((elemento, index) => {
            if (elemento.estado === 3) {
                console.log(`${index + 1}. ${elemento.titulo}`);
            }
        });
    } else {
        console.clear();
        console.log("La agenda está vacía");
    }
}

// Función para ver los detalles de una tarea, retorna indice de la tarea seleccionada, es un complemento para la funcion editar_detalle
export function detalle_tarea(lista: Tarea[]): number {
    let seleccion: string = ingreso_teclado.question("Si deseas ver en detalle una de estas tareas selecciona su índice, si no, presiona 0 u otra tecla distinta de los índices existentes\n");
    
    let seleccion2:number = parseInt(seleccion, 10);
    if (!isNaN(seleccion2) && seleccion2 > 0 && seleccion2 <= lista.length) {
            detalle_tarea_complemento(lista, seleccion2);
            return seleccion2;
        }  
    else {
        ///no hace nada, presiono una tecla distinta que las opciones existentes
        return -1;///el -1 me indica que la lista no tiene nada 
    }
}
export function editar_detalle(lista:Tarea[],indice:number):void{
    if(indice!=-1){
        let seleccion_string=ingreso_teclado.question("Si deseas modificar la tarea seleccionada preciona 'e', si no, presiona cualquier otra tecla\n");
        if(seleccion_string.toLowerCase()==="e"){
             editar(lista[indice - 1]);
        }
    }
    
}


  // Función para mostrar los detalles de una tarea.
export function detalle_tarea_complemento(lista:Tarea[], indice:number) {
    const elemento:Tarea = lista[indice - 1];
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
export function formatDate(dateString:Date) {
    if (!dateString) {
        return '';
    }
    const date = new Date(dateString);
    return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
}