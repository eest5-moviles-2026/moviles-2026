# 🎓 Guía Oficial de Preparación: Defensa Individual de Proyectos
**Materia:** Desarrollo de Software para Plataformas Móviles  
**Curso:** 7° Año · División 5ta · E.E.S.T. N° 5  
**Profesor:** Axel Castellano Gutiérrez  
**Proyectos:** TechSolutions (Órdenes de Servicio) / Gestión de Biblioteca  

---

## 🧭 ¿De qué se trata la defensa individual?

La defensa no es una exposición de marketing ni un tour para ver qué linda quedó la pantalla. Como futuros **Técnicos en Programación**, el objetivo de esta instancia es demostrar **criterio técnico y dominio de los fundamentos**: que entiendas con precisión quirúrgica qué hace cada línea de código de tu aplicación, desde que el usuario hace un click en el celular hasta que el dato se guarda en el disco duro del servidor y vuelve.

> [!IMPORTANT]
> **Formato de la evaluación:**
> * **Duración:** 10 a 15 minutos individuales frente a la computadora.
> * **Dinámica:** El docente te va a pedir que elijas una funcionalidad concreta de tu proyecto (o te va a asignar una) y que **sigas el recorrido del dato con el dedo** por los archivos del proyecto.
> * **No se evalúa memoria de sintaxis:** No tenés que recitar código de memoria; tenés el editor abierto y podés leer tu propio código. Lo que se evalúa es la **comprensión de la arquitectura**.

---

## 🔄 El Circuito Obligatorio: Los 5 Eslabones del MVC

Todo el software que construimos este año se basa en la **Separación de Responsabilidades**. Para defender tu proyecto tenés que saber explicar con soltura estos 5 eslabones:

```
┌─────────────────┐       HTTP Request (JSON)       ┌─────────────────┐
│ 1. Frontend DOM │ ──────────────────────────────► │  2. Enrutador   │
│   (index.js)    │                                 │ (routes/*.js)   │
└─────────────────┘                                 └────────┬────────┘
         ▲                                                   │ delega
         │                                                   ▼
         │                                          ┌─────────────────┐
         │ HTTP Response (JSON)                     │ 3. Controlador  │
         │                                          │(controllers/*.js│
         │                                          └────────┬────────┘
         │                                                   │ consulta
         │                                                   ▼
┌────────┴────────┐      Resultado de la Query      ┌─────────────────┐
│ 5. Renderizado  │ ◄────────────────────────────── │ 4. Base Datos   │
│  (UI / Alert)   │                                 │(models/pool SQL)│
└─────────────────┘                                 └─────────────────┘
```

---

### Eslabón 1: El Disparador en el Frontend (`frontend/src/js/`)
1. **El Evento:** Identificar el `addEventListener('submit')` o `'click'` y explicar por qué es indispensable usar `e.preventDefault()` en los formularios (para evitar que el navegador recargue la página en blanco y rompa la experiencia de PWA).
2. **El `fetch()`:** 
   - ¿A qué endpoint apunta? (ej: `/api/prestamos` o `/api/ordenes`).
   - ¿Qué método HTTP utiliza (`POST`, `PUT`, `PATCH`, `GET`, `DELETE`) y por qué?
   - ¿Qué viaja en los `headers` (`Content-Type: application/json`)?
   - ¿Qué viaja en el `body` (`JSON.stringify(datos)`)?
3. **Pestaña Network de DevTools:** Saber abrir la consola con `F12`, ir a la pestaña **Network** (Red), realizar la acción y mostrar la petición con su código de estado (`200`, `201`, etc.) y el payload JSON que viajó por internet.

---

### Eslabón 2: El Enrutador de Express (`backend/src/routes/`)
1. **La Puerta de Entrada:** Mostrar el archivo `app.js` o `server.js` donde Express registra los prefijos con `app.use('/api/...', miRouter)`.
2. **El Router Modular:** Mostrar el archivo de rutas (ej: `prestamos.routes.js` o `ordenes.routes.js`).
3. **El Mapeo de Métodos:** Explicar cómo `router.post('/', crearRegistro)` intercepta la URL y delega la ejecución al método correspondiente del controlador sin mezclar lógica de base de datos aquí adentro.
4. **Captura de Parámetros:** Saber la diferencia entre:
   - `req.params`: Variables en la URL (ej: `/api/ordenes/:id`).
   - `req.query`: Filtros en la URL (ej: `/api/libros?categoria=programacion`).
   - `req.body`: Datos empaquetados en el cuerpo de la petición.

---

