# Guía de Teoría: JavaScript Moderno, DOM, Asincronismo y APIs
**Materia:** Desarrollo de Software para Plataformas Móviles  
**Clase 04:** De la Interfaz Local al Consumo de Servicios en Tiempo Real  
**Profesor:** Axel Castellano Gutiérrez  

Esta guía está organizada siguiendo una progresión pedagógica paso a paso: primero dominaremos la construcción e interacción con la pantalla (**El DOM y Eventos**), luego aprenderemos a manipular datos en memoria (**HOFs y ES6+**), continuaremos conectando la app con el mundo exterior (**HTTP, Asincronismo y Fetch**) y finalmente consolidaremos la **Persistencia y Modularidad**.

```
 ┌─────────────────────────────────────────────────────────────────────────────────────────┐
 │                                 MAPA DE LA CLASE 04                                     │
 │                                                                                         │
 │   [ 1. DOM Y EVENTOS ] ───► [ 2. HOFs Y ES6+ ] ───► [ 3. ASINCRONISMO Y FETCH ] ──────┐ │
 │   (Controlar pantalla)      (Transformar datos)     (Conectar con la nube)            │ │
 │                                                                                       │ │
 │                                                                                       ▼ │
 │                                                  [ 4. INTEGRACIÓN, STORAGE Y MÓDULOS ]  │
 │                                                  (App móvil fluida y persistente)       │
 └─────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 📑 Índice de Contenidos

* [1. Bloque 1: La Capa Visual (El DOM y Manejo de Eventos)](#1-bloque-1-la-capa-visual-el-dom-y-manejo-de-eventos)
  * [1.1 ¿Qué es el DOM (Document Object Model)?](#11-qué-es-el-dom-document-object-model)
  * [1.2 Selección de Elementos en el DOM](#12-selección-de-elementos-en-el-dom)
  * [1.3 Lectura y Modificación de Contenido y Atributos](#13-lectura-y-modificación-de-contenido-y-atributos)
  * [1.4 Control de Clases CSS con classList](#14-control-de-clases-css-con-classlist)
  * [1.5 Ciclo de Vida de los Nodos: Creación, Inserción y Eliminación](#15-ciclo-de-vida-de-los-nodos-creación-inserción-y-eliminación)
  * [1.6 Manejo de Eventos en Aplicaciones Móviles](#16-manejo-de-eventos-en-aplicaciones-móviles)
  * [1.7 Burbujeo (Event Bubbling) y Delegación de Eventos](#17-burbujeo-event-bubbling-y-delegación-de-eventos)
* [2. Bloque 2: Manipulación de Datos en Memoria (HOFs y ES6+)](#2-bloque-2-manipulación-de-datos-en-memoria-hofs-y-es6)
  * [2.1 Inmutabilidad vs Mutación](#21-inmutabilidad-vs-mutación)
  * [2.2 ¿Por qué se llaman "Funciones de Orden Superior" (HOFs)?](#22-por-qué-se-llaman-funciones-de-orden-superior-hofs)
  * [2.3 Los Métodos de Array Fundamentales con Ejemplos](#23-los-métodos-de-array-fundamentales-con-ejemplos)
  * [2.4 Sintaxis ES6+ de Estructuras](#24-sintaxis-es6-de-estructuras)
* [3. Bloque 3: Comunicación Externa y Asincronismo (HTTP, Event Loop y Fetch)](#3-bloque-3-comunicación-externa-y-asincronismo-http-event-loop-y-fetch)
  * [3.1 Fundamentos de Red: APIs, REST y Protocolo HTTP/S](#31-fundamentos-de-red-apis-rest-y-protocolo-https)
  * [3.2 El Modelo Monohilo (Single Thread) y el Event Loop](#32-el-modelo-monohilo-single-thread-y-el-event-loop)
  * [3.3 De Callbacks a Promesas](#33-de-callbacks-a-promesas)
  * [3.4 Sintaxis Moderna con async / await y try...catch](#34-sintaxis-moderna-con-async--await-y-trycatch)
  * [3.5 Consumo Seguro con fetch() API (Estándar MDN)](#35-consumo-seguro-con-fetch-api-estándar-mdn)
  * [3.6 Optimización Móvil: Promise.all() (Paralelismo)](#36-optimización-móvil-promiseall-paralelismo)
* [4. Bloque 4: Integración Total, Persistencia Local y Arquitectura Modular](#4-bloque-4-integración-total-persistencia-local-y-arquitectura-modular)
  * [4.1 Patrón de Renderizado con Estados de UI (Loading, Éxito, Error)](#41-patrón-de-renderizado-con-estados-de-ui-loading-éxito-error)
  * [4.2 Persistencia Local con localStorage y JSON](#42-persistencia-local-con-localstorage-y-json)
  * [4.3 Modularización con ES Modules (import / export)](#43-modularización-con-es-modules-import--export)
* [5. Bloque 5: Preguntas de Autoevaluación y Reflexión](#5-bloque-5-preguntas-de-autoevaluación-y-reflexión)

---

## 1. Bloque 1: La Capa Visual (El DOM y Manejo de Eventos)

### 1.1 ¿Qué es el DOM (Document Object Model)?
El **DOM** es la estructura en forma de **árbol de objetos** que el navegador web genera en la memoria RAM del celular a partir del código HTML.
* El archivo `.html` en el disco es solo texto plano estático.
* El navegador parsea ese texto y crea objetos interactivos en RAM (`HTMLDivElement`, `HTMLButtonElement`).
* **Rol de JavaScript:** JS no edita el archivo en disco; **modifica el DOM en la memoria RAM en tiempo real**, haciendo que la pantalla se actualice instantáneamente sin recargar la página.

```
                      ┌───────────────┐
                      │   document    │
                      └───────┬───────┘
                              │
                      ┌───────▼───────┐
                      │    <html>     │
                      └───────┬───────┘
                     ┌────────┴────────┐
                     ▼                 ▼
              ┌─────────────┐   ┌─────────────┐
              │   <head>    │   │   <body>    │
              └─────────────┘   └──────┬──────┘
                                ┌──────┴──────┐
                                ▼             ▼
                         ┌─────────────┐┌─────────────┐
                         │    <nav>    ││   <main>    │
                         └─────────────┘└─────────────┘
