
import * as ingreso_teclado from 'readline-sync';
    export interface Tarea {
    titulo: string;
    descripcion: string;
    estado: number;
    creacion: Date;
    ultima_edicion: Date;
    vencimiento: Date;
    dificultad: number;
}
///Sirve para crear objeto tipo tarea, no se pasan todos los datos por parametro, para editar todos los atributos. Solo 4 que son los que se editan al inicio 
function crearTarea(titulo: string, descripcion: string, vencimiento: Date, dificultad: number): Tarea {
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
export function ingresar():Tarea{
    let titulo, descripcion, vencimiento, dificultad;
    titulo = ingreso_teclado.question("Titulo: \n");
    descripcion = ingreso_teclado.question("Descripcion: \n");
    do {
        const fechaTexto = ingreso_teclado.question('Ingresa fecha de Vencimiento (YYYY-MM-DD):\n');
        // Intentar convertir la cadena a un objeto Date
        vencimiento = new Date(fechaTexto);
    } while (isNaN(vencimiento.getTime()));
    while(dificultad != 1 && dificultad != 2 && dificultad != 3 ){
        dificultad = ingreso_teclado.questionInt("Dificultad(1-facil 2-medio 3-dificil): \n");
    }
    return crearTarea(titulo,descripcion,vencimiento,dificultad);

}
///recibe 1 parametro tipo Tarea, donde se modifica
export function editar(x:Tarea):void{

    x.titulo=ingreso_teclado.question("Titulo: \n");
    x.descripcion=ingreso_teclado.question("Descripcion: \n");
    x.estado=ingreso_teclado.questionInt("Estado(1pendiente,2en curso,3finalizado): \n");
    x.ultima_edicion = new Date();
		do{
			const fechaTexto = ingreso_teclado.question('Ingresa fecha limite (YYYY-MM-DD): ');
			// Intentar convertir la cadena a un objeto Date
			x.vencimiento = new Date(fechaTexto);
		}while(isNaN(x.vencimiento.getTime()));
		x.dificultad=ingreso_teclado.questionInt("Dificultad(1-facil 2medio 3dificil): \n"); 
		console.log("Datos guardados!\n");
}
///crea una lista nueva con aquellos elementos encontrados- no distingue mayusculas o minusculas-recibe lista-recibe elemento a buscar
export function buscar(lista: Tarea[]): Tarea[] {
    const cadenaABuscar = ingreso_teclado.question("Dime el título de la tarea que deseas buscar: ").toLowerCase();

    const tareasEncontradas = lista.filter((object) => {
        return object.titulo.toLowerCase().includes(cadenaABuscar);
    });

    return tareasEncontradas;
}

