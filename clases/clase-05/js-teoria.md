# Guía de Teoría JS: Modelo Mental del Asincronismo, HTTP y Fetch
**Materia:** Desarrollo de Software para Plataformas Móviles  
**Clase 05:** Del Navegador a la API Remota y al DOM (Profundización)  
**Profesor:** Axel Castellano Gutiérrez  

Esta guía docente consolida los conceptos fundamentales del asincronismo en JavaScript y el flujo completo de peticiones HTTP, diseñada específicamente para construir un **modelo mental sólido** en estudiantes de nivel secundario técnico (7° Año - E.E.S.T N° 5).

```
 ┌─────────────────────────────────────────────────────────────────────────────────────────┐
 │                            MODELO MENTAL DEL FLUJO WEB                                  │
 │                                                                                         │
 │  ┌──────────────┐         HTTP Request         ┌──────────────┐                         │
 │  │  Frontend JS │ ───────────────────────────► │  Backend/API │                         │
 │  │   (Navegador)│ ◄─────────────────────────── │  (Servidor)  │                         │
 │  └──────┬───────┘         HTTP Response        └──────────────┘                         │
 │         │                                                                               │
 │         ▼                                                                               │
 │  ┌──────────────┐      await response.json()   ┌──────────────┐    Inyección en DOM     │
 │  │   Response   │ ───────────────────────────► │ Objetos/Array│ ──────────────────► DOM │
 │  │ (Sobre HTTP) │                              │  JavaScript  │                         │
 │  └──────────────┘                              └──────────────┘                         │
 └─────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 📑 Índice de Contenidos

* [1. El Rol del Frontend en la Web (Frontend $\neq$ Fetch)](#1-el-rol-del-frontend-en-la-web-frontend--fetch)
* [2. Páginas Web vs. Endpoints de API](#2-páginas-web-vs-endpoints-de-api)
* [3. El Protocolo HTTP en el Medio: El Viaje de la Petición](#3-el-protocolo-http-en-el-medio-el-viaje-de-la-petición)
* [4. Entendiendo la Promesa (`Promise`) antes del `await`](#4-entendiendo-la-promesa-promise-antes-del-await)
* [5. Desmontando los Dos `await` con Precisión Técnica](#5-desmontando-los-dos-await-con-precisión-técnica)
* [6. El Objeto `Response`: La Respuesta HTTP (No son los datos todavía)](#6-el-objeto-response-la-respuesta-http-no-son-los-datos-todavía)
* [7. JSON: Formato de Intercambio de Datos Estructurados](#7-json-formato-de-intercambio-de-datos-estructurados)
* [8. De la API al DOM: El Recorrido Completo](#8-de-la-api-al-dom-el-recorrido-completo)
* [9. Conexión con el Backend (El Flujo Real Completo)](#9-conexión-con-el-backend-el-flujo-real-completo)
* [10. Control de Errores: Errores de Red vs. Respuestas HTTP de Error](#10-control-de-errores-errores-de-red-vs-respuestas-http-de-error)
* [11. Catálogo de Errores Típicos de Alumnos y Cómo Explicarlos](#11-catálogo-de-errores-típicos-de-alumnos-y-cómo-explicarlos)
* [12. Preguntas de Comprobación Oral para la Clase](#12-preguntas-de-comprobación-oral-para-la-clase)
* [13. Conexión con el Proyecto Integrador y Próxima Clase](#13-conexión-con-el-proyecto-integrador-y-próxima-clase)

---

## 1. El Rol del Frontend en la Web (Frontend $\neq$ Fetch)

Es fundamental que los alumnos comprendan que el **JavaScript del Frontend** abarca toda la lógica interactiva que corre en el navegador del usuario:
* Escuchar y responder a eventos (clicks, teclas, formularios).
* Validar datos antes de enviarlos.
* Modificar el árbol del DOM para actualizar la pantalla dinámicamente.
* Gestionar la lógica y el estado de la aplicación.

**`fetch()` es solo una de las capacidades del Frontend:** la herramienta nativa que permite comunicarse con un servidor o API externa sin necesidad de recargar la página completa.

---

## 2. Páginas Web vs. Endpoints de API

Para construir aplicaciones web o móviles, debemos distinguir dos tipos de URLs a las que hace peticiones nuestro navegador:

| Característica | URL de Página / Pantalla | URL de Endpoint de API |
| :--- | :--- | :--- |
| **Ejemplo** | `http://localhost:3000/pantalones.html` | `http://localhost:3000/api/productos` |
| **¿Qué entrega?** | Documento visual en HTML (con sus estilos CSS) | Datos puros en formato JSON estructurado |
| **Propósito** | Cargar la estructura visual de la interfaz | Proveer o recibir información dinámica |
| **Quién lo solicita** | El navegador directamente al escribir en la barra | El código JavaScript a través de `fetch()` |

