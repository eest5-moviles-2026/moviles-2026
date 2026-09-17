# 📚 Guía de Teoría: Circuito Backend, Node.js, Express y Arquitectura MVC

**Materia:** Desarrollo de Software para Plataformas Móviles  
**Profesor:** Axel Castellano Gutiérrez  

---

## 📑 Índice de Contenidos

1. [📌 1. Introducción a Node.js](#-1-introducción-a-nodejs)
   - [1.1 El Manifiesto `package.json`](#11-el-manifiesto-packagejson)
   - [1.2 `node_modules` y `package-lock.json`](#12-node_modules-y-package-lockjson)
2. [⚙️ 2. Fundamentos de Express y Middlewares](#️-2-fundamentos-de-express-y-middlewares)
   - [2.1 ¿Qué es Express?](#21-qué-es-express)
   - [2.2 ¿Qué es un Middleware?](#22-qué-es-un-middleware)
   - [2.3 La Firma de un Middleware y Ejemplos Reales](#23-la-firma-de-un-middleware-req-res-next-y-ejemplos-reales)
   - [2.4 Clasificación de Middlewares](#24-clasificación-de-middlewares)
   - [2.5 Casos de Uso Frecuentes](#25-casos-de-uso-frecuentes)
3. [📦 3. Gestión de Dependencias del Proyecto](#-3-gestión-de-dependencias-del-proyecto)
   - [3.1 Dependencias de Producción (`dependencies`)](#31-dependencias-de-producción-dependencies)
     - [`cors` — El Aduanero de Seguridad del Navegador](#-1-cors--el-aduanero-de-seguridad-del-navegador)
     - [`dotenv` — La Caja Fuerte de Credenciales](#-2-dotenv--la-caja-fuerte-de-las-credenciales)
     - [`mysql2` — El Traductor y Comodines `?` (Inyección SQL)](#-3-mysql2--el-traductor-y-flota-de-taxis-hacia-mariadbmysql)
   - [3.2 Dependencias de Desarrollo (`devDependencies`)](#32-dependencias-de-desarrollo-devdependencies)
     - [`nodemon` — Asistente de Reinicios](#-1-nodemon--el-asistente-de-reinicio-automático)
4. [⚠️ 4. El Problema del Código "Spaghetti"](#️-4-el-problema-del-código-spaghetti)
5. [🏛️ 5. La Solución: Arquitectura MVC (Model - View - Controller)](#️-5-la-solución-arquitectura-mvc-model---view---controller)
6. [🔄 6. Ciclo de Vida End-to-End de una Petición](#-6-ciclo-de-vida-end-to-end-de-una-petición)
7. [🚀 7. Guía Paso a Paso: Cómo Iniciar el Proyecto Desde Cero](#-7-guía-paso-a-paso-cómo-iniciar-el-proyecto-desde-cero)
   - [7.1 Estructura Principal del Repositorio (`frontend` y `backend`)](#71-estructura-principal-del-repositorio)
   - [7.2 Los 5 Pasos de Inicialización dentro de `backend`](#72-qué-es-lo-primero-que-se-hace-dentro-de-la-carpeta-backend)
   - [7.3 Construyendo la Primera Vertical Completa (Ejemplo: `Mascotas`)](#️-73-construyendo-la-primera-vertical-completa-ejemplo-de-prueba-mascotas)
   - [7.4 Conectando el Frontend (`fetch()`) con el Backend MVC](#-74-conectando-el-frontend-fetch-con-el-backend-mvc)

---

## 📌 1. Introducción a Node.js

Node.js es un entorno de ejecución (*runtime*) asíncrono y orientado a eventos construido sobre el motor V8 de Google Chrome. Permite ejecutar código JavaScript fuera del navegador, en el servidor.

### 1.1 El Manifiesto `package.json`

El archivo `package.json` es el **documento de identidad y configuración principal** de cualquier aplicación o librería en el ecosistema de Node.js. Almacena la metadata del proyecto, la lista de librerías externas de las que depende y las instrucciones automatizadas de ejecución.

#### A. Inicialización (`npm init -y`)
Al ejecutar `npm init -y` en la terminal, Node.js genera de forma automática un archivo `package.json` básico con valores por defecto. La bandera `-y` (*yes*) evita el cuestionario interactivo inicial.

#### B. Anatomía y Secciones Clave
Un `package.json` estándar contiene las siguientes propiedades fundamentales:

1. **Campos Principales (`name`, `version`, `main`):**
   - `"name"`: Nombre único del proyecto (sin espacios ni mayúsculas).
   - `"version"`: Versión del software según el estándar SemVer (`MAJOR.MINOR.PATCH`, ej: `1.0.0`).
   - `"main"`: El archivo punto de entrada (*entry point*) de la aplicación (usualmente `index.js`).

2. **Sección de Scripts (`scripts`):**
   Permite crear alias de comandos de terminal para automatizar tareas recurrentes:
   ```json
   "scripts": {
     "start": "node index.js",
     "dev": "nodemon index.js"
   }
   ```
   - `npm start`: Ejecuta el servidor en producción.
   - `npm run dev`: Ejecuta el servidor en modo desarrollo utilizando `nodemon`, el cual reinicia el servidor automáticamente ante cada cambio guardado.

3. **Sistema de Módulos (`"type": "module"`):**
   Por defecto, Node.js utiliza el sistema histórico de módulos llamado **CommonJS** (`require()` y `module.exports`). Al agregar la clave `"type": "module"` en la raíz del `package.json`, le indicamos a Node.js que procese el código con **ES Modules (ESM)**, habilitando la sintaxis moderna estándar de JavaScript (`import` y `export`).

### 1.2 `node_modules` y `package-lock.json`
- **`node_modules/`**: Es la carpeta física donde `npm` descarga el código fuente binario de todas las dependencias y sus sub-dependencias. **NUNCA debe subirse a Git** (debe incluirse en `.gitignore`) por su enorme peso y porque se regenera fácilmente ejecutando `npm install`.
- **`package-lock.json`**: Se genera automáticamente al instalar dependencias. Almacena la versión exacta y el árbol de dependencias instalado en ese instante preciso, garantizando que el proyecto funcione de forma idéntica en la computadora de cualquier integrante del equipo o en el servidor de producción.

---

## ⚙️ 2. Fundamentos de Express y Middlewares

### 2.1 ¿Qué es Express?
Express es el framework web minimalista e imprescindible para Node.js. Proporciona una capa abstracta de alto nivel sobre el módulo `http` nativo de Node.js, simplificando la creación de servidores web, el ruteo de endpoints (`app.get`, `app.post`), el análisis de parámetros y el envío de respuestas formateadas (`res.json`).

#### 💡 Analogía: La Central Telefónica Automatizada (Conmutador)
Imaginemos una empresa gigante con miles de oficinas y una sola línea telefónica pública:

- **Sin Express (Node.js HTTP puro)**: Sería como si un solo operador humano tuviera que atender cada llamada entrante, escuchar pacientemente el mensaje letra por letra, desencriptar manualmente a qué oficina quiere ir el cliente leyendo cadenas de texto plano, y conectar los cables a mano. Si el cliente envía datos en el cuerpo de la llamada, el operador tiene que juntar los fragmentos de audio (*buffers*) en un balde antes de poder leerlos.
- **Con Express**: Es un **Conmutador Inteligente de Última Generación**:
  1. **Enrutamiento Automático (`Routing`)**: Marcás el interno `/api/productos` (`GET`) y te deriva directo con el departamento correspondiente.
  2. **Traducción Automática (`Parsing`)**: Si el cliente envía información en formato JSON, Express la convierte automáticamente en un objeto de JavaScript accesible en `req.body`.
  3. **Seguridad y Filtros (`Middlewares`)**: Antes de derivar la llamada, el conmutador hace pasar la llamada por una recepcionista que valida credenciales o permisos de acceso.

#### ⚔️ Comparativa en Código: Node.js Puro vs. Express

##### Opción A: Servidor en Node.js HTTP Puro (Sin Express)
```javascript
import http from "http";

const server = http.createServer((req, res) => {
    // 1. Hay que parsear la URL y el método HTTP manualmente a mano
    if (req.url === "/api/productos" && req.method === "GET") {
        // 2. Configurar manualmente cabeceras HTTP
        res.writeHead(200, { "Content-Type": "application/json" });
        // 3. Convertir el objeto a String JSON a mano
        res.end(JSON.stringify({ mensaje: "Lista de productos" }));
    } else {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "Ruta no encontrada" }));
    }
});

server.listen(3000);
```

##### Opción B: Servidor equivalente con Express
```javascript
import express from "express";
const app = express();

// Express simplifica la sintaxis, el ruteo y el envío de respuestas JSON
app.get("/api/productos", (req, res) => {
    res.json({ mensaje: "Lista de productos" });
});

app.listen(3000);
```

### 2.2 ¿Qué es un Middleware?

---
Un **Middleware** es una función intermedia que se ejecuta en la cadena de procesamiento de Express **entre** la recepción de la petición HTTP por parte del servidor y la emisión de la respuesta final por el controlador.

Tienen acceso al objeto de la petición (`req`), al objeto de la respuesta (`res`) y a la función `next()`, la cual actúa como un "peaje" que autoriza el paso al siguiente middleware o controlador de la pila.

```text
[ Petición HTTP ] ──► [ Middleware 1 ] ──► [ Middleware 2 ] ──► [ Controller ] ──► [ Respuesta HTTP ]
                       (ej: express.json)    (ej: validateID)    (res.json)
```

#### 💡 Analogía: El Molinete de Seguridad de un Recital
Imaginemos que el cliente es un espectador que intenta entrar a un recital:

1. **La Petición (`req`)**: Es el espectador intentando llegar al escenario principal (el `Controller`).
2. **El Middleware (El Molinete / Guardia de Seguridad)**:
   - Se interpone en la puerta antes de llegar al escenario.
   - Revisa si el espectador tiene entrada válida (*Autenticación*).
   - Revisa si el bolso cumple las reglas del lugar (*Validación de datos*).
3. **El Permiso `next()`**: Si todo está en regla, el guardia dice *"¡Adelante, podés pasar!"* y llama a `next()`.
4. **El Rebote (`return res.status(...)`)**: Si no tiene entrada o violó una regla, el guardia lo frena ahí mismo y lo rebota. El artista en el escenario (el controlador y la base de datos) **nunca se enteran** de que alguien intentó entrar sin permiso.

---

### 2.3 La Firma de un Middleware `(req, res, next)` y Ejemplos Reales

Todo middleware personalizado recibe tres parámetros: `req` (petición), `res` (respuesta) y `next` (función callback para continuar).

#### Ejemplo Real 1: Logger de Peticiones (Middleware Global)
Registra en la consola la fecha, método y URL de cada petición que entra al servidor:
```javascript
// Middleware personalizado para auditoría de tráfico
const loggerMiddleware = (req, res, next) => {
    const fecha = new Date().toLocaleTimeString();
    console.log(`[${fecha}] Petición entrante: ${req.method} ${req.url}`);
    
    // Le pasa la posta al siguiente middleware o controlador
    next(); 
};

// Se aplica de forma global a todas las rutas
app.use(loggerMiddleware);
```

#### Ejemplo Real 2: Validador de ID Numérico (`validateID` - Middleware de Ruta)
Evita que una consulta SQL falle si el cliente envía un ID no numérico (ej: `GET /api/productos/hola`):
```javascript
// Middleware específico para validar IDs en rutas como /api/productos/:id
export const validateID = (req, res, next) => {
    const { id } = req.params;
    
    // Validamos si no es un número entero válido
    if (isNaN(id) || Number(id) <= 0) {
        // Cortamos el flujo INMEDIATAMENTE y devolvemos un 400 Bad Request
        return res.status(400).json({ 
            error: "El parámetro ID debe ser un número entero válido mayor a 0" 
        });
    }

    // Si todo está OK, adjuntamos el ID parseado a req y damos luz verde
    req.id = parseInt(id);
    next();
};

// Uso en la ruta: 'validateID' se ejecuta ANTES que 'getProductoDetalle'
router.get("/:id", validateID, getProductoDetalle);
```

### 2.4 Clasificación de Middlewares

1. **Middlewares Globales (`app.use()`):**
   Se ejecutan en **todas** las peticiones que llegan al servidor. Se declaran en `index.js` antes de las rutas.
2. **Middlewares de Ruta o Específicos:**
   Se aplican únicamente a un endpoint o grupo de rutas en particular:
   ```javascript
   // El middleware 'validateID' se ejecuta ANTES de 'getProdDescripcion'
   router.get("/:id", validateID, getProdDescripcion);
   ```
3. **Middlewares de Manejo de Errores:**
   Son middlewares especiales que reciben 4 parámetros `(err, req, res, next)`. Express los invoca automáticamente cuando se produce una excepción no capturada en la aplicación.

### 2.5 Casos de Uso Frecuentes
- **Autenticación y Autorización:** Verificar si el usuario envió un Token JWT válido o tiene una sesión activa antes de permitirle acceder a un recurso protegido.
- **Validación de Datos:** Comprobar que los parámetros recibidos (`req.params.id` o `req.body`) cumplen con el tipo de dato esperado antes de saturar la base de datos.
- **Subida de Archivos:** Procesar archivos adjuntos en peticiones `multipart/form-data` (ej. `multer` para imágenes).

---

## 📦 3. Gestión de Dependencias del Proyecto

Node.js distingue estrictamente entre las librerías necesarias para ejecutar la aplicación en un servidor real y las herramientas que solo ayudan al desarrollador a programar:

### 3.1 Dependencias de Producción (`dependencies`)
Se instalan con `npm install <paquete>`. Son módulos esenciales cuya presencia es **obligatoria** en tiempo de ejecución para que el servidor responda peticiones en cualquier entorno.

---

#### 🌐 1. `cors` — El Aduanero de Seguridad del Navegador
- **Analogía**: Imaginate llegar a la aduana de un país. El agente te frena en la frontera y te dice: *"Solo podés pasar si venís de un origen autorizado en mi lista"*.
- **El Problema Real**: Por seguridad, los navegadores web **bloquean por defecto** cualquier petición `fetch()` realizada desde una aplicación web o PWA (ej: corriendo en `http://localhost:5173`) hacia una API backend alojada en otro puerto o dominio (`http://localhost:3000`). Si no usamos `cors`, el navegador muestra un error gigante en consola: `Access-Control-Allow-Origin blocked`.
- **Definición Técnica**: Middleware para Express que gestiona la especificación HTTP CORS de la W3C. Inyecta automáticamente las cabeceras de respuesta requeridas (`Access-Control-Allow-Origin`, `Access-Control-Allow-Methods`, `Access-Control-Allow-Headers`) para resolver la restricción de seguridad del navegador llamada **Same-Origin Policy (SOP)** en peticiones asíncronas entre orígenes distintos.
- **En Código**:
  ```javascript
  import cors from "cors";
  
  // Habilita el permiso para que el frontend pueda consumir nuestra API sin bloqueos
  app.use(cors());
  ```

---

#### 🔐 2. `dotenv` — La Caja Fuerte de las Credenciales
- **Analogía**: En tu vida diaria no pegás un papelito con tu clave de cajero en la puerta de entrada de tu casa. Las claves se guardan bajo llave en un lugar privado.
- **El Problema Real**: Si escribís la contraseña de la base de datos directamente adentro de `db.js` (`password: "123456"`) y subís el proyecto a GitHub, **cualquier persona en Internet podrá ver la clave secreta de tu base de datos**.
- **La Solución**: Separar las claves privadas en un archivo `.env` que se ignora en Git y se lee en tiempo de ejecución.
- **Definición Técnica**: Módulo que lee el archivo plano de configuración `.env` durante la fase de bootstrap del servidor, parsea sus pares clave-valor e inyecta las variables directamente en el objeto global `process.env`. Implementa el principio de arquitectura **Twelve-Factor App (Factor III: Configuración)**, garantizando la estricta separación entre el código fuente y las credenciales de infraestructura.
- **En Código**:
  ```env
  # Archivo .env (incluido en .gitignore)
  PORT=3000
  DB_HOST=localhost
  DB_USER=root
  DB_PASSWORD=mi_clave_super_secreta
  DB_NAME=app_moviles
  ```
  ```javascript
  import dotenv from "dotenv";
  dotenv.config(); // Carga las variables del .env en process.env

  console.log(process.env.DB_PASSWORD); // Imprime "mi_clave_super_secreta"
  ```

---

#### 🐬 3. `mysql2` — El Traductor y Flota de Taxis hacia MariaDB/MySQL
- **Analogía**: Node.js habla JavaScript y MariaDB habla lenguaje SQL. `mysql2` es el **intérprete bilingüe profesional y la flota de taxis** que lleva los mensajes de un lado a otro.
- **El Problema Real (¿Por qué usamos `mysql2` y no el paquete `mysql` viejo?)**:
  1. **Evita el Callback Hell**: Nos permite usar `const [filas] = await connection.query(...)` con `async/await` moderno.
  2. **Evita el Colapso de la BD (Pool de Conexiones)**: En lugar de abrir/cerrar una conexión por cada usuario, mantiene una "flota" de conexiones abiertas y reutilizables que atienden consultas al instante.
  3. **Evita Hackeos (Inyección SQL)**: Reemplaza concatenaciones peligrosas por comodines `?` que neutralizan código malicioso.
- **Definición Técnica**: Driver cliente de alto rendimiento para el protocolo de red binario de MySQL/MariaDB. Soporta la API moderna basada en Promesas (`mysql2/promise`) para integración con `async/await`, gestión de conexiones TCP mediante **Pools de Conexiones** (*Connection Pooling*) y sintaxis de **Sentencias Preparadas** (*Prepared Statements*) con escape automático mediante comodines posicionales `?` para la prevención estricta de Inyecciones SQL (CWE-89).

##### ❓ ¿Cómo funcionan los Comodines `?` y por qué evitan la Inyección SQL?

#### A. ¿Qué es un Comodín `?`?
El signo de pregunta `?` en una consulta SQL es un **marcador de posición (*placeholder*)**. Funciona exactamente como el casillero en blanco de un formulario en papel.
Le dice a la base de datos MariaDB:  
> *"Acá va un dato (un texto, un número, una fecha), pero **NUNCA es una orden ni una instrucción SQL**"*.

#### B. Mapeo Posicional por Array de Parámetros
La librería `mysql2` vincula de forma transparente cada `?` en orden de aparición con los elementos del array que le enviamos como segundo argumento a `connection.query(sql, [parametros])`:

```javascript
const sql = "SELECT * FROM productos WHERE categoria = ? AND precio <= ? AND activo = ?";
const parametros = ["Pantalones", 15000, true];

const [rows] = await connection.query(sql, parametros);
```
- El **1º `?`** se reemplaza de forma segura por `"Pantalones"` (`parametros[0]`).
- El **2º `?`** se reemplaza por `15000` (`parametros[1]`).
- El **3º `?`** se reemplaza por `true` (`parametros[2]`).

---

#### C. La Diferencia Crucial: Concatenación vs Comodín `?`

##### ❌ 1. Con Concatenación de Strings (VULNERABLE / INSEGURO)
Si pegamos el texto del usuario directamente adentro del comando SQL usando `+` o Template Literals (`` `${id}` ``):

```javascript
const usuarioInput = "1 OR 1=1"; // Un atacante escribe esto en una caja de texto
const sql = "SELECT * FROM usuarios WHERE id = " + usuarioInput;
```
La base de datos recibe la cadena completa y **interpreta el texto del atacante como código SQL ejecutable**:
```sql
SELECT * FROM usuarios WHERE id = 1 OR 1=1;
```
👉 **Consecuencia:** Como `1=1` siempre es verdadero, la base de datos retorna **todos los usuarios del sistema**, saltándose las validaciones.

##### ✅ 2. Con Comodines `?` y Sentencias Preparadas (SEGURO)
```javascript
const usuarioInput = "1 OR 1=1";
const sql = "SELECT * FROM usuarios WHERE id = ?";

// MariaDB procesa la estructura SQL separada de los datos
const [rows] = await connection.query(sql, [usuarioInput]);
```
- **Fase 1 (Estructura Fija):** MariaDB recibe primero `SELECT * FROM usuarios WHERE id = ?`. El motor de la base de datos fija las reglas del juego: *"Voy a buscar un registro donde el campo id sea igual a un dato puro"*.
- **Fase 2 (Tratamiento como Texto Literal):** `mysql2` envía la variable `usuarioInput` entre comillas y escapada (`'1 OR 1=1'`). MariaDB busca literalmente un usuario cuyo ID sea la cadena de texto `"1 OR 1=1"`. 
👉 **Consecuencia:** Como ningún usuario tiene como ID el texto `"1 OR 1=1"`, no devuelve datos y **el ataque se desactiva por completo**.

- **En Código**:
  ```javascript
  import mysql from "mysql2/promise";

  // Pool de conexiones reutilizables
  const connection = mysql.createPool({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME
  });

  // Consulta preparada segura usando '?'
  const sql = "SELECT * FROM productos WHERE id = ? AND activo = ?";
  const [rows] = await connection.query(sql, [id, true]);
  ```

---

### 3.2 Dependencias de Desarrollo (`devDependencies`)
Se instalan con `npm install -D <paquete>`. Son herramientas utilizadas exclusivamente durante la fase de codificación local por el desarrollador y se omiten al empaquetar el servidor para producción.

---

#### ⚡ 1. `nodemon` — El Asistente de Reinicio Automático
- **Analogía**: Un asistente en segundo plano que reinicia el servidor en la terminal cada vez que presionás `Ctrl + S`, evitando tener que cortar (`Ctrl + C`) y reiniciar `node index.js` a mano constantemente.
- **Definición Técnica**: Herramienta CLI de monitoreo de desarrollo que envuelve la ejecución del proceso hijo de Node.js. Utiliza los eventos del sistema de archivos (`fs.watch`) para detectar modificaciones en archivos (`.js`, `.json`, `.env`) y enviar señales de sistema (`SIGUSR2` / `SIGINT`) que reinician el proceso del servidor de forma transparente sin perder el foco en la terminal.
- **En `package.json`**:
  ```json
  "scripts": {
    "dev": "nodemon index.js"
  }
  ```

---

## ⚠️ 4. El Problema del Código "Spaghetti"

Cuando construimos un backend sin estructura, tendemos a escribir todo el código en un único archivo `index.js`. Esto produce:
1. **Acoplamiento Fuerte:** Cambiar la base de datos implica modificar la lógica del servidor.
2. **Imposibilidad de Testear:** No se puede probar la lógica de negocio aislada.
3. **Conflictos en Git:** Múltiples desarrolladores modificando el mismo archivo constantemente.

---

## 🏛️ 5. La Solución: Arquitectura MVC (Model - View - Controller)

Para resolver la complejidad, aplicamos la **Separación de Responsabilidades (*Separation of Concerns*)**:

```text
[ Cliente (Postman / App Móvil) ]
             │
             ▼
        [ index.js ]            <-- Servidor HTTP & Middlewares Globales
             │
             ▼
      [ Capa de Rutas ]         <-- (Router): Direccionamiento de URLs y Verbos HTTP
             │
             ▼
   [ Capa de Controladores ]   <-- (Controller): Lógica de Aplicación y Orquestación HTTP
             │
             ▼
      [ Capa de Modelos ]       <-- (Model): Acceso a Datos & Consultas SQL
             │
             ▼
   [ Base de Datos (MariaDB) ]
```

### Roles y Responsabilidades

- **Router (`src/routes/`)**: Asigna cada URL y verbo HTTP (`GET`, `POST`, `PUT`, `DELETE`) a la función correspondiente del controlador.
- **Controller (`src/controllers/`)**: Recibe la petición HTTP (`req`), valida parámetros, llama al Modelo para procesar datos y construye la respuesta HTTP (`res`).
- **Model (`src/models/`)**: Es la única capa encargada de interactuar con la Base de Datos (`connection.query`). Devuelve datos puros.

---

## 🔄 6. Ciclo de Vida End-to-End de una Petición

Supongamos que un cliente (navegador, Postman o app móvil) ejecuta la siguiente petición:  
`GET http://localhost:3000/api/productos/15`

A continuación se detalla el recorrido exacto y la responsabilidad de cada componente en orden cronológico de ejecución:

---

### 1. Servidor Principal (`index.js`) — Recepción & Routing Inicial
**¿Qué pasa en este paso?**
- El servidor Express escucha de forma continua peticiones en el puerto `3000`.
- Cuando entra la petición `GET /api/productos/15`, pasa primero por los middlewares globales (ej: `express.json()`, `cors()`).
- Luego, Express compara el prefijo `/api/productos` en las rutas registradas y detecta que debe delegarle la petición al router `productosRoutes`.

```javascript
// 1. Importa el framework Express desde los módulos instalados para construir el servidor y manejar ruteo
import express from "express";

// 2. Importa el Router especializado de productos desde su archivo correspondiente
import productosRoutes from "./src/routes/productos.routes.js";

// 3. Inicializa la aplicación de Express y guarda la instancia principal en la constante 'app'
const app = express();

// 4. Middleware Global: parsea automáticamente peticiones con cuerpo JSON y las convierte en objetos JS en req.body
app.use(express.json());

// 5. Montaje de Ruta: toda petición HTTP cuyo prefijo de URL sea '/api/productos' se deriva al router 'productosRoutes'
app.use("/api/productos", productosRoutes);

// 6. Enciende el servidor en el puerto 3000 y ejecuta la función callback indicando que está listo para recibir peticiones
app.listen(3000, () => console.log("Servidor escuchando en http://localhost:3000"));
```

---

### 2. Capa de Rutas (`src/routes/productos.routes.js`) — Mapeo de Endpoint & Verbo HTTP
**¿Qué pasa en este paso?**
- El Router recibe el remanente de la URL (`/:id`, que en este caso toma el valor `15`) y verifica el método HTTP (`GET`).
- Coincide con la ruta `router.get("/:id", ...)` y dispara la función controladora asociada `getProductoDetalle`.
- Si existieran middlewares de ruta (como validadores de ID), se ejecutarían en este momento justo antes de invocar al controlador.

```javascript
// 1. Importa Express para acceder a la funcionalidad de ruteo modular
import express from "express";

// 2. Importa la función controladora 'getProductoDetalle' desde la capa de controladores
import { getProductoDetalle } from "../controllers/productos.controllers.js";

// 3. Instancia un objeto Router independiente para agrupar endpoints de esta entidad
const router = express.Router();

// 4. Mapea la ruta relativa '/:id' con el método GET e invoca la función controladora asociada
router.get("/:id", getProductoDetalle);

// 5. Exporta el router configurado por defecto para ser importado y montado en index.js
export default router;
```

---

### 3. Capa de Controladores (`src/controllers/productos.controllers.js`) — Lógica de Aplicación y Orquestación HTTP
**¿Qué pasa en este paso?**
- La función `getProductoDetalle(req, res)` toma el control del flujo.
- Extrae el parámetro dinámico `id = 15` desde `req.params`.
- Invoca a la capa del modelo `getProductoPorId(15)` usando `await` para solicitar la información a la base de datos.
- **Toma de decisiones de negocio:**
  - Si el modelo retorna `undefined` (el producto no existe), el controlador responde inmediatamente con status `404 Not Found` y un JSON de error.
  - Si ocurre un fallo inesperado de sistema, el bloque `catch` captura la excepción y responde con status `500 Internal Server Error`.
  - Si el producto existe, responde con status `200 OK` enviando el JSON formateado `{ payload: producto }`.

```javascript
// 1. Importa la función del modelo encargada del acceso directo a la base de datos
import { getProductoPorId } from "../models/producto.models.js";

// 2. Exporta la función controladora asíncrona que procesa la petición de detalle de producto
export const getProductoDetalle = async (req, res) => {
    try {
        // 3. Extrae el parámetro dinámico 'id' enviado en la URL de la petición (req.params)
        const { id } = req.params;

        // 4. Llama a la capa del Modelo pasando el ID y espera la respuesta de los datos con 'await'
        const producto = await getProductoPorId(id);

        // 5. Evalúa la regla de negocio: Si el producto no existe en la BD (undefined), retorna un Status 404
        if (!producto) {
            return res.status(404).json({ error: "Producto no encontrado" });
        }

        // 6. Si el producto existe, responde con un Status 200 (OK) enviando el objeto en formato JSON
        return res.json({ payload: producto });
    } catch (error) {
        // 7. Si ocurre un error no previsto (ej: fallo de red con la BD), captura la excepción y responde con Status 500
        return res.status(500).json({ error: "Error interno del servidor" });
    }
};
```

---

### 4. Capa de Modelos (`src/models/producto.models.js`) — Acceso a Datos y Consulta SQL
**¿Qué pasa en este paso?**
- El modelo recibe el parámetro `id` (15) como un argumento numérico plano. **No conoce Express ni sabe qué es `req` o `res`**.
- Define la sentencia SQL parametrizada con comodines posicionales `?` para prevenir ataques de Inyección SQL.
- Utiliza la conexión del Pool (`connection.query`) para enviar la consulta binaria a la base de datos MariaDB/MySQL.
- Recibe el conjunto de filas resultantes y retorna **únicamente el registro plano de datos** al controlador.

```javascript
// 1. Importa el pool de conexiones configurado a MariaDB/MySQL
import connection from "../database/db.js";

// 2. Exporta la función asíncrona del modelo que interactúa directamente con la base de datos
export const getProductoPorId = async (id) => {
    // 3. Define la consulta SQL segura usando comodines posicionales '?' para evitar Inyección SQL
    const sql = "SELECT id, nombre, precio, imagenUrl FROM productos WHERE id = ? AND activo = ?";
    
    // 4. Ejecuta la consulta SQL en MariaDB pasando los valores de reemplazo [id, true]
    const [rows] = await connection.query(sql, [id, true]);
    
    // 5. Retorna únicamente el primer registro (objeto plano de datos JS) a la capa del Controlador
    return rows[0];
};
```

---

### 🔄 Resumen del Viaje de Retorno
1. **MariaDB** procesa el `SELECT` y devuelve los datos por el socket al **Modelo**.
2. El **Modelo** extrae las filas y le retorna el objeto JavaScript al **Controlador**.
3. El **Controlador** ejecuta `res.json({ payload: producto })` codificando los datos a JSON y cerrando el ciclo HTTP.
4. El **Cliente (Frontend / App Móvil)** recibe la respuesta `200 OK` y renderiza el producto en la interfaz.

---

## 🚀 7. Guía Paso a Paso: Cómo Iniciar el Proyecto Desde Cero

### 7.1 Estructura Principal del Repositorio
Para mantener el código organizado y profesional, la raíz del repositorio de cada equipo debe dividirse claramente en dos grandes directorios independientes: `frontend` y `backend`.

```text
mi-proyecto-grupal/
├── frontend/             # Código de la aplicación web cliente / PWA (HTML, CSS, JS)
└── backend/              # Código del servidor Node.js, Express, MVC y APIs REST
```

#### Comando de creación inicial en la terminal:
```bash
# 1. Ubicados en la raíz del repositorio grupal, crear ambas carpetas:
mkdir frontend backend
```

---

### 7.2 ¿Qué es lo PRIMERO que se hace dentro de la carpeta `backend`?

Ingresar a la carpeta `backend` (`cd backend`) y seguir **estrictamente estos 5 pasos de inicialización**:

#### 1️⃣ Paso 1: Inicializar el Entorno de Node.js (`package.json`)
Generar el manifiesto del proyecto ejecutando:
```bash
cd backend
npm init -y
```
Inmediatamente abrir el `package.json` creado y agregar la clave `"type": "module"` en la raíz del JSON para habilitar ES Modules (`import`/`export`):
```json
{
  "name": "backend",
  "version": "1.0.0",
  "type": "module",
  "main": "index.js",
  ...
}
```

#### 2️⃣ Paso 2: Crear el OBLIGATORIO `.gitignore` y el `.env.example`
**¡Regla de oro de seguridad!** Antes de instalar paquetes o hacer el primer `git commit`, tenés que crear el archivo `.gitignore` en la raíz de la carpeta `backend/`.

1. **Crear el archivo `.gitignore`** en `backend/`:
   ```bash
   # En la terminal dentro de backend/
   touch .gitignore
   ```
2. **Escribir adentro del `.gitignore`:**
   ```text
   # Ignorar dependencias descargadas
   node_modules/

   # Ignorar archivo local de variables de entorno y claves secretas
   .env
   ```

3. **Crear la plantilla pública `.env.example`:**  
   Para que tus compañeros de equipo sepan qué variables de entorno necesita el proyecto para funcionar sin regalar tus contraseñas locales, se crea un archivo de plantilla llamado `.env.example` que **SÍ se sube a Git**:
   ```env
   # .env.example (Plantilla pública para el equipo)
   PORT=3000
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=
   DB_NAME=nombre_de_la_bd
   ```

---

#### 3️⃣ Paso 3: Instalar las Dependencias del Proyecto
Ejecutar la instalación de los paquetes necesarios en la terminal:
```bash
# Dependencias de producción
npm install express cors dotenv mysql2

# Dependencia de desarrollo (reinicios automáticos)
npm install -D nodemon
```

---

#### 4️⃣ Paso 4: Crear el Archivo de Variables de Entorno (`.env`)
Crear el archivo oculto `.env` en la raíz de `backend/` cargando las credenciales locales reales:
```env
PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=app_moviles
```

---

#### 5️⃣ Paso 5: Armar la Estructura de Directorios MVC
Crear dentro de `backend/` el archivo punto de entrada `index.js` y la jerarquía de carpetas necesaria dentro de `src/`:

```text
backend/
├── src/
│   ├── config/          # Ajustes y lectura de variables de entorno
│   ├── database/        # Conexión a MariaDB (db.js)
│   ├── routes/          # Routers de la aplicación (productos.routes.js)
│   ├── controllers/     # Controladores (productos.controllers.js)
│   ├── models/          # Modelos de acceso a BD (producto.models.js)
│   └── middlewares/     # Middlewares de validación y auth
├── .env                 # Variables locales (IGNORADO en Git)
├── .env.example         # Plantilla pública (COMMITEADO en Git)
├── .gitignore           # Filtro de Git (COMMITEADO en Git)
├── index.js             # Punto de entrada del servidor Express
└── package.json         # Manifiesto de dependencias
```

---

### 💻 Las Primeras Líneas de Código para Empezar (`backend/index.js`)

Estas son las **primeras líneas de código obligatorias** que tienen que escribir en `backend/index.js` para encender el servidor Express con todas sus dependencias conectadas:

```javascript
// 1. Importar frameworks y librerías instaladas
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

// 2. Inicializar dotenv para leer las variables del archivo .env inmediatamente
dotenv.config();

// 3. Crear la instancia principal del servidor Express
const app = express();

// 4. Configurar el puerto desde las variables de entorno o usar 3000 por defecto
const PORT = process.env.PORT || 3000;

// 5. Middleware Global: Permite peticiones desde el frontend (evita bloqueos CORS)
app.use(cors());

// 6. Middleware Global: Permite recibir y entender datos en formato JSON en el cuerpo de las peticiones (req.body)
app.use(express.json());

// 7. Ruta de prueba básica (Health Check) para verificar que el servidor funciona
app.get("/", (req, res) => {
    res.json({ status: "OK", mensaje: "Servidor Backend corriendo correctamente" });
});

// 8. Poner a escuchar el servidor en el puerto configurado
app.listen(PORT, () => {
    console.log(`🚀 Servidor activo en http://localhost:${PORT}`);
});
```

---

---

### 🛠️ 7.3 Construyendo la Primera Vertical Completa (Ejemplo de Prueba: `Mascotas`)

A continuación se muestra el paso a paso exacto para construir una primera API completa desde cero (con operaciones `GET` y `POST`) sobre una entidad ficticia de prueba llamada **Mascotas**. Luego, cada equipo aplicará este mismo flujo para las entidades reales de su propio proyecto.

---

#### 🅰️ Paso A: Crear la Conexión a la Base de Datos (`src/database/db.js`)

##### ❓ ¿Qué es y por qué usamos un Pool de Conexiones (*Connection Pool*)?

- **El Problema de la Conexión Individual (`createConnection`)**:  
  Abrir una conexión directa con MariaDB implica negociar un protocolo de red TCP (handshake de red, autenticación de usuario y clave). Este proceso consume tiempo y recursos de memoria (aprox. 50ms a 200ms por conexión). Si 100 usuarios ingresan a la app al mismo tiempo y el servidor abre y cierra 100 conexiones individuales de forma compulsiva, la base de datos colapsará con el error `Too many connections`.

- **La Solución: El Pool de Conexiones (`createPool`)**:  
  Un **Pool** es una "reserva o piscina de conexiones pre-abiertas". En lugar de crear conexiones desde cero en cada petición:
  1. Al iniciar la app, `mysql2` abre una cantidad fija de conexiones (ej: 10) y las mantiene vivas en segundo plano.
  2. Cuando un usuario hace una consulta (`SELECT`), el pool le presta una conexión libre.
  3. Al finalizar la consulta, **la conexión NO se destruye**: se devuelve automáticamente al pool para ser reutilizada por el siguiente usuario.

---

##### 💻 Código y Desglose Línea por Línea de `mysql.createPool`:

```javascript
// src/database/db.js
import mysql from "mysql2/promise"; // 1. Importa la versión de mysql2 basada en Promesas (async/await)
import dotenv from "dotenv";        // 2. Importa dotenv para leer el archivo de variables .env

dotenv.config();                     // 3. Ejecuta la lectura de variables de entorno

// 4. Crea y exporta la piscina de conexiones reutilizables
const connection = mysql.createPool({
    // Dirección IP o dominio donde se hospeda MariaDB ("localhost" si es en tu computadora)
    host: process.env.DB_HOST || "localhost",

    // Usuario registrado en la base de datos con permisos (por defecto en XAMPP/WAMP es "root")
    user: process.env.DB_USER || "root",

    // Contraseña del usuario de la BD (en XAMPP/WAMP suele estar vacía "")
    password: process.env.DB_PASSWORD || "",

    // Nombre de la base de datos específica que contiene nuestras tablas
    database: process.env.DB_NAME || "app_moviles",

    // Si la piscina está llena, las nuevas peticiones esperan pacientemente a que se libere un socket (true)
    waitForConnections: true,

    // Cantidad máxima de conexiones TCP abiertas en simultáneo que mantendrá el pool en memoria
    connectionLimit: 10,

    // Límite máximo de peticiones en cola de espera cuando el pool está lleno (0 = cola ilimitada)
    queueLimit: 0
});

export default connection;
```

---

#### 🅱️ Paso B: Crear el Modelo (`src/models/mascota.models.js`)
Define las funciones que ejecutan las consultas SQL en la base de datos:

```javascript
// src/models/mascota.models.js
import connection from "../database/db.js";

// 1. Obtener todas las mascotas disponibles
export const getTodasLasMascotas = async () => {
    const sql = "SELECT id, nombre, especie, edad FROM mascotas WHERE disponible = ?";
    const [rows] = await connection.query(sql, [true]);
    return rows;
};

// 2. Insertar una nueva mascota en la base de datos
export const crearMascota = async ({ nombre, especie, edad }) => {
    const sql = "INSERT INTO mascotas (nombre, especie, edad, disponible) VALUES (?, ?, ?, ?)";
    const [resultado] = await connection.query(sql, [nombre, especie, edad, true]);
    return resultado.insertId; // Retorna el ID autogenerado por la BD
};
```

---

#### 🅲 Paso C: Crear el Controlador (`src/controllers/mascotas.controllers.js`)
Procesa las peticiones HTTP, valida datos de entrada y emite las respuestas JSON:

```javascript
// src/controllers/mascotas.controllers.js
import { getTodasLasMascotas, crearMascota } from "../models/mascota.models.js";

// 1. Controlador para responder al GET /api/mascotas
export const getMascotas = async (req, res) => {
    try {
        const mascotas = await getTodasLasMascotas();
        return res.json({ payload: mascotas });
    } catch (error) {
        console.error("Error al obtener mascotas:", error);
        return res.status(500).json({ error: "Error al consultar las mascotas" });
    }
};

// 2. Controlador para responder al POST /api/mascotas
export const postMascota = async (req, res) => {
    try {
        const { nombre, especie, edad } = req.body;

        // Validación básica de campos requeridos
        if (!nombre || !especie) {
            return res.status(400).json({ error: "Nombre y especie son obligatorios" });
        }

        const nuevoId = await crearMascota({ nombre, especie, edad: edad || 0 });
        return res.status(201).json({ mensaje: "Mascota registrada con éxito", id: nuevoId });
    } catch (error) {
        console.error("Error al crear mascota:", error);
        return res.status(500).json({ error: "Error al guardar la mascota en la base de datos" });
    }
};
```

---

#### 🅳 Paso D: Crear el Router (`src/routes/mascotas.routes.js`)
Mapea las URLs y verbos HTTP con las funciones del controlador:

```javascript
// src/routes/mascotas.routes.js
import express from "express";
import { getMascotas, postMascota } from "../controllers/mascotas.controllers.js";

const router = express.Router();

// GET /api/mascotas -> Llama a getMascotas
router.get("/", getMascotas);

// POST /api/mascotas -> Llama a postMascota
router.post("/", postMascota);

export default router;
```

---

#### 🅴 Paso E: Montar el Router en `index.js`
Importar y conectar el router en el servidor principal:

```javascript
// index.js (fragmento)
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mascotasRoutes from "./src/routes/mascotas.routes.js"; // 1. Importar el router

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// 2. Montar el router bajo el prefijo '/api/mascotas'
app.use("/api/mascotas", mascotasRoutes);

app.listen(3000, () => console.log("🚀 Servidor activo en puerto 3000"));
```

---

### 🧪 Verificación con Postman / Thunder Client
- **Petición GET**: `GET http://localhost:3000/api/mascotas` ➔ Devuelve Status `200 OK` con la lista de mascotas.
- **Petición POST**: `POST http://localhost:3000/api/mascotas` enviando en el Body (JSON):
  ```json
  {
    "nombre": "Firulais",
    "especie": "Perro",
    "edad": 3
  }
  ```
  ➔ Devuelve Status `201 Created` con `{ "mensaje": "Mascota registrada con éxito", "id": 1 }`.

---

### 🌐 7.4 Conectando el Frontend (`fetch()`) con el Backend MVC

Hasta ahora probamos la API con Postman. ¿Pero cómo interactúa realmente el código JavaScript de nuestra aplicación web (Frontend) con toda esta arquitectura de backend?

#### 🔄 El Diagrama Completo de Ida y Vuelta

```text
[ FRONTEND (Navegador) ]
    │  1. fetch('http://localhost:3000/api/mascotas', { method: 'POST', body: ... })
    ▼
[ RED / INTERNET / HTTP ]
    │  2. Viaja paquete HTTP con IP, Puerto 3000, Headers y Body JSON
    ▼
[ BACKEND: index.js ]
    │  3. Middleware cors(): ¿Origen permitido? Sí -> Continuar.
    │  4. Middleware express.json(): Parsea body JSON -> crea req.body
    ▼
[ BACKEND: Router ]
    │  5. Coincide POST /api/mascotas -> Deriva a postMascota en el Controller
    ▼
[ BACKEND: Controller ]
    │  6. Extrae const { nombre, especie } = req.body
    │  7. Valida datos de entrada y llama al Model crearMascota()
    ▼
[ BACKEND: Model ]
    │  8. Ejecuta INSERT INTO mascotas VALUES (?, ?) usando el Pool de MariaDB
    ▼
[ BASE DE DATOS (MariaDB) ]
    │  9. Guarda el registro y retorna insertId
    ▼
[ VIAJE DE RETORNO ]
    │ 10. Model retorna ID -> Controller ejecuta res.status(201).json({ mensaje, id })
    │ 11. Backend envía respuesta HTTP 201 Created con Body JSON
    ▼
[ FRONTEND (Navegador) ]
    │ 12. const data = await response.json(); -> Actualiza la interfaz / DOM
```

---

#### 💻 Código del Frontend (`frontend/js/main.js`)

##### 1️⃣ Consulta de Datos (`GET` con `fetch`)

```javascript
// Función del Frontend para obtener y mostrar la lista de mascotas
async function cargarMascotas() {
    try {
        // 1. Petición GET a la URL de nuestro servidor Express en localhost:3000
        const response = await fetch("http://localhost:3000/api/mascotas");

        // 2. Control de Errores HTTP: Verificamos si la respuesta fue exitosa (status 200-299)
        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }

        // 3. Deserialización: Convertimos el cuerpo JSON recibido a un objeto JavaScript
        const data = await response.json();

        // 4. Accedemos a la propiedad 'payload' enviada por el Controller de Express
        console.log("Mascotas obtenidas del backend:", data.payload);
        
        // Aquí llamaríamos a la función que renderiza las tarjetas en el HTML
    } catch (error) {
        console.error("No se pudo conectar con el backend:", error);
    }
}
```

##### 2️⃣ Envío de Datos Nuevos (`POST` con `fetch`)

```javascript
// Función del Frontend para registrar una nueva mascota desde un formulario HTML
async function enviarMascota(nuevaMascota) {
    try {
        // 1. fetch con objeto de configuración para métodos distintos de GET
        const response = await fetch("http://localhost:3000/api/mascotas", {
            method: "POST", // Especificamos el verbo HTTP POST
            headers: {
                // ⚠️ CRÍTICO: Le avisa al middleware express.json() del backend que el body viene en formato JSON
                "Content-Type": "application/json"
            },
            // Convertimos el objeto de JavaScript a una cadena de texto en formato JSON
            body: JSON.stringify(nuevaMascota)
        });

        const data = await response.json();

        if (response.ok) {
            alert(`Mascota creada exitosamente con ID: ${data.id}`);
        } else {
            alert(`Error del servidor: ${data.error}`);
        }
    } catch (error) {
        console.error("Fallo de red al enviar datos:", error);
    }
}
```

---

#### 🔑 Los 2 Puentes Clave entre Frontend y Backend

1. **`cors()` (Cross-Origin Resource Sharing)**:
   - Si tu Frontend corre en un servidor local (ej: Live Server en `http://127.0.0.1:5500`) y el Backend en `http://localhost:3000`, pertenecen a **orígenes distintos**.
   - Por seguridad, el navegador bloquea las peticiones entre orígenes distintos salvo que el Backend incluya el middleware `app.use(cors())`. Este envía los encabezados HTTP `Access-Control-Allow-Origin: *` autorizando al navegador a leer la respuesta.

2. **El Encabezado `Content-Type: application/json`**:
   - Cuando hacés `POST` o `PUT`, el navegador envía datos en el cuerpo de la petición.
   - El header `"Content-Type": "application/json"` le indica a Express: *"Lo que va en el cuerpo es un texto JSON"*.
   - El middleware `app.use(express.json())` detecta este encabezado, toma el texto JSON, lo convierte en un objeto JS y lo asigna automáticamente a `req.body`. Si omitís este header en el `fetch`, `req.body` llegará como `undefined` al controlador.

