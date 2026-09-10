/* 
  =======================================================
  🚀 CLASE 05: ASINCRONISMO, HTTP Y FETCH (7° 5ta)
  =======================================================
  Completen los ejercicios en este archivo.
  Abran la consola del navegador (F12) para ver los resultados.
*/

// =======================================================
// 🟢 BLOQUE 1: Desmontando el Flujo en Consola
// =======================================================

// Ejercicio 1: El Misterio de la Promesa Pendiente
function probarFetchSinAwait() {
  // TODO: Hacé un fetch() directo a 'https://jsonplaceholder.typicode.com/todos/1' e imprimí el resultado sin await.
}
probarFetchSinAwait();


// Ejercicio 2: Inspeccionando el Sobre HTTP (Response)
async function inspeccionarSobreHTTP() {
  // TODO: Usá el primer await fetch(), e imprimí el objeto response, response.status y response.ok.
}
inspeccionarSobreHTTP();


// Ejercicio 3: Desempaquetando los Datos con .json()
async function extraerDatosJSON() {
  // TODO: Usá el segundo await response.json() e imprimí únicamente la propiedad data.title.
}
extraerDatosJSON();


// =======================================================
// 🟡 BLOQUE 2: Consumiendo APIs Reales y Mostrando en el DOM
// =======================================================

// Ejercicio 4: Mi Primer Renderizado Dinámico
const btnCargar = document.getElementById('btnCargar');
const tituloTarea = document.getElementById('tituloTarea');

btnCargar.addEventListener('click', async () => {
  // TODO: Cargar la tarea /todos/1 y mostrar su título dentro de tituloTarea.textContent
});


// Ejercicio 5: Recorriendo un Array de Usuarios
const listaUsuarios = document.getElementById('listaUsuarios');

async function cargarUsuarios() {
  // TODO: Cargar /users, recorrer el array con .forEach() e inyectar <li> en listaUsuarios.
}
cargarUsuarios();


// Ejercicio 6: Control de Errores con response.ok
const mensajeError = document.getElementById('mensajeError');

async function probarEndpointInvalido() {
  // TODO: Consultar una URL rota dentro de un try/catch, verificar if(!response.ok) y mostrar error en el DOM.
}
probarEndpointInvalido();


// =======================================================
// 🔵 BLOQUE 3: Recursos Locales y Parámetros
// =======================================================

// Ejercicio 7: Consumiendo un recurso JSON local
async function cargarRecursoLocal() {
  // TODO: Hacer fetch('./productos.json'), convertir a .json() e imprimir la lista en consola.
}
cargarRecursoLocal();


// Ejercicio 8: Búsqueda dinámica con parámetros (Profundización)
const inputBuscar = document.getElementById('inputBuscar');
const btnBuscar = document.getElementById('btnBuscar');

btnBuscar.addEventListener('click', async () => {
  // TODO: Leer inputBuscar.value, hacer fetch a 'https://dummyjson.com/products/search?q=TEXTO' e imprimir resultados.
});


// =======================================================
// 🔴 BLOQUE 4: Desafíos Integradores
// =======================================================

// Ejercicio 9: Catálogo de Productos con Estado de Carga
const btnCatalogo = document.getElementById('btnCatalogo');
const catalogo = document.getElementById('catalogo');

btnCatalogo.addEventListener('click', async () => {
  // TODO: 1. Poner catalogo.innerHTML = "⏳ Cargando productos del servidor..."
  // TODO: 2. Hacer fetch a 'https://dummyjson.com/products'
  // TODO: 3. Reemplazar el contenedor con cards simples (imagen, título, precio) por cada producto.
});


// Ejercicio 10: La Explicación del Modelo Mental (Cierre)
/*
  TODO: Escribí en tus propias palabras qué ocurre en cada etapa del flujo:
  
  Botón -> Evento click -> fetch() -> Promise -> HTTP Request -> API/Endpoint -> 
  HTTP Response -> Response -> response.json() -> Promise -> Objeto/Array JS -> 
  Procesamiento JS -> DOM -> Pantalla
*/