```

---

### 1.2 Selección de Elementos en el DOM
Para interactuar con la pantalla, primero debemos capturar los elementos con JS:

* **`document.querySelector('selectorCSS')`:** Devuelve el **primer elemento** coincidente (o `null`).
* **`document.querySelectorAll('selectorCSS')`:** Devuelve **todos** los coincidentes en una **NodeList**.

```javascript
// Selección individual:
const titulo = document.querySelector("#titulo-principal");
const primerBoton = document.querySelector(".btn-comprar");

// Selección múltiple (NodeList):
const todasLasTarjetas = document.querySelectorAll(".tarjeta-producto");
```

> [!CAUTION]
> ⚠️ **ERROR MUY COMÚN:** `querySelectorAll` devuelve una **colección**, no un elemento individual.
> Para modificar sus elementos, **debés recorrer la lista con `.forEach()`**:

```javascript
// ✅ CORRECTO:
const botones = document.querySelectorAll(".btn-comprar");
botones.forEach(boton => {
    boton.classList.add("activo");
});
```

---

### 1.3 Lectura y Modificación de Contenido y Atributos
* **`.textContent`:** Lee o escribe **únicamente texto plano**. Es seguro, rápido e inmune a ataques XSS.
* **`.innerHTML`:** Lee o escribe **código HTML estructurado**.
* **Atributos Directos:** `input.value`, `img.src`, `img.alt`, `a.href`.
* **Atributos Personalizados (`data-*`):** En móviles asociamos identificadores y metadatos con `data-*` y los leemos con `.dataset`.

```javascript
const mensaje = document.querySelector("#mensaje");
mensaje.textContent = "Bienvenido Axel"; // Texto plano seguro

const foto = document.querySelector("#avatar");
foto.src = "https://servidor.com/foto.jpg";

// HTML: <button class="btn" data-id="99" data-cat="audio">Ver</button>
const boton = document.querySelector(".btn");
console.log(boton.dataset.id);  // "99"
console.log(boton.dataset.cat); // "audio"
```

---

### 1.4 Control de Clases CSS con `classList`
La mejor práctica profesional es modificar clases CSS en lugar de escribir estilos en línea con `.style`:

```javascript
const caja = document.querySelector("#alerta");

