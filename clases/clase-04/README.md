# Guía Práctica de Clase 04: Proyecto Integrador "TechStore Móvil"
**Materia:** Desarrollo de Software para Plataformas Móviles (7° Año)  
**Clase 04:** De la Interfaz Local al Consumo de Servicios en Tiempo Real  
**Profesor:** Axel Castellano Gutiérrez  

En esta clase práctica construiremos una aplicación móvil real (**"TechStore Móvil"**) ubicada en la carpeta [`proyecto-integrador/`](./proyecto-integrador/). La práctica acompaña de forma sincronizada cada uno de los 4 bloques teóricos de la clase:

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                   HILO CONDUCTOR DEL PROYECTO INTEGRADOR EN EL AULA                    │
│                                                                                        │
│   ⏱️ HORA 1: [BLOQUE 1] DOM y Eventos ─────► ⏱️ HORA 2: [BLOQUE 2] HOFs y ES6+        │
│   (Modo oscuro, eventos táctiles y búsqueda) (Filtrar y calcular totales en memoria)   │
│                                                                                        │
│                                                                                        ▼
│   ⏱️ HORA 4: [BLOQUE 4] Storage y Módulos ◄───── ⏱️ HORA 3: [BLOQUE 3] Fetch y Async  │
│   (Persistir favoritos y modularizar)        (Conectar con la API y estados de UI)     │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

> [!IMPORTANT]
> 🚀 **CÓMO TRABAJAR EN EL LABORATORIO:**
> 1. Abrí la carpeta `clase-04/proyecto-integrador/` en VS Code.
> 2. Iniciá `index.html` usando la extensión **Live Server** (para habilitar el protocolo `http://` requerido por los módulos de JS).
> 3. Abrí el archivo `js/app.js` y completá el código a medida que avanzamos bloque a bloque.

---

## 📑 Índice de la Práctica

