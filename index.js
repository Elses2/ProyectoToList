const tarea= require('./Tarea');
const ingreso_datos=require('readline-sync');
function presentacion(){

	console.log("1 Ver tarea ");
	console.log("2 Buscar Tarea");
	console.log("3 Agregar Tarea");
	console.log("4 Cerrar ");
	
}
function editar_elemento_complemento(lista,indice){
	const elemento= lista[indice-1];
	

}
function agregar_elemento(){
	let titulo,descripcion,vencimiento,dificultad;
	titulo=ingreso_datos.question("Titulo: \n");
	descripcion=ingreso_datos.question("Descripcion: \n");
	estado=ingreso_datos.questionInt("Estado(1pendiente,2en curso,3finalizado): \n");
	do{
			const fechaTexto = ingreso_datos.question('Ingresa fecha de Vencimiento (YYYY-MM-DD): ');
			// Intentar convertir la cadena a un objeto Date
			vencimiento = new Date(fechaTexto);
	}while(isNaN(vencimiento.getTime()));
	Dificultad=ingreso_datos.questionInt("Dificultad(1-facil 2medio 3dificil): \n"); 
	return new tarea(titulo,descripcion,vencimiento,dificultad);

}
function detalle_tarea(lista, seleccion){
	let desicion=0;
	seleccion=ingreso_datos.questionInt("Si deseas ver en detalle una de estas tareas selecciona su indice, si no, preciona 0 u otra tecla distinta de los indices existentes\n");
	if(seleccion <=lista.length && seleccion>0){
		detalle_tarea_complemento(lista, seleccion)
					}
	desicion=ingreso_datos.question("Si deseas modificar esta tarea preciona: e   si no preciona otra tecla\n");
	if(desicion==e){
		lista[seleccion].editar();
	}
}
function CasoUno(){

	console.log("1 Todo");
	console.log("2 Pendiente");
	console.log("3 En Curso");
	console.log("4 Finalizado");
	console.log("5 Volver");
	
}
function detalle_tarea_complemento(lista, indice) {
  const elemento = lista[indice-1];
  console.log(`Esta es la tarea que elegiste\n ${elemento.titulo}`);
  console.log(`${elemento.descripcion}`);
  console.log(`estado: ${elemento.estado}`);
  console.log(`dificultad: ${elemento.dificultad}`);
  console.log(`creacion: ${elemento.creacion}`);
  console.log(`ultima edicion: ${elemento.ultima_edicion}`);
  console.log(`vencimiento: ${elemento.vencimiento}`);
 
}

function verLista_todo(lista){
	if(lista.length>0){
	 lista.forEach((elemento, index) => {
 	 console.log(`${index + 1}. ${elemento.titulo}`);
	});
	}
	else{console.log("La agenda esta vacia");}

}
function verLista_pendiente(lista){
	if(lista.length>0){
	 lista.forEach((elemento, index) => {
 	 if(elemento.estado === 1){
 	 	console.log(`${index + 1}. ${elemento.titulo}`);
 	 }
	});
	}
	else{console.log("La agenda esta vacia");}

}
function verLista_curso(lista){
	if(lista.length>0){
	 lista.forEach((elemento, index) => {
 	 if(elemento.estado === 2){
 	 	console.log(`${index + 1}. ${elemento.titulo}`);
 	 }
	});
	}
	else{console.log("La agenda esta vacia");}

}
function verLista_terminado(lista){
	 if(lista.length>0){
	 lista.forEach((elemento, index) => {
 	 if(elemento.estado === 3){
 	 	console.log(`${index + 1}. ${elemento.titulo}`);
 	 }
	});
	}
	else{console.log("La agenda esta vacia");}

}



let ingreso=0;
let condicion=0;
let CondicionCasoUno=0;
let seleccion=0;
const lista=[];

console.log("Bienvenido");

do{

	presentacion();
	ingreso= ingreso_datos.questionInt("Dime Cual de estas opciones deseas:\n")
	switch(ingreso){
		case 1: 	
			do{
				CasoUno();
				ingreso= ingreso_datos.questionInt("Dime Cual de estas opciones deseas:\n")
				switch(ingreso){
					case 1: 
						verLista_todo(lista);
						if(lista.length!=0){detalle_tarea(lista, seleccion)}
						
						
					break;
					case 2: 
						verLista_pendiente(lista);
						if(lista.length!=0){detalle_tarea(lista, seleccion)}
						
					break;
					case 3:
						verLista_curso(lista);
						if(lista.length!=0){detalle_tarea(lista, seleccion)}
						
					break;
					case 4: 
						verLista_curso(lista);
						if(lista.length!=0){detalle_tarea(lista, seleccion)}
						
					break;
					case 5:
						CondicionCasoUno=1; 
					
					break;
					default: 
						console.log("El valor Ingresado es incorrecto, intentelo de nuevo \n");
					break;
			
				
				}
			
			}while(CondicionCasoUno === 0);
			
			
			break;
		case 2: 
			break;
		case 3: 
			lista.push(agregar_elemento());
			break;
		case 4: 
			condicion=3;
			console.log("Gracias por usarnos");
			break;
		default:
		
			console.log("El valor ingresado es incorrecto"); 
			break;
	
	}




}while(condicion === 0);
