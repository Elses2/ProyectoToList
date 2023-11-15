const readline= require('readline-sync');///ingreso de datos asincronos
const kleur = require('kleur');
const emoji = require('node-emoji');
const calculadora=require('./Calculadora');

function presentacion(){

    console.log(`${kleur.green('1.')} SUMA`);
    console.log(`${kleur.green('2.')} RESTA`);
    console.log(`${kleur.green('3.')} MULTIPLICACION`);
    console.log(`${kleur.green('4.')} DIVISION`);
    console.log(`${kleur.green('5.')} CERRAR`);


}
x=new calculadora();
let n=3; 
///ingreso a b son los operandos que ingresara el usuario, desicion es la opcion que decida elegir el usuario
let a,b, desicion; 
console.log(`Bienvenido a ${kleur.magenta('Calculadora')} ${emoji.get('heart')}`);

do{
    presentacion();
    console.log(`${kleur.bold('Ingresa la opcion que deseas:')}`);
    desicion=readline.questionInt();
    switch(desicion){

        case 1:
            console.log(`${kleur.bold('Ingresa el primer operando')}`);
            a=readline.questionInt();
            console.log(`${kleur.bold('Ingresa el segundo operando')}`);
            b=readline.questionInt();
            console.log(`${kleur.blue(`${x.suma(a,b)}`)}`);
            break;
            
        case 2:
            console.log(`${kleur.bold('Ingresa el minuendo')}`);
            a=readline.questionInt();
            console.log(`${kleur.bold('Ingresa el sustraendo')}`);
            b=readline.questionInt();
            console.log(`${kleur.blue(`${x.resta(a,b)}`)}`);
            break;
            
        case 3:
            console.log(`${kleur.bold('Ingresa el primer factor')}`);
            a=readline.questionInt();
            console.log(`${kleur.bold('Ingresa el segundo factor')}`);
            b=readline.questionInt();
            console.log(`${kleur.blue(`${x.multiplicacion(a,b)}`)}`);
            break;
            
        case 4:
            console.log(`${kleur.bold('Ingresa dividendo')}`);
            a=readline.questionInt();
            console.log(`${kleur.bold('Ingresa el sivisor')}`);
            b=readline.questionInt();
            console.log(`${kleur.blue(`${x.division(a,b)}`)}`);
            break;
        case 5:
            console.log(`${kleur.cyan('Gracias por elegir nuestra Calculadora')}${emoji.get('smile')}`);
            n=2;
            break;
            
        default:
            break;

    }

}while(n===3);