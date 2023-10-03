const tarea= require('./Tarea');
const ingreso_datos=require('readline-sync');
function presentacion(){

	console.log("1 Ver tarea \n");
	console.log("2 Buscar Tarea\n");
	console.log("3 Agregar Tarea\n");
	console.log("4 Cerrar \n");
	
}
function editar_elemento_complemento(lista,indice){
	const elemento= lista[indice-1];
	

}
function detalle_tarea(lista, seleccion){

	seleccion=ingreso_datos.questionInt("Si deseas ver en detalle una de estas tareas 							selecciona su indice_ si no preciona 0 u otra tecla sistinta que los indices existentes");
	if(seleccion <=lista.length && seleccion>0){
		detalle_tarea_complemento(lista, seleccion)
					}

}
function CasoUno(){

	console.log("1 Todo\n");
	console.log("2 Pendiente\n");
	console.log("3 En Curso\n");
	console.log("4 Finalizado\n");
	console.log("5 Volver\n");
	
}
function detalle_tarea_complemento(lista, indice) {
  const elemento = lista[indice-1];
  console.log(`titulo: ${elemento.titulo}\n`);
  console.log(`descripcion: ${elemento.descripcion}\n`);
  console.log(`estado: ${elemento.estado}\n`);
  console.log(`creacion: ${elemento.creacion}\n`);
  console.log(`ultima edicion: ${elemento.ultima_edicion}\n`);
  console.log(`vencimiento: ${elemento.vencimiento}\n`);
  console.log(`dificultad: ${elemento.dificultad}\n`);
}

function verLista_todo(lista){

	 lista.forEach((elemento, index) => {
 	 console.log(`${index + 1}. ${elemento.titulo}`);
	});

}
function verLista_pendiente(lista){

	 lista.forEach((elemento, index) => {
 	 if(elemento.estado === 1){
 	 	console.log(`${index + 1}. ${elemento.titulo}`);
 	 }
	});

}
function verLista_curso(lista){

	 lista.forEach((elemento, index) => {
 	 if(elemento.estado === 2){
 	 	console.log(`${index + 1}. ${elemento.titulo}`);
 	 }
	});

}
function verLista_terminado(lista){

	 lista.forEach((elemento, index) => {
 	 if(elemento.estado === 3){
 	 	console.log(`${index + 1}. ${elemento.titulo}`);
 	 }
	});

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
			CasoUno();
			ingreso= ingreso_datos.questionInt("Dime Cual de estas opciones deseas:\n")
			do{
				switch(ingreso){
					case 1: 
						verLista_todo(lista);
						detalle_tarea(lista, seleccion)
						
					break;
					case 2: 
						verLista_pendiente(lista);
						detalle_tarea(lista, seleccion)
						
					break;
					case 3:
						verLista_curso(lista);
						detalle_tarea(lista, seleccion)
						
					break;
					case 4: 
						verLista_curso(lista);
						detalle_tarea(lista, seleccion)
						
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
