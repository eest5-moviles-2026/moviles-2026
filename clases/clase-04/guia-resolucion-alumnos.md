# 🛠️ Guía Paso a Paso y Depuración con `console.log()`
## Proyecto Integrador: TechStore Móvil (Clase 04)

**Materia:** Desarrollo de Software para Plataformas Móviles (7° 5ta)  
**Profesor:** Axel Castellano Gutiérrez  

---

## 🚀 Filosofía de Trabajo

En lugar de escribir código a ciegas o pedirle la solución a una IA, vas a aprender a **interrogar a tu código con `console.log()`**. Si podés ver los datos en la consola del navegador (F12 ➔ pestaña *Console*), vas a saber exactamente qué modificar para que tu aplicación funcione.

---

## 📍 ETAPA 1: El Módulo de Datos (`js/api.js`)

### 🎯 Archivo `js/api.js` ➔ Función `descargarProductosTech()`

* **El Desafío:** Tenés 3 URLs de categorías de productos en un array. Necesitás descargarlas en paralelo con `Promise.all()`, convertir las respuestas a JSON y unir los arrays de productos en uno solo.
* **Líneas a modificar:** Dentro de `export async function descargarProductosTech()`.

#### 🧪 Pasos de Desarrollo y Depuración con `console.log()`:

1. **Paso 1.1: Descargar las 3 categorías**
   - Ejecutá `Promise.all()` pasándole un `.map()` que haga `fetch()` a cada URL.
   - **¿Qué consologuear para probar?:**  
     ```javascript
     console.log("Respuestas HTTP recibidas:", respuestas);
     ```
   - **¿Qué deberías ver en consola?:** Un array con 3 objetos `Response` con estado HTTP `200`. Si ves un error de red, revisá si escribiste bien las URLs.

2. **Paso 1.2: Parsear los cuerpos JSON**
   - Usá otro `Promise.all()` para convertir las respuestas a JSON con `.map(res => res.json())`.
   - **¿Qué consologuear para probar?:**  
     ```javascript
     console.log("Objetos JSON parseados:", datos);
     ```
   - **¿Qué deberías ver en consola?:** Un array con 3 objetos. Cada objeto tiene una propiedad llamada `.products` que contiene una lista de artículos.

3. **Paso 1.3: Aplanar las 3 listas en un solo array**
   - Usá `.flatMap()` sobre la lista de datos extrayendo la propiedad `.products` de cada categoría.
   - **¿Qué consologuear para probar?:**  
     ```javascript
     console.log("Total de productos aplanados:", productos.length, productos);
     ```
   - **¿Qué deberías ver en consola?:** Un único array plano con **90 productos** (Smartphones + Laptops + Accesorios).

4. **Paso 1.4: Retorno final**
   - Devolvé el array aplanado con `return productos;`.

---

## 📍 ETAPA 2: El Módulo de Persistencia Local (`js/storage.js`)

### 🎯 Archivo `js/storage.js` ➔ Función `obtenerFavoritos()`

* **El Desafío:** Leer la clave `techstore_favoritos_v1` de `localStorage` y devolver un array de IDs parseado.
* **Pasos con `console.log()`:**
  1. Leé la clave con `localStorage.getItem(FAVORITOS_KEY)`.
     - **¿Qué consologuear?:** `console.log("Raw de localStorage:", raw);`
     - **¿Qué deberías ver?:** `null` (si nunca guardaste nada) o un String formateado como `"[1, 5, 12]"`.
  2. Si `raw` tiene contenido, devolvé `JSON.parse(raw)`. De lo contrario, devolvé `[]`.
     - **¿Qué consologuear?:** `console.log("Array parseado:", obtenerFavoritos());`

### 🎯 Archivo `js/storage.js` ➔ Función `esProductoFavorito(id)`

* **El Desafío:** Verificar si un `id` numérico existe dentro del array de favoritos.
* **Pasos con `console.log()`:**
  1. Obtené la lista con `obtenerFavoritos()` y evaluá con `.includes(id)`.
     - **¿Qué consologuear?:** `console.log("¿El producto 1 es favorito?:", esProductoFavorito(1));`
     - **¿Qué deberías ver?:** Únicamente `true` o `false`.

### 🎯 Archivo `js/storage.js` ➔ Función `alternarFavorito(id)`

* **El Desafío:** Si el `id` ya existe en favoritos, removerlo con `.filter()`. Si no existe, agregarlo con `.push()`. Al final, guardar la lista actualizada en `localStorage` con `JSON.stringify()`.
* **Pasos con `console.log()`:**
  1. Ejecutá en la consola de tu navegador: `alternarFavorito(1)`.
     - **¿Qué consologuear?:** `console.log("Favoritos luego de alternar:", obtenerFavoritos());`
     - **¿Qué deberías ver?:** El array en `localStorage` agregando o removiendo el ID `1`.

---

## 📍 ETAPA 3: El Módulo de Renderizado Visual (`js/ui.js`)

