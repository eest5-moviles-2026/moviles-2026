/* ==========================================================================
   LABORATORIO 03: FETCH ASÍNCRONO Y PROMISE.ALL (GUÍA EXPLICATIVA)
   Materia: Desarrollo de Software para Plataformas Móviles (7° Año)
   Profesor: Axel Castellano Gutiérrez
   ========================================================================== */

/* 
   💡 ¿CÓMO PROBAR ESTE EJEMPLO?
   1. Hacé click derecho en 'index.html' -> "Open with Live Server".
   2. En tu navegador apretá F12 y andá a las pestañas "Console" y "Network".
   3. Probá hacer click en "Descargar Usuarios" (secuencial) y luego en "Descargar con Promise.all" (paralelo).
   4. Mirá en Network cómo las peticiones paralelas arrancan al mismo tiempo ahorrando tiempo de carga.
*/

console.log("🚀 [Lab 03] Módulo de red asíncrono iniciado...");

// Nodos del DOM
const btnSecuencial = document.querySelector("#btn-fetch-secuencial");
const btnParalelo = document.querySelector("#btn-fetch-paralelo");
const estadoCarga = document.querySelector("#estado-carga");
const estadoError = document.querySelector("#estado-error");
const resultadoContenedor = document.querySelector("#resultado-contenedor");

function limpiarUI() {
    estadoCarga.classList.remove("oculto");
    estadoError.classList.add("oculto");
    resultadoContenedor.innerHTML = "";
}

// ==========================================================================
// 1. PETICIÓN SIMPLE CON FETCH Y ASYNC/AWAIT
// ==========================================================================
// 'async' declara que la función contendrá operaciones asíncronas.
// 'await' pausa la ejecución de la función hasta que la Promesa se resuelva,
// permitiéndonos escribir código asíncrono que se lee de forma secuencial y limpia.

async function descargarUsuarios() {
    limpiarUI();
    const url = "https://jsonplaceholder.typicode.com/users";
    console.log("\n📡 [FETCH SIMPLE] Iniciando petición a:", url);
    const inicio = performance.now();

    // try...catch es obligatorio al hacer peticiones de red para capturar
    // fallas de conexión, caídas de servidor o errores de parseo sin romper la app.
    try {
        // AbortSignal.timeout(6000) cancela la petición si el servidor no responde en 6 segundos.
        const res = await fetch(url, { signal: AbortSignal.timeout(6000) });
        console.log(" 👉 Código de respuesta HTTP:", res.status, res.statusText);

        // ¡IMPORTANTE! fetch() NO lanza un error ante códigos HTTP 404 o 500.
        // Siempre debemos verificar la propiedad 'res.ok' (es true si status está entre 200 y 299).
        if (!res.ok) {
            throw new Error(`Fallo en el servidor: Código HTTP ${res.status}`);
        }

        // res.json() también es asíncrono (devuelve una promesa) porque debe procesar el stream de datos:
        const usuarios = await res.json();
        const fin = performance.now();

        console.log(`✅ [ÉXITO] Recibidos ${usuarios.length} usuarios en ${(fin - inicio).toFixed(0)} ms.`);
        console.table(usuarios.slice(0, 4), ["id", "name", "email", "phone"]);

        estadoCarga.classList.add("oculto");
        resultadoContenedor.innerHTML = usuarios.slice(0, 5).map(u => `
            <div class="post-card">
                <strong>👤 ${u.name}</strong> (${u.email})<br>
                <small style="color: #94a3b8;">🏢 Compañía: ${u.company.name}</small>
            </div>
        `).join("");

    } catch (err) {
        console.error("❌ [ERROR] Falló la petición:", err.message);
        estadoCarga.classList.add("oculto");
        estadoError.classList.remove("oculto");
        estadoError.textContent = `Error: ${err.message}`;
    }
}


// ==========================================================================
// 2. DESCARGAS CONCURRENTES CON PROMISE.ALL()
// ==========================================================================
// ¿Por qué usar Promise.all?
// Si esperamos a que termine la petición A (ej: 400ms) para recién iniciar la B (400ms),
// la app tarda 800ms en total.
// Con Promise.all(), disparamos A y B AL MISMO TIEMPO en paralelo: el tiempo total es
// el que tarde la más lenta (400ms en lugar de 800ms).

async function descargarUsuariosYPostsEnParalelo() {
    limpiarUI();
    const urlUsers = "https://jsonplaceholder.typicode.com/users";
    const urlPosts = "https://jsonplaceholder.typicode.com/posts";

    console.log("\n🚀 [PROMISE.ALL] Disparando 2 peticiones SIMULTÁNEAS en paralelo:");
    console.log(" 1. ", urlUsers);
    console.log(" 2. ", urlPosts);
    const inicio = performance.now();

    try {
        // Promise.all recibe un array de promesas y espera a que TODAS se cumplan:
        const [resUsers, resPosts] = await Promise.all([
            fetch(urlUsers, { signal: AbortSignal.timeout(6000) }),
            fetch(urlPosts, { signal: AbortSignal.timeout(6000) })
        ]);

        console.log(" 👉 Respuestas HTTP recibidas:", { users: resUsers.status, posts: resPosts.status });

        // Si alguna respuesta no fue exitosa, lanzamos un error:
        if (!resUsers.ok || !resPosts.ok) {
            throw new Error("Una de las peticiones falló en el servidor.");
        }

        // Parseamos los JSON también en paralelo:
        const [usuarios, posts] = await Promise.all([
            resUsers.json(),
            resPosts.json()
        ]);

        const fin = performance.now();
        console.log(`✅ [ÉXITO PARALELO] ¡Ambas descargas completadas en ${(fin - inicio).toFixed(0)} ms!`);
        console.log(` - Total usuarios descargados: ${usuarios.length}`);
        console.log(` - Total posts descargados: ${posts.length}`);

        estadoCarga.classList.add("oculto");
        resultadoContenedor.innerHTML = posts.slice(0, 4).map(post => {
            // Buscamos el autor de cada post en el array de usuarios:
            const autor = usuarios.find(u => u.id === post.userId)?.name || "Anónimo";
            return `
                <div class="post-card">
                    <h4>📝 ${post.title}</h4>
                    <p style="color: #cbd5e1; font-size: 0.9rem;">${post.body}</p>
                    <small style="color: #38bdf8;">✍️ Autor: ${autor}</small>
                </div>
            `;
        }).join("");

    } catch (err) {
        console.error("❌ [ERROR PARALELO] Falló alguna petición:", err.message);
        estadoCarga.classList.add("oculto");
        estadoError.classList.remove("oculto");
        estadoError.textContent = `Error: ${err.message}`;
    }
}

// Event Listeners:
btnSecuencial.addEventListener("click", descargarUsuarios);
btnParalelo.addEventListener("click", descargarUsuariosYPostsEnParalelo);
