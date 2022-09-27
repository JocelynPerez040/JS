//----------TAREA---------
/* Crear una clase con herencia y un objeto que tenga un objeto con arreglo */

const rocososss ={
    carac1:"Planetas interiores",
    carac2:"Superficie sólida",
    CaracteristicasRocosos:[{
        Planet1:"Mercurio"
    },{
        Planet2:"Venus"
    },{
        Planet3:"Tierra"
    },{
        Planet4:"Marte"
    }]
}  

const gaseososss ={
    carac1:"Planetas exteriores",
    carac2:"Superficie gaseosa",
    CaracteristicasGaseosos:[{
        Planet5:"Jupiter"
    },{
        Planet6:"Saturno"
    },{
        Planet7:"Urano"
    },{
        Planet8:"Neptuno"
    }]
}

class SistemaSolar{
    constructor(){
        this.planetas();
    }

    planetas(){
        const Planetas = rocososss.CaracteristicasRocosos.concat(gaseososss.CaracteristicasGaseosos)
        console.log("Los planetas del sistema solar son: ")
        Planetas.forEach (element =>{
          console.log(element);
        })
    }    
}

class Rocosos extends SistemaSolar{
    constructor(dis, vel){
        super();
        this.dis = dis;
        this.vel = vel;
    }       

    tiempo(){
        let tiempoProm = this.dis/this.vel
        return console.log("El tiempo aproximado en que tardan estos planetas en dar una vuelta al sol es: "+tiempoProm);
    }
}               

class Gaseosos extends SistemaSolar{
    constructor(temp){
        super();
        this.temp = temp;  
    }    
    temperatura(){
        console.log("El sol es la estrella más grande del sistema solar, tiene una temperatura de: "+this.temp+ "°");
    }
}


console.log("Clase hija#1 Planetas rocosos");
const planRoc= new Rocosos(24,678);
console.log(planRoc.tiempo());

console.log("---------------------------------");

console.log("Clase hija#2 Planetas gaseosos");
const planGas= new Gaseosos(Math.random(1000));
console.log(planGas.temperatura());











