# 📱 Guía de Teoría: Progressive Web Apps (PWA), Web App Manifest & Service Workers

**Materia:** Desarrollo de Software para Plataformas Móviles  
**Profesor:** Axel Castellano Gutiérrez  

---

## 📑 Índice de Contenidos

1. [🌟 1. Introducción a las Progressive Web Apps (PWA)](#-1-introducción-a-las-progressive-web-apps-pwa)
   - [1.1 El Gran Problema de las Apps Nativas](#11-el-gran-problema-de-las-apps-nativas)
   - [1.2 ¿Qué es una PWA?](#12-qué-es-una-pwa)
   - [1.3 Los Tres Pilares de una PWA](#13-los-tres-pilares-de-una-pwa)
2. [📄 2. El Manifiesto de la Aplicación (`manifest.json`)](#-2-el-manifiesto-de-la-aplicación-manifestjson)
   - [2.1 Anatomía del `manifest.json`](#21-anatomía-del-manifestjson)
   - [2.2 Propiedades Explicadas en Detalle](#22-propiedades-explicadas-en-detalle)
   - [2.3 Los Íconos y el Formato Maskable](#23-los-íconos-y-el-formato-maskable)
   - [2.4 Vinculación en el HTML y Compatibilidad con iOS (Apple)](#24-vinculación-en-el-html-y-compatibilidad-con-ios-apple)
3. [⚙️ 3. Fundamentos del Service Worker](#️-3-fundamentos-del-service-worker)
   - [3.1 ¿Qué es un Service Worker?](#31-qué-es-un-service-worker)
   - [3.2 El Hilo Principal vs. El Hilo del Worker](#32-el-hilo-principal-vs-el-hilo-del-worker)
   - [3.3 La Analogía de la Aduana Portuaria](#33-la-analogía-de-la-aduana-portuaria)
4. [🔄 4. Ciclo de Vida del Service Worker](#-4-ciclo-de-vida-del-service-worker)
   - [4.1 Fase 1: Registro (`register`)](#41-fase-1-registro-register)
   - [4.2 Fase 2: Instalación (`install`) y Pre-cacheo](#42-fase-2-instalación-install-y-pre-cacheo)
   - [4.3 Fase 3: Activación (`activate`) y Limpieza](#43-fase-3-activación-activate-y-limpieza)
   - [4.4 Fase 4: Intercepción de Peticiones (`fetch`)](#44-fase-4-intercepción-de-peticiones-fetch)
5. [🗄️ 5. Estrategias de Almacenamiento en Caché (`CacheStorage`)](#️-5-estrategias-de-almacenamiento-en-caché-cachestorage)
   - [5.1 Estrategia A: Cache First (Caché Primero)](#51-estrategia-a-cache-first-caché-primero)
   - [5.2 Estrategia B: Network First (Red Primero)](#52-estrategia-b-network-first-red-primero)
   - [5.3 Estrategia C: Network Only (Solo Red)](#53-estrategia-c-network-only-solo-red)
6. [📲 6. Experiencia de Instalación Personalizada (`beforeinstallprompt`)](#-6-experiencia-de-instalación-personalizada-beforeinstallprompt)
7. [🛠️ 7. Inspección, Debugging y Gotchas en el Laboratorio](#️-7-inspección-debugging-y-gotchas-en-el-laboratorio)
   - [7.1 Pestaña Application en DevTools](#71-pestaña-application-en-devtools)
   - [7.2 El Peligro del Caché en Desarrollo (Bypass for network)](#72-el-peligro-del-caché-en-desarrollo-bypass-for-network)
   - [7.3 Auditoría Automatizada con Lighthouse](#73-auditoría-automatizada-con-lighthouse)

---

## 🌟 1. Introducción a las Progressive Web Apps (PWA)

### 1.1 El Gran Problema de las Apps Nativas
Durante años, si una empresa o desarrollador quería tener una aplicación en el celular de un usuario, estaba obligado a crear una **App Nativa**:
* Desarrollar en **Kotlin o Java** con Android Studio para celulares Android.
* Desarrollar en **Swift u Objective-C** con Xcode para iPhones (requiriendo obligatoriamente una computadora Mac).
* Pagar **tarifas anuales de desarrollador** (US$ 25 en Google Play, US$ 99 por año en Apple Store).
* Esperar **días o semanas** para que una tienda revise y apruebe una simple actualización o arreglo de un bug.
* Exigirle al usuario descargar archivos pesados (50 MB a 200 MB) que saturan el almacenamiento del celular.

En el entorno escolar y en equipos ágiles de trabajo, este esquema es inviable: las computadoras de la escuela no soportan emuladores pesados y no se puede obligar a nadie a pagar licencias de publicación.

### 1.2 ¿Qué es una PWA?
Una **Progressive Web App (PWA)** es una aplicación construida con las tecnologías estándar de la web (**HTML5, CSS3 y JavaScript**), pero enriquecida con capacidades modernas de los navegadores que le permiten:
1. **Instalarse en la pantalla de inicio** del teléfono o escritorio, como si fuera una app nativa descargada de la tienda.
2. **Ejecutarse en ventana independiente (*standalone*)**, eliminando por completo la barra de direcciones de URL, botones de navegación y pestañas del navegador.
3. **Funcionar sin conexión a internet (*offline*)**, cargando la interfaz al instante gracias al almacenamiento en caché local.
4. **Actualizarse en tiempo real**: apenas se sube un cambio a GitHub y Vercel, todos los usuarios reciben la nueva versión sin tener que ir a ninguna tienda.
5. **Ocupar menos de 2 MB**, siendo ultra ligera y rápida.

```text
┌────────────────────────────────────────────────────────────────────────┐
│                        ESPECTRO DE APLICACIONES                        │
├─────────────────────────┬─────────────────────────┬────────────────────┤
│ SITIO WEB CLÁSICO       │ PROGRESSIVE WEB APP     │ APP NATIVA PURA    │
├─────────────────────────┼─────────────────────────┼────────────────────┤
│ • Corre solo en browser │ • Instalable con icono  │ • Descarga store   │
│ • Requiere 100% internet│ • Soporte Offline total │ • Soporte Offline  │
│ • Con barra de URL      │ • Pantalla Standalone   │ • Pantalla nativa  │
│ • Una URL pública       │ • Rápida y ultra ligera │ • Pesa 100+ MB     │
└─────────────────────────┴─────────────────────────┴────────────────────┘
```

### 1.3 Los Tres Pilares de una PWA
Para que Google Chrome, Safari o Edge reconozcan una página web como PWA y habiliten el botón de instalación, se requieren **3 condiciones técnicas obligatorias**:

1. **Protocolo Seguro (HTTPS):** La aplicación debe servirse bajo cifrado SSL/HTTPS (en desarrollo local, `http://localhost` está exento de esta regla para permitir pruebas).
2. **Web App Manifest (`manifest.json`):** Un archivo JSON que le indica al sistema operativo el nombre de la app, sus colores de marca y qué ícono colocar en la pantalla del celular.
3. **Service Worker (`sw.js`):** Un script de JavaScript en segundo plano que gestiona el almacenamiento en caché y permite que la app abra aunque el usuario no tenga internet o esté en modo avión.

---

## 📄 2. El Manifiesto de la Aplicación (`manifest.json`)

El **Web App Manifest** es la cédula de identidad de la PWA. Es un archivo de configuración estándar que le describe al sistema operativo cómo debe comportarse la aplicación una vez instalada.

Se guarda habitualmente en la raíz de la carpeta pública del frontend:  
`frontend/manifest.json` (o `frontend/manifest.webmanifest`).

### 2.1 Anatomía del `manifest.json`

```json
{
  "name": "Sistema de Gestión de Biblioteca - EEST N° 5",
  "short_name": "Biblioteca",
  "description": "Sistema PWA para gestión de préstamos, catálogo e inventario bibliotecario",
  "start_url": "/index.html",
  "scope": "/",
  "display": "standalone",
  "orientation": "portrait",
  "background_color": "#1a1a2e",
  "theme_color": "#0f3460",
  "icons": [
    {
      "src": "/assets/icons/icon-192x192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "any maskable"
    },
    {
      "src": "/assets/icons/icon-512x512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "any maskable"
    }
  ]
}
```

### 2.2 Propiedades Explicadas en Detalle

* **`name`:** El nombre formal completo de la aplicación. Es el que aparece en la ventana de confirmación cuando el usuario presiona "Instalar".
* **`short_name`:** El nombre corto que aparecerá **debajo del ícono en la pantalla de inicio del celular**. Debe ser breve (máximo 10 a 12 caracteres) para evitar que el sistema operativo lo corte con puntos suspensivos (`Bibliot...`).
* **`start_url`:** La ruta relativa que se abrirá cuando el usuario toque el ícono de la app instalada. En general es `/index.html` o `/login.html`.
* **`scope`:** Define qué páginas pertenecen a la PWA. Si el usuario navega a una URL fuera del `scope`, el navegador saldrá del modo standalone y abrirá la pestaña normal.
* **`display`:** Controla la apariencia visual de la ventana. Tiene 4 valores posibles:
  1. **`standalone` (El recomendado para PWAs):** Oculta toda la barra de direcciones, botones de recargar y controles del navegador. Parece una aplicación 100% nativa.
  2. `fullscreen`: Oculta incluso la barra de estado del celular (hora, batería). Ideal para juegos.
  3. `minimal-ui`: Deja solo una flecha mínima de volver atrás.
  4. `browser`: Se abre como una pestaña normal de Chrome.
* **`orientation`:** Define si la app permite rotación (`"any"`) o si bloquea la pantalla en modo vertical (`"portrait"`), ideal para apps de gestión móvil.
* **`background_color`:** El color de fondo que se dibuja en la pantalla de bienvenida (**Splash Screen**) durante el segundo que tarda la app en iniciar.
* **`theme_color`:** El color que tiñe la barra de estado del celular (donde está la batería, señal y reloj), logrando que la interfaz se fusione con el hardware del teléfono.

### 2.3 Los Íconos y el Formato Maskable
El sistema operativo necesita redimensionar los íconos según el dispositivo:
* **192x192 px:** Utilizado para la pantalla de inicio de celulares estándar.
* **512x512 px:** Utilizado para la pantalla de bienvenida (Splash Screen) y monitores de alta resolución.
* **`"purpose": "any maskable"`:** En Android moderno, los íconos no son cuadrados: algunos teléfonos los recortan en círculos, otros en cuadrados redondeados o hexágonos. Un ícono *maskable* asegura que el logo tenga suficiente margen de seguridad para que ningún recorte le corte letras o bordes importantes.

### 2.4 Vinculación en el HTML y Compatibilidad con iOS (Apple)
Para que el navegador detecte el archivo, se debe vincular en el `<head>` de **cada página HTML**:

```html
<!-- Enlace estándar al Manifiesto -->
<link rel="manifest" href="/manifest.json">

<!-- Color de la barra de estado en Android -->
<meta name="theme-color" content="#0f3460">

<!-- Configuración especial obligatoria para Apple iOS (Safari) -->
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<meta name="apple-mobile-web-app-title" content="Biblioteca">
<link rel="apple-touch-icon" href="/assets/icons/icon-192x192.png">
```

> **Nota sobre iOS:** Los dispositivos Apple no leen todas las propiedades del `manifest.json`. Por eso es obligatorio incluir las etiquetas `<meta name="apple-mobile-web-app-...">` para que en iPhones la opción "Agregar a Inicio" oculte Safari y se comporte como app independiente.

---

## ⚙️ 3. Fundamentos del Service Worker

Si el Manifiesto es la cédula de identidad de la PWA, el **Service Worker** es su motor.

### 3.1 ¿Qué es un Service Worker?
Un **Service Worker** es un archivo de JavaScript especial (`sw.js`) que el navegador ejecuta en un **hilo separado en segundo plano**, totalmente independiente de la página web.

A diferencia del JavaScript tradicional:
* **NO tiene acceso al DOM:** No puede hacer `document.getElementById()`, ni cambiar estilos, ni escuchar eventos de teclado.
* **Vive aunque cierres la pestaña:** Puede seguir ejecutándose o despertarse ante eventos de sistema.
* **Es un Proxy Programable de Red:** Se ubica físicamente en el medio entre tu aplicación web y la conexión a internet. **Cada petición de red (`fetch`, imágenes, CSS, scripts) pasa obligatoriamente por sus manos**.

### 3.2 El Hilo Principal vs. El Hilo del Worker

```text
┌────────────────────────────────────────────────────────┐
│ HILO PRINCIPAL (UI Thread)                             │
│ • Maneja el DOM, botones, animaciones, inputs          │
│ • Si se bloquea (cálculo pesado), la pantalla se congela│
└──────────────────────────┬─────────────────────────────┘
                           │ Pide recursos (fetch)
                           ▼
┌────────────────────────────────────────────────────────┐
│ SERVICE WORKER (Background Thread - sw.js)             │
│ • Corre en segundo plano sin congelar la pantalla       │
│ • Intercepta la petición: ¿Tengo esto en caché?        │
└─────────────┬────────────────────────────┬─────────────┘
              │ SI                         │ NO
              ▼                            ▼
┌──────────────────────────┐  ┌──────────────────────────┐
│ CACHE STORAGE LOCAL      │  │ INTERNET (Servidor Node) │
│ (0 milisegundos de delay)│  │ (Requiere conexión Wi-Fi) │
└──────────────────────────┘  └──────────────────────────┘
```

### 3.3 La Analogía de la Aduana Portuaria
Imaginen que su aplicación web es una ciudad y el servidor remoto es otro país:
* El **Service Worker** es el **agente aduanero en el puerto**.
* Cuando la ciudad necesita un recurso (por ejemplo, el archivo `estilo-general.css` o el logo de la escuela):
  1. El comensal pide el archivo.
  2. El aduanero frena la orden y revisa su **depósito local (CacheStorage)**.
  3. Si el archivo ya está en el depósito, lo entrega al instante sin gastar datos ni esperar conexión.
  4. Si el archivo no está o es información nueva, deja salir el barco a internet para buscarlo y, de regreso, guarda una copia en el depósito para la próxima vez.

---

## 🔄 4. Ciclo de Vida del Service Worker

Un Service Worker atraviesa **4 etapas cronológicas bien marcadas**:

```text
1. REGISTRO (en app.js) ──► 2. INSTALACIÓN (sw.js) ──► 3. ACTIVACIÓN (sw.js) ──► 4. OPERACIÓN (fetch)
```

---

### 4.1 Fase 1: Registro (`register`)
Ocurre desde el JavaScript normal de la página web (`frontend/js/inicio.js` o `app.js`). Comprueba si el navegador soporta esta tecnología y registra el archivo del worker:

```javascript
// frontend/js/app.js - Registro seguro de Service Worker
if ("serviceWorker" in navigator) {
    window.addEventListener("load", async () => {
        try {
            const registro = await navigator.serviceWorker.register("/sw.js");
            console.log("✅ Service Worker registrado con éxito en el scope:", registro.scope);
        } catch (error) {
            console.error("❌ Falló el registro del Service Worker:", error.message);
        }
    });
}
```

> **¿Dónde debe colocarse el archivo `sw.js`?**  
> Siempre en la **raíz del frontend** (`frontend/sw.js`). Si lo colocan adentro de una subcarpeta como `frontend/js/sw.js`, el worker solo podrá controlar las páginas de esa subcarpeta y no podrá interceptar las páginas principales.

---

### 4.2 Fase 2: Instalación (`install`) y Pre-cacheo
Ocurre una sola vez cuando el navegador detecta el archivo `sw.js` por primera vez o nota que cambió aunque sea un solo byte.

Acá es donde se descarga y almacena el **App Shell** (el cascarón mínimo de archivos necesarios para que la app dibuje la pantalla aunque no haya internet):

```javascript
// frontend/sw.js - Fase de Instalación
const CACHE_NAME = "biblioteca-app-v1";

// Archivos estáticos fundamentales (App Shell)
const RECURSOS_APP_SHELL = [
    "/",
    "/index.html",
    "/login.html",
    "/css/estilo-general.css",
    "/css/index.css",
    "/js/api.js",
    "/js/inicio.js",
    "/manifest.json",
    "/assets/icons/icon-192x192.png"
];

self.addEventListener("install", (evento) => {
    console.log("⚙️ Service Worker: Instalando...");

    evento.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log("📦 Service Worker: Guardando App Shell en caché...");
            return cache.addAll(RECURSOS_APP_SHELL);
        }).then(() => {
            // Fuerza al nuevo worker a tomar el control sin esperar a que se cierre la pestaña
            return self.skipWaiting();
        })
    );
});
```

* **`caches.open(CACHE_NAME)`:** Abre (o crea) un almacén de claves y valores en el disco del navegador.
* **`cache.addAll(RECURSOS_APP_SHELL)`:** Descarga todos los archivos del array y los guarda localmente. **Atención:** Si un solo archivo del array falla (por ejemplo, pusiste un nombre que da 404), la instalación completa del Service Worker se cancela.
* **`self.skipWaiting()`:** Le ordena al Service Worker que no espere a que el usuario cierre y vuelva a abrir el navegador para activarse.

---

### 4.3 Fase 3: Activación (`activate`) y Limpieza
Ocurre cuando el nuevo Service Worker toma el control. Su tarea principal es **hacer limpieza**: borrar las cachés viejas para que los usuarios no se queden con código desactualizado de semanas anteriores.

```javascript
// frontend/sw.js - Fase de Activación y Purga
self.addEventListener("activate", (evento) => {
    console.log("🚀 Service Worker: Activado y listo para operar.");

    evento.waitUntil(
        caches.keys().then((nombresDeCaches) => {
            return Promise.all(
                nombresDeCaches.map((cacheExistente) => {
                    // Si el caché almacenado no coincide con la versión actual, lo borro
                    if (cacheExistente !== CACHE_NAME) {
                        console.log("🧹 Borrando caché obsoleto:", cacheExistente);
                        return caches.delete(cacheExistente);
                    }
                })
            );
        }).then(() => {
            // Reclama el control de todos los clientes abiertos de inmediato
            return self.clients.claim();
        })
    );
});
```

---

### 4.4 Fase 4: Intercepción de Peticiones (`fetch`)
Cada vez que el navegador pide una imagen, un script, un archivo CSS o hace un `fetch()` a la API, se dispara el evento `fetch` en el Service Worker.

Aquí es donde decidimos qué estrategia utilizar para responder:

```javascript
// frontend/sw.js - Intercepción de Peticiones
self.addEventListener("fetch", (evento) => {
    evento.respondWith(
        // Busco primero si el recurso ya está guardado en el almacén de caché
        caches.match(evento.request).then((respuestaEnCache) => {
            if (respuestaEnCache) {
                // 1. Si está en caché, lo entrego al instante
                return respuestaEnCache;
            }

            // 2. Si no estaba en caché, salgo a buscarlo a internet normalmente
            return fetch(evento.request);
        })
    );
});
```

---

## 🗄️ 5. Estrategias de Almacenamiento en Caché (`CacheStorage`)

No todos los archivos de un sistema se tratan igual. Un logo o un archivo CSS no cambia casi nunca, mientras que una lista de libros prestados cambia minuto a minuto.

Existen **3 estrategias fundamentales**:

---

### 5.1 Estrategia A: Cache First (Caché Primero)
> **Filosofía:** *"Fijate en la caché. Si lo tenés, damelo ya. Si no lo tenés, buscalo en la red."*

* **Cuándo usarla:** Archivos estáticos del **App Shell** (CSS, logos, íconos, fuentes, scripts de librerías).
* **Ventaja:** La aplicación carga a velocidad instantánea (0 ms) porque no espera a que viaje el paquete por internet.

```text
[ Pantalla ] ──1. Pide recurso──► [ Service Worker ]
                                           │
                                  2. ¿Está en caché?
                                  ├──► SI ──► Devuelve recurso (Instantáneo)
                                  └──► NO ──► Sale a buscar a Internet
```

---

### 5.2 Estrategia B: Network First (Red Primero)
> **Filosofía:** *"Intentá buscar el dato más nuevo en el servidor. Si no hay internet o el servidor está caído, mostrame la última copia que tengas guardada."*

* **Cuándo usarla:** Consultas a endpoints de API (`GET /api/libros`, `GET /api/usuarios`).
* **Ventaja:** El usuario ve datos actualizados si está conectado; pero si se le corta el Wi-Fi en el aula, la app no muestra una pantalla en blanco sino los últimos datos cargados.

```javascript
// Ejemplo de estrategia Network First para APIs de lectura
self.addEventListener("fetch", (evento) => {
    if (evento.request.url.includes("/api/")) {
        evento.respondWith(
            fetch(evento.request)
                .then((respuestaDeRed) => {
                    // Clono la respuesta y actualizo la copia en caché de fondo
                    const copia = respuestaDeRed.clone();
                    caches.open("api-cache-v1").then((cache) => {
                        cache.put(evento.request, copia);
                    });
                    return respuestaDeRed;
                })
                .catch(() => {
                    // Si falló la red (offline), busco la última copia guardada
                    return caches.match(evento.request);
                })
        );
    }
});
```

---

### 5.3 Estrategia C: Network Only (Solo Red)
> **Filosofía:** *"Solo se permite conexión viva con el servidor. Si no hay red, la operación debe fallar ruidosamente."*

* **Cuándo usarla:** Métodos de mutación de datos (`POST`, `PUT`, `DELETE`) y operaciones de autenticación (`/login`).
* **Motivo crítico:** **Nunca se debe cachear un préstamo ni un pago**. Si un alumno pide un libro en modo offline y el navegador lo cachea falsamente, en la base de datos de Aiven nadie se entera y se rompe la consistencia del inventario.

---

## 📲 6. Experiencia de Instalación Personalizada (`beforeinstallprompt`)

Por defecto, los navegadores muestran un banner genérico y poco vistoso para invitar a instalar la app. Los desarrolladores profesionales capturan el evento `beforeinstallprompt` para controlar cuándo y cómo invitar al usuario con un botón integrado en el diseño.

### Implementación en el Frontend:

```html
<!-- En tu index.html o barra de navegación -->
<button id="btn-instalar-app" style="display: none;" class="btn-destacado">
    📲 Instalar Aplicación
</button>
```

```javascript
// frontend/js/app.js - Captura de evento de instalación
let eventoInstalacionDiferido = null;
const botonInstalar = document.getElementById("btn-instalar-app");

window.addEventListener("beforeinstallprompt", (evento) => {
    // 1. Evita que el navegador muestre el banner por defecto
    evento.preventDefault();

    // 2. Guarda el evento para dispararlo cuando el usuario haga clic
    eventoInstalacionDiferido = evento;

    // 3. Muestra nuestro botón personalizado en la pantalla
    if (botonInstalar) {
        botonInstalar.style.display = "block";
    }
});

botonInstalar?.addEventListener("click", async () => {
    if (!eventoInstalacionDiferido) return;

    // Dispara el diálogo nativo del celular
    eventoInstalacionDiferido.prompt();

    // Espera la decisión del usuario (Aceptó o Canceló)
    const { outcome } = await eventoInstalacionDiferido.userChoice;
    console.log("Resultado de instalación:", outcome);

    // Oculta el botón y limpia la variable
    eventoInstalacionDiferido = null;
    botonInstalar.style.display = "none";
});

// Detectar cuando ya se instaló con éxito
window.addEventListener("appinstalled", () => {
    console.log("🎉 ¡PWA instalada en el dispositivo con éxito!");
});
```

---

## 🛠️ 7. Inspección, Debugging y Gotchas en el Laboratorio

### 7.1 Pestaña Application en DevTools
Al presionar `F12` en Google Chrome o Microsoft Edge, la pestaña fundamental para trabajar con PWAs es **Application** (en el menú lateral izquierdo):

1. **Sección `Manifest`:**
   * Muestra si el archivo tiene errores de sintaxis JSON.
   * Renderiza una previsualización de los íconos cargados.
   * Permite probar la instalación forzada con el botón *Install*.
2. **Sección `Service Workers`:**
   * Muestra el estado del worker: un punto verde `Activated and is running`.
   * Permite tildar la casilla **Offline** para cortar la conexión del navegador y probar si la app carga sin internet.
   * Permite desinstalar el worker haciendo clic en *Unregister*.
3. **Sección `Storage` ➔ `Cache Storage`:**
   * Muestra las tablas de caché abiertas y cada uno de los archivos guardados en el disco con su tamaño y fecha.

---

### 7.2 El Peligro del Caché en Desarrollo (Bypass for network)

> ⚠️ **EL ERROR MÁS COMÚN DEL DESARROLLADOR DE PWAS:**  
> Modificás el archivo `estilo-general.css`, guardás con `Ctrl + S`, recargás la página y **el cambio no se ve**.  
> ¿Por qué? Porque el Service Worker tiene guardada la versión vieja en caché y la sirve antes de que el navegador vaya al disco a buscar el archivo modificado.

#### Cómo evitar este dolor de cabeza en el laboratorio:
En las DevTools (`F12`), en la pestaña **Application** ➔ **Service Workers**, activá siempre estas dos casillas mientras estés programando:

* ✅ **Update on reload:** Cada vez que recargás con F5, busca si hay un nuevo Service Worker.
* ✅ **Bypass for network:** Obliga al navegador a saltearse la caché del Service Worker mientras las DevTools estén abiertas, descargando siempre los archivos frescos del disco.

---

### 7.3 Auditoría Automatizada con Lighthouse

Google Chrome incluye una herramienta de auditoría profesional llamada **Lighthouse** (en la misma barra de F12 junto a Console y Network):

1. Abrir Lighthouse.
2. Tildar la categoría **Progressive Web App**.
3. Seleccionar dispositivo **Mobile**.
4. Presionar el botón **Analyze page load**.

Lighthouse verificará automáticamente:
* Si el `manifest.json` tiene todos los campos obligatorios.
* Si el Service Worker registra el evento `fetch`.
* Si la aplicación responde con código `200` en modo offline.
* Si los íconos cumplen con los estándares de diseño móvil.
* Si pasa todas las pruebas, obtendrán la **insignia dorada de PWA Oficial**, habilitando la instalación nativa en cualquier smartphone.