* [Bloque 1 (Hora 1): La Capa Visual (El DOM y Manejo de Eventos)](#-bloque-1-hora-1-la-capa-visual-el-dom-y-manejo-de-eventos)
* [Bloque 2 (Hora 2): Manipulación de Datos en Memoria (HOFs y ES6+)](#-bloque-2-hora-2-manipulación-de-datos-en-memoria-hofs-y-es6)
* [Bloque 3 (Hora 3): Comunicación Externa y Asincronismo (HTTP y Fetch)](#-bloque-3-hora-3-comunicación-externa-y-asincronismo-http-y-fetch)
* [Bloque 4 (Hora 4): Persistencia Local (LocalStorage) y Modularización](#-bloque-4-hora-4-persistencia-local-localstorage-y-modularización)
* [Criterios de Evaluación y Entrega](#-criterios-de-evaluación-y-entrega)

---

## ⏱️ Bloque 1 (Hora 1): La Capa Visual (El DOM y Manejo de Eventos)

> 🛑 **PAUSA EN EL AULA 1:** Dar vida a la estructura visual y controles de la aplicación.

### 🎯 Consignas del Bloque 1:
1. **Selección de Elementos del DOM:**
   * Utilizar `document.querySelector` y `document.querySelectorAll` para capturar los nodos de la interfaz (botones de filtro, buscador, panel de catálogo, botón de tema, badges).
2. **Interruptor de Modo Oscuro:**
   * En el evento `'click'` de `#btn-tema`, alternar la clase `"dark-mode"` en el `document.body` utilizando `.classList.toggle()`.
   * Cambiar el icono `#icono-tema` a `"☀️"` si el body está en modo oscuro o `"🌙"` si está en modo claro.
3. **Control de Filtros por Categoría:**
   * Recorrer `botonesFiltro` con `.forEach()` y escuchar el evento `'click'`.
   * Quitar la clase `"activo"` a todos los botones y agregársela únicamente al botón clickeado.
   * Guardar la categoría en `categoriaActual = boton.dataset.categoria`.
4. **Buscador en Tiempo Real:**
   * Escuchar el evento `'input'` en `#input-buscador` para que llame a la función `aplicarFiltros()`.

---

## ⏱️ Bloque 2 (Hora 2): Manipulación de Datos en Memoria (HOFs y ES6+)

> 🛑 **PAUSA EN EL AULA 2:** Procesar y transformar los datos de productos sin mutar los originales.

### 🎯 Consignas del Bloque 2:
1. **Función `crearTarjetaProductoHTML(producto)`:**
   * Aplicar **Destructuring** para extraer `{ id, title, price, category, thumbnail, stock }` del objeto producto.
   * Retornar el string HTML con Template Literals estructurado con la etiqueta `<article class="tarjeta-producto" data-id="${id}">`.
2. **Función `filtrarProductos(lista, textoBusqueda, categoria)`:**
   * Utilizar el método inmutable **`.filter()`** para retornar solo los productos cuyo nombre coincida con `textoBusqueda` y pertenezcan a la categoría seleccionada (o todas).
3. **Función `calcularTotalCatalogo(lista)`:**
   * Utilizar el método **`.reduce()`** para calcular el valor total acumulado en dólares de todos los productos visibles.
4. **Función `aplicarFiltros()`:**
   * Actualizar los contadores `#total-productos-visibles` y `#total-precio-acumulado`.
   * Renderizar las tarjetas en `#contenedor-catalogo` utilizando **`.map().join('')`**.
   * Si no hay productos que coincidan, mostrar el mensaje `#sin-resultados`.

---

## ⏱️ Bloque 3 (Hora 3): Comunicación Externa y Asincronismo (HTTP y Fetch)

> 🛑 **PAUSA EN EL AULA 3:** Conectar la aplicación con una API REST en la nube.

### 🎯 Consignas del Bloque 3:
1. **Función Asíncrona `descargarCatalogoAPI()`:**
   * Declarar la función con la palabra clave `async`.
   * Implementar la estructura **`try...catch`**.
2. **Manejo de Estados de Interfaz (UX Móvil):**
   * **Estado 1 (Loading ⏳):** Antes de iniciar la descarga, quitar la clase `"oculto"` a `#estado-loading` y ocultar los errores.
   * **Petición con `fetch()`:** Consultar la URL `https://dummyjson.com/products?limit=12` configurando un timeout de 8 segundos con `AbortSignal.timeout(8000)`.
   * **Validación Obligatoria:** Validar `if (!respuesta.ok) throw new Error(...)`.
   * **Estado 2 (Éxito ✅):** Ocultar el loading, guardar los productos en `productosEnMemoria` y ejecutar `aplicarFiltros()`.
   * **Estado 3 (Error ❌):** En el bloque `catch`, ocultar el loading y mostrar `#estado-error`.
3. **Botón de Reintento:**
   * Conectar el botón `#btn-reintentar` para que vuelva a ejecutar `descargarCatalogoAPI()` si la conexión falló.

---

## ⏱️ Bloque 4 (Hora 4): Persistencia Local (LocalStorage) y Modularización

> 🛑 **PAUSA EN EL AULA 4:** Hacer persistentes los favoritos del usuario y estructurar el código en módulos limpios.

### 🎯 Consignas del Bloque 4:
1. **Persistencia de Favoritos:**
   * Implementar `obtenerFavoritos()` utilizando `localStorage.getItem()` y `JSON.parse()`.
   * Implementar `alternarFavorito(id)`: si el producto ya está en favoritos lo elimina; si no, lo agrega, y guarda el array resultante con `localStorage.setItem()` y `JSON.stringify()`.
2. **Actualización Reactiva del Header:**
   * Actualizar el número del badge `#badge-favoritos-contador` con la cantidad total de favoritos guardados.
3. **Delegación de Eventos de Alto Rendimiento:**
   * En lugar de agregar un listener a cada botón de cada tarjeta, escuchar el evento `'click'` en `#contenedor-catalogo` y capturar el botón tocado con `evento.target.closest(".btn-fav-card")`.
4. **Modularización Opcional (Desafío Pro):**
   * Separar el código en módulos ES: `api.js` (para el fetch), `storage.js` (para localStorage) y `app.js` (para el control de la UI).

---

## 🏆 Criterios de Evaluación y Entrega

| Criterio | Excelente (10) | Regular (7) | Insuficiente (4) |
| :--- | :--- | :--- | :--- |
| **Manipulación del DOM** | Selección limpia, uso de `classList`, delegación de eventos y cero errores en consola. | Manipulación funcional pero con estilos en línea o listeners redundantes. | Errores de selección y falta de interactividad. |
| **HOFs y ES6+** | Uso correcto de `.filter()`, `.map()`, `.reduce()` y destructuring sin mutaciones. | Uso parcial de HOFs o uso de bucles tradicionales `for`. | No utiliza métodos de array funcionales. |
| **Fetch y Asincronismo** | `async/await` con manejo riguroso de los 3 estados (Loading, Éxito, Error) y `res.ok`. | Hace el fetch pero no maneja el estado de error o no valida `res.ok`. | La app se congela o rompe ante fallas de red. |
| **Persistencia Local** | Favoritos guardados y recuperados correctamente con `JSON.stringify/parse`. | Almacenamiento básico pero pierde datos al recargar. | No implementa `localStorage`. |

### 📤 Entrega:
Al finalizar la clase o durante la semana:
```bash
git add .
git commit -m "feat: completar proyecto integrador TechStore Clase 04"
git push origin main
```
