_Los tp teóricos estan todos en el pdf Aplicando lo aprendido 

_0clases es el proyecto ToList basado en clases, ya que fue lo primero que hice. Todos los otros proyectos estan basados en este, por eso todos los otros se muestran iguales.

_la diferencia de 3_prototypos y 1_estructurado es la forma en la que se definien los objetos

Tarea.js
en prototypos creo un objeto tarea que me sirve de prototypo, luego en la funcion crear tarea, voy creando copias de tarea de la forma:
var nuevo=Object.create(Tarea);///nuevo va a ser una copia de Tarea 