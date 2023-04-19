/* Si queremos seleccionar una etiqueta la declaramos */

const h1 = document.querySelector('h1'); /* etiqueta h1 */
const p = document.querySelector('p'); /* etiqueta p */
const parrafito = document.querySelector('.parrafito'); /* clase */
const pid = document.querySelector('#pid');
const input = document.querySelector('input');

console.log(input.value);
/* 11:04 */
/* pintar todos en un console.log */
console.log({
    h1,
    p,
    parrafito,
    pid,
    input 
});