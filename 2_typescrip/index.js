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
const ingreso_teclado = __importStar(require("readline-sync"));
const Tarea_1 = require("./Tarea");
const Tarea_2 = require("./Tarea");
const Lista_1 = require("./Lista");
const Lista_2 = require("./Lista");
const Lista_3 = require("./Lista");
const Lista_4 = require("./Lista");
const Lista_5 = require("./Lista");
const Lista_6 = require("./Lista");
const Lista_7 = require("./Lista");
const Lista_8 = require("./Lista");
///funcion que muestra menu principal
function introduccion() {
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
let botonS;
let boton = 0;
let condicion = 2;
let condicion_caso_uno = 0;
do {
    introduccion();
    botonS = ingreso_teclado.question("Dime Cual de estas opciones deseas:\n");
    try {
        boton = parseInt(botonS, 10);
    }
    catch (error) {
        boton = -1;
    }
    ;
    switch (boton) {
        case 1:
            do {
                CasoUno();
                boton = ingreso_teclado.questionInt("Dime Cual de estas opciones deseas:\n");
                console.clear();
                switch (boton) {
                    case 1:
                        (0, Lista_7.verLista_todo)(Lista_1.lista);
                        if (Lista_1.lista.length > 0) {
                            (0, Lista_3.editar_detalle)(Lista_1.lista, (0, Lista_2.detalle_tarea)(Lista_1.lista));
                        }
                        break;
                    case 2:
                        (0, Lista_5.verLista_pendiente)(Lista_1.lista);
                        if (Lista_1.lista.length > 0) {
                            (0, Lista_3.editar_detalle)(Lista_1.lista, (0, Lista_2.detalle_tarea)(Lista_1.lista));
                        }
                        break;
                    case 3:
                        (0, Lista_4.verLista_curso)(Lista_1.lista);
                        if (Lista_1.lista.length > 0) {
                            (0, Lista_3.editar_detalle)(Lista_1.lista, (0, Lista_2.detalle_tarea)(Lista_1.lista));
                        }
                        break;
                    case 4:
                        (0, Lista_6.verLista_terminado)(Lista_1.lista);
                        if (Lista_1.lista.length > 0) {
                            (0, Lista_3.editar_detalle)(Lista_1.lista, (0, Lista_2.detalle_tarea)(Lista_1.lista));
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
            const encontrados = (0, Tarea_2.buscar)(Lista_1.lista); ///buscar crea una sub lista con los objetos encontrados
            (0, Lista_8.mostrar_encontrados)(encontrados); /// mostrar_encontrados muestra los elementos de este sublista 
            if (encontrados.length > 0) { ///verifica que la sublista no este vacia para poder ver en detalle un elemento de la sublista
                (0, Lista_2.detalle_tarea)(encontrados); ///datalle_tarea muestra los detalles de la tarea que selecciona el usuario, si es que selecciona
            }
            break;
        case 3:
            Lista_1.lista.push((0, Tarea_1.ingresar)());
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
