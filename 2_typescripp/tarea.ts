import * as ingreso_teclado from 'readline-sync'; // ingreso de datos asincrono
import * as kleur from 'kleur'; // cambia de color texto en terminal
import * as emoji from 'node-emoji'; // poner emojis


class Tarea {
    titulo: string;
    descripcion: string;
    estado: number;
    creacion: Date;
    ultima_edicion: Date;
    vencimiento: Date;
    dificultad: number;

    constructor(titulo: string, descripcion: string, vencimiento: Date, dificultad: number) {
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.estado = 1;
        this.creacion = new Date();
        this.ultima_edicion = new Date();
        this.vencimiento = vencimiento;
        this.dificultad = dificultad;
    }

    /// métodos
    editar(): void {
        this.titulo = ingreso_teclado.question("Titulo: \n");
        this.descripcion = ingreso_teclado.question("Descripcion: \n");
        this.estado = 5;
        while (this.estado !== 1 && this.estado !== 2 && this.estado !== 3) {
            /// utilizo un console.log en vez de poner la descripcion en el questionInt, porque si no no muestra los emojis
            console.log(`${kleur.red(`1. Pendiente ${emoji.get('tada')}`)}\n${kleur.yellow(`2. En curso  ${emoji.get('hourglass')}`)}\n${kleur.green(`3. Finalizado ${emoji.get('white_check_mark')}`)}`);
            this.estado = ingreso_teclado.questionInt();
        }
        this.ultima_edicion = new Date();
        do {
            const fechaTexto = ingreso_teclado.question('Ingresa fecha de vencimiento (YYYY-MM-DD): \n');
            // Intentar convertir la cadena a un objeto Date
            this.vencimiento = new Date(fechaTexto);
        } while (isNaN(this.vencimiento.getTime()));
        /// ingreso de dificultad con color y emojis 
        this.dificultad = 5;
        while (this.dificultad !== 1 && this.dificultad !== 2 && this.dificultad !== 3) {
            /// utilizo un console.log en vez de poner la descripcion en el questionInt, porque si no no muestra los emojis
            console.log(`${kleur.green(`1.Facil ${emoji.get('smile')}`)}\n${kleur.yellow(`2.Medio ${emoji.get('neutral_face')}`)}\n${kleur.red(`3.Dificil ${emoji.get('rage')}`)}`);
            this.dificultad = ingreso_teclado.questionInt();
        }
        console.log("Datos guardados!\n");
    }
}

export default Tarea;