> 💡 **Idea clave:** `pantalones.html` nos da el local comercial listo para visitar (las paredes y estantes). `/api/productos` nos da el listado del inventario de productos sin formato visual.

---

## 3. El Protocolo HTTP en el Medio: El Viaje de la Petición

Toda la comunicación entre cliente y servidor ocurre mediante el protocolo **HTTP** (*Hypertext Transfer Protocol*). Ningún dato aparece en pantalla de la nada; siempre hay un viaje de ida y vuelta:

$$\text{USUARIO} \rightarrow \text{Evento JS} \rightarrow \text{fetch()} \rightarrow \mathbf{\text{HTTP REQUEST}} \rightarrow \text{API / Endpoint} \rightarrow \text{Backend} \rightarrow \mathbf{\text{HTTP RESPONSE}} \rightarrow \text{fetch()} \rightarrow \text{Response} \rightarrow \text{.json()} \rightarrow \text{Objetos JS} \rightarrow \text{DOM} \rightarrow \text{PANTALLA}$$

* **HTTP Request (Petición):** `fetch()` empaca la solicitud con la URL destino y las cabeceras, y la envía por la red hacia el backend.
* **HTTP Response (Respuesta):** El servidor procesa la petición y responde enviando un sobre HTTP con el código de estado (`200 OK`, `404 Not Found`) y los datos en el cuerpo.

---

## 4. Entendiendo la Promesa (`Promise`) antes del `await`

Antes de incorporar `await`, mostramos lo que ocurre en memoria al ejecutar `fetch()` directamente:

```javascript
function probarSinAwait() {
  const resultado = fetch('https://jsonplaceholder.typicode.com/todos/1');
  console.log("Resultado directo:", resultado);
}

probarSinAwait();
```

### ¿Qué devuelve `fetch()`?
Devuelve un objeto de tipo `Promise { <pending> }` (Promesa Pendiente).

### ¿Qué es una `Promise`?
Es un objeto especial de JavaScript que representa un **valor que estará disponible en el futuro** cuando la tarea asíncrona de red finalice.
* **Estado Pendiente (`pending`):** La petición HTTP está viajando por el cable. Aún no tenemos el resultado.
* **Estado Resuelto (`fulfilled`):** La comunicación finalizó con éxito y nos entrega un objeto `Response`.
* **Estado Rechazado (`rejected`):** Ocurrió un fallo físico de red (sin conexión a Internet o servidor inalcanzable).

> 💡 **El rol de `await`:** `await` no hace desaparecer la `Promise`. Simplemente le ordena a JavaScript que contenga la ejecución de la función asíncrona hasta que la promesa deje de estar pendiente y nos entregue su resultado final.

---

## 5. Desmontando los Dos `await` con Precisión Técnica

En una consulta de datos completa escribimos dos veces `await` porque existen **dos promesas consecutivas**:

```javascript
// Paso 1: Esperar la promesa devuelta por fetch()
const response = await fetch('https://api.ejemplo.com/productos');

// Paso 2: Esperar la promesa devuelta por .json()
const data = await response.json();
```

### Explicación de cada `await`:
1. **Primer `await` (`fetch`):**  
   `fetch(url)` devuelve una `Promise` que, al resolverse, nos entrega un objeto **`Response`** (la respuesta HTTP del servidor con su código de estado y encabezados).
2. **Segundo `await` (`response.json()`):**  
   `response.json()` lee el cuerpo de la respuesta y lo procesa. Como esta operación es asíncrona, **devuelve una `Promise`**, la cual al resolverse nos entrega los **datos finales convertidos a objetos o arrays nativos de JavaScript**.

---

## 6. El Objeto `Response`: La Respuesta HTTP (No son los datos todavía)