### 🎯 Archivo `js/ui.js` ➔ Función `crearTarjetaProductoHTML(producto, esFavorito)`

* **El Desafío:** Recibir un objeto `producto` y un booleano `esFavorito`, y retornar el String de la tarjeta HTML.
* **Pasos con `console.log()`:**
  1. Hacé destructuración de `{ id, title, price, category, thumbnail, stock } = producto`.
     - **¿Qué consologuear?:** `console.log("Propiedades extraídas:", title, price);`
  2. Retorná el Template Literal con `${price.toFixed(2)}` y la clase `${esFavorito ? 'en-favoritos' : ''}`.
     - **¿Qué consologuear?:** `console.log(crearTarjetaProductoHTML({ id: 1, title: "Test", price: 100, category: "laptops", thumbnail: "", stock: 5 }, true));`
     - **¿Qué deberías ver?:** El código HTML de la tarjeta con la estrella ⭐ encendida.

### 🎯 Archivo `js/ui.js` ➔ Función `calcularTotalCatalogo(lista)`

* **El Desafío:** Sumar los precios de una lista de productos usando `.reduce()`.
* **Pasos con `console.log()`:**
  1. Acumulá el precio iniciando `.reduce()` en `0`.
     - **¿Qué consologuear?:** `console.log("Suma acumulada:", calcularTotalCatalogo([{price: 10}, {price: 20}]));`
     - **¿Qué deberías ver?:** `30`.

### 🎯 Archivo `js/ui.js` ➔ Función `filtrarProductos(lista, textoBusqueda, categoria, favoritosIds)`

* **El Desafío:** Filtrar la lista de productos por coincidencia de título (en minúsculas) y por la categoría elegida ("todas", "favoritos" o una categoría específica).
* **Pasos con `console.log()`:**
  1. Convertí el texto de búsqueda a minúsculas: `const texto = textoBusqueda.toLowerCase().trim();`.
  2. Dentro del `.filter()`, evaluá `coincideTexto` y `coincideCategoria`.
     - **¿Qué consologuear dentro de `.filter()`?:**  
       `console.log("Producto:", producto.title, "Coincide Texto:", coincideTexto, "Coincide Cat:", coincideCategoria);`
     - **¿Qué deberías ver?:** Que devuelva `true` sólo en las tarjetas que deben renderizarse en pantalla.

---

## 📍 ETAPA 4: El Orquestador Principal (`js/app.js`)

### 🎯 Archivo `js/app.js` ➔ Módulos e Imports (Líneas 14-17)

- Escribí tus `import { ... } from "./nombre-modulo.js";`.
- **¿Cómo probar que importó bien?:** Si en la consola del navegador salta `Uncaught SyntaxError: Cannot use import statement outside a module`, asegurate de que en `index.html` el tag `<script>` tenga `type="module"`.

### 🎯 Archivo `js/app.js` ➔ Selección de Nodos DOM (Líneas 25-47)

- Asigná las constantes con `document.querySelector("#id")`.
- **¿Qué consologuear?:**  
  ```javascript
  console.log("Nodos capturados:", { btnTema, contenedorCatalogo, inputBuscador });
  ```
- **Atención:** Si en la consola ves `null` en alguna de las constantes, **escribiste mal el selector `#` o el ID en `index.html`**.

### 🎯 Archivo `js/app.js` ➔ Carga Asíncrona `cargarCatalogo()` (Líneas 116-134)

- Quitá la clase `oculto` de `estadoLoading`, vaciá `contenedorCatalogo` y abrí un bloque `try...catch`.
- **¿Qué consologuear dentro del `try`?:**  
  ```javascript
  console.log("Catálogo descargado con éxito. Cantidad:", productosEnMemoria.length);
  ```
- **¿Qué consologuear dentro del `catch`?:**  
  ```javascript
  console.error("Fallo la carga:", error);
  ```

### 🎯 Archivo `js/app.js` ➔ Delegación de Eventos `contenedorCatalogo` (Líneas 177-185)

- Escuchá el evento `click` en el contenedor padre de las tarjetas.
- **Pasos con `console.log()`:**
  1. Capturá la tarjeta cliqueada con `const botonFav = evento.target.closest(".btn-fav-card");`.
     - **¿Qué consologuear?:** `console.log("Elemento cliqueado:", evento.target, "Botón detectado:", botonFav);`
     - **¿Qué deberías ver?:** Si hacés clic fuera de la estrella, `botonFav` devolverá `null`. Si hacés clic en la estrella, devolverá el botón HTML.
  2. Si `botonFav` existe, extraé el ID con `Number(botonFav.dataset.id)`.
     - **¿Qué consologuear?:** `console.log("ID procesado:", id, typeof id);`
     - **¿Qué deberías ver?:** `15 "number"`. Si el tipo de dato te da `"string"`, olvidaste encerrar el valor en `Number()`.

---

## 🏆 ¡Regla de Oro!

> **Nunca des por terminada una función sin antes haber visto su resultado correcto reflejado en la consola de tu navegador.**
