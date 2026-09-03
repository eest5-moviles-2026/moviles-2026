/* ==========================================================================
   TECHSTORE MÓVIL - PROYECTO INTEGRADOR CLASE 04 (PLANTILLA DE ALUMNOS)
   Materia: Desarrollo de Software para Plataformas Móviles (7° 5ta)
   Profesor: Axel Castellano Gutiérrez
   ========================================================================== */

// ==========================================================================
// ⏱️ HORA 1: [BLOQUE 1] - La Capa Visual (El DOM y Manejo de Eventos)
// ==========================================================================

// 1.1 Selección de Nodos Principales del DOM
const btnTema = document.querySelector("#btn-tema");
const iconoTema = document.querySelector("#icono-tema");
const btnVerFavoritos = document.querySelector("#btn-ver-favoritos");
const inputBuscador = document.querySelector("#input-buscador");
const botonesFiltro = document.querySelectorAll(".btn-filtro");
const contenedorCatalogo = document.querySelector("#contenedor-catalogo");
const totalProductosSpan = document.querySelector("#total-productos-visibles");
const totalPrecioSpan = document.querySelector("#total-precio-acumulado");
const estadoLoading = document.querySelector("#estado-loading");
const estadoError = document.querySelector("#estado-error");
const btnReintentar = document.querySelector("#btn-reintentar");
const sinResultadosBox = document.querySelector("#sin-resultados");
const badgeFavoritos = document.querySelector("#badge-favoritos-contador");

// 1.2 Evento: Modo Oscuro con classList.toggle
btnTema.addEventListener("click", () => {
    // TODO: Alternar clase "dark-mode" en document.body y cambiar icono ☀️ / 🌙
    
});

// 1.3 Evento: Botón de Favoritos en el Header
btnVerFavoritos.addEventListener("click", () => {
    activarFiltroCategoria("favoritos");
});

// 1.4 Evento: Cambio de Categoría en los Botones de Filtro
function activarFiltroCategoria(categoria) {
    categoriaActual = categoria;
    botonesFiltro.forEach(b => {
        if (b.dataset.categoria === categoria) {
            b.classList.add("activo");
        } else {
            b.classList.remove("activo");
        }
    });
    aplicarFiltros();
}

botonesFiltro.forEach(boton => {
    boton.addEventListener("click", () => {
        activarFiltroCategoria(boton.dataset.categoria);
    });
});

// 1.5 Evento: Búsqueda en Tiempo Real
inputBuscador.addEventListener("input", () => {
    aplicarFiltros();
});


// ==========================================================================
// ⏱️ HORA 2: [BLOQUE 2] - Manipulación de Datos en Memoria (HOFs y ES6+)
// ==========================================================================

let productosEnMemoria = [];
let categoriaActual = "todas";

// 2.1 Función Template: Generar el HTML de una Tarjeta
function crearTarjetaProductoHTML(producto) {
    // TODO: Extraer { id, title, price, category, thumbnail, stock } con Destructuring
    // Validar si es favorito con esProductoFavorito(id)
    // Retornar el string HTML de la tarjeta <article class="tarjeta-producto" data-id="...">
    
}

// 2.2 Función de Filtrado con HOFs (.filter)
function filtrarProductos(lista, textoBusqueda, categoria) {
    // TODO: Filtrar por coincidencia de texto y por categoría (o favoritos)
    
}

// 2.3 Función de Cálculo de Totales con HOF (.reduce)
function calcularTotalCatalogo(lista) {
    // TODO: Retornar suma acumulada de los precios
    
}

// 2.4 Actualizar la UI
function aplicarFiltros() {
    const texto = inputBuscador.value;
    const productosFiltrados = filtrarProductos(productosEnMemoria, texto, categoriaActual);

    // Actualizar métricas
    totalProductosSpan.textContent = productosFiltrados.length;
    const totalAcumulado = calcularTotalCatalogo(productosFiltrados);
    totalPrecioSpan.textContent = `$${totalAcumulado.toLocaleString("en-US", { minimumFractionDigits: 2 })}`;

    // Renderizar tarjetas con .map().join('')
    if (productosFiltrados.length === 0) {
        contenedorCatalogo.innerHTML = "";
        sinResultadosBox.classList.remove("oculto");
    } else {
        sinResultadosBox.classList.add("oculto");
        contenedorCatalogo.innerHTML = productosFiltrados.map(crearTarjetaProductoHTML).join("");
    }
}


// ==========================================================================
// ⏱️ HORA 3: [BLOQUE 3] - Asincronismo y Fetch a la API
// ==========================================================================

async function descargarCatalogoAPI() {
    // Estado 1: Loading
    estadoLoading.classList.remove("oculto");
    estadoError.classList.add("oculto");

    try {
        // TODO: Descargar en paralelo con Promise.all() las categorías:
        // "https://dummyjson.com/products/category/smartphones"
        // "https://dummyjson.com/products/category/laptops"
        // "https://dummyjson.com/products/category/mobile-accessories"
        // Guardar la combinación plana en productosEnMemoria y llamar a aplicarFiltros()
        
    } catch (error) {
        // Estado 3: Error
        console.error("Error al descargar:", error.message);
        estadoLoading.classList.add("oculto");
        estadoError.classList.remove("oculto");
    }
}

btnReintentar.addEventListener("click", () => {
    descargarCatalogoAPI();
});


// ==========================================================================
// ⏱️ HORA 4: [BLOQUE 4] - Persistencia Local (LocalStorage) y Delegación
// ==========================================================================

const FAVORITOS_KEY = "techstore_favoritos_v1";

// 4.1 Obtener array de favoritos desde localStorage
function obtenerFavoritos() {
    // TODO: Leer con localStorage.getItem y parsear con JSON.parse
    
}

// 4.2 Saber si un producto es favorito
function esProductoFavorito(id) {
    return obtenerFavoritos().includes(id);
}

// 4.3 Alternar favorito (Guardar / Quitar)
function alternarFavorito(id) {
    // TODO: Si está en favoritos, quitarlo; si no, agregarlo.
    // Guardar en localStorage con JSON.stringify, actualizar badge y llamar a aplicarFiltros()
    
}

// 4.4 Actualizar el badge en el header
function actualizarBadgeFavoritos() {
    badgeFavoritos.textContent = obtenerFavoritos().length;
}

// 4.5 Delegación de Eventos en el contenedor del catálogo
contenedorCatalogo.addEventListener("click", (evento) => {
    const botonFav = evento.target.closest(".btn-fav-card");
    if (!botonFav) return;

    const idProducto = Number(botonFav.dataset.id);
    alternarFavorito(idProducto);
});


// ==========================================================================
// 🚀 INICIALIZACIÓN DE LA APLICACIÓN
// ==========================================================================
actualizarBadgeFavoritos();
descargarCatalogoAPI();