Es un error común pensar que `const response = await fetch(url)` guarda directamente el array de productos. **`response` todavía NO son los productos**: es el objeto que representa la respuesta HTTP del servidor:

```javascript
const response = await fetch('https://jsonplaceholder.typicode.com/users');

console.log("¿Respuesta HTTP exitosa?:", response.ok); // true / false
console.log("Código de estado HTTP:", response.status);  // 200, 404, 500, etc.
console.log("Encabezados HTTP:", response.headers);     // Metadata del servidor
```

`response` contiene información de control (`status`, `ok`, `headers`) y el cuerpo en flujo de datos. Para extraer los datos útiles del cuerpo, ejecutamos `const data = await response.json()`.

---

## 7. JSON: Formato de Intercambio de Datos Estructurados

**JSON** (*JavaScript Object Notation*) no debe reducirse simplemente a "un string": es el **formato estándar universal para representar e intercambiar datos estructurados** entre sistemas independientes (por ejemplo, entre un Backend en Node.js/Express y un Frontend en JavaScript).

* **En la red (HTTP):** La información viaja representada como datos estructurados en formato JSON.
* **En el código JS:** Al usar `await response.json()`, ese formato estructurado se transforma en objetos (`{}`) y arrays (`[]`) de JS para ser procesados por nuestro código.

---

## 8. De la API al DOM: El Recorrido Completo

El ciclo completo de transformación de datos hasta la pantalla se resume en la siguiente cadena:

$$\text{Datos en la API} \rightarrow \text{Response HTTP} \rightarrow \text{await response.json()} \rightarrow \text{Objetos/Arrays JS} \rightarrow \text{Procesamiento JS} \rightarrow \text{Modificación del DOM} \rightarrow \text{Pantalla}$$

```javascript
const contenedor = document.getElementById('contenedor-productos');

async function cargarCatalogo() {
  // 1. Petición HTTP a la API
  const response = await fetch('https://dummyjson.com/products');
  
  // 2. Extracción y conversión a objetos JS
  const datos = await response.json(); 
  const productos = datos.products;   // Array de objetos de JS
  
  // 3. Procesamiento y renderizado en el DOM
  contenedor.innerHTML = "";
  productos.forEach(producto => {
    const card = document.createElement('article');
    card.classList.add('card-producto');
    card.innerHTML = `
      <img src="${producto.thumbnail}" alt="${producto.title}">
      <h3>${producto.title}</h3>
      <p>Precio: $${producto.price}</p>
    `;
    contenedor.appendChild(card);
  });
}
```

---

## 9. Conexión con el Backend (El Flujo Real Completo)

Para conectar con el proyecto real sin entrar en detalles profundos del servidor, mostramos el recorrido completo:

```
[FRONTEND]                   [HTTP]                      [BACKEND / EXPRESS]
fetch('/api/productos')  ─── Request ───►  Ruta: app.get('/api/productos')
                                                  │
                                                  ▼
                                           Controller / Model / BD
                                                  │ (Consulta BD)
                                                  ▼
res.json(productos)      ◄── Response ───  HTTP Response (JSON)
       │
       ▼
await response.json()
       │
       ▼
Objetos / Arrays JS  ───►  Procesamiento  ───►  DOM  ───► [PANTALLA DEL USUARIO]
```

---

## 10. Control de Errores: Errores de Red vs. Respuestas HTTP de Error

### La Distinción Fundamental:
1. **Error de Red / Comunicación:** Ocurre cuando el usuario se queda sin Internet, el servidor está apagado o falla el DNS. En este caso, la promesa de `fetch()` se **rechaza** y el flujo cae directamente en el bloque `catch`.
2. **Respuesta HTTP con estado de error (404 / 500):** Ocurre cuando la red funciona, el servidor responde, pero indica que el recurso no existe (`404`) o falló internamente (`500`). En este caso, `fetch()` **SÍ resuelve su promesa exitosamente**, entregando un objeto `Response` donde `response.ok` es `false`.

### Código de Validación Seguro:
```javascript
async function cargarDatosSeguro() {
  try {
    const response = await fetch('https://api.ejemplo.com/productos');
    
    // Validar si la respuesta HTTP indica error (404, 500)
    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }
    
    const datos = await response.json();
    console.log("Datos cargados correctamente:", datos);
  } catch (error) {
    // Entra por falla de red O por la excepción lanzada manualmente arriba
    console.error("No se pudo completar la carga:", error.message);
  }
}
```