caja.classList.add("visible");        // Agrega la clase
caja.classList.remove("oculto");      // Quita la clase
caja.classList.toggle("modo-oscuro"); // Alterna (pone/saca)
if (caja.classList.contains("visible")) {
    console.log("Alerta visible en pantalla");
}
```

---

### 1.5 Ciclo de Vida de los Nodos: Creación, Inserción y Eliminación
* **`document.createElement('etiqueta')`:** Crea el elemento en la RAM.
* **`padre.append(hijo)`:** Lo inserta dentro del contenedor padre en la pantalla.
* **`elemento.remove()`:** Lo elimina inmediatamente de la pantalla y de la memoria.

```javascript
// Crear e insertar:
const nuevoItem = document.createElement("li");
nuevoItem.classList.add("item-lista");
nuevoItem.textContent = "Batería 100%";

document.querySelector("#lista-estado").append(nuevoItem);

// Eliminar:
nuevoItem.remove();
```

---

### 1.6 Manejo de Eventos en Aplicaciones Móviles
Sintaxis: `elemento.addEventListener('evento', callback)`

#### 1. Evento `click` (Toque en pantalla):
```javascript
document.querySelector("#btn-recargar").addEventListener("click", () => {
    console.log("Pantalla recargada");
});
```

#### 2. Evento `submit` y `event.preventDefault()`:
En aplicaciones móviles (SPAs/PWAs) **no queremos que la página se recargue** al enviar un formulario:
```javascript
document.querySelector("#form-login").addEventListener("submit", (e) => {
    e.preventDefault(); // 🛑 Cancela la recarga automática del navegador
    console.log("Formulario procesado con JavaScript");
});
```

#### 3. Evento `input` (Búsqueda en tiempo real):
```javascript
document.querySelector("#buscador").addEventListener("input", (e) => {
    console.log("Tipeando:", e.target.value);
});
```

---

### 1.7 Burbujeo (*Event Bubbling*) y Delegación de Eventos
Cuando tocás un botón dentro de una tarjeta, el evento "burbujea" hacia arriba por todos los contenedores padres hasta llegar a `document`.

**Delegación de Eventos:** En lugar de poner 100 listeners en 100 botones (lo cual agota la memoria del celular), colocamos **un único listener en el contenedor padre** y detectamos el elemento tocado con `event.target.closest()`:

```javascript
const catalogo = document.querySelector("#contenedor-catalogo");

catalogo.addEventListener("click", (e) => {
    const boton = e.target.closest(".btn-comprar");
    if (!boton) return; // Si tocó fuera del botón, no hace nada
    
    const tarjeta = boton.closest(".tarjeta-producto");
    console.log("Comprando producto ID:", tarjeta.dataset.id);
});
```

---

## 2. Bloque 2: Manipulación de Datos en Memoria (HOFs y ES6+)

Ahora que sabemos controlar la pantalla, necesitamos herramientas ágiles para transformar y filtrar listas de datos.

### 2.1 Inmutabilidad vs Mutación
* **Mutar (Peligroso):** `.push()`, `.pop()`, `.splice()` modifican el array original en memoria y pueden generar bugs imprevistos.
* **Inmutable (Recomendado):** `.slice()`, Spread `[...]`, `.map()`, `.filter()` generan una copia nueva sin alterar el original.

#### Ejemplos de Mutación:
```javascript
const tareas = ["Comprar repuestos", "Cargar batería"];
tareas.push("Actualizar sistema"); // Modifica 'tareas'

const notificaciones = ["Alerta 1", "Alerta 2"];
notificaciones.pop(); // Elimina la última de 'notificaciones'

const sensores = ["GPS", "Acelerómetro", "Giroscopio"];
sensores.splice(1, 1); // Elimina "Acelerómetro" directamente del original
```

#### Ejemplos Inmutables:
```javascript
const historial = ["Inicio", "Catalogo", "Detalle", "Carrito"];
const vistaPrevia = historial.slice(1, 3); // ["Catalogo", "Detalle"] (historial intacto)

const carrito = ["Funda", "Vidrio"];
const nuevoCarrito = [...carrito, "Cargador"]; // ["Funda", "Vidrio", "Cargador"] (carrito intacto)

