# 🧪 Laboratorio de Ejemplos Prácticos e Interactivos - Clase 04
**Materia:** Desarrollo de Software para Plataformas Móviles (7° Año)  
**Profesor:** Axel Castellano Gutiérrez  

Esta carpeta contiene **4 micro-laboratorios web independientes** para experimentar y probar cada concepto teórico de la clase con **Live Server** y la **Consola de Chrome (F12)** antes de programar el Proyecto Integrador ("TechStore Móvil").

---

## 🚀 Cómo probar los ejemplos:

1. Abrí cualquiera de las subcarpetas en VS Code.
2. Hacé click derecho en `index.html` y seleccioná **"Open with Live Server"**.
3. En el navegador, presioná **`F12`** para abrir las **Herramientas de Desarrollador** y andá a la pestaña **Console**.
4. Interactuá con la pantalla y mirá los mensajes de depuración paso a paso.

---

## 📑 Directorio de Micro-Laboratorios:

### 1. 📰 [`01-dom-interactivo/`](./01-dom-interactivo/)
* **Dominio:** Portal de Noticias y Modo Lectura.
* **Conceptos que entrena:**
  * Selección con `document.querySelector` y `querySelectorAll`.
  * Alternancia de clases con `classList.toggle("dark-mode")` y comprobación con `.contains()`.
  * Eventos `click` e `input` en vivo.
  * Gestión de botones activos (`.classList.add / remove`).

### 2. 🎮 [`02-hofs-memoria/`](./02-hofs-memoria/)
* **Dominio:** Catálogo Gamer (GamerVault).
* **Conceptos que entrena:**
  * Generación de tarjetas con **Destructuring** `{ id, titulo, precio, ... }` y **Template Literals**.
  * Filtrado reactivo en memoria con **`.filter()`** (coincidencia de texto y género).
  * Acumulación de totales y promedios con **`.reduce()`**.
  * Inyección masiva al DOM con **`.map().join('')`**.

### 3. 🌐 [`03-fetch-asincronismo/`](./03-fetch-asincronismo/)
* **Dominio:** SocialAPI (Consumo de `jsonplaceholder.typicode.com`).
* **Conceptos que entrena:**
  * Peticiones asíncronas con `fetch()`, `async / await` y control de errores con `try...catch`.
  * Validación de estado HTTP con `res.ok`.
  * **`Promise.all()`** para disparar múltiples descargas en paralelo y medir tiempos de red con `performance.now()`.
  * Gestión visual de estados (cargando / error).

### 4. 🦸 [`04-storage-delegacion/`](./04-storage-delegacion/)
* **Dominio:** Armado de Equipo de Superhéroes (HeroTeam).
* **Conceptos que entrena:**
  * **Delegación de Eventos** en el contenedor padre usando `event.target.closest(".btn-fav-hero")`.
  * Persistencia en el navegador con `localStorage.getItem` y `localStorage.setItem`.
  * Conversión de arrays a string con `JSON.stringify` y `JSON.parse`.
  * Persistencia real tras recargar la página (`F5`).

---

## 🗺️ Mapa de Transferencia al Proyecto Integrador:

| Técnica en el Ejemplo Práctico | Dónde se aplica en `TechStore Móvil` |
| :--- | :--- |
| `01-dom-interactivo` (Modo Lectura + Buscador) | En `js/app.js` (Modo Oscuro, buscador y botones de categorías). |
| `02-hofs-memoria` (Filtros Gamer + Métricas) | En `js/ui.js` (`crearTarjetaProductoHTML`, `filtrarProductos`, `calcularTotalCatalogo`). |
| `03-fetch-asincronismo` (Descarga Paralela) | En `js/api.js` (`descargarProductosTech` con DummyJSON). |
| `04-storage-delegacion` (Equipo Favorito) | En `js/storage.js` y `js/app.js` (Persistencia y clicks en estrellitas ⭐). |
