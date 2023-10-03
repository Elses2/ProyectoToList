const ingreso_teclado= require('readline-sync');
class Tarea{
	constructor(titulo,descripcion,estado=1,creacion,ultima_edicion,vencimiento,dificultad){
	
		this.titulo=titulo;
		this.descripcion=descripcion;
		this.estado=estado;
		this.creacion=creacion;
		this.ultima_edicion=ultima_edicion;
		this.vencimiento=vencimiento;
		this.dificultad=dificultad;
	
	}
	///metodos
	editar(){
		titulo=ingreso_teclado.question("Titulo: \n");
		descripcion=ingreso_teclado.question("Descripcion: \n");
		estado=ingreso_teclado.questionInt("Estado(1pendiente,2en curso,3finalizado): \n");
		
		do{
			const fechaTexto = readlineSync.question('Ingresa una fecha (YYYY-MM-DD): ');
			// Intentar convertir la cadena a un objeto Date
			creacion = new Date(fechaTexto);
		}while(isNaN(creacion.getTime()));
		do{
			const fechaTexto = readlineSync.question('Ingresa una fecha (YYYY-MM-DD): ');
			// Intentar convertir la cadena a un objeto Date
			ultima_edicion = new Date(fechaTexto);
		}while(isNaN(ultima_edicion.getTime()));
		do{
			const fechaTexto = readlineSync.question('Ingresa una fecha (YYYY-MM-DD): ');
			// Intentar convertir la cadena a un objeto Date
			vencimiento = new Date(fechaTexto);
		}while(isNaN(vencimiento.getTime()));
		Dificultad=ingreso_teclado.questionInt("Dificultad(1-facil 2medio 3dificil): \n"); 
	
		
	
	}
	module.exports=Tarea;
	


}
