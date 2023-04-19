/* Si queremos seleccionar una etiqueta la declaramos */

const h1 = document.querySelector('h1'); /* etiqueta h1 */
const p = document.querySelector('p'); /* etiqueta p */
const parrafito = document.getElementsByClassName('parrafito'); /* clase */
const pid = document.getElementById('pid');
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
/* Cambiar el contendido desde JS */
h1.innerHTML = 'World <br> heavyweigth Champion';  
h1.innerText = 'World <br> heavyweigth Champion';  

/* Consultar atributo */
//console.log(h1.getAttribute('class'));
/* editar atributo */
//h1.setAttribute('class','rojo');

/* Agregar un atributo*/
h1.classList.add('rojo');
h1.classList.remove('verde');

/* Modificar un valor de manera mas directa */
input.value = "456";

/* #1 Crear un elemento desde cero */
const img = document.createElement('img');
/* #2 Agregar atributo */
img.setAttribute('src', 'https://images.hola.com/imagenes/mascotas/20201104178485/consejos-gatos-para-principiantes/0-884-859/gatito-m.jpg?tx=w_680' );
console.log(img);
/* borramos el contenido, no el elemento */
pid.innerHTML = "";

/* #3 insertar en un elemento existente */
pid.appendChild(img);



