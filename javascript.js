//CLASES Y OBJETOS 

class Carro{
    constructor(name, year){
    //this se refiere a el objeto cuando se instancie 
    this.name= name;
    this.year= year;
    }    

    age(){
        let presentYear =new Date();
        //regresa el año 2022 - el año recibido
        return presentYear.getFullYear() - this.year;
    }
}

const carroUno = new Carro("Ford",2015);
console.log(carroUno.age());

//HERENCIA
//Clase padre 
class Forma{
    constructor(){
        console.log("Soy una forma geometrica");
    }
}

//Clase hija,con palabra extends
class Cuadrado extends Forma{

    constructor(){
        super();//hereda todo lo del padre
        console.log("Soy un cuadrado");
    }
}

const Cuadrado2 = new Cuadrado();
console.log(Cuadrado2);



class Universo{
    constructor(name, long){
        this.name = name;
        this.long = long;
    }

    distanceSun(){
        let distenceEarth = Math.random(10000);
        return this.long - distenceEarth;
    }
}

const Universo1 = new Universo("Saturno",2015);
console.log("La diferencia entre la distancia al sol y la tierra de ", Universo1.name, " es: ",Universo1.distanceSun());

class Moons extends Universo{
    constructor(N,J){
        super(N,J);//hereda todo lo del padre
        let mon = Math.random(10);
        console.log(mon);
    }
}

const Moons1 = new Moons("Saturno",2015);
console.log(Moons1);



//OBJETOS

//Crear objeto
//Primera forma 
let nombre ="Jhon Doe";

//Segunda forma 
let persona ={

    firtName:"Jhon",
    lastName:"Doe"
}

//creo instancia tipo objeto. Aquí creo un nuevo objeto
const Mauricio = new Object();
Mauricio.nombre ="Mauricio";
Mauricio.apellido="Perez";
console.log(Mauricio);

//Acceso a las propiedades 
//Primera forma
console.log(persona.firtName);

//Segunda forma
console.log(persona["firtName"]);

//Objeto dentro de objeto

const Carros ={
    propietario:"Jhon Doe",
    edad:30,
    carrosQuePosee:{
        car1:"Ford",
        car2:"Audi",
        car3:"Ferrari",
    }
}

console.log(Carros.carrosQuePosee.car1);

const Musica ={
    origen:"Europa",
    
    generos:{
        car1:"Salsa",
        car2:"Bachata",
        car3:"Merengue",
    }
}

console.log("La respuesta es: "+Musica.origen + ' ' + Musica.generos.car2);

console.log("Segunda forma"+Musica["origen"]+ Musica["generos"]["car1"]);


//Objeto que funciona con arreglo
const Carros2 ={
    propietario:"Jhon Doe",
    edad:30,
    carrosQuePosee:[{
        car1:"Ford",
        car2:"Audi",
        car3:"Ferrari",
    },{
        car4:"er",
        car5:"A",
        car6:"Fi",
    }]
}

console.log(Carros2.carrosQuePosee[1].car1);

//----------TAREA---------
/* Crear una clase con herencia y un objeto que tenga un objeto con arreglo */