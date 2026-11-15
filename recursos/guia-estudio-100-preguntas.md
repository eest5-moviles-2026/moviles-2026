# Guía de Estudio: 100 Preguntas y Respuestas Conceptuales

**Materia:** Desarrollo de Software para Plataformas Móviles (7° Año)  
**Institución:** E.E.S.T. N° 5 — Lanús  
**Profesor:** Axel Castellano Gutiérrez  
**Especialidad:** Programación / Informática  

Esta guía contiene las 100 preguntas clave de la materia organizadas por módulo temático. Para cada pregunta encontrarás la **respuesta conceptual directa** y la **explicación técnica** que fundamenta el porqué de la solución, diseñada para el estudio y comprensión integral de los contenidos trabajados durante el ciclo lectivo.

---

## 📑 Índice de Módulos Temáticos

1. [Módulo 1: Fundamentos Web Móvil, HTML Semántico y CSS Responsivo](#módulo-1-fundamentos-web-móvil-html-semántico-y-css-responsivo-preguntas-1-a-15) (Preguntas 1 a 15)
2. [Módulo 2: Control de Versiones con Git, GitHub y Gobernanza](#módulo-2-control-de-versiones-con-git-github-y-gobernanza-preguntas-16-a-30) (Preguntas 16 a 30)
3. [Módulo 3: JavaScript Moderno (ES6+) y Manipulación del DOM](#módulo-3-javascript-moderno-es6-y-manipulación-del-dom-preguntas-31-a-45) (Preguntas 31 a 45)
4. [Módulo 4: Asincronismo, Promesas, Fetch y Consumo de APIs REST](#módulo-4-asincronismo-promesas-fetch-y-consumo-de-apis-rest-preguntas-46-a-60) (Preguntas 46 a 60)
5. [Módulo 5: Almacenamiento Web (Storage) y PWA Manifest](#módulo-5-almacenamiento-web-storage-y-pwa-manifest-preguntas-61-a-75) (Preguntas 61 a 75)
6. [Módulo 6: Service Workers, Ciclo de Vida y Estrategias de Caché Offline](#módulo-6-service-workers-ciclo-de-vida-y-estrategias-de-caché-offline-preguntas-76-a-90) (Preguntas 76 a 90)
7. [Módulo 7: Arquitectura MVC, Backend con Express y Bases de Datos Cloud](#módulo-7-arquitectura-mvc-backend-con-express-y-bases-de-datos-cloud-preguntas-91-a-100) (Preguntas 91 a 100)

---

## Módulo 1: Fundamentos Web Móvil, HTML Semántico y CSS Responsivo (Preguntas 1 a 15)

#### 1. ¿Cuál es el propósito fundamental de la etiqueta `<meta name="viewport" content="width=device-width, initial-scale=1.0">` en un documento HTML móvil?
* **Respuesta:** Indicar al navegador que ajuste el ancho del área visible al ancho de la pantalla física y establezca la escala inicial en 100%.
* **Explicación:** Sin esta etiqueta, los navegadores móviles asumen una resolución de escritorio (típicamente 980px) y comprimen el contenido con zoom out, impidiendo el renderizado responsivo real.

#### 2. En la filosofía de diseño *Mobile-First*, ¿cómo se estructuran habitualmente las Media Queries en CSS?
* **Respuesta:** Se definen los estilos base sin media queries para celulares y se escalan progresivamente usando `@media (min-width: ...)`.
* **Explicación:** *Mobile-First* diseña desde la mínima restricción funcional (celular) hacia arriba usando `min-width`, evitando sobreescribir estilos complejos innecesarios en pantallas pequeñas.

#### 3. ¿Qué propiedad de CSS Flexbox se utiliza para alinear los elementos secundarios a lo largo del eje transversal (cross axis)?
* **Respuesta:** `align-items`
* **Explicación:** `justify-content` alinea sobre el eje principal (main axis), mientras que `align-items` controla la alineación sobre el eje transversal.

#### 4. ¿Qué ventaja ofrece la etiqueta semántica `<main>` sobre un genérico `<div id="contenido">`?
* **Respuesta:** Comunica a los motores de búsqueda y tecnologías de asistencia (lectores de pantalla) cuál es el contenido central y único del documento.
* **Explicación:** La semántica HTML proporciona significado estructural accesible y optimización SEO nativa para herramientas de navegación asistida.

#### 5. En CSS Grid, ¿qué representa la unidad `1fr`?
* **Respuesta:** Una fracción proporcional del espacio disponible libre en el contenedor de cuadrícula.
* **Explicación:** `fr` (fraction unit) distribuye de forma dinámica el espacio sobrante dentro del grid después de resolver tamaños fijos.

#### 6. Al diseñar botones o áreas táctiles para celulares, ¿cuál es el tamaño mínimo recomendado por las directrices de accesibilidad (WCAG)?
* **Respuesta:** 48 x 48 píxeles (o aproximadamente 44x44 CSS pixels).
* **Explicación:** Un objetivo táctil inferior a 48x48 px provoca toques accidentales (*fat finger problem*) y perjudica la usabilidad móvil.

#### 7. ¿Para qué se utiliza la propiedad CSS `box-sizing: border-box` comúnmente en un reset universal?
* **Respuesta:** Para que el ancho (`width`) y alto (`height`) especificados incluyan el `padding` y el `border` sin sumar tamaño extra.
* **Explicación:** Facilita el cálculo de layouts responsivos evitando que el relleno interior desborde el ancho porcentual asignado.

#### 8. ¿Qué panel de las Herramientas de Desarrollador (DevTools) de Chrome/Edge permite simular diferentes modelos de celular y limitar la velocidad de red (Network Throttling)?
* **Respuesta:** Barra de herramientas de emulación de dispositivos (Device Mode / Network Tab).
* **Explicación:** El Device Toolbar permite emular dimensiones físicas, User-Agent táctil y perfiles de red degradada (Fast 3G, Slow 3G).

#### 9. ¿Qué función cumple la etiqueta HTML `<nav>`?
* **Respuesta:** Delimitar un bloque con los enlaces principales de navegación del sitio o aplicación.
* **Explicación:** `<nav>` identifica de forma semántica las barras de navegación principales o secundarias de la interfaz.

#### 10. En CSS, ¿cuál es la diferencia clave entre las unidades relativas `em` y `rem`?
* **Respuesta:** `rem` es relativo al tamaño de fuente del elemento raíz (`<html>`), mientras que `em` es relativo al tamaño de fuente de su contenedor padre directo.
* **Explicación:** `rem` (*root em*) mantiene consistencia global evitando el efecto de cascada o acumulación multiplicativa que puede producir `em`.

#### 11. ¿Qué valor de la propiedad `display` convierte a un elemento contenedor en un contexto de formato flexible unidimensional?
* **Respuesta:** `display: flex;`
* **Explicación:** Flexbox gestiona el flujo de elementos principalmente en una dimensión (fila o columna), a diferencia de Grid que es bidimensional.

#### 12. En un formulario web móvil, ¿qué atributo HTML ayuda a que el teclado del celular muestre directamente un teclado numérico optimizado?
* **Respuesta:** `inputmode="numeric"`
* **Explicación:** `inputmode="numeric"` o `type="number"` orienta al sistema operativo móvil para desplegar el teclado numérico adecuado.

#### 13. ¿Cuál es el comportamiento de una imagen con los estilos `max-width: 100%; height: auto;`?
* **Respuesta:** Se adapta proporcionalmente al ancho de su elemento padre sin superar su tamaño nativo ni distorsionar su relación de aspecto.
* **Explicación:** Es la técnica estándar para imágenes fluidas responsivas que previene desbordamientos horizontales.

#### 14. ¿Qué selector de CSS se utiliza para aplicar estilos a un elemento cuando el usuario interactúa posando el cursor o manteniendo presionado sobre él?
* **Respuesta:** `:active` y `:hover`
* **Explicación:** `:hover` detecta el cursor en escritorio, y `:active` captura el momento exacto de la pulsación táctil o clic.

#### 15. ¿Qué método de la consola de JavaScript permite inspeccionar las propiedades de un elemento del DOM en formato de árbol de objetos?
* **Respuesta:** `console.dir()`
* **Explicación:** `console.dir()` muestra el listado interactivo de propiedades y métodos del objeto DOM, en lugar de su representación HTML en string.

---

## Módulo 2: Control de Versiones con Git, GitHub y Gobernanza (Preguntas 16 a 30)

---

## Módulo 2: Control de Versiones con Git, GitHub y Gobernanza (Preguntas 16 a 30)

#### 16. ¿Cuál es la diferencia fundamental entre Git y GitHub?
* **Respuesta:** Git es el software de control de versiones local y distribuido, mientras que GitHub es una plataforma en la nube para alojar y colaborar en repositorios Git.
* **Explicación:** Git opera de manera autónoma en local sin necesidad de internet; GitHub provee sincronización remota, gestión de issues, PRs y gobernanza.

#### 17. Si un alumno realiza cambios en su código local, ¿cuál es la secuencia correcta de comandos para enviarlos a su rama remota?
* **Respuesta:** `git add .` -> `git commit -m "mensaje"` -> `git push origin <rama>`
* **Explicación:** `add` pasa los cambios al Staging Area, `commit` consolida la instantánea histórica local, y `push` transfiere los commits al servidor remoto.

#### 18. ¿Por qué la carpeta `node_modules/` NUNCA debe incluirse en el control de versiones de Git?
* **Respuesta:** Porque contiene miles de archivos autogenerados pesados y dependientes del sistema operativo que deben reinstalarse con `npm install` usando `package.json`.
* **Explicación:** `node_modules` infla el repositorio sin aportar valor y genera conflictos entre plataformas (Windows vs Linux vs macOS).

#### 19. ¿Cuál es la función del archivo `.gitignore`?
* **Respuesta:** Especificar de forma explícita qué archivos o carpetas deben ser ignorados y no rastreados por Git.
* **Explicación:** Evita que archivos temporales, dependencias pesadas (`node_modules`) o secretos (`.env`) sean agregados accidentalmente al repositorio.

#### 20. En un equipo de desarrollo, ¿qué problema ocurre si un alumno trabaja directamente sobre la rama `main` sin usar ramas secundarias ni Pull Requests?
* **Respuesta:** Se rompe la gobernanza, se expone código inestable a producción y se bloquea el trabajo de los compañeros con conflictos directos.
* **Explicación:** La rama `main` debe ser estable y protegida; los desarrollos se aíslan en ramas de características (*feature branches*) para revisión previa.

#### 21. ¿Qué comando se utiliza para crear una nueva rama y cambiarse a ella de manera inmediata?
* **Respuesta:** `git checkout -b <nombre>` (o `git switch -c <nombre>`)
* **Explicación:** El modificador `-b` en `checkout` o `-c` en `switch` crea la referencia y actualiza el puntero `HEAD` hacia la nueva rama.

#### 22. ¿Qué es un Pull Request (PR) en GitHub?
* **Respuesta:** Una propuesta de cambios desde una rama de trabajo hacia una rama base, permitiendo revisión de código, discusión y validación antes de la fusión (*merge*).
* **Explicación:** El PR es la herramienta central de revisión por pares (*code review*) y control de calidad en el desarrollo colaborativo moderno.

#### 23. Cuando Git reporta un "Conflicto de fusión" (*Merge Conflict*), ¿qué significa?
* **Respuesta:** Que dos ramas modificaron las mismas líneas de un archivo de manera incompatible y Git requiere intervención humana para decidir qué cambios conservar.
* **Explicación:** Git no toma decisiones arbitrarias sobre líneas de código disputadas; inserta delimitadores de conflicto (`<<<<<<<`, `=======`, `>>>>>>>`) para resolución manual.

#### 24. ¿Qué determina la autoría de un commit en Git (`Author: Nombre <email>`)?
* **Respuesta:** La configuración local de Git establecida mediante `git config user.name` y `git config user.email`.
* **Explicación:** La autoría es un metadato firmado localmente por la configuración del cliente Git, independiente del token de transporte de red.

#### 25. ¿Para qué sirve el comando `git pull origin develop`?
* **Respuesta:** Para descargar los últimos commits de la rama `develop` remota e integrarlos (*merge*) en la rama local actual.
* **Explicación:** `git pull` combina internamente `git fetch` (descarga de metadatos) con `git merge` (fusión en la rama activa).

#### 26. Siguiendo el estándar de *Conventional Commits*, ¿cuál de los siguientes mensajes describe correctamente la incorporación de una nueva pantalla?
* **Respuesta:** `feat(ui): agregar pantalla de historial de pedidos para clientes`
* **Explicación:** Los conventional commits usan tipos estandarizados (`feat`, `fix`, `docs`, `chore`, `refactor`) con alcance opcional y descripción imperativa.

#### 27. ¿Qué acción realiza el comando `git status`?
* **Respuesta:** Muestra el estado del árbol de trabajo: archivos modificados, en staging (rastreados) o sin seguimiento (*untracked*).
* **Explicación:** Es el comando de inspección básico para conocer la situación del espacio de trabajo antes de confirmar cambios.

#### 28. ¿Qué representa el comando `git merge`?
* **Respuesta:** La unión de la historia de desarrollo de dos ramas diferentes en una sola rama.
* **Explicación:** Incorpora el trabajo realizado en una rama secundaria dentro de la rama receptora mediante un commit de fusión o fast-forward.

#### 29. ¿Qué riesgo de seguridad implica subir el archivo `.env` a un repositorio público de GitHub?
* **Respuesta:** Se exponen credenciales de bases de datos, claves de APIs (como Cloudinary o JWT) y secretos a cualquier atacante en internet.
* **Explicación:** El archivo `.env` contiene información confidencial sensible del entorno de ejecución que nunca debe salir del entorno local del desarrollador o del host seguro.

#### 30. En la jerarquía de ramas de un equipo, ¿qué rol cumple la rama `develop`?
* **Respuesta:** Es la rama de integración continua donde convergen las características terminadas antes de pasar a la rama principal de producción (`main`).
* **Explicación:** En GitFlow o flujos ágiles, `develop` actúa como colchón de integración para comprobar la compatibilidad de módulos antes de liberar versiones estables a `main`.

---

## Módulo 3: JavaScript Moderno (ES6+) y Manipulación del DOM (Preguntas 31 a 45)

---

## Módulo 3: JavaScript Moderno (ES6+) y Manipulación del DOM (Preguntas 31 a 45)

#### 31. ¿Cuál es la diferencia fundamental entre declarar una variable con `const` y con `let`?
* **Respuesta:** `const` impide la reasignación del identificador después de su inicialización, mientras que `let` permite reasignar nuevos valores.
* **Explicación:** Ambas tienen alcance de bloque (*block scope*), pero los enlaces creados con `const` son inmutables en su asignación.

#### 32. Si se declara `const usuario = { nombre: "Carlos" };`, ¿es válido ejecutar `usuario.nombre = "Ana";`?
* **Respuesta:** Sí, porque `const` protege la referencia de la variable, no la mutabilidad de las propiedades internas del objeto.
* **Explicación:** La inmutabilidad de `const` aplica al enlace de la variable; para congelar las propiedades de un objeto se requiere `Object.freeze()`.

#### 33. ¿Qué retorna el método de array `map()` en JavaScript?
* **Respuesta:** Un nuevo array con la misma longitud que el original, conteniendo los resultados de invocar la función provista en cada elemento.
* **Explicación:** `map()` es una función de orden superior pura que transforma cada elemento produciendo una nueva colección sin alterar el array de origen.

#### 34. Dado el array `const precios = [10, 50, 100, 20];`, ¿qué devolverá `precios.filter(p => p >= 50);`?
* **Respuesta:** `[50, 100]`
* **Explicación:** `filter()` evalúa un predicado booleano y retorna un nuevo array con todos los elementos que devuelven `true`.

#### 35. ¿Cuál es la sintaxis correcta de una función flecha (*arrow function*) que recibe dos parámetros y retorna su suma directamente?
* **Respuesta:** `const sumar = (a, b) => a + b;`
* **Explicación:** Con retorno implícito de una sola expresión, la función flecha no requiere llaves `{}` ni la palabra clave `return`.

#### 36. ¿Qué método del DOM se recomienda para seleccionar el primer elemento HTML que coincida con un selector CSS complejo (ej: `.tarjeta-usuario .btn-eliminar`)?
* **Respuesta:** `document.querySelector()`
* **Explicación:** `querySelector()` permite evaluar selectores CSS válidos de cualquier nivel de complejidad devolviendo el primer nodo coincidente.

#### 37. ¿Qué técnica de interpolación de variables introdujo ES6 mediante los *Template Literals* (comillas invertidas `` ` ``)?
* **Respuesta:** `const mensaje = `Hola ${usuario}!`;`
* **Explicación:** La sintaxis `${expresion}` permite incrustar variables y expresiones dinámicas directamente dentro de plantillas de texto multilínea.

#### 38. ¿Qué realiza el método `document.createElement('div')`?
* **Respuesta:** Crea en memoria un nuevo nodo de elemento HTML `<div>` listo para ser configurado e insertado en el árbol del DOM.
* **Explicación:** Crea el elemento de forma desacoplada en memoria; para que sea visible debe agregarse al DOM con métodos como `appendChild()` o `append()`.

#### 39. ¿Qué método se utiliza para escuchar la acción de un usuario al hacer clic sobre un botón?
* **Respuesta:** `boton.addEventListener('click', callback)`
* **Explicación:** `addEventListener` es el estándar moderno del W3C para asociar manejadores de eventos a elementos del DOM.

#### 40. ¿Para qué se utiliza `event.preventDefault()` dentro de la función que maneja el evento `'submit'` de un formulario?
* **Respuesta:** Para evitar que el navegador recargue la página o intente enviar una petición GET/POST por defecto, permitiendo manejar el envío con JavaScript (`fetch`).
* **Explicación:** Cancela el comportamiento nativo tradicional del formulario HTML en el navegador, requisito clave en SPAs y PWAs.

#### 41. En desestructuración de objetos (*destructuring*), ¿cómo se extraen las propiedades `nombre` y `edad` de `const alumno = { nombre: "Lucas", edad: 18, curso: "7mo" };`?
* **Respuesta:** `const { nombre, edad } = alumno;`
* **Explicación:** La sintaxis `{ prop1, prop2 } = objeto` extrae las propiedades coincidentes por nombre en nuevas variables locales.

#### 42. ¿Qué devuelve el método `find()` en un array si ningún elemento cumple con la condición evaluada?
* **Respuesta:** `undefined`
* **Explicación:** `find()` retorna el primer elemento que satisface el predicado, o `undefined` si ninguno coincide (`findIndex()` retorna `-1`).

#### 43. ¿Qué operador de ES6 permite combinar los elementos de dos arrays en uno nuevo (ej: `[...grupoA, ...grupoB]`)?
* **Respuesta:** Operador de propagación (*spread operator* `...`)
* **Explicación:** El *spread operator* expande colecciones iterables en elementos individuales dentro de un nuevo contexto.

#### 44. ¿Cuál es el peligro de usar `elemento.innerHTML = variableDeUsuario` sin sanitizar al mostrar datos provenientes de un formulario o API?
* **Respuesta:** Vulnerabilidad de Cross-Site Scripting (XSS), permitiendo la inyección e instantánea ejecución de scripts maliciosos.
* **Explicación:** Si el input contiene `<script>` o atributos `onerror`, `innerHTML` los ejecuta; para texto plano se debe usar `textContent`.

#### 45. ¿Qué método de la interfaz `classList` se utiliza para agregar o quitar una clase CSS dependiendo de si ya está presente o no?
* **Respuesta:** `elemento.classList.toggle()`
* **Explicación:** `toggle()` añade la clase si no existe y la remueve si ya existe, ideal para menús desplegables o alternancia de temas oscuro/claro.

---

## Módulo 4: Asincronismo, Promesas, Fetch y Consumo de APIs REST (Preguntas 46 a 60)

---

## Módulo 4: Asincronismo, Promesas, Fetch y Consumo de APIs REST (Preguntas 46 a 60)

#### 46. Dado que JavaScript es de un solo hilo (*single-threaded*), ¿cómo ejecuta peticiones de red sin congelar la interfaz de usuario?
* **Respuesta:** Mediante el Modelo Asíncrono no bloqueante basado en el Bucle de Eventos (*Event Loop*) y las APIs del navegador (Web APIs).
* **Explicación:** Las operaciones pesadas o de red se delegan a las Web APIs del navegador; una vez finalizadas, sus callbacks entran a la cola del Event Loop.

#### 47. ¿Cuáles son los tres estados posibles en el ciclo de vida de una Promesa (`Promise`) en JavaScript?
* **Respuesta:** `pending` (pendiente), `fulfilled` (cumplida) y `rejected` (rechazada)
* **Explicación:** Una promesa nace en estado `pending` y transiciona de forma irreversible hacia `fulfilled` (éxito con valor) o `rejected` (falla con motivo).

#### 48. ¿Para qué se utiliza la función nativa `fetch()` en el navegador?
* **Respuesta:** Para realizar peticiones HTTP asíncronas a través de la red hacia servidores o APIs REST y recibir recursos.
* **Explicación:** `fetch()` reemplazó a `XMLHttpRequest` como la interfaz estándar basada en promesas para comunicación HTTP en la web.

#### 49. Al consumir `fetch('/api/usuarios')`, ¿por qué habitualmente se requiere un segundo paso con `.json()` (ej: `const data = await respuesta.json()`)?
* **Respuesta:** Porque `fetch()` resuelve inicialmente con un objeto `Response` con las cabeceras HTTP, y `response.json()` es otro método asíncrono que lee el flujo del cuerpo de la respuesta y lo transforma a un objeto JavaScript.
* **Explicación:** La respuesta llega como un stream de datos; el método `.json()` consume el cuerpo completo y lo parsea asincrónicamente.

#### 50. ¿Qué ventaja ofrece la sintaxis `async / await` frente al encadenamiento tradicional con `.then()` y `.catch()`?
* **Respuesta:** Permite escribir código asíncrono con una estructura lineal y legible, similar al código síncrono, facilitando el mantenimiento y manejo de errores.
* **Explicación:** Es azúcar sintáctico sobre las promesas que simplifica el flujo de control y la depuración dentro de bloques `try/catch`.

#### 51. ¿En qué bloque de código se capturan las excepciones producidas dentro de una función marcada con `async` al usar `await`?
* **Respuesta:** Dentro de un bloque `try { ... } catch (error) { ... }`
* **Explicación:** Las promesas rechazadas con `await` lanzan excepciones que son interceptadas directamente por el bloque `catch`.

#### 52. ¿Qué significa la sigla REST en el contexto de APIs web?
* **Respuesta:** Representational State Transfer (Transferencia de Estado Representacional)
* **Explicación:** REST es el estilo arquitectónico estándar para diseñar servicios web basados en recursos y verbos HTTP sin estado (*stateless*).

#### 53. ¿Qué método HTTP se utiliza según las convenciones REST para dar de alta un nuevo registro en el servidor?
* **Respuesta:** `POST`
* **Explicación:** `POST` crea nuevos recursos dependientes en la colección especificada por el URI (ej: `POST /api/pedidos`).

#### 54. ¿Qué método HTTP se utiliza habitualmente para modificar de forma parcial un recurso existente (ej: cambiar solo el estado de un pedido)?
* **Respuesta:** `PATCH`
* **Explicación:** `PATCH` aplica modificaciones parciales a un recurso, mientras que `PUT` se utiliza tradicionalmente para reemplazos completos.

#### 55. ¿Qué código de estado HTTP indica que una petición fue exitosa y además se creó un nuevo recurso en el servidor?
* **Respuesta:** `201 Created`
* **Explicación:** El código `201 Created` es la respuesta estándar de un endpoint `POST` cuando el nuevo registro fue persistido correctamente.

#### 56. ¿Qué código de estado HTTP representa un error del cliente por falta de autenticación o credenciales no válidas?
* **Respuesta:** `401 Unauthorized` (o `403 Forbidden` para permisos insuficientes)
* **Explicación:** Los códigos `4xx` indican errores de la solicitud del cliente; `401` denota falta de autenticación válida.

#### 57. Al enviar datos JSON al backend mediante `fetch()`, ¿qué cabecera HTTP (*header*) es obligatorio incluir en las opciones?
* **Respuesta:** `'Content-Type': 'application/json'`
* **Explicación:** Informa al middleware del servidor (`express.json()`) que el cuerpo de la petición debe ser parseado como un objeto JSON.

#### 58. Si se envía un objeto de JavaScript en el cuerpo de una petición `POST`, ¿qué función debe utilizarse para convertirlo a texto JSON?
* **Respuesta:** `JSON.stringify(objeto)`
* **Explicación:** `JSON.stringify()` serializa valores u objetos de JavaScript en una cadena de texto en formato JSON apta para viajar por HTTP.

#### 59. ¿Qué problema genera hardcodear la URL como `'http://localhost:3000/api'` en el frontend cuando se prueba la aplicación en un celular real conectado por Wi-Fi?
* **Respuesta:** La petición falla porque en el teléfono `localhost` hace referencia al propio celular y no a la computadora que ejecuta el servidor.
* **Explicación:** `localhost` (127.0.0.1) es la dirección de loopback local. En un celular, apunta a sí mismo; por eso se usan rutas relativas `/api` o la IP local de la PC.

#### 60. ¿Qué significa el error de navegador "CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource"?
* **Respuesta:** Que el navegador bloqueó la petición por seguridad porque el origen del frontend (dominio o puerto) es distinto al del backend y el servidor no autorizó el intercambio cruzado.
* **Explicación:** CORS (Cross-Origin Resource Sharing) es un mecanismo de seguridad del navegador que requiere que el backend declare orígenes autorizados mediante cabeceras HTTP.

---

## Módulo 5: Almacenamiento Web (Storage) y PWA Manifest (Preguntas 61 a 75)

---

## Módulo 5: Almacenamiento Web (Storage) y PWA Manifest (Preguntas 61 a 75)

#### 61. ¿Cuál es la diferencia fundamental de persistencia entre `localStorage` y `sessionStorage`?
* **Respuesta:** `localStorage` persiste los datos indefinidamente en el dispositivo aun después de cerrar el navegador, mientras que `sessionStorage` se borra automáticamente al cerrar la pestaña actual.
* **Explicación:** Ambos comparten la misma API sincrónica de clave-valor, pero su ciclo de vida y alcance de sesión son diferentes.

#### 62. ¿Qué tipo de dato almacena de forma nativa la Web Storage API (`localStorage.setItem(clave, valor)`)?
* **Respuesta:** Únicamente cadenas de texto (*strings*).
* **Explicación:** Web Storage solo admite texto; si se pasa un objeto sin convertirlo (`[object Object]`), se pierde la estructura. Se debe usar `JSON.stringify()`.

#### 63. Para guardar una sesión de usuario `const usuario = { id: 1, rol: "tecnico" };` en `localStorage`, ¿cuál es el código correcto?
* **Respuesta:** `localStorage.setItem('usuario', JSON.stringify(usuario));`
* **Explicación:** Se serializa a string con `JSON.stringify()` para poder recuperarlo luego mediante `JSON.parse()`.

#### 64. ¿Cómo se recupera y transforma a objeto la información del usuario guardada en la pregunta anterior?
* **Respuesta:** `const u = JSON.parse(localStorage.getItem('usuario'));`
* **Explicación:** `localStorage.getItem('usuario')` devuelve el string JSON y `JSON.parse()` lo reconstruye en un objeto JavaScript operable.

#### 65. ¿Qué comando elimina por completo todos los elementos almacenados en el `localStorage` de la aplicación actual?
* **Respuesta:** `localStorage.clear();`
* **Explicación:** `clear()` vacía todos los pares clave-valor asociados al origen actual en Web Storage.

#### 66. ¿Qué es una PWA (Progressive Web App)?
* **Respuesta:** Una aplicación web construida con tecnologías estándar (HTML, CSS, JS) que incorpora capacidades modernas (instalabilidad, funcionamiento offline, notificaciones) similares a una app nativa.
* **Explicación:** Las PWAs ofrecen una experiencia de usuario enriquecida progresiva combinando el alcance de la web con funciones de software de sistema.

#### 67. ¿Cuál es la función del archivo `manifest.json` en una Progressive Web App?
* **Respuesta:** Proveer metadatos en formato JSON al navegador sobre cómo debe comportarse la aplicación cuando el usuario la instale (nombre, íconos, colores, modo de visualización, URL de inicio).
* **Explicación:** El Web App Manifest define la apariencia de la app instalada en la pantalla de inicio del dispositivo y la ventana del sistema.

#### 68. ¿Cómo se vincula el archivo `manifest.json` dentro del documento HTML?
* **Respuesta:** `<link rel="manifest" href="manifest.json">`
* **Explicación:** Se vincula en la cabecera `<head>` mediante la etiqueta `<link>` con el atributo de relación `rel="manifest"`.

#### 69. En el archivo `manifest.json`, ¿qué valor de la propiedad `"display"` elimina la barra de direcciones y botones del navegador para que la web parezca una app nativa instalada?
* **Respuesta:** `"display": "standalone"`
* **Explicación:** `"standalone"` oculta la interfaz típica del navegador (*URL bar*, controles de pestaña) abriendo la aplicación en su propia ventana dedicada.

#### 70. En el `manifest.json`, ¿qué define la propiedad `"theme_color"`?
* **Respuesta:** El color con el que el sistema operativo tiñe la barra de estado (*status bar*) del dispositivo móvil y el marco de la ventana.
* **Explicación:** Permite unificar visualmente la identidad de marca de la app con los elementos del sistema operativo del celular.

#### 71. ¿Cuáles son los tamaños estándar mínimos de íconos requeridos en el array `"icons"` del `manifest.json` para garantizar soporte general en Android?
* **Respuesta:** 192x192 y 512x512 píxeles
* **Explicación:** 192x192 px se utiliza para el ícono de la pantalla de inicio y 512x512 px para la pantalla de carga (*splash screen*) en alta densidad.

#### 72. ¿Qué propósito tiene la propiedad `"purpose": "maskable"` en la declaración de íconos del `manifest.json`?
* **Respuesta:** Permitir que Android adapte el ícono a cualquier forma geométrica del fabricante (círculo, cuadrado, squircle) agregando una zona segura (*safe zone*) sin recortar el isotipo.
* **Explicación:** Los íconos adaptativos (*adaptive icons*) de Android requieren un área de seguridad (*maskable*) para que el sistema recorte la silueta sin afectar el logo.

#### 73. ¿Qué panel de Chrome DevTools permite auditar si el `manifest.json` y los íconos están configurados correctamente para que la app sea instalable?
* **Respuesta:** Panel Application -> sección Manifest
* **Explicación:** En la pestaña *Application* se verifican las propiedades del manifiesto, advertencias de instalabilidad y renderizado de íconos.

#### 74. En iOS (Safari), dado que históricamente el soporte al `manifest.json` fue limitado, ¿qué etiqueta HTML alternativa se utiliza para indicar el ícono de inicio?
* **Respuesta:** `<link rel="apple-touch-icon" href="img/icono-192.png">`
* **Explicación:** `apple-touch-icon` es la directiva reconocida por WebKit/Safari para definir el ícono al añadir a la pantalla de inicio en iOS.

#### 75. ¿Qué propiedad del objeto `navigator` permite detectar si el dispositivo cuenta con conexión a internet en tiempo real?
* **Respuesta:** `navigator.onLine` (retorna `true` o `false`)
* **Explicación:** `navigator.onLine` indica el estado de conectividad y dispara los eventos `'online'` y `'offline'` en la ventana global `window`.

---

## Módulo 6: Service Workers, Ciclo de Vida y Estrategias de Caché Offline (Preguntas 76 a 90)

---

## Módulo 6: Service Workers, Ciclo de Vida y Estrategias de Caché Offline (Preguntas 76 a 90)

#### 76. ¿Qué es un Service Worker en una arquitectura PWA?
* **Respuesta:** Un script de JavaScript que el navegador ejecuta en segundo plano, en un hilo independiente, desacoplado de la página web y del DOM, actuando como proxy de red programable.
* **Explicación:** Al correr en un worker thread separado, puede interceptar peticiones de red, manipular la caché local y recibir notificaciones push en segundo plano.

#### 77. ¿Por qué un Service Worker NO tiene acceso directo al objeto `window` ni a los elementos del DOM?
* **Respuesta:** Porque corre en un hilo de ejecución separado (*worker thread*) para no bloquear la interfaz gráfica principal ni generar condiciones de carrera.
* **Explicación:** Los Web Workers y Service Workers están aislados del hilo principal (*main thread*) por motivos de concurrencia y estabilidad visual.

#### 78. ¿Cuál es el requisito de seguridad indispensable para que un Service Worker funcione en un entorno de producción público?
* **Respuesta:** Que la página se sirva obligatoriamente sobre conexión segura HTTPS (o `localhost` durante el desarrollo local).
* **Explicación:** Al tener la capacidad de interceptar todas las peticiones de red, un Service Worker sin HTTPS permitiría ataques de intermediario (*Man-In-The-Middle*).

#### 79. ¿Cómo se registra un Service Worker desde el archivo principal `app.js` de la aplicación?
* **Respuesta:** `navigator.serviceWorker.register('sw.js');`
* **Explicación:** La API `navigator.serviceWorker.register()` inicia el proceso de descarga, instalación y activación del worker.

#### 80. ¿Cuáles son los tres eventos clave del ciclo de vida que se escuchan dentro del archivo `sw.js`?
* **Respuesta:** `'install'`, `'activate'`, `'fetch'`
* **Explicación:** `'install'` prepara y almacena el App Shell en caché; `'activate'` limpia versiones obsoletas; `'fetch'` intercepta las peticiones de red.

#### 81. Durante el evento `'install'` de un Service Worker, ¿qué método se utiliza para asegurar que la instalación no termine hasta que los archivos del App Shell estén guardados en caché?
* **Respuesta:** `event.waitUntil(promesa)`
* **Explicación:** `event.waitUntil()` extiende el proceso de instalación hasta que la promesa pasada (habitualmente `cache.addAll()`) se resuelva exitosamente.

#### 82. ¿Qué es el "App Shell" de una aplicación web progresiva?
* **Respuesta:** La infraestructura mínima de interfaz gráfica estática (HTML estructural, CSS principal, JS base e íconos) necesaria para que la app se dibuje de forma instantánea sin esperar a la red.
* **Explicación:** El modelo App Shell separa la estructura visual de navegación de los datos dinámicos, garantizando carga instantánea en visitas repetidas.

#### 83. ¿Qué método de la Cache API se utiliza para guardar un array completo de rutas en una sola operación durante la instalación?
* **Respuesta:** `cache.addAll(rutas)`
* **Explicación:** `cache.addAll()` descarga internamente todas las URLs provistas y almacena sus respuestas en el objeto caché seleccionado.

#### 84. Si se modifica el código del Service Worker para subir de versión (ej: de `v3` a `v4`), ¿cuándo se suele realizar la limpieza de la caché antigua de la `v3`?
* **Respuesta:** Durante el evento `'activate'` utilizando `caches.delete(nombreCacheVieja)`
* **Explicación:** El evento `'activate'` es el momento seguro para purgar recursos obsoletos porque el Service Worker anterior ya dejó de controlar a los clientes activos.

#### 85. En el evento `'fetch'`, ¿qué método del objeto de evento permite responder a la petición con un recurso obtenido desde la memoria caché o desde la red?
* **Respuesta:** `event.respondWith()`
* **Explicación:** `event.respondWith()` toma una promesa que resuelve con un objeto `Response` y la entrega al navegador como si proviniera del servidor.

#### 86. ¿En qué consiste la estrategia de caché *Cache First (Cache Falling Back to Network)*?
* **Respuesta:** La aplicación busca el recurso primero en la caché local; si existe lo entrega inmediatamente (velocidad máxima), y si no existe, lo descarga desde la red.
* **Explicación:** Es la estrategia ideal para activos estáticos del App Shell (CSS, JS, fuentes, imágenes de interfaz), asegurando carga inmediata offline.

#### 87. ¿En qué consiste la estrategia de caché *Network First (Network Falling Back to Cache)*?
* **Respuesta:** La aplicación intenta obtener la información más reciente desde la red; si no hay internet o el servidor no responde, sirve la última copia guardada en caché.
* **Explicación:** Es ideal para datos dinámicos que cambian con frecuencia (ej: catálogo de libros disponibles, estado de pedidos) priorizando frescura de datos.

#### 88. ¿Qué método se utiliza para verificar si una petición existe guardada dentro de la caché?
* **Respuesta:** `caches.match(event.request)`
* **Explicación:** `caches.match()` busca en los almacenes de caché si existe una coincidencia de URL para la petición dada y retorna su respuesta.

#### 89. Si un archivo listado en `cache.addAll(['index.html', 'css/base.css', 'img/logo-inexistente.png'])` devuelve error 404 durante el evento `'install'`, ¿qué sucede con el Service Worker?
* **Respuesta:** Falla la promesa completa de instalación, el Service Worker es descartado por el navegador y la PWA no se activa.
* **Explicación:** `cache.addAll()` es una operación atómica: si una sola petición falla (ej: 404 o 500), se rechaza la promesa y la instalación aborta.

#### 90. ¿Qué llamada se utiliza habitualmente dentro del evento `'activate'` para que el nuevo Service Worker tome el control inmediato de todas las pestañas abiertas sin necesidad de recargarlas?
* **Respuesta:** `self.clients.claim()`
* **Explicación:** `clients.claim()` fuerza a que las páginas bajo el alcance (*scope*) del worker comiencen a ser controladas de inmediato por la versión recién activada.

---

## Módulo 7: Arquitectura MVC, Backend con Express y Bases de Datos Cloud (Preguntas 91 a 100)

---

## Módulo 7: Arquitectura MVC, Backend con Express y Bases de Datos Cloud (Preguntas 91 a 100)

#### 91. ¿Cuál es el significado y propósito del patrón de arquitectura MVC (Modelo-Vista-Controlador)?
* **Respuesta:** Separar las responsabilidades del sistema en tres capas: los Datos y Lógica de Negocio (Modelo), la Interfaz de Usuario (Vista) y la Coordinación/Ruteo de peticiones (Controlador).
* **Explicación:** El patrón desacopla la persistencia de datos (Modelos) y la lógica de validación de entradas (Controladores) de la presentación gráfica (Vistas).

#### 92. En un backend de Node.js con Express, ¿cuál es la responsabilidad de la capa de **Rutas** (`routes`)?
* **Respuesta:** Definir los endpoints de la API (método HTTP + URL) y asociar qué función de controlador debe responder a cada uno.
* **Explicación:** Las rutas actúan como mapa de despacho (*routing*), vinculando URIs como `GET /api/pedidos` con sus respectivos controladores.

#### 93. En la arquitectura MVC, ¿cuál es la responsabilidad específica de la capa de **Modelos** (`models`)?
* **Respuesta:** Interactuar de forma directa con la base de datos (ejecutar consultas SQL como `SELECT`, `INSERT`, `UPDATE`) y estructurar los datos.
* **Explicación:** Los modelos abstraen el acceso a la capa de persistencia y ejecutan las consultas contra la base de datos sin acoplarse a Express.

#### 94. ¿Para qué se utiliza el middleware `express.json()` en una aplicación Express?
* **Respuesta:** Para interceptar las peticiones entrantes con `Content-Type: application/json` y parsear automáticamente su cuerpo en el objeto `req.body`.
* **Explicación:** Sin `express.json()`, el acceso a `req.body` en peticiones `POST` o `PUT` resulta en `undefined`.

#### 95. ¿Qué función cumple una biblioteca como `bcryptjs` en el backend al registrar un nuevo usuario?
* **Respuesta:** Generar un hash unidireccional con sal (*salt*) de la contraseña para almacenarla de forma segura sin guardar nunca texto plano en la base de datos.
* **Explicación:** El almacenamiento seguro de credenciales exige hashing criptográfico unidireccional con salt para resistir ataques de diccionario.

#### 96. En Node.js con MySQL (`mysql2/promise`), ¿por qué se utiliza un Pool de Conexiones (`mysql.createPool`) en lugar de abrir y cerrar una conexión individual por cada petición?
* **Respuesta:** Porque mantiene un conjunto de conexiones reutilizables abiertas, reduciendo la sobrecarga de latencia y evitando saturar el servidor de base de datos con miles de aperturas concurrentes.
* **Explicación:** Establecer una conexión TCP/SSL a la base de datos es costoso; el pool administra conexiones activas y las asigna eficientemente a cada query.

#### 97. Al conectarse a una base de datos MySQL en la nube como Aiven Cloud, ¿por qué es obligatorio configurar el parámetro `ssl: { rejectUnauthorized: false }`?
* **Respuesta:** Porque Aiven Cloud exige conexiones cifradas con protocolo TLS/SSL para proteger los datos en tránsito a través de internet.
* **Explicación:** Los proveedores de nube pública rechazan conexiones en texto claro (puerto no seguro), demandando túneles cifrados SSL/TLS.

#### 98. ¿Para qué se utiliza el middleware `multer` en una aplicación de Express?
* **Respuesta:** Para procesar peticiones multipartes (`multipart/form-data`), permitiendo la recepción y subida de archivos (como fotos de perfil o de desperfectos) en memoria o disco.
* **Explicación:** `express.json()` solo procesa texto; `multer` parsea datos binarios y adjuntos en formularios de carga de archivos.

#### 99. ¿Cuál es la ventaja de utilizar un servicio como Cloudinary para almacenar fotos en lugar de guardarlas directamente en el disco duro del servidor Node.js?
* **Respuesta:** Desacopla el almacenamiento del servidor de cómputo, ofrece entrega global mediante CDN optimizada y evita que los discos locales se llenen o se pierdan al reiniciar contenedores.
* **Explicación:** En arquitecturas Cloud modernas, los servidores son efímeros (*stateless*); los archivos estáticos de usuarios deben residir en Object Storage o CDNs.

#### 100. En el flujo completo de una orden de servicio en TechSolutions o préstamo en Biblioteca, ¿qué beneficio arquitectónico aporta que el frontend utilice rutas relativas (`/api/...`) servidas desde el mismo backend Express?
* **Respuesta:** Permite que el sistema funcione de forma idéntica en la computadora del docente, en los celulares de los alumnos por Wi-Fi y en producción sin tener que cambiar una sola línea de código en los archivos JavaScript.
* **Explicación:** La portabilidad absoluta y la eliminación de URLs hardcodeadas permiten despliegues limpios (*zero-configuration deployments*) en cualquier entorno de red.

---
