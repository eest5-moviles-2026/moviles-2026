/* ==========================================================================
   TECHSTORE MÓVIL - ORQUESTADOR PRINCIPAL (PLANTILLA DE ALUMNOS)
   Materia: Desarrollo de Software para Plataformas Móviles (7° 5ta)
   Profesor: Axel Castellano Gutiérrez
   ========================================================================== */

// ==========================================================================
// 📦 IMPORTACIÓN DE MÓDULOS ES6 (ES Modules)
// ==========================================================================
// TODO 1: Importar 'descargarProductosTech' desde './api.js'
// TODO 2: Importar 'obtenerFavoritos', 'alternarFavorito' y 'esProductoFavorito' desde './storage.js'
// TODO 3: Importar 'crearTarjetaProductoHTML', 'filtrarProductos' y 'calcularTotalCatalogo' desde './ui.js'
// (Escribí tus imports acá abajo):



// ==========================================================================
// 🎯 1. Selección de Nodos Principales del DOM (querySelector / querySelectorAll)
// ==========================================================================
// Seleccioná cada elemento del HTML usando su id (#) o clase (.):

// 🌓 Botón de cambio de tema y su icono de sol/luna:
const btnTema = null;            // TODO: document.querySelector('#btn-tema')
const iconoTema = null;          // TODO: document.querySelector('#icono-tema')

// ⭐ Botón del header para ver favoritos y su badge numérico contador:
const btnVerFavoritos = null;    // TODO: document.querySelector('#btn-ver-favoritos')
const badgeFavoritos = null;     // TODO: document.querySelector('#badge-favoritos-contador')

// 🔍 Input del buscador y colección de botones de categorías:
const inputBuscador = null;      // TODO: document.querySelector('#input-buscador')
const botonesFiltro = null;      // TODO: document.querySelectorAll('.btn-filtro')

// 📱 Contenedor donde se renderizan las tarjetas de productos:
const contenedorCatalogo = null; // TODO: document.querySelector('#contenedor-catalogo')

// 📊 Spans de la barra de métricas (total visibles y precio acumulado):
const totalProductosSpan = null; // TODO: document.querySelector('#total-productos-visibles')
const totalPrecioSpan = null;    // TODO: document.querySelector('#total-precio-acumulado')

// ⏳ Paneles de estado de la aplicación (loading, error, reintento y sin resultados):
const estadoLoading = null;      // TODO: document.querySelector('#estado-loading')
const estadoError = null;        // TODO: document.querySelector('#estado-error')
const btnReintentar = null;      // TODO: document.querySelector('#btn-reintentar')
const sinResultadosBox = null;   // TODO: document.querySelector('#sin-resultados')


// ==========================================================================
// 🧠 2. Estado Global en Memoria
// ==========================================================================
let productosEnMemoria = [];
let categoriaActual = "todas";

// ==========================================================================
// 🎨 3. Funciones de Renderizado y Actualización de UI
// ==========================================================================

function actualizarBadgeFavoritos() {
    badgeFavoritos.textContent = obtenerFavoritos().length;
}

function aplicarFiltros() {
    const texto = inputBuscador.value;
    const favoritosIds = obtenerFavoritos();
    const productosFiltrados = filtrarProductos(productosEnMemoria, texto, categoriaActual, favoritosIds);

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
        contenedorCatalogo.innerHTML = productosFiltrados
            .map(producto => crearTarjetaProductoHTML(producto, esProductoFavorito(producto.id)))
            .join("");
    }
}

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

// ==========================================================================
// 🌐 4. Carga Asíncrona del Catálogo (Consumo del módulo api.js)
// ==========================================================================
async function cargarCatalogo() {
    estadoLoading.classList.remove("oculto");
    estadoError.classList.add("oculto");
    contenedorCatalogo.innerHTML = "";

    try {
        // TODO: Invocar descargarProductosTech() y guardar en productosEnMemoria
        // Luego ocultar loading y llamar a aplicarFiltros()
        
    } catch (error) {
        console.error("Error al cargar productos:", error.message);
        estadoLoading.classList.add("oculto");
        estadoError.classList.remove("oculto");
    }
}

// ==========================================================================
// 🖱️ 5. Manejo de Eventos (Event Listeners & Delegación)
// ==========================================================================

// TODO 1: Modo Oscuro con classList.toggle en document.body
btnTema.addEventListener("click", () => {
    
});

// TODO 2: Botón de Favoritos en el Header
btnVerFavoritos.addEventListener("click", () => {
    activarFiltroCategoria("favoritos");
});

// TODO 3: Botones de Categorías
botonesFiltro.forEach(boton => {
    boton.addEventListener("click", () => {
        activarFiltroCategoria(boton.dataset.categoria);
    });
});

// TODO 4: Búsqueda en tiempo real
inputBuscador.addEventListener("input", () => {
    aplicarFiltros();
});

// TODO 5: Botón de Reintento ante fallas de red
btnReintentar.addEventListener("click", () => {
    cargarCatalogo();
});

// TODO 6: Delegación de Eventos en contenedorCatalogo para alternar favoritos
contenedorCatalogo.addEventListener("click", (evento) => {
    // Capturar boton con closest(".btn-fav-card"), alternar y refrescar UI
    
});

// ==========================================================================
// 🚀 6. Inicialización de la Aplicación
// ==========================================================================
actualizarBadgeFavoritos();
cargarCatalogo();
