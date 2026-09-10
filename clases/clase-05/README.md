# Clase 05: Asincronismo, HTTP y Fetch (Modelo Mental de la Web)
**Materia:** Desarrollo de Software para Plataformas Móviles  
**Curso:** 7° Año - División 5ta (E.E.S.T N° 5)  
**Profesor:** Axel Castellano Gutiérrez  

---

## 🎯 Objetivos de la Clase
En esta clase vas a construir el **modelo mental del flujo de datos en la web**: entenderás cómo tu código JavaScript en el navegador (Frontend) realiza peticiones HTTP a servidores remotos (APIs/Endpoints), cómo interpretar las respuestas y cómo renderizar esos datos en la pantalla (DOM).

---

## 📑 Recursos Teóricos
Antes de arrancar con los ejercicios, consultá el documento teórico de la clase:
* 📘 [Guía de Teoría JS: Asincronismo, HTTP y Fetch](./js-teoria.md)

---

## 🧪 Guía de Ejercicios Prácticos

### 🟢 BLOQUE 1: Desmontando el Flujo en Consola (Sin DOM)

#### Ejercicio 1: El Misterio de la Promesa Pendiente
* **Consigna:** Copiá el siguiente código en tu archivo `app.js`. Antes de ejecutarlo en el navegador, anotá en un papel qué creés que se va a mostrar en la consola. Luego ejecútalo e inspeccioná el resultado en F12.
```javascript
function probarFetchSinAwait() {
  const resultado = fetch('https://jsonplaceholder.typicode.com/todos/1');
  console.log("Resultado directo del fetch:", resultado);
}

probarFetchSinAwait();
```
* **Preguntas de reflexión:**
  1. ¿Qué palabra clave aparece impresa en la consola al lado de la palabra `Promise`?
  2. ¿Apareció el título del ítem pedido? ¿Por qué creés que sucede esto?

---

#### Ejercicio 2: Inspeccionando el Sobre HTTP (`Response`)
* **Consigna:** Modificá la función agregando `async` y `await`. Imprimí el objeto `response` en la consola e inspeccioná sus propiedades.
```javascript
async function inspeccionarSobreHTTP() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  
  console.log("Objeto Response completo:", response);
  console.log("Código de Estado HTTP (status):", response.status);
  console.log("¿La petición fue exitosa? (ok):", response.ok);
}

inspeccionarSobreHTTP();
```
* **Preguntas de reflexión:**
  1. ¿Ves el objeto con los datos dentro del `console.log(response)` o ves metadatos como `status` y `ok`?
  2. ¿Qué valor tiene `response.status` cuando la respuesta del servidor es correcta?

---

#### Ejercicio 3: Desempaquetando los Datos con `.json()`
* **Consigna:** Agregá la llamada `await response.json()` para extraer los datos e imprimí en consola únicamente la propiedad `title` del ítem recibido.
```javascript
async function extraerDatosJSON() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const data = await response.json();
  
  console.log("Objeto JS desempaquetado:", data);
  console.log("Título de la tarea:", data.title);
}

extraerDatosJSON();
```

---

### 🟡 BLOQUE 2: Consumiendo APIs Reales y Mostrando en el DOM

#### Ejercicio 4: Mi Primer Renderizado Dinámico
* **Consigna:** Dado el siguiente HTML, escribí una función asíncrona vinculada al evento `click` del botón para que al presionarlo cargue el título de la tarea dentro del `<h1>`.
```html
<button id="btnCargar">Cargar Tarea</button>
<h1 id="tituloTarea">Esperando carga...</h1>
```

---

#### Ejercicio 5: Recorriendo un Array de Usuarios
* **Consigna:** Hacé un `fetch()` al endpoint `https://jsonplaceholder.typicode.com/users`. Con el array recibido, usá `.forEach()` para agregar un `<li>` con el nombre y email de cada usuario dentro de `<ul id="listaUsuarios"></ul>`.

---

#### Ejercicio 6: Control de Errores con `response.ok`
* **Consigna:** Escribí una función que intente consultar la URL `https://jsonplaceholder.typicode.com/endpoint-invalido`. Verificá si `response.ok` es `false` y, de ser así, mostrá el mensaje de error *"Recurso no encontrado (HTTP 404)"* dentro de un párrafo `<p id="mensajeError">` en pantalla.

---

### 🔵 BLOQUE 3: Recursos Locales y Parámetros

#### Ejercicio 7: Consumiendo un recurso JSON local
* **Consigna:** 
1. Creá un archivo llamado `productos.json` en la misma carpeta de tu proyecto con el siguiente contenido:
```json
[
  { "id": 1, "nombre": "Teclado Mecánico", "precio": 45000 },
  { "id": 2, "nombre": "Mouse Gamer", "precio": 25000 },
  { "id": 3, "nombre": "Monitor 24 pulgadas", "precio": 120000 }
]
```
2. Escribí un `fetch('./productos.json')` en tu JavaScript, convertilo con `.json()` e imprimí la lista de productos en la consola.

---

#### Ejercicio 8: Búsqueda dinámica con parámetros — Profundización
* **Consigna:** Creá un campo de texto `<input type="text" id="inputBuscar">` y un botón. Al hacer clic, leé el texto ingresado y usalo para hacer un `fetch()` a la API de DummyJSON:  
`https://dummyjson.com/products/search?q=TEXTO_INGRESADO`  
Imprimí en consola el array de productos encontrados (`data.products`).

---

### 🔴 BLOQUE 4: Desafíos Integradores

#### Ejercicio 9: Catálogo de Productos con Estado de Carga (Flujo Completo)
* **Consigna:** 
1. Creá un botón `"Cargar Catálogo"` y un contenedor `<div id="catalogo"></div>`.
2. Al hacer clic en el botón, el contenedor debe mostrar inmediatamente el texto `"⏳ Cargando productos del servidor..."`.
3. Al finalizar la petición HTTP a `https://dummyjson.com/products`, reemplazá el texto de carga generando tarjetas sencillas mostrando únicamente: **título**, **precio** e **imagen** de cada producto.

---

#### Ejercicio 10: La Explicación del Modelo Mental (Cierre)
* **Consigna:** Al final de tu archivo JavaScript, escribí un comentario estructurado de varias líneas donde expliques **con tus propias palabras** qué representa cada una de las siguientes etapas y qué ocurre exactamente al pasar de una a otra:

```text
Botón
  ↓
Evento click
  ↓
fetch()
  ↓
Promise
  ↓
HTTP Request
  ↓
API / Endpoint
  ↓
HTTP Response
  ↓
Response
  ↓
response.json()
  ↓
Promise
  ↓
Objeto / Array de JavaScript
  ↓
Procesamiento JS
  ↓
DOM
  ↓
Pantalla
```
