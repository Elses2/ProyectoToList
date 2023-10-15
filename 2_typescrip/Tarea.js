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
exports.buscar = exports.editar = exports.ingresar = void 0;
const ingreso_teclado = __importStar(require("readline-sync"));
///Sirve para crear objeto tipo tarea, no se pasan todos los datos por parametro, para editar todos los atributos. Solo 4 que son los que se editan al inicio 
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
///Sirve para pedir datos sobre el objeto tarea que se desea crear, para luego crearlo
function ingresar() {
    let titulo, descripcion, vencimiento, dificultad;
    titulo = ingreso_teclado.question("Titulo: \n");
    descripcion = ingreso_teclado.question("Descripcion: \n");
    do {
        const fechaTexto = ingreso_teclado.question('Ingresa fecha de Vencimiento (YYYY-MM-DD):\n');
        // Intentar convertir la cadena a un objeto Date
        vencimiento = new Date(fechaTexto);
    } while (isNaN(vencimiento.getTime()));
    while (dificultad != 1 && dificultad != 2 && dificultad != 3) {
        dificultad = ingreso_teclado.questionInt("Dificultad(1-facil 2-medio 3-dificil): \n");
    }
    return crearTarea(titulo, descripcion, vencimiento, dificultad);
}
exports.ingresar = ingresar;
///recibe 1 parametro tipo Tarea, donde se modifica
function editar(x) {
    x.titulo = ingreso_teclado.question("Titulo: \n");
    x.descripcion = ingreso_teclado.question("Descripcion: \n");
    x.estado = ingreso_teclado.questionInt("Estado(1pendiente,2en curso,3finalizado): \n");
    x.ultima_edicion = new Date();
    do {
        const fechaTexto = ingreso_teclado.question('Ingresa fecha limite (YYYY-MM-DD): ');
        // Intentar convertir la cadena a un objeto Date
        x.vencimiento = new Date(fechaTexto);
    } while (isNaN(x.vencimiento.getTime()));
    x.dificultad = ingreso_teclado.questionInt("Dificultad(1-facil 2medio 3dificil): \n");
    console.log("Datos guardados!\n");
}
exports.editar = editar;
///crea una lista nueva con aquellos elementos encontrados- no distingue mayusculas o minusculas-recibe lista-recibe elemento a buscar
function buscar(lista) {
    const cadenaABuscar = ingreso_teclado.question("Dime el título de la tarea que deseas buscar: ").toLowerCase();
    const tareasEncontradas = lista.filter((object) => {
        return object.titulo.toLowerCase().includes(cadenaABuscar);
    });
    return tareasEncontradas;
}
exports.buscar = buscar;