// 💡 Novedad ECMAScript / MDN: Métodos modernos de copia directa (sin mutar)
const puntuaciones = [45, 10, 90, 30];
const ordenadas = puntuaciones.toSorted((a, b) => a - b); // [10, 30, 45, 90] (puntuaciones intacto)
const invertidas = puntuaciones.toReversed();              // [30, 90, 10, 45] (puntuaciones intacto)
```

---

### 2.2 ¿Por qué se llaman "Funciones de Orden Superior" (HOFs)?
En JavaScript las funciones son **First-Class Citizens** (valores de primera clase). Una **Función de Orden Superior (Higher-Order Function o HOF)** es aquella que:
1. **Recibe una función como argumento (*callback*), y/o**
2. **Retorna una nueva función.**

Los métodos de Array son HOFs porque reciben una función callback que le indica al método qué hacer con cada elemento.

---

### 2.3 Los Métodos de Array Fundamentales con Ejemplos:

#### 1. `.forEach()` — Recorrido para acciones (sin retorno):
```javascript
["WhatsApp", "Instagram"].forEach((app, i) => console.log(`${i}: ${app}`));
```

#### 2. `.map()` — Transformar elementos (retorna nuevo array 1 a 1):
```javascript
const preciosUSD = [100, 250, 50];
const preciosARS = preciosUSD.map(p => p * 1200); // [120000, 300000, 60000]
```

#### 3. `.filter()` — Filtrar por condición booleana:
```javascript
const celulares = [
    { modelo: "Samsung A54", stock: 8 },
    { modelo: "Moto G84", stock: 0 }
];
const disponibles = celulares.filter(cel => cel.stock > 0); // Solo Samsung A54
```

#### 4. `.find()` y `.findIndex()` — Búsqueda de elemento único o índice:
```javascript
const moto = celulares.find(cel => cel.modelo === "Moto G84");
const indiceMoto = celulares.findIndex(cel => cel.modelo === "Moto G84"); // 1
```

#### 5. `.some()` y `.every()` — Validaciones booleanas:
```javascript
const haySinStock = celulares.some(cel => cel.stock === 0);   // true
const todosConStock = celulares.every(cel => cel.stock > 0); // false
```

#### 6. `.includes()` — Verificación en arrays primitivos:
```javascript
const permisos = ["GPS", "CAMARA"];
console.log(permisos.includes("GPS")); // true
```

#### 7. `.reduce()` — Acumulación en un único resultado:
```javascript
const compras = [
    { precio: 4500, cantidad: 2 },
    { precio: 2000, cantidad: 1 }
];
const total = compras.reduce((acc, prod) => acc + (prod.precio * prod.cantidad), 0);
console.log("Total:", total); // 11000
```

---

### 2.4 Sintaxis ES6+ de Estructuras

#### A. Destructuring (Desestructuración):
```javascript
const usuario = { id: 5, nombre: "Brenda", rol: "Editor" };
const { nombre, rol } = usuario; // Extrae en constantes individuales

const [primero, segundo] = ["Dylan", "Franco"];
```

#### B. Spread (`...`) y Rest (`...`):
```javascript
const config = { tema: "oscuro", notificaciones: true };
const configNueva = { ...config, tema: "claro" }; // Clona y actualiza
```

#### C. Optional Chaining (`?.`) y Nullish Coalescing (`??`):
Evita que la aplicación crashee al recibir datos incompletos de un servidor:
```javascript
const respuesta = { usuario: { nombre: "Mateo" } };

