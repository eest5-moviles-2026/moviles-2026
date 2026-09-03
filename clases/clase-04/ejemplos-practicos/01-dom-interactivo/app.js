/* ==========================================================================
   LABORATORIO 01: DOM Y EVENTOS INTERACTIVOS (GUÍA EXPLICATIVA)
   Materia: Desarrollo de Software para Plataformas Móviles (7° Año)
   Profesor: Axel Castellano Gutiérrez
   ========================================================================== */

/* 
   💡 ¿CÓMO PROBAR ESTE EJEMPLO?
   1. Hacé click derecho en 'index.html' -> "Open with Live Server".
   2. En tu navegador apretá F12 y andá a la pestaña "Console".
   3. Hacé click en el botón de modo oscuro, escribí en el buscador o tocá los botones de sección.
*/

console.log("🚀 [Lab 01] Iniciando laboratorio de DOM y Eventos...");

// ==========================================================================
// 1. SELECCIÓN DE ELEMENTOS DEL DOM
// ==========================================================================
// document.querySelector: Busca el PRIMER elemento que coincida con el selector CSS (#id, .clase, etiqueta).
// document.querySelectorAll: Busca TODOS los elementos que coincidan y devuelve una lista (NodeList).

const btnModoLectura = document.querySelector("#btn-modo-lectura");
const iconoLuz = document.querySelector("#icono-luz");
const inputBuscador = document.querySelector("#buscador-noticias");
const botonesTag = document.querySelectorAll(".btn-tag");

console.log("📌 Elementos capturados del HTML:");
console.log(" - Botón modo lectura:", btnModoLectura);
console.log(" - Icono interno:", iconoLuz);
console.log(" - Campo buscador:", inputBuscador);
console.log(" - Colección de botones (NodeList):", botonesTag);


// ==========================================================================
// 2. ALTERNAR MODO OSCURO (classList.toggle y .contains)
// ==========================================================================
// En lugar de cambiar colores elemento por elemento con JS (estilos inline),
// le agregamos o quitamos una clase CSS al <body>. El archivo CSS se encarga del resto.

btnModoLectura.addEventListener("click", () => {
    console.log("\n🖱️ [EVENTO CLICK] Se hizo click en el botón de tema.");
    
    // classList.toggle("clase"):
    // Si el body YA TIENE la clase 'dark-mode', se la QUITA.
    // Si el body NO TIENE la clase 'dark-mode', se la AGREGA.
    document.body.classList.toggle("dark-mode");
    console.log(" -> Clases actuales en el <body>:", document.body.className || "(ninguna)");

    // classList.contains("clase"):
    // Devuelve un valor booleano: 'true' si la clase está presente en el elemento, 'false' si no está.
    const esOscuro = document.body.classList.contains("dark-mode");
    console.log(" -> ¿El body tiene activa la clase 'dark-mode'?:", esOscuro);

    // Operador ternario (condicion ? valorSiVerdadero : valorSiFalso):
    // Si esOscuro es true, mostramos el sol ☀️. Si es false, mostramos la luna 🌙.
    iconoLuz.textContent = esOscuro ? "☀️" : "🌙";
    console.log(" -> Icono actualizado a:", iconoLuz.textContent);
});


// ==========================================================================
// 3. CAPTURA DE TEXTO EN TIEMPO REAL (Evento 'input')
// ==========================================================================
// El evento 'input' se dispara CADA VEZ que el usuario presiona una tecla o borra texto.
// A diferencia de 'change' (que espera a que el usuario haga click afuera o presione Enter),
// 'input' nos permite hacer búsquedas instantáneas y reactivas.

inputBuscador.addEventListener("input", (evento) => {
    // evento.target hace referencia directa al elemento que disparó el evento (en este caso, el input).
    // .value contiene el texto actual que está escrito adentro del input.
    const textoEscrito = evento.target.value;

    console.log(`\n⌨️ [EVENTO INPUT] El usuario está tipeando: "${textoEscrito}"`);
    console.log(` -> Longitud del texto: ${textoEscrito.length} caracteres.`);
});


// ==========================================================================
// 4. RECORRER COLECCIONES Y GESTIONAR ESTADO ACTIVO (.forEach)
// ==========================================================================
// querySelectorAll nos devuelve un NodeList. Podemos recorrerlo con .forEach()
// para escuchar el click de cada botón individualmente.

botonesTag.forEach((boton, indice) => {
    boton.addEventListener("click", () => {
        // Leemos el atributo personalizado data-seccion que definimos en el HTML:
        const seccionElegida = boton.dataset.seccion;
        console.log(`\n🏷️ [CLICK EN BOTÓN #${indice + 1}] Sección seleccionada: "${seccionElegida}"`);

        // PASO 1: Recorremos TODOS los botones y les removemos la clase 'activo'.
        // Esto asegura que nunca queden dos botones resaltados al mismo tiempo.
        botonesTag.forEach(b => b.classList.remove("activo"));

        // PASO 2: Le agregamos la clase 'activo' ÚNICAMENTE al botón que acaba de recibir el click.
        boton.classList.add("activo");

        console.log(` -> Clase 'activo' asignada con éxito a: [${boton.textContent.trim()}]`);
    });
});
