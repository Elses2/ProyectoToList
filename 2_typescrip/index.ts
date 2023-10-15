import * as ingreso_teclado from 'readline-sync';
import { Tarea } from './Tarea';
import { ingresar } from './Tarea';
import { buscar } from './Tarea';
import { lista } from './Lista';
import { detalle_tarea } from './Lista';
import { editar_detalle } from './Lista';
import { verLista_curso } from './Lista';
import { verLista_pendiente } from './Lista';
import { verLista_terminado } from './Lista';
import { verLista_todo } from './Lista';
import { mostrar_encontrados } from './Lista';
///funcion que muestra menu principal
function introduccion():void{

    console.log("[1] Ver tarea ");
    console.log("[2] Buscar Tarea");
    console.log("[3] Agregar Tarea");
    console.log("[4] Cerrar ");
} 
///funcion que muestra submenu caso 1
function CasoUno() {
    console.log("1 Todo");
    console.log("2 Pendiente");
    console.log("3 En Curso");
    console.log("4 Finalizado");
    console.log("5 Volver");
}

let botonS:string;
let boton:number=0;
let condicion:number=2;
let condicion_caso_uno:number=0;

do{
    introduccion();
    botonS=ingreso_teclado.question("Dime Cual de estas opciones deseas:\n");
    try{
        boton=parseInt(botonS,10);
    
    }catch(error){
        boton=-1;
    };
    switch(boton){

        case 1: 
        do {
            CasoUno();
            boton = ingreso_teclado.questionInt("Dime Cual de estas opciones deseas:\n")
            console.clear();
            switch (boton) {
                case 1:
                    verLista_todo(lista);
                    if (lista.length>0 ) {
                        editar_detalle(lista,detalle_tarea(lista));
                        
                    }
                    break;
                case 2:
                    verLista_pendiente(lista);
                    if (lista.length>0) {
                        editar_detalle(lista,detalle_tarea(lista));
                    }
                    break;
                case 3:
                    verLista_curso(lista);
                    if (lista.length>0) {
                        editar_detalle(lista,detalle_tarea(lista));
                    }
                    break;
                case 4:
                    verLista_terminado(lista);
                    if (lista.length>0) {
                        editar_detalle(lista,detalle_tarea(lista));
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
        const encontrados:Tarea[]=buscar(lista);///buscar crea una sub lista con los objetos encontrados
        mostrar_encontrados(encontrados);  /// mostrar_encontrados muestra los elementos de este sublista 
         
        if (encontrados.length>0) {///verifica que la sublista no este vacia para poder ver en detalle un elemento de la sublista
            detalle_tarea(encontrados);///datalle_tarea muestra los detalles de la tarea que selecciona el usuario, si es que selecciona
        }
        break;
        case 3:
            lista.push(ingresar()); 
        break;
        case 4:
            console.log("Gracias por usarnos");
            condicion=1; 
        break;
        default: 
            console.log("Opcion incorrecta");
        break;


        }
}while(condicion===2);