// Si 'telefono' no existe, ?. devuelve undefined sin tirar error.
// Si es null o undefined, ?? asigna el valor por defecto:
const tel = respuesta?.usuario?.telefono?.numero ?? "Sin teléfono";
console.log(tel); // "Sin teléfono"
```

#### D. Métodos de `Object`:
```javascript
const estado = { online: true, bateria: 85 };
console.log(Object.keys(estado));   // ["online", "bateria"]
console.log(Object.values(estado)); // [true, 85]
console.log(Object.entries(estado)); // [ ["online", true], ["bateria", 85] ]
```

---

## 3. Bloque 3: Comunicación Externa y Asincronismo (HTTP, Event Loop y Fetch)

En una app real los datos no están hardcodeados; vienen de internet a través de servicios web.

### 3.1 Fundamentos de Red: APIs, REST y Protocolo HTTP/S
* **API REST:** Arquitectura basada en **Endpoints/Recursos** (`GET /api/productos`, `POST /api/pedidos`), sin estado (**Stateless**) y con intercambio en formato **JSON**.
* **Protocolo HTTP/S:** Ciclo Request/Response (Método, Headers, Status Code, Body).
* **HTTPS Obligatorio en Móviles:** Los navegadores **bloquean el GPS, Cámara, Notificaciones y Service Workers** si la app no corre bajo **HTTPS (TLS/SSL)**.

#### Códigos de Estado Clave:
* `200 OK` / `201 Created` (Éxito).
* `400 Bad Request` / `401 Unauthorized` / `404 Not Found` (Errores de cliente).
* `500 Internal Server Error` (Error en el servidor).

---

### 3.2 El Modelo Monohilo (Single Thread) y el Event Loop
JavaScript cuenta con un solo hilo (**Single Thread**) y ejecuta cada función en el **Call Stack** hasta terminarla (**Run-to-Completion**).
* Si una tarea pesada bloquea el hilo principal, la pantalla se congela (**Jank** a 60fps) y el sistema operativo muestra el cartel de **ANR (La aplicación no responde)**.
* **Solución:** Las tareas lentas (red, timers) se delegan a las **Web APIs**. Al completarse, el **Event Loop** procesa con máxima prioridad las **Microtareas (Promesas y async/await)** antes que las tareas comunes.

```
   1. Llamada a fetch() ───────► Se delega a la Web API de red en segundo plano
   2. Tu código JS continúa ───► La interfaz móvil sigue respondiendo al usuario
   3. Llega la respuesta ──────► El Event Loop nos entrega los datos para procesar
```

---

### 3.3 De Callbacks a Promesas
Una **Promesa (`Promise`)** representa una operación futura que atraviesa 3 estados:
1. **`pending`:** Operación en proceso.
2. **`fulfilled`:** Resuelta con éxito (entrega datos).
3. **`rejected`:** Rechazada con error.

---

### 3.4 Sintaxis Moderna con `async / await` y `try...catch`
`async / await` nos permite escribir código asíncrono no bloqueante con aspecto secuencial:

```javascript
async function consultarServidor() {
    try {
        console.log("⏳ Descargando datos...");
        const datos = await pedirDatosDeRed();
        console.log("✅ Datos recibidos:", datos);
        return datos;
    } catch (error) {
        console.error("❌ Ocurrió un error:", error.message);
    } finally {
        console.log("🏁 Operación concluida.");
    }
}
```

---

### 3.5 Consumo Seguro con `fetch()` API (Estándar MDN)

```javascript
async function obtenerCatalogo() {
    try {
        // 1. Petición con límite de espera de 8 segundos (AbortSignal)
        const res = await fetch("https://dummyjson.com/products?limit=6", {
            signal: AbortSignal.timeout(8000)
        });
        
        // 2. Validación obligatoria (fetch NO entra al catch ante errores 404 o 500)
        if (!res.ok) {
            throw new Error(`Error en el servidor: Código ${res.status}`);
        }
        
        // 3. Parsear el cuerpo de la respuesta a JSON
        const data = await res.json();
        return data.products;
        
    } catch (error) {
        console.error("Fallo la petición:", error.message);
        throw error;
    }
}
```

---

### 3.6 Optimización Móvil: `Promise.all()` (Paralelismo)
En conexiones celulares 4G/3G con alta latencia, no esperes llamadas independientes en cascada; ejecútalas en paralelo:

```javascript
// ✅ Viajan juntas por la red:
const [resUsuario, resProductos] = await Promise.all([
    fetch("https://dummyjson.com/users/1"),
    fetch("https://dummyjson.com/products?limit=5")
]);
```

---

## 4. Bloque 4: Integración Total, Persistencia Local y Arquitectura Modular

Aquí unimos todo lo aprendido en una arquitectura completa para apps móviles.

### 4.1 Patrón de Renderizado con Estados de UI (Loading, Éxito, Error)

```javascript
function crearCardHTML({ id, title, price, thumbnail, category }) {
    return `
        <article class="tarjeta-producto" data-id="${id}">
            <img src="${thumbnail}" alt="${title}" loading="lazy" class="tarjeta-img">
            <div class="tarjeta-cuerpo">
                <span class="badge">${category}</span>
                <h4>${title}</h4>
                <p class="precio">$${price.toFixed(2)}</p>
                <button class="btn-comprar">Comprar</button>
            </div>
        </article>
    `;
}

