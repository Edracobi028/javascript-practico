/* seleccionamos los elementos en html con los que queremos trabajar */
const h1 = document.querySelector('h1'); /* etiqueta h1 */
const p = document.querySelector('p'); /* etiqueta p */
const parrafito = document.getElementsByClassName('parrafito'); /* clase */
const pid = document.getElementById('pid');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

/* Escuchar eventos */
function btnOnClick() {
    /* obtenemos el valor del input */
    const sumaInputs = input1.value  + input2.value;
    pResult.innerHTML = "Resultado: " + sumaInputs;

}