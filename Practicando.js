// -----VARIABLES

//TIPO DE DATO PARA LAS SIGUIENTES VARIABLES

/*
- Nombre: string
- Apellido: string
- Nombre de usuario en Platzi: string
- Edad: number
- Correo electrónico: string
- Mayor de edad: boolean
- Dinero ahorrado: number 
- Deudas: number
*/

//Traduce a código JavaScript las variables del ejemplo anterior
/*
 let nombre="Azucena";
 let apellido="Calderon";
 let usuario= "AzucenaCR";
 let edad=26;
 let correo="azucenaleo96@gmail.com";
 let mayorDeEdad= true;
 let dineroAhorrado = 1050; 
 let deudas=700;
*/

//Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:

/*- Nombre completo (nombre y apellido)
- Dinero real (dinero ahorrado menos deudas)*/

/*let nombreApellido = nombre + " " + apellido;
let dineroReal = dineroAhorrado - deudas;*/

// -----FUNCIONES

//Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:

/*
const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name + lastname;
const nickname = "juandc";
*/

/* //forma1
function mePresento(nombre,apellidos,nickname){
    console.log ("Mi nombre es "+ nombre + " " + apellidos + ", " 
    + "pero prefiero que me digan " + nickname + ".");
}
*/

/* //forma2
function mePresento2(nombre,apellidos,nickname){
    return "Mi nombre es "+ nombre + " " + apellidos + ", " 
    + "pero prefiero que me digan " + nickname + ".";
}
*/

// -----CONDICIONALES
/*
Crear una funcion donde se usen condicionales, para especificar tres tipos
de suscripciones:
*FREE : Solo puedes tomar los cursos gratis
*BASIC: Puedes tomar casi todos los cursos de Platzi durante un mes
*EXPERT: Puedes tomar casi todos los cursos de Platzi durante un año
*EXPERTPLUS: Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año
*/
/*
let tipoSuscripcion = "FREE";

function suscripcion(tipoSuscripcion){
    if (tipoSuscripcion == "FREE"){
        return "Solo puedes tomar los cursos gratis";
    }
    else if (tipoSuscripcion == "BASIC"){
        return "Puedes tomar casi todos los cursos de Platzi durante un mes";
    }
    else if (tipoSuscripcion == "EXPERT"){
        return "Puedes tomar todos los cursos de Platzi durante un año";
    }
    else if (tipoSuscripcion == "EXPERTPLUS"){
        return "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año";
    }
    else{
        return "No es un tipo de suscripcion valida.";
    }
}
*/

//Del ejercicio anterior replicar pero esta vez solo con IF no else if o else

/*
let tipoSuscripcion = "FREE";

function suscripcion2(tipoSuscripcion){
    if (tipoSuscripcion == "FREE"){
        console.log("Solo puedes tomar los cursos gratis");
        return;
    }
    
    if (tipoSuscripcion == "BASIC"){
        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
        return;
    }

    if (tipoSuscripcion == "EXPERT"){
        console.log("Puedes tomar todos los cursos de Platzi durante un año");
        return;
    }

    if (tipoSuscripcion == "EXPERTPLUS"){
        console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
        return;
    }
}
*/

//Replicar este comportamiento con arrays y un solo condicional. 

//-*ARRAYS
/*
var suscripcion_array = ["FREE: Solo puedes tomar los cursos gratis",
"BASIC: Puedes tomar casi todos los cursos de Platzi durante un mes",
"EXPERT: Puedes tomar todos los cursos de Platzi durante un mes",
"EXPERTPLUS: Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"];

//Con la posicion del array es decir el parametro es numerico
function tipoSuscripcion3(suscripcion){
    let i = suscripcion;
    if (suscripcion_array[i]){
        console.log(suscripcion_array[i]);
        return;
    }
}
*/

//Con la posicion del array es decir el parametro es string
/*
function tipoSuscripcion4(suscripcion){
    let i=0;
    switch (suscripcion) {
        case "FREE":
            i=0;
            break;
        case "BASIC":
            i=1;
            break;
        case "EXPERT":
            i=2;
            break;
        case "EXPERTPLUS":
            i=3;
            break;
     }

    if (suscripcion_array[i]){
        console.log(suscripcion_array[i]);
        return;
    }
}
*/

//-*OBJETOS
/*
const tiposDeSuscripciones = {
    free: 'Solo puedes tomar los cursos gratis',
    basic: 'Puedes tomar casi todos los cursos de Platzi durante un mes',
    expert: 'Puedes tomar casi todos los cursos de Platzi durante un año',
    expertduo: 'Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año',
};

function conseguirTipoSuscripcion(suscripcion) {
    if (tiposDeSuscripciones[suscripcion]) {
        console.log(tiposDeSuscripciones[suscripcion]);
        return;
    }

    console.warn('Ese tipo de suscripción no existe')
}
*/

// -----CICLOS
//Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:

/*
//1
for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

//while
var i=0;
while(i < 5){
    console.log("El valor de i es: " + i);
    i++;
}
//do-while
var i=0;
do{
    console.log("El valor de i es: " + i);
    i++;
}while(i < 5)

//2
for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}

//while
var i=10;
while(i >= 2){
    console.log("El valor de i es: " + i);
    i--;
}
//do-while
var i=10;
do{
    console.log("El valor de i es: " + i);
    i--;
}while(i >= 2)
*/


//Escribe un código en JavaScript que le pregunte a los usuarios cuánto 
//es `2 + 2`. Si responden bien, mostramos un mensaje de felicitaciones, 
//pero si responden mal, volvemos a empezar.

/*
while (resultado!='4'){
    let pregunta = prompt('¿Cuánto es 2 + 2?')
    respuesta = pregunta;
}
*/


// -----LISTAS
/*
var gatitos=["oli","acker","loki","terri","azazel","ailee","chiqui"];

//Crea una función que pueda recibir cualquier array como parámetro e 
//imprima su primer elemento.
 function primerParametro(array){
    return array[0];
 }

//Crea una función que pueda recibir cualquier array como parámetro e 
//imprima todos sus elementos uno por uno (no se vale imprimir el 
//array completo).
function elementosUnoPorUno(array){
    for (let i=0; i<array.length; i++){
        console.log(array[i]);
    }
}


let mascotas = {
    gatos: ["oli","terri"],
    conejos: ["sora","aqua"],
    perros: ["hades","tolin"],
    masMascotas: true,
    totalMascotas:6
};
//Crea una función que pueda recibir cualquier objeto como parámetro e
//imprima todos sus elementos uno por uno (no se vale imprimir el objeto
// completo).
function elementosUnoPorUnoObj(obj){
    for (let i=0; i<Object.values(obj).length; i++){
        console.log(Object.values(obj)[i]);
    }
}

*/





