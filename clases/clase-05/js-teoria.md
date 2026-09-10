# Guía de Teoría JS: Modelo Mental del Asincronismo, HTTP y Fetch
**Materia:** Desarrollo de Software para Plataformas Móviles  
**Clase 05:** Del Navegador a la API Remota y al DOM (Profundización)  
**Profesor:** Axel Castellano Gutiérrez  

Esta guía consolida los conceptos fundamentales del asincronismo en JavaScript y el flujo completo de peticiones HTTP, diseñada específicamente para construir un **modelo mental sólido** en estudiantes de nivel secundario técnico (7° Año - E.E.S.T N° 5).

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
  * [2.1 ¿Qué es realmente una API y cómo se construye?](#21-qué-es-realmente-una-api-y-cómo-se-construye)
* [3. El Protocolo HTTP en el Medio: El Viaje de la Petición](#3-el-protocolo-http-en-el-medio-el-viaje-de-la-petición)
* [4. Entendiendo la Promesa (`Promise`) antes del `await`](#4-entendiendo-la-promesa-promise-antes-del-await)
* [5. Desmontando los Dos `await` con Precisión Técnica](#5-desmontando-los-dos-await-con-precisión-técnica)
* [6. El Objeto `Response`: La Respuesta HTTP (No son los datos todavía)](#6-el-objeto-response-la-respuesta-http-no-son-los-datos-todavía)
* [7. JSON: Formato de Intercambio de Datos Estructurados](#7-json-formato-de-intercambio-de-datos-estructurados)
* [8. De la API al DOM: El Recorrido Completo](#8-de-la-api-al-dom-el-recorrido-completo)
* [9. Conexión con el Backend (El Flujo Real Completo)](#9-conexión-con-el-backend-el-flujo-real-completo)
* [10. Control de Errores: Errores de Red vs. Respuestas HTTP de Error](#10-control-de-errores-errores-de-red-vs-respuestas-http-de-error)
* [11. Mitos Frecuentes y Errores Comunes sobre Fetch](#11-mitos-frecuentes-y-errores-comunes-sobre-fetch)
* [12. Preguntas de Auto-evaluación y Repaso](#12-preguntas-de-auto-evaluación-y-repaso)
* [13. Conexión con el Proyecto Integrador y Próxima Clase](#13-conexión-con-el-proyecto-integrador-y-próxima-clase)

---

## 1. El Rol del Frontend en la Web (Frontend $\neq$ Fetch)

Es fundamental comprender que el **JavaScript del Frontend** abarca toda la lógica interactiva que corre en el navegador del usuario:
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

### 2.1 ¿Qué es realmente una API y cómo se construye?

* **¿Qué significa API?:** *Application Programming Interface* (Interfaz de Programación de Aplicaciones).
* **En la práctica:** Una API es la **ventanilla de atención digital** que habilita un servidor para que otros programas (como nuestro JavaScript en el navegador) puedan pedirle información estructurada o enviarle datos.

#### La analogía de la Ventanilla de Atención:
Si vas a un banco o a una oficina pública, no entrás a los archivos privados a buscar tu carpeta: te acercás a la **ventanilla** (la API), hacés tu solicitud y el empleado (Backend) busca en el sistema (Base de Datos) y te entrega el sobre con tu documento (Respuesta JSON).

#### ¿Cómo se construye un Endpoint de una API en el Backend?
En el servidor (usando Node.js / Express por ejemplo), una API se crea definiendo **rutas** (*endpoints*) que escuchan peticiones HTTP y responden con datos en formato JSON:

```javascript
// Código del Servidor Backend (ej. Express en Node.js)
app.get('/api/productos', (req, res) => {
  const listaProductos = [
    { id: 1, nombre: "Teclado Mecánico", precio: 45000 },
    { id: 2, nombre: "Mouse Gamer", precio: 25000 }
  ];
  
  // El servidor responde enviando los datos estructurados en formato JSON
  res.json(listaProductos);
});
```

Cuando en nuestro JavaScript del Frontend ejecutamos `await fetch('/api/productos')`, estamos realizando una petición HTTP que golpea exactamente esa ruta del servidor para recibir ese array de productos.

---

## 3. El Protocolo HTTP en el Medio: El Viaje de la Petición

Toda la comunicación entre cliente y servidor ocurre mediante el protocolo **HTTP** (*Hypertext Transfer Protocol*). Ningún dato aparece en pantalla de la nada; siempre hay un viaje de ida y vuelta:

$$\text{USUARIO} \rightarrow \text{Evento JS} \rightarrow \text{fetch()} \rightarrow \mathbf{\text{HTTP REQUEST}} \rightarrow \text{API / Endpoint} \rightarrow \text{Backend} \rightarrow \mathbf{\text{HTTP RESPONSE}} \rightarrow \text{fetch()} \rightarrow \text{Response} \rightarrow \text{.json()} \rightarrow \text{Objetos JS} \rightarrow \text{DOM} \rightarrow \text{PANTALLA}$$

* **HTTP Request (Petición):** `fetch()` empaca la solicitud con la URL destino y las cabeceras, y la envía por la red hacia el backend.
* **HTTP Response (Respuesta):** El servidor procesa la petición y responde enviando un sobre HTTP con el código de estado (`200 OK`, `404 Not Found`) y los datos en el cuerpo.

---

## 4. Entendiendo la Promesa (`Promise`) antes del `await`

Antes de incorporar `await`, observá lo que ocurre en memoria al ejecutar `fetch()` directamente:

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

Para comprender cómo encaja esto en un proyecto real completo, observá la ruta de datos de extremo a extremo:

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
1. **Error de Red / Comunicación:** Ocurre cuando se pierde conexión a Internet, el servidor está apagado o falla el DNS. En este caso, la promesa de `fetch()` se **rechaza** y el flujo cae directamente en el bloque `catch`.
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

## 11. Mitos Frecuentes y Errores Comunes sobre Fetch

### Mito 1: "Pensar que `fetch()` devuelve directamente los datos"
* **La realidad:** Internet toma tiempo. `fetch()` sin `await` te devuelve un ticket de reclamo (Promesa), no los datos entregados.

### Mito 2: "Pensar que `await` frena toda la computadora"
* **La realidad:** `await` solo le pide a esa función asíncrona en particular que espere. El resto del navegador sigue funcionando y respondiendo al usuario normalmente.

### Mito 3: "Confundir la URL de una página con la de un endpoint"
* **La realidad:** `pantalones.html` es el plano visual del local. El endpoint `/api/productos` es la lista de inventario.

### Mito 4: "Olvidar el segundo `await` en `response.json()`"
* **La realidad:** Procesar el cuerpo de la respuesta y convertirlo a objetos JS es una operación asíncrona. `.json()` devuelve su propia promesa y necesita su propio `await`.

### Mito 5: "Pensar que `fetch()` entra a `catch` en un error 404"
* **La realidad:** Un error 404 es una respuesta del servidor que llegó con éxito. La carta llegó y dice 'no encontrado'. Por eso debemos verificar siempre `response.ok`.

---

## 12. Preguntas de Auto-evaluación y Repaso

Usá estas preguntas para comprobar si tenés claro el modelo mental antes de resolver los ejercicios:

1. ¿Qué hace la función `fetch()` y quién la ejecuta?
2. ¿Qué relación hay entre `fetch()` y el protocolo HTTP?
3. ¿Qué diferencia hay entre la URL de una página (`/pantalones.html`) y la de un endpoint (`/api/productos`)?
4. ¿Qué es una API y cómo responde un servidor a una solicitud de la API?
5. ¿Qué devuelve `fetch()` al ejecutarse sin `await`?
6. ¿Qué es una `Promise` y cuáles son sus estados?
7. ¿Por qué se escriben dos palabras clave `await` en una petición típica?
8. ¿Qué es la variable `response` y por qué aún no contiene el array de productos?
9. ¿Qué hace `response.json()` y qué tipo de objeto devuelve?
10. ¿Cómo se transforman los datos recibidos de la API hasta mostrarse en la pantalla?
11. ¿Qué diferencia existe entre un error de red y una respuesta HTTP 404?

---

## 13. Conexión con el Proyecto Integrador y Próxima Clase

En las clases anteriores aprendimos a construir la interfaz y manipular los componentes dinámicos de nuestra aplicación **TechStore Móvil**. En la clase de hoy comprendimos el modelo mental del viaje de los datos desde un servidor remoto HTTP hasta nuestro DOM.

En la **Clase 06 (Bloque 4)**, conectaremos este flujo con la memoria persistente del navegador cliente (`localStorage`) para guardar favoritos sin depender de peticiones repetidas, y organizaremos el proyecto modularizando el código mediante **Módulos ES** (`import`/`export`).
