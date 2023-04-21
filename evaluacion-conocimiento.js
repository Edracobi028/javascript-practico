/* VARIABLES Y OPERACIONES */
/* Determina el nombre y tipo de dato para almacenar en variables */
/* 
var name = "Eduardo"; 
var lastName = "Razo";
var platziUserName = "Edracobi028"
var age = 32
var email = "esse_rios_e@hotmail.com"
var isMajor = true;
var moneySavings = 7000;
var debts = 3000; 
*/


/* VARIABLES Y OPERACIONES */
/* Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior */
/*
var nameComplete = ( "Nombre completo: " +  name + " " + lastName);
var realQuantity = moneySavings - debts; 
console.log(nameComplete);
console.log("Dinero Real: " + realQuantity); */


/* FUNCIONES */
/*  Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función */
/* 
presentation("Juan David", "Castro Gallego", "juandc");

function presentation (userName, userlastName, userNickname) {

    const name = userName;
    const lastname = userlastName;
    const completeName = name + " " + lastname;
    const nickname = userNickname;

    console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
} */

/* FUNCIONES */
/* Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función*/
/* 
const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
} 
*/

/* CONDICIONALES */
/* Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if*/
/* 
const tipoDeSuscripcion = "ExpertPlus";

if (tipoDeSuscripcion == "Free" ) {
    console.log("Solo puedes tomar los cursos gratis");
} else if (tipoDeSuscripcion == "Basic") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
} else if (tipoDeSuscripcion == "Expert") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
} else if (tipoDeSuscripcion == "ExpertPlus") {
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"); 
} 
*/


/* CONDICIONALES */
/* Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if). */
/* 
const tipoDeSuscripcion = "ExpertPlus";

let respuesta = (tipoDeSuscripcion == "Free") ? console.log("Solo puedes tomar los cursos gratis") 
: (tipoDeSuscripcion == "Basic") ? console.log("Puedes tomar casi todos los cursos de Platzi durante un mes")
: (tipoDeSuscripcion == "Expert") ? console.log("Puedes tomar casi todos los cursos de Platzi durante un año")
: (tipoDeSuscripcion == "ExpertPlus") ? console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año") 
: console.log("No conozco esa respuesta");
 


const tipoSuscripciones = {
    Free:'Solo puedes tomar los cursos gratis',
    Basic: 'Puedes tomar casi todos los cursos de Platzi durante un mes',
    Expert: 'Puedes tomar casi todos los cursos de Platzi durante un año',
    ExpertPlus: 'Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año',
}

getSuscripciones('Basic')

function getSuscripciones (suscripcion){
    if (tipoSuscripciones[suscripcion]){
        console.log(tipoSuscripciones[suscripcion])
        return;
    }
    console.log('este tipo de suscripcion no existe')
}
*/

/* LISTAS */
/* 
let array = ["A","B","C","D","E","F","G","H","I"];
let object = { 
                nombre:"Eduardo",
                apellido:"Razo",
                ciudad:"Guadalajara"
            }
getfirstItem(array);
getallItmes(array);
getallItmesObject(object);
function getfirstItem (array){

    console.log("Primer elemento de un array: " + array[0])
};

function getallItmes (array){

    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        console.log( "Elemento de array en posicion " + i + " :" + element)
    }
    
}

function getallItmesObject (object){

    let values = Object.values(object);

    for (let i = 0; i < values.length; i++) {
        let value = values[i]
        console.log( "Elemento de objeto en posicion " + i + " :" + value)
    }
    
}
 */