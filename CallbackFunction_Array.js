//console.log(); es para mostrar
//no recibe parametro
//hello=()=>{
  //  console.log("Hola");
//}
//recibe un solo parametro
//hello=(mensaje)=>{
  //  console.log(mensaje);
//}
//recbe un parametro
//hello=mensaje =>{
  //  console.log(mensaje);
//}
//cuando solo hace una accion
//hello=mensaje=console.log(mensaje);
//guardar esa funcion en una variable
//const hello=mensaje=>console.log(mensaje);
//let hellodos=mensaje=>console.log(mensaje);

//const mensajeenviado= mensaje =>{
  //  return mensaje;
//}

//Callback functions
const esimpar= numero=> numero%2 == 1;

const hellotres=(callbackFuntion, numero)=>{
const esnumeroimpar=callbackFuntion(21);
console.log(`el numero ${numero} es impar ? ${esnumeroimpar}`);
}
hellotres(esimpar,32);
//callback functions ejemplo 2
let saludar=usuario=> `Hola `+usuario;

const saludarusuario=(callbackFuntion,usuario)=>{
    const mensajerecibido=callbackFuntion(usuario)
    console.log(mensajerecibido);
}
saludarusuario(saludar, "carlos");

//metodos para arrays
const cars=["BMW", "VOLVO", "LAMBO",1, 3, 5];
const carname=["Spark GT", "Mustang", "Camaro",true,false];
const city=["Medellin", "Cali", "Bogotá",3.8,10.235];

//.concat
const unionarreglo=cars.concat(carname, city);
console.log(unionarreglo)
//resultado ['BMW', 'VOLVO', 'LAMBO', 1, 3, 5, 'Spark GT', 'Mustang', 'Camaro', true, false, 'Medellin', 'Cali', 'Bogotá', 3.8, 10.235]

//.length
console.log(cars.length);
console.log(city.length);
//cuenta los elementos en el array
//6
//5
//.push
cars.push("Paris","Chipre");
console.log(cars);
//agrega 1 o mas elementos al array. ['BMW', 'VOLVO', 'LAMBO', 1, 3, 5, 'Paris', 'Chipre']
//.pop
cars.pop();
console.log(cars);
//remueve el ultimo array ['BMW', 'VOLVO', 'LAMBO', 1, 3, 5, 'Paris']
//.map CallbackFuntion
//ejemplo1
const numbers= [4,9,12,18,"r"];
const resultadoraiz= numbers.map(numero=>Math.sqrt(numero));
console.log(resultadoraiz);
//ejemplo2
const por10=numbers.map(n=>n*10);
console.log(por10)
//.filter filtra edades por ejemplo
const edades=[10,12,18,30,15];
const esmayor=edades.filter(edad => edad >= 18);
console.log(esmayor)
//Ejemplo2
const pruebados=[10,12,18,20,30].filter(edad=> edad >=18)
console.log(pruebados)
//en una linea
console.log([10,12,30,18].filter(edad=> edad>=18));
//.reduce ejemplo sumatoria
const sumaedades=edades.reduce((acumulador,currentValue)=>
{
    return acumulador+currentValue;
})
console.log(sumaedades);
//.foreach
edades.forEach(element => console.log(element));