### Eslabón 3: El Controlador (`backend/src/controllers/`)
Aquí vive la **lógica del negocio**. Debés explicar:
1. **Extracción y Validación de Entrada:** Cómo se desestructuran las variables de `req.body` y qué validaciones defensivas se aplican antes de tocar la base de datos (ej: verificar que ningún campo obligatorio venga `undefined`, vacío o con formato erróneo).
2. **Manejo de Errores con `try / catch`:** 
   - ¿Qué pasa si la base de datos se cae o la query falla? El bloque `catch` debe atrapar el error, loguearlo en la terminal del servidor y responder un código `500 Internal Server Error`.
   - Si el cliente mandó datos inválidos, el controlador responde un `400 Bad Request` explicando el motivo.
3. **Comunicación con el Modelo:** Cómo se invoca la función del modelo o la consulta SQL y se espera el resultado asíncrono con `await`.

---

### Eslabón 4: El Modelo y la Base de Datos (`backend/src/models/` o `config/db.js`)
1. **Pool de Conexiones (`mysql2/promise`):** 
   - ¿Por qué usamos `createPool` en lugar de `createConnection`? *(Porque mantiene una flota de conexiones activas reutilizables para que el servidor no colapse si 20 alumnos consultan al mismo tiempo).*
2. **Consultas Preparadas contra SQL Injection:**
   - Mostrar dónde están los signos de interrogación `?` en la sentencia `SELECT / INSERT / UPDATE`.
   - Explicar por qué **NUNCA** se debe concatenar texto con comillas o `${variable}` en una consulta SQL *(los placeholders garantizan que el motor de base de datos trate los datos del usuario como texto plano inofensivo y no como comandos ejecutables).*
3. **Integridad Relacional (Foreign Keys):** 
   - Poder explicar qué tablas están vinculadas en tu base de datos (ej: `usuarios` con `prestamos`, o `clientes` con `equipos` y `ordenes_trabajo`).
   - Saber qué ocurre si se intenta eliminar un registro que tiene claves foráneas activas.

---

### Eslabón 5: La Respuesta y la Actualización del DOM
1. **Los dos `await` de Fetch:** Explicar por qué en el frontend se necesitan dos `await`:
   - El 1° `await fetch()` espera a que lleguen las cabeceras HTTP y el canal de red esté abierto.
   - El 2° `await response.json()` espera a que se descargue y parsee el flujo completo de bytes del cuerpo a objetos JavaScript manipulables en memoria.
2. **Comprobación de `response.ok`:** Explicar por qué `fetch` **NO** salta al `catch` cuando el servidor responde `404` o `500` (solo salta si se cortó el cable de red). Por eso es obligatorio verificar `if (!response.ok)` antes de alterar la interfaz.
3. **Inyección en el DOM:** Mostrar cómo se actualiza la vista (creando elementos con `document.createElement()`, seteando `textContent` de forma segura, o insertando cards de resultados).

---

## 🛡️ Las 7 Preguntas "Filtro" que Tenés que Saber Responder

Si podés responder con soltura estas 7 preguntas frente a tu código, tenés la defensa aprobada:

1. **¿Qué es CORS y qué problema resuelve?**  
   *Es el mecanismo de seguridad del navegador que bloquea peticiones entre distintos orígenes (puertos o dominios distintos). El middleware `cors()` en Express le da permiso al navegador para consumir la API.*
2. **¿Por qué las contraseñas de la base de datos están en un `.env` y no en el código de GitHub?**  
   *Por seguridad elemental: el archivo `.env` nunca se sube al repositorio (`.gitignore`). La biblioteca `dotenv` carga esas credenciales en memoria en `process.env` solo en el entorno donde corre el servidor.*
3. **Si desactivo el atributo `required` de un formulario con el inspector de elementos (F12) y mando datos vacíos, ¿qué pasa?**  
   *El frontend no debe ser la única barrera de seguridad. El backend debe interceptar los datos vacíos en el Controller y devolver un error `400` sin ejecutar la query SQL.*
4. **¿Cuál es la diferencia entre `dependencies` y `devDependencies` en el `package.json`?**  
   *`dependencies` son necesarias para que el sistema funcione en producción (ej: `express`, `cors`, `mysql2`, `dotenv`). `devDependencies` solo se usan mientras programamos en la computadora (ej: `nodemon`).*
5. **En tu PWA, ¿cuál es el rol del `manifest.json` y cuál es el del `Service Worker`?**  
   *El `manifest.json` define la identidad instalable (nombre, íconos, modo `standalone`, colores). El `Service Worker` es el script que corre en segundo plano como una aduana, interceptando peticiones de red y gestionando la caché para soporte offline.*
6. **En la base de datos, ¿qué diferencia hay entre `CHAR/VARCHAR`, `INT` y `DATETIME/TIMESTAMP`?**  
   *Justificar la elección de tipos de datos en sus tablas principales y la razón de usar claves primarias auto-incrementales.*
7. **¿Por qué usamos `textContent` en lugar de `innerHTML` para mostrar datos que escribe el usuario?**  
   *Para evitar ataques XSS (Cross-Site Scripting) y para que caracteres como `<` o `>` no sean interpretados por error como etiquetas HTML reales.*

---
