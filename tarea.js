const ingreso_teclado= require('readline-sync');
class Tarea{
	constructor(titulo,descripcion,estado=1,vencimiento,dificultad){
	
		this.titulo=titulo;
		this.descripcion=descripcion;
		this.estado=estado;
		this.creacion=new Date();
		this.ultima_edicion=new Date();
		this.vencimiento=vencimiento;
		this.dificultad=dificultad;
	
	}
	///metodos
	editar(){
		titulo=ingreso_teclado.question("Titulo: \n");
		descripcion=ingreso_teclado.question("Descripcion: \n");
		estado=ingreso_teclado.questionInt("Estado(1pendiente,2en curso,3finalizado): \n");
		ultima_edicion = new Date();
		do{
			const fechaTexto = ingreso_teclado.question('Ingresa una fecha (YYYY-MM-DD): ');
			// Intentar convertir la cadena a un objeto Date
			vencimiento = new Date(fechaTexto);
		}while(isNaN(vencimiento.getTime()));
		Dificultad=ingreso_teclado.questionInt("Dificultad(1-facil 2medio 3dificil): \n"); 
	}
}
module.exports=Tarea;
