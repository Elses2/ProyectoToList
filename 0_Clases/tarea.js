const ingreso_teclado= require('readline-sync');
class Tarea{
	constructor(titulo,descripcion,vencimiento,dificultad){
	
		this.titulo=titulo;
		this.descripcion=descripcion;
		this.estado=1;
		this.creacion=new Date();
		this.ultima_edicion=new Date();
		this.vencimiento=vencimiento;
		this.dificultad=dificultad;
	
	}
	///metodos
	editar(){
		this.titulo=ingreso_teclado.question("Titulo: \n");
		this.descripcion=ingreso_teclado.question("Descripcion: \n");
		this.estado=ingreso_teclado.questionInt("Estado(1pendiente,2en curso,3finalizado): \n");
		this.ultima_edicion = new Date();
		do{
			const fechaTexto = ingreso_teclado.question('Ingresa una fecha (YYYY-MM-DD): ');
			// Intentar convertir la cadena a un objeto Date
			this.vencimiento = new Date(fechaTexto);
		}while(isNaN(this.vencimiento.getTime()));
		this.Dificultad=ingreso_teclado.questionInt("Dificultad(1-facil 2medio 3dificil): \n"); 
		console.log("Datos guardados!\n");
	}
}
module.exports=Tarea;
