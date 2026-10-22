# Clase 07: Progressive Web Apps (PWA) — Web App Manifest & Service Workers

**Materia:** Desarrollo de Software para Plataformas Móviles  
**Curso:** 7° Año - División 5ta (E.E.S.T N° 5)  
**Profesor:** Axel Castellano Gutiérrez  

---

## 🎯 Objetivos de la Clase
En esta clase vas a transformar el frontend de tu proyecto en una **Progressive Web App (PWA) instalable y con soporte offline**:

1. **Comprender qué es una PWA:** Entender por qué en esta materia desarrollamos aplicaciones web progresivas en lugar de compilar APKs pesadas con Android Studio.
2. **Web App Manifest (`manifest.json`):** Configurar la identidad visual, el nombre, íconos y comportamiento de pantalla completa (*standalone*) para que la app se instale en celulares y PCs.
3. **Fundamentos del Service Worker (`sw.js`):** Entender qué es un trabajador en segundo plano (*background worker*), su hilo independiente y por qué no tiene acceso directo al DOM.
4. **Ciclo de Vida del Service Worker:** Dominar las 4 fases fundamentales: Registro, Instalación, Activación e Intercepción de peticiones de red (`fetch`).
5. **Estrategias de Almacenamiento en Caché (`CacheStorage`):** Implementar las estrategias *Cache First* para el App Shell (HTML/CSS/JS estático) y *Network First* para APIs dinámicas.
6. **Experiencia de Usuario e Instalación:** Capturar el evento `beforeinstallprompt` para activar un botón personalizado de instalación en la interfaz.

---

## 📑 Recursos Teóricos y Guía Paso a Paso
Toda la explicación conceptual, diagramas de flujo, analogías arquitectónicas y la guía paso a paso están disponibles en:

👉 📘 [**Guía de Teoría: Progressive Web Apps, Manifest y Service Workers**](./pwa-teoria.md)

---

## 🚀 Consigna Práctica para el Proyecto Integrador

Cada equipo de proyecto grupal (Grupo A y Grupo B) debe aplicar los conceptos de PWA en su carpeta `frontend/`:

1. **Diseñar los Íconos:** Crear al menos dos íconos en formato PNG: `icon-192x192.png` y `icon-512x512.png` (pueden usar herramientas online como Canva o favicon.io) y guardarlos en `frontend/assets/icons/` o `frontend/img/`.
2. **Crear el `manifest.json`:** Redactar el manifiesto en la raíz de `frontend/` configurando `name`, `short_name`, `start_url`, `display: "standalone"`, `theme_color`, `background_color` y la matriz de íconos.
3. **Vincular en el `<head>` de todas las páginas HTML:** Enlazar el manifiesto con `<link rel="manifest" href="manifest.json">` y agregar las meta etiquetas para Android y iOS (`theme-color`, `apple-mobile-web-app-capable`).
4. **Registrar el Service Worker:** En el script principal del frontend (`app.js` o `inicio.js`), verificar si `navigator.serviceWorker` existe y registrar `sw.js`.
5. **Construir `sw.js`:**
   - Definir un nombre de caché con versión (ej: `const CACHE_NAME = 'biblioteca-v1'`).
   - En el evento `install`, pre-cachear el App Shell básico (HTML principal, hojas de estilo CSS y scripts JS esenciales).
   - En el evento `activate`, purgar las cachés viejas.
   - En el evento `fetch`, implementar la estrategia de responder desde caché si no hay internet.
6. **Auditoría DevTools:** Abrir las herramientas de desarrollador (F12), ir a la pestaña **Application**, verificar que el Manifest no tenga errores, tildar la casilla **Offline** y comprobar que la aplicación sigue cargando su interfaz sin conexión.
