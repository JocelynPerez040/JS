
/*
Se tiene la edad de unos trabajadores del área de producción,
transporte y administración.
Desea conocer quienes son mayores a de la edad seleccionada para bonus especial.
*/

const produccion= [34,78,27,19];
const transporte= [27,31,27,22];
const administracion= [60,38,49,25];
const unionarreglo= produccion.concat(transporte, administracion);
const elementos =[];

const mayor = edad => {
    unionarreglo.forEach(element => {
        if (element >= edad) {
            elementos.push(element);
        }
    })
    return elementos;  
}

const function1=(callbackFuntion, edad)=>{
    const primerfunction=callbackFuntion(edad);
    console.log(`Las edades de los trabajadores mayores a ${edad} tienen el bonus especial ${primerfunction}`);
}
function1(mayor,26);


/*
Se tienen dos arreglos con lo vendido cada día de la semana en galones de gasolina.
Se desea traer la posicion de todos los galones vendidos iguales a 2566.
*/

const extra= [2398, 354, 2566, 3755, 2384, 2566, 3343];
const corriente= [2345, 4852, 1236, 3772, 2234, 552, 2566];
const gasolinaSemanal= extra.concat(corriente);
const posicion= [];

const galones = max=> {
    var index = gasolinaSemanal.indexOf(max);
    while (index != -1) {
        posicion.push(index);
        index = gasolinaSemanal.indexOf(max, index + 1);
    }
return posicion;
}

const function2=(callbackFuntion, max)=>{
    const segundafunction=callbackFuntion(max);
    console.log(`Las posiciones de los galones vendidos que fueron iguales a ${max} son: ${segundafunction}`);
}
function2(galones,2566);


/*
Se tiene un estudiante que desea conocer si pasó el semestre.
Sus materias se dividen en ciencias humanas, ciencias básicas y ciencias específicas.
cada tema tiene 3 asignaturas.
Si en total pasa un numero determinado de materias, el estudiante aprueba el semestre.
*/

const humanas= ["Reprobado", "Reprobado", "Aprobado", "Reprobado"];
const basicas= ["Aprobado", "Aprobado", "Aprobado", "Reprobado"];
const especificas= ["Aprobado", "Reprobado", "Aprobado", "Aprobado"];
const totalAsignaturas= humanas.concat(basicas,especificas);
var cont=0;
var x = "";

const verificar = num=> {
    totalAsignaturas.forEach(element => {
        if (element == "Aprobado") {
            cont += 1;
        }
        if (cont >= num) {
            x="Has aprobado el semestre";

        }else{
            x="No has aprobado el semestre";
        }
    })
    return x;
}

const function3=(callbackFuntion, num)=>{
    const tercerfunction=callbackFuntion(num);
    console.log(`Las materias que debe aprobar son: ${num} ${tercerfunction}`);
}
console.log(function3(verificar,6));