---

## 11. Catálogo de Errores Típicos de Alumnos y Cómo Explicarlos

### Error 1: "Pensar que `fetch()` devuelve directamente los datos"
* **Explicación docente:** *"Internet toma tiempo. `fetch()` sin `await` te da un ticket de reclamo (Promesa), no los datos entregados."*

### Error 2: "Pensar que `await` frena toda la computadora"
* **Explicación docente:** *"`await` solo le pide a esta función asíncrona particular que espere. El resto del navegador sigue funcionando y respondiendo al usuario normalmente."*

### Error 3: "Confundir la URL de una página con la de un endpoint"
* **Explicación docente:** *"`pantalones.html` es el plano visual del local. El endpoint `/api/productos` es la lista de inventario."*

### Error 4: "Olvidar el segundo `await` en `response.json()`"
* **Explicación docente:** *"Procesar el cuerpo de la respuesta y convertirlo a objetos JS es una operación asíncrona. `.json()` devuelve su propia promesa y necesita su propio `await`."*

### Error 5: "Pensar que `fetch()` entra a `catch` en un error 404"
* **Explicación docente:** *"Un error 404 es una respuesta del servidor que llegó con éxito. La carta llegó y dice 'no encontrado'. Por eso debemos verificar `response.ok`."*

---

## 12. Preguntas de Comprobación Oral para la Clase

El docente puede usar estas preguntas durante la clase para verificar el modelo mental de los alumnos:

1. **¿Qué hace `fetch()`?** *(Realiza una petición HTTP asíncrona desde el JavaScript del frontend hacia una URL).*
2. **¿Quién ejecuta `fetch()`?** *(El motor de JavaScript del navegador en el Frontend).*
3. **¿Qué relación hay entre `fetch()` y HTTP?** *(`fetch()` es la función JS que envía el HTTP Request y recibe el HTTP Response).*
4. **¿Qué diferencia hay entre una página (`/pantalones.html`) y un endpoint (`/api/productos`)?** *(La página devuelve la vista visual en HTML; el endpoint devuelve datos puros estructurados en JSON).*
5. **¿Qué devuelve `fetch()` al ejecutarse?** *(Una Promesa (`Promise`) pendiente de resolución).*
6. **¿Qué es una `Promise`?** *(Un objeto JS que representa un valor que estará disponible en el futuro cuando termine la tarea asíncrona).*
7. **¿Por qué hay dos `await`?** *(El primero espera la `Promise` de `fetch` que da el `Response`; el segundo espera la `Promise` de `response.json()` que da los objetos/arrays JS).*
8. **¿Qué es `response`?** *(Es el objeto de JavaScript que representa la respuesta HTTP completa devuelta por el servidor).*
9. **¿Por qué `response` todavía no es el array de productos?** *(Porque contiene los metadatos HTTP como `status` y `ok`, mientras que los datos útiles están en el cuerpo sin procesar).*
10. **¿Qué hace `response.json()`?** *(Lee el cuerpo de la respuesta de forma asíncrona y devuelve una `Promise` que resuelve a objetos/arrays de JS).*
11. **¿Cómo termina la información de la API apareciendo en el DOM?** *(Se extraen los datos JS con `await response.json()`, se recorre el array con JS y se crean nodos HTML que se insertan en el DOM).*
12. **¿Qué diferencia hay entre un error de red y un HTTP 404?** *(Un error de red no recibe respuesta y rechaza la promesa cayendo en `catch`; un 404 recibe respuesta con `response.ok = false`).*

---

## 13. Conexión con el Proyecto Integrador y Próxima Clase

En las clases anteriores aprendimos a construir la interfaz y manipular los componentes dinámicos de nuestra aplicación **TechStore Móvil**. En la clase de hoy comprendimos el modelo mental del viaje de los datos desde un servidor remoto HTTP hasta nuestro DOM.

En la **Clase 06 (Bloque 4)**, conectaremos este flujo con la memoria persistente del navegador cliente (`localStorage`) para guardar favoritos sin depender de peticiones repetidas, y organizaremos el proyecto modularizando el código mediante **Módulos ES** (`import`/`export`).
