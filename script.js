/* seleccionamos los elementos en html con los que queremos trabajar */
const h1 = document.querySelector('h1'); /* etiqueta h1 */
const form = document.querySelector('#form'); /* etiqueta p */
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');


//al elemento agrega un escuchador de elementos  evento + nombre de la funcion
form.addEventListener('submit', sumarInputValues);

 //Escuchar eventos 
function sumarInputValues(event) {
    //obtenemos el valor del input
    console.log({event}); 
    event.preventDefault();
    
    const sumaInputs = input1.value  + input2.value;
    pResult.innerHTML = "Resultado: " + sumaInputs;

}
 