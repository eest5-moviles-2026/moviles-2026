/* ==========================================================================
   LABORATORIO 02: HOFs Y TRANSFORMACIÓN DE DATOS (GUÍA EXPLICATIVA)
   Materia: Desarrollo de Software para Plataformas Móviles (7° Año)
   Profesor: Axel Castellano Gutiérrez
   ========================================================================== */

/* 
   💡 ¿CÓMO PROBAR ESTE EJEMPLO?
   1. Hacé click derecho en 'index.html' -> "Open with Live Server".
   2. En tu navegador apretá F12 y andá a la pestaña "Console".
   3. Escribí en el buscador de juegos o cambiá el select de género.
   4. Mirá en consola cómo se filtran los datos paso a paso sin modificar el array original.
*/

console.log("🚀 [Lab 02] Iniciando catálogo de videojuegos y transformación con HOFs...");

// ==========================================================================
// 1. DATOS EN MEMORIA (Inmutabilidad)
// ==========================================================================
// Este array representa nuestra "fuente de la verdad".
// Las funciones de orden superior (.filter, .map, .reduce) NUNCA deben modificar
// (mutar) este array original, sino generar nuevos arrays o valores derivados.

const catalogoVideojuegos = [
    { id: 1, titulo: "The Witcher 3: Wild Hunt", genero: "RPG", precio: 39.99, horas: 120, rating: 9.8 },
    { id: 2, titulo: "Cyberpunk 2077", genero: "RPG", precio: 59.99, horas: 65, rating: 8.6 },
    { id: 3, titulo: "Elden Ring", genero: "RPG", precio: 59.99, horas: 95, rating: 9.6 },
    { id: 4, titulo: "God of War Ragnarök", genero: "Acción", precio: 69.99, horas: 40, rating: 9.5 },
    { id: 5, titulo: "Doom Eternal", genero: "Acción", precio: 29.99, horas: 18, rating: 8.9 },
    { id: 6, titulo: "The Legend of Zelda: Tears of the Kingdom", genero: "Aventura", precio: 69.99, horas: 110, rating: 9.7 },
    { id: 7, titulo: "Hollow Knight", genero: "Aventura", precio: 14.99, horas: 35, rating: 9.2 }
];

console.log("📦 Catálogo original en memoria:", catalogoVideojuegos);

// Nodos del DOM
const inputNombre = document.querySelector("#filtro-nombre");
const selectGenero = document.querySelector("#filtro-genero");
const totalJuegosSpan = document.querySelector("#total-juegos");
const totalPrecioSpan = document.querySelector("#total-precio");
const promedioHorasSpan = document.querySelector("#promedio-horas");
const contenedorJuegos = document.querySelector("#contenedor-juegos");


// ==========================================================================
// 2. DESTRUCTURING Y TEMPLATE LITERALS
// ==========================================================================
// En lugar de recibir 'juego' y escribir 'juego.id', 'juego.titulo', 'juego.precio',
// usamos Destructuring directamente en los parámetros: { id, titulo, genero, precio, ... }
// para extraer las propiedades como variables locales inmediatas.

function crearTarjetaJuegoHTML({ id, titulo, genero, precio, horas, rating }) {
    // Las comillas invertidas (``) nos permiten escribir HTML multilínea
    // e intercalar variables usando la sintaxis ${variable}.
    return `
        <article class="card" data-id="${id}">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                <span class="badge">${genero}</span>
                <span style="color: #fbbf24; font-weight: bold;">★ ${rating}</span>
            </div>
            <h3 style="margin: 0.5rem 0; font-size: 1.1rem;">${titulo}</h3>
            <div style="display: flex; justify-content: space-between; color: #94a3b8; font-size: 0.9rem; margin-top: 1rem;">
                <span>⏳ ${horas} hs</span>
                <span style="color: #4ade80; font-weight: bold;">$${precio.toFixed(2)}</span>
            </div>
        </article>
    `;
}


