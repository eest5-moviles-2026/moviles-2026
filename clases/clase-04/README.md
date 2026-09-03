# Guía Práctica de Clase 04: Proyecto Integrador "TechStore Móvil" (ES Modules)
**Materia:** Desarrollo de Software para Plataformas Móviles (7° Año)  
**Clase 04:** De la Interfaz Local al Consumo de Servicios en Tiempo Real  
**Profesor:** Axel Castellano Gutiérrez  

En esta clase práctica construiremos una aplicación móvil real (**"TechStore Móvil"**) ubicada en la carpeta [`proyecto-integrador/`](./proyecto-integrador/).

---

## 🏗️ Arquitectura Modular del Proyecto

La aplicación está organizada en **4 módulos independientes con ECMAScript Modules (`export` / `import`)**:

```text
proyecto-integrador/
├── index.html          # Maquetado semántico (<script type="module" src="./js/app.js">)
├── styles.css          # Estilos móviles, CSS variables, Dark Mode y estados de UI
└── js/
    ├── app.js          # Orquestador principal (Eventos de la UI e inicialización)
    ├── api.js          # Consumo de red con Fetch, Promise.all y async/await
    ├── storage.js      # Persistencia en LocalStorage (parseo y guardado JSON)
    └── ui.js           # Generación de tarjetas HTML, filtros con HOFs y métricas
```

> [!IMPORTANT]
> 🚀 **CÓMO TRABAJAR EN EL LABORATORIO:**
> 1. Abrí la carpeta `clase-04/proyecto-integrador/` en VS Code.
> 2. Iniciá `index.html` usando la extensión **Live Server** (para habilitar el protocolo `http://` requerido por los módulos de JS y CORS).
> 3. Completá el código guiado con `// TODO:` en los archivos correspondientes a medida que avanzamos bloque a bloque.

---

## ⏱️ Bloque 1 (Hora 1): La Capa Visual y Eventos (`js/app.js`)

> 🛑 **PAUSA EN EL AULA 1:** Dar vida a la estructura visual y controles de la aplicación.

### 🎯 Consignas:
1. **Selección de Elementos del DOM:**
   * Utilizar `document.querySelector` y `document.querySelectorAll` para capturar los nodos de la interfaz (botones de filtro, buscador, panel de catálogo, botón de tema, badges).
2. **Interruptor de Modo Oscuro:**
   * En el evento `'click'` de `#btn-tema`, alternar la clase `"dark-mode"` en el `document.body` utilizando `.classList.toggle()`.
   * Cambiar el icono `#icono-tema` a `"☀️"` si está oscuro o `"🌙"` si está claro.
3. **Control de Filtros por Categoría:**
   * Recorrer `botonesFiltro` con `.forEach()`, gestionar la clase `"activo"` y actualizar la categoría seleccionada.
4. **Buscador en Tiempo Real:**
   * Escuchar el evento `'input'` en `#input-buscador` para activar el filtrado en vivo.

---

## ⏱️ Bloque 2 (Hora 2): Transformación de Datos en Memoria (`js/ui.js`)

> 🛑 **PAUSA EN EL AULA 2:** Crear las funciones declarativas con HOFs y ES6+.

### 🎯 Consignas:
1. **Generación de Tarjetas con Destructuring (`crearTarjetaProductoHTML`):**
   * Extraer `{ id, title, price, category, thumbnail, stock }` desde el objeto producto.
   * Retornar el string HTML de la tarjeta `<article class="tarjeta-producto">`.
2. **Filtrado Declarativo con `.filter()` (`filtrarProductos`):**
   * Filtrar por coincidencia de texto en el título (`.includes()`) y por coincidencia de categoría (o favoritos).
3. **Cálculo de Métricas con `.reduce()` (`calcularTotalCatalogo`):**
   * Acumular la suma de los precios de todos los productos visibles y retornar el total numérico.

---

## ⏱️ Bloque 3 (Hora 3): Consumo de API Externa (`js/api.js`)

> 🛑 **PAUSA EN EL AULA 3:** Conectar la aplicación con la API de DummyJSON.

### 🎯 Consignas:
1. **Descarga Concurrente con `Promise.all()` (`descargarProductosTech`):**
   * Descargar en paralelo las 3 categorías tecnológicas:
     * `"https://dummyjson.com/products/category/smartphones"`
     * `"https://dummyjson.com/products/category/laptops"`
     * `"https://dummyjson.com/products/category/mobile-accessories"`
   * Incorporar timeout de seguridad con `AbortSignal.timeout(8000)`.
   * Validar que todas las respuestas tengan `res.ok === true`.
   * Combinar todos los productos en un único array plano con `.flatMap()`.
2. **Manejo de Estados de UI (`cargarCatalogo` en `app.js`):**
   * Mostrar `#estado-loading` al iniciar.
   * Ocultar loading y renderizar al recibir los datos.
   * Mostrar `#estado-error` y permitir reintento con `#btn-reintentar` si la red falla.

---

## ⏱️ Bloque 4 (Hora 4): Persistencia y Delegación (`js/storage.js` y `js/app.js`)

> 🛑 **PAUSA EN EL AULA 4:** Persistir favoritos y conectar la delegación de eventos.

### 🎯 Consignas:
1. **Módulo de Persistencia (`js/storage.js`):**
   * `obtenerFavoritos()`: Leer de `localStorage` con `JSON.parse` (o `[]` si está vacío o falla).
   * `esProductoFavorito(id)`: Retornar booleano si el ID está incluido en favoritos.
   * `alternarFavorito(id)`: Agregar o quitar el ID de la lista y guardar con `JSON.stringify`.
2. **Delegación de Eventos (`js/app.js`):**
   * Escuchar clicks en `#contenedor-catalogo` y capturar el botón con `event.target.closest(".btn-fav-card")`.
   * Alternar el favorito del producto clickeado y actualizar el badge del header `#badge-favoritos-contador`.
3. **Filtro de Favoritos:**
   * Permitir ver únicamente los favoritos marcados al tocar el botón del header o el botón de categoría `"⭐ Mis Favoritos"`.

---

## 🚀 Criterios de Evaluación

- [ ] Arquitectura modular respetada (`api.js`, `storage.js`, `ui.js`, `app.js` con `import`/`export`).
- [ ] Modo Oscuro funcionando y persistente en la UI.
- [ ] Búsqueda y filtros funcionando con HOFs (`.filter` y `.reduce`).
- [ ] Catálogo descargado desde la API con manejo de loading y error.
- [ ] Favoritos persistidos en `localStorage` tras recargar la página (`F5`).
- [ ] Código subido a GitHub con commits descriptivos en inglés o español profesional.
