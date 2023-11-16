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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
const kleur_1 = __importDefault(require("kleur"));
const emoji = __importStar(require("node-emoji")); // poner emojis
class Tarea {
    constructor(titulo, descripcion, vencimiento, dificultad) {
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.estado = 1;
        this.creacion = new Date();
        this.ultima_edicion = new Date();
        this.vencimiento = vencimiento;
        this.dificultad = dificultad;
    }
    /// métodos
    editar() {
        this.titulo = readline_sync_1.default.question("Titulo: \n");
        this.descripcion = readline_sync_1.default.question("Descripcion: \n");
        this.estado = 5;
        while (this.estado !== 1 && this.estado !== 2 && this.estado !== 3) {
            /// utilizo un console.log en vez de poner la descripcion en el questionInt, porque si no no muestra los emojis
            console.log(`${kleur_1.default.green(`1.Facil ${emoji.get('smile')}`)}\n${kleur_1.default.yellow(`2.Medio ${emoji.get('neutral_face')}`)}\n${kleur_1.default.red(`3.Dificil ${emoji.get('rage')}`)}`);
            ///console.log(`${kleur.red(`1. Pendiente ${emoji.get('tada')}`)}\n${kleur.yellow(`2. En curso  ${emoji.get('hourglass')}`)}\n${kleur.green(`3. Finalizado ${emoji.get('white_check_mark')}`)}`);
            this.estado = readline_sync_1.default.questionInt();
        }
        this.ultima_edicion = new Date();
        do {
            const fechaTexto = readline_sync_1.default.question('Ingresa fecha de vencimiento (YYYY-MM-DD): \n');
            // Intentar convertir la cadena a un objeto Date
            this.vencimiento = new Date(fechaTexto);
        } while (isNaN(this.vencimiento.getTime()));
        /// ingreso de dificultad con color y emojis 
        this.dificultad = 5;
        while (this.dificultad !== 1 && this.dificultad !== 2 && this.dificultad !== 3) {
            /// utilizo un console.log en vez de poner la descripcion en el questionInt, porque si no no muestra los emojis
            console.log(`${kleur_1.default.green(`1.Facil ${emoji.get('smile')}`)}\n${kleur_1.default.yellow(`2.Medio ${emoji.get('neutral_face')}`)}\n${kleur_1.default.red(`3.Dificil ${emoji.get('rage')}`)}`);
            this.dificultad = readline_sync_1.default.questionInt();
        }
        console.log("Datos guardados!\n");
    }
}
exports.default = Tarea;