// ==========================================================================
// 3. FILTRADO DECLARATIVO (.filter)
// ==========================================================================
// .filter() recorre cada elemento del array y ejecuta un callback.
// Si el callback retorna 'true', el elemento se INCLUYE en el nuevo array resultante.
// Si retorna 'false', el elemento se DESCARTA.
// El array original nunca se modifica.

function filtrarJuegos(lista, texto, genero) {
    // Normalizamos el texto de búsqueda: pasamos a minúsculas y quitamos espacios sobrantes.
    const textoLimpio = texto.toLowerCase().trim();
    console.log(`\n🔍 [FILTER] Evaluando catálogo con: Texto="${textoLimpio}" | Género="${genero}"`);

    return lista.filter(juego => {
        // 1. ¿El título del juego incluye el texto que escribió el usuario?
        const coincideTexto = juego.titulo.toLowerCase().includes(textoLimpio);

        // 2. ¿El género coincide con el select, o el usuario eligió ver 'todos'?
        const coincideGenero = (genero === "todos") || (juego.genero.toLowerCase() === genero.toLowerCase());

        console.log(` -> Evaluando [${juego.titulo}]: Texto=${coincideTexto}, Género=${coincideGenero}`);

        // Ambas condiciones deben cumplirse simultáneamente (operador lógico AND &&):
        return coincideTexto && coincideGenero;
    });
}


// ==========================================================================
// 4. ACUMULACIÓN Y MÉTRICAS (.reduce)
// ==========================================================================
// .reduce() toma una lista y la reduce a un ÚNICO valor de salida (un número, un objeto, etc.).
// Recibe dos argumentos principales:
//  - Una función callback: (acumulador, elementoActual, indice) => nuevoAcumulador
//  - Un valor inicial para el acumulador (en este caso, 0).

function calcularMetricas(lista) {
    console.log("\n📊 [REDUCE] Calculando métricas del catálogo visible...");

    // Cálculo del precio total:
    const totalPrecio = lista.reduce((acumulador, juego, indice) => {
        const nuevoTotal = acumulador + juego.precio;
        console.log(`   Paso ${indice + 1}: Acumulado anterior ($${acumulador.toFixed(2)}) + Juego ($${juego.precio}) = $${nuevoTotal.toFixed(2)}`);
        return nuevoTotal;
    }, 0); // 👈 El '0' es el valor inicial donde arranca la suma

    // Cálculo del total de horas para obtener el promedio:
    const totalHoras = lista.reduce((acc, juego) => acc + juego.horas, 0);
    const promedioHoras = lista.length > 0 ? (totalHoras / lista.length) : 0;

    return { totalPrecio, promedioHoras };
}


// ==========================================================================
// 5. INTEGRACIÓN Y RENDERIZADO AL DOM (.map y .join)
// ==========================================================================
function actualizarVista() {
    const texto = inputNombre.value;
    const genero = selectGenero.value;

    // 1. Filtramos los juegos en memoria:
    const juegosFiltrados = filtrarJuegos(catalogoVideojuegos, texto, genero);
    console.log(`✅ [RESULTADO] Se encontraron ${juegosFiltrados.length} juegos coincidentes.`);

    // 2. Calculamos las métricas acumuladas:
    const { totalPrecio, promedioHoras } = calcularMetricas(juegosFiltrados);
    totalJuegosSpan.textContent = juegosFiltrados.length;
    totalPrecioSpan.textContent = `$${totalPrecio.toFixed(2)}`;
    promedioHorasSpan.textContent = `${promedioHoras.toFixed(0)} hs`;

    // 3. Transformamos cada objeto juego en su HTML con .map(), y luego
    // unificamos todo el array en un solo string gigante con .join("") para inyectarlo en el DOM:
    contenedorJuegos.innerHTML = juegosFiltrados
        .map(juego => crearTarjetaJuegoHTML(juego))
        .join("");
}

// Event Listeners:
inputNombre.addEventListener("input", actualizarVista);
selectGenero.addEventListener("change", actualizarVista);

// Carga Inicial:
actualizarVista();
