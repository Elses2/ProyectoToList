class Calculadora{

     Constructor(){
        this.a=0;
        this.b=0;
    }
    ///metodos

    suma(a,b){
        this.a=a;
        this.b=b;
        return a+b;

    }
    resta(a,b){
        this.a=a;
        this.b=b;
        return a-b;

    }
    multiplicacion(a,b){
        this.a=a;
        this.b=b;
        return a*b;

    }
    division(a,b){
        this.a=a;
        this.b=b;
        return a/b;

    }
}
module.exports=Calculadora;