async function cargarCatalogoEnPantalla() {
    const contenedor = document.querySelector("#contenedor-catalogo");
    
    // Estado 1: Loading (Spinner)
    contenedor.innerHTML = `<p class="alerta-loading">⏳ Cargando productos...</p>`;
    
    try {
        const productos = await obtenerCatalogo();
        
        // Estado 2: Éxito (Renderizado con .map().join(''))
        if (!productos || productos.length === 0) {
            contenedor.innerHTML = `<p>No hay productos disponibles.</p>`;
            return;
        }
        contenedor.innerHTML = productos.map(crearCardHTML).join("");
        
    } catch (error) {
        // Estado 3: Error con reintento
        contenedor.innerHTML = `
            <div class="alerta-error">
                <p>⚠️ No pudimos conectar con el servidor.</p>
                <button onclick="cargarCatalogoEnPantalla()">Reintentar</button>
            </div>
        `;
    }
}
```

---

### 4.2 Persistencia Local con `localStorage` y `JSON`
Permite guardar preferencias o datos en el celular para que no se pierdan al refrescar la app:

* `JSON.stringify(obj)`: Convierte objeto a texto para almacenarlo.
* `JSON.parse(txt)`: Convierte el texto recuperado de nuevo a objeto.

```javascript
// Guardar:
const sesion = { usuario: "Sol", tema: "oscuro" };
localStorage.setItem("app_sesion", JSON.stringify(sesion));

// Leer:
const guardado = JSON.parse(localStorage.getItem("app_sesion")) ?? null;
console.log(guardado?.usuario); // "Sol"

// Borrar:
localStorage.removeItem("app_sesion");
```

> [!WARNING]
> ⚠️ **LÍMITES Y RENDIMIENTO EN MÓVILES (MDN):**
> * **Capacidad limitada:** `localStorage` tiene un límite estricto de aproximadamente **5 MB por dominio**.
> * **Operación Síncrona:** Toda lectura o escritura en `localStorage` **bloquea el hilo principal** de JavaScript. Para almacenar grandes volúmenes de datos en PWAs usaremos la base de datos asíncrona **`IndexedDB`** (Clase 08+).

---

### 4.3 Modularización con ES Modules (`import` / `export`)
Mantiene el código limpio y desacoplado en archivos separados:

```javascript
// Archivo 'js/api.js'
export async function pedirCatalogo() { ... }

// Archivo 'js/storage.js'
export function guardarSesion(datos) { ... }

// Archivo 'js/app.js'
import { pedirCatalogo } from "./api.js";
import { guardarSesion } from "./storage.js";
```

En el HTML:
```html
<script type="module" src="./js/app.js"></script>
```

> [!IMPORTANT]
> 🔒 **REGLA DE SEGURIDAD CORS (MDN):** Los navegadores bloquean la carga de módulos ES si abrís el archivo HTML haciendo doble click (`file:///`). Para que `type="module"` funcione, los archivos deben servirse mediante un servidor local bajo protocolo `http://` (usando la extensión **Live Server** de VS Code o ejecutando `npx serve`).

---

## 5. Bloque 5: Preguntas de Autoevaluación y Reflexión

1. ¿Por qué es un error intentar agregar un `.addEventListener()` directamente al resultado de `document.querySelectorAll()`? ¿Cómo se soluciona?
2. ¿Qué diferencia práctica hay entre usar `.splice()` y usar `.slice()` con el operador spread `[...]` al actualizar una lista en memoria?
3. ¿Por qué se denominan "Funciones de Orden Superior" a métodos como `.map()` y `.filter()`?
4. Si un servidor web devuelve un código `404 Not Found`, ¿por qué la función `fetch()` no entra automáticamente al bloque `catch`?
5. ¿Cuál es la ventaja de utilizar `Promise.all()` en lugar de múltiples `await` secuenciales en una conexión móvil 4G?

---
*Fin de la guía integral de teoría de la Clase 04.*
