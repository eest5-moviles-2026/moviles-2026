/* ==========================================================================
   LABORATORIO 04: LOCALSTORAGE Y DELEGACIÓN DE EVENTOS (GUÍA EXPLICATIVA)
   Materia: Desarrollo de Software para Plataformas Móviles (7° Año)
   Profesor: Axel Castellano Gutiérrez
   ========================================================================== */

/* 
   💡 ¿CÓMO PROBAR ESTE EJEMPLO?
   1. Hacé click derecho en 'index.html' -> "Open with Live Server".
   2. En tu navegador apretá F12 y andá a las pestañas "Console" y "Application" (sección Storage -> Local Storage).
   3. Hacé click en los corazones ❤️/🤍 de los superhéroes.
   4. Recargá la página con F5: ¡notá cómo tu equipo sigue guardado intacto!
*/

console.log("🚀 [Lab 04] Iniciando gestor de equipo de héroes con LocalStorage y Delegación...");

const STORAGE_KEY = "demo_heroes_favoritos";

// 1. Datos en Memoria
const listaHeroes = [
    { id: 101, nombre: "Spider-Man", poder: "Sentido arácnido y agilidad", universo: "Marvel" },
    { id: 102, nombre: "Batman", poder: "Intelecto y artes marciales", universo: "DC" },
    { id: 103, nombre: "Iron Man", poder: "Armadura de alta tecnología", universo: "Marvel" },
    { id: 104, nombre: "Wonder Woman", poder: "Fuerza divina y lazo de la verdad", universo: "DC" },
    { id: 105, nombre: "Doctor Strange", poder: "Hechicería y control temporal", universo: "Marvel" },
    { id: 106, nombre: "Flash", poder: "Supervelocidad", universo: "DC" }
];

// Nodos del DOM
const contenedorHeroes = document.querySelector("#contenedor-heroes");
const contadorEquipo = document.querySelector("#contador-equipo");
const storageRawSpan = document.querySelector("#storage-raw-json");
const btnVaciar = document.querySelector("#btn-vaciar-storage");


// ==========================================================================
// 2. PERSISTENCIA LOCAL (localStorage y JSON)
// ==========================================================================
// localStorage es un almacenamiento clave-valor síncrono que vive en el navegador.
// REGLA FUNDAMENTAL: localStorage SOLO acepta strings. No podemos guardar un array u objeto directamente.

// A. LECTURA (JSON.parse):
function leerFavoritosDeStorage() {
    // getItem devuelve el string almacenado o 'null' si la clave no existe:
    const raw = localStorage.getItem(STORAGE_KEY);
    console.log("📥 [STORAGE GET] String crudo leído desde localStorage:", raw);

    try {
        // JSON.parse convierte el string ' [101, 103] ' de nuevo a un Array de JS:
        return raw ? JSON.parse(raw) : [];
    } catch {
        return []; // Si el JSON está corrupto devolvemos array vacío por seguridad
    }
}

// B. MODIFICACIÓN Y GUARDADO (JSON.stringify):
function alternarHeroeFavorito(idHeroe) {
    let favoritos = leerFavoritosDeStorage();
    console.log(`\n⭐ [ALTERNAR FAVORITO] Evaluando héroe ID: ${idHeroe}.`);
    console.log(" -> Lista actual en memoria:", favoritos);

    // Si el ID ya existe en el array, lo quitamos filtrándolo:
    if (favoritos.includes(idHeroe)) {
        console.log(` ❌ El héroe #${idHeroe} ya pertenecía al equipo. Lo removemos con .filter().`);
        favoritos = favoritos.filter(id => id !== idHeroe);
    } else {
        // Si no existe, lo agregamos al final:
        console.log(` ➕ El héroe #${idHeroe} no estaba. Lo agregamos con .push().`);
        favoritos.push(idHeroe);
    }

    // JSON.stringify serializa el array [101, 102] a texto plano "[101,102]" para poder guardarlo:
    const stringSerializado = JSON.stringify(favoritos);
    localStorage.setItem(STORAGE_KEY, stringSerializado);
    console.log("💾 [STORAGE SET] Nuevo string guardado en el navegador:", stringSerializado);

    return favoritos;
}


// ==========================================================================
// 3. RENDERIZADO DINÁMICO
// ==========================================================================
function renderizarCatalogo() {
    const favoritos = leerFavoritosDeStorage();
    contadorEquipo.textContent = favoritos.length;
    storageRawSpan.textContent = localStorage.getItem(STORAGE_KEY) || "[]";

    contenedorHeroes.innerHTML = listaHeroes.map(heroe => {
        // Verificamos si este héroe específico está en el array de favoritos:
        const enEquipo = favoritos.includes(heroe.id);

        return `
            <div class="hero-card">
                <button class="btn-fav-hero ${enEquipo ? 'en-equipo' : ''}" data-id="${heroe.id}">
                    ${enEquipo ? '❤️' : '🤍'}
                </button>
                <h3 style="margin: 0 0 0.5rem 0;">${heroe.nombre}</h3>
                <span style="background: #374151; padding: 0.2rem 0.5rem; border-radius: 4px; font-size: 0.8rem;">${heroe.universo}</span>
                <p style="color: #9ca3af; font-size: 0.85rem; margin-top: 0.5rem;">${heroe.poder}</p>
            </div>
        `;
    }).join("");
}


// ==========================================================================
// 4. DELEGACIÓN DE EVENTOS (.closest)
// ==========================================================================
// En lugar de colocarle un .addEventListener("click") a cada uno de los botones
// (lo cual consume memoria y falla si las tarjetas se vuelven a crear con innerHTML),
// colocamos UN SOLO listener en el elemento contenedor padre (#contenedor-heroes).

contenedorHeroes.addEventListener("click", (evento) => {
    console.log("\n🖱️ [EVENTO CLICK EN CONTENEDOR] Elemento clickeado:", evento.target);

    // .closest(".btn-fav-hero"):
    // Busca si el elemento clickeado (o alguno de sus ancestros) coincide con la clase '.btn-fav-hero'.
    // Si el usuario clickeó el texto, la tarjeta o el título, botonFav será 'null'.
    const botonFav = evento.target.closest(".btn-fav-hero");

    if (!botonFav) {
        console.log(" ℹ️ Se clickeó la tarjeta pero NO el botón de favorito. Se ignora la acción.");
        return; // Salimos de la función
    }

    // Leemos el atributo data-id que colocamos en el botón HTML y lo convertimos a número:
    const idHeroe = Number(botonFav.dataset.id);
    console.log(` 🎯 ¡Click confirmado en el botón de favorito del héroe ID ${idHeroe}!`);

    // Alternamos el estado y volvemos a renderizar la vista:
    alternarHeroeFavorito(idHeroe);
    renderizarCatalogo();
});


// Vaciar Storage (Para reiniciar las pruebas):
btnVaciar.addEventListener("click", () => {
    localStorage.removeItem(STORAGE_KEY);
    console.log("🗑️ [STORAGE] Se vació la clave en localStorage.");
    renderizarCatalogo();
});

// Carga Inicial:
renderizarCatalogo();
