# Guía de Teoría JS: Sintaxis, Control de Flujo y Funciones
**Materia:** Desarrollo de Software para Plataformas Móviles  
**Clase 03:** Nivelación Parte I (Módulos 1, 2 y 3)

Esta guía cubre los fundamentos esenciales de JavaScript que necesitás dominar antes de manipular la interfaz (DOM) o conectar tu aplicación a servicios externos.

---

## 1. Módulo 1: Sintaxis Básica, Variables y Coerción

### Declaración de Variables: ¿Por qué no usamos `var`?
Históricamente, JavaScript usaba la palabra reservada `var` para declarar variables. Sin embargo, desde ES6 (2015) quedó obsoleta porque introduce comportamientos extraños y difíciles de depurar:

1.  **Falta de Ámbito de Bloque (Block Scope):**
    `var` no respeta los bloques de llaves `{ }` (como los de un `if` o un bucle `for`). Solo se limita a funciones. Esto significa que si declarás un `var` adentro de un `if`, esa variable se "fuga" y queda accesible fuera del `if`, pudiendo sobrescribir datos sin querer.
2.  **Re-declaración Silenciosa:**
    `var` permite volver a declarar una variable con el mismo nombre en el mismo ámbito sin dar ningún error, lo que provoca que sobrescribas información de forma silenciosa.
3.  **Hoisting problemático:**
    Al declarar con `var`, la variable se eleva al inicio de su ámbito pero con valor `undefined`. Esto permite que uses la variable antes de escribir su línea de declaración, resultando en `undefined` en lugar de arrojar un error de referencia inmediato.

#### 💡 Comparación de Comportamiento:

### 🧪 CASO 1: Alcance del bloque (Scope)
```javascript
if (true) {
    var usuario = "Juan";
}
console.log(usuario);
```
> ❓ **Análisis en clase:** ¿Qué se va a imprimir en la consola al ejecutar este código? ¿Es este el comportamiento que esperarías en otros lenguajes de programación? ¿Por qué?

---

### 🧪 CASO 2: Respeto del bloque
```javascript
if (true) {
    let puntuacion = 10;
}
console.log(puntuacion);
```
> ❓ **Análisis en clase:** ¿Qué pasa en la consola al ejecutar esta sección de código? ¿Cómo se compara este resultado con el obtenido en el Caso 1?

---

### 🧪 CASO 3: Re-declaración de variables
```javascript
var edad = 20;
var edad = 30;

let saldo = 1000;
let saldo = 500;
```
> ❓ **Análisis en clase:** ¿Qué ocurre al ejecutar estas líneas? ¿Se ejecutan ambos bloques con éxito o alguno genera un comportamiento diferente? ¿Cómo lo explicarían?

---

### Let vs Const: Cuándo usar cada una
*   **`let` (Mutable):** Se limita al bloque donde se declara. La usamos cuando sabemos que el valor de la variable va a cambiar en el tiempo (por ejemplo, acumuladores, contadores, o estados de carga).
*   **`const` (Inmutable por referencia):** También se limita al bloque. La usamos para valores que no deben ser reasignados (como la URL de una API, o constantes matemáticas).
    *   *Nota importante:* Si declarás un objeto o array con `const`, no podés reasignar la variable a otro objeto, pero sí podés modificar sus propiedades internas o agregar elementos.

### 🧪 CASO 4: Mutabilidad vs Reasignación
```javascript
let intentos = 3;
intentos = 2;

const PI = 3.1415;
PI = 3.14;
```
```javascript
const configuracion = { tema: "oscuro" };
configuracion.tema = "claro";
configuracion = { tema: "azul" };
```
> ❓ **Análisis en clase:** ¿Qué pasa en la consola al correr cada una de estas secciones? ¿Qué diferencias notan en el comportamiento de `const` entre el primer bloque (PI) y el segundo (configuracion)?

---

### Tipos de Datos Primitivos
*   **Number:** Números enteros o decimales (`42`, `23.5`).
*   **String:** Cadenas de texto (`"Hola"`, `'Mundo'`, o `` `Interpolación` `` con backticks).
*   **Boolean:** Solo valores `true` o `false`.
*   **Null:** Asignación explícita para indicar "valor vacío".
*   **Undefined:** Indica que una variable ha sido declarada pero aún no tiene valor.

### Estructuras de Datos Complejas (Arrays y Objetos)
Aunque en JavaScript casi todo son objetos por detrás, distinguimos entre variables simples (primitivos) y colecciones estructuradas de datos:

#### A. Arrays (Arreglos)
Son colecciones ordenadas de datos (como una grilla de elementos donde cada valor ocupa una posición numerada basada en cero).

### 🧪 CASO 4A: Estructura e indexación de un Array (Sensores de Celular)
```javascript
const sensoresActivos = ["Geolocalización", "Acelerómetro", "Giroscopio", "Lector de Huellas"];
console.log(sensoresActivos[0]);
console.log(sensoresActivos.length);
```
> ❓ **Análisis en clase:** ¿Qué se va a imprimir en la consola en cada uno de los dos `console.log`? ¿Cómo accederías al último elemento de este array de forma dinámica si no supieras cuántos elementos contiene?

---

#### B. Objetos Literales
Son colecciones de propiedades compuestas por pares de **clave-valor**. Nos permiten agrupar datos complejos asociados a un mismo elemento.

### 🧪 CASO 4B: Propiedades y accesos a un Objeto (Coordenadas GPS)
```javascript
const ubicacionGps = {
    latitud: -34.7001,
    longitud: -58.3819,
    precisionMetros: 15
};
console.log(ubicacionGps.latitud);
console.log(ubicacionGps["precisionMetros"]);
```
> ❓ **Análisis en clase:** ¿Qué imprimen ambas sentencias en la terminal? ¿Cuáles son las dos formas distintas que estamos usando aquí para acceder a las propiedades del objeto?

---

### Coerción y Operadores
JavaScript es de tipado dinámico y débil. Al usar operadores, puede convertir tipos automáticamente (coerción):

### 🧪 CASO 5: Coerción implícita
```javascript
console.log("5" + 5);
console.log("5" - 5);
```
> ❓ **Análisis en clase:** ¿Qué valores exactos se imprimen en la consola y de qué tipo de dato es cada resultado? ¿Cómo explicarían esta diferencia de comportamiento?

---

### 🧪 CASO 6: Operadores de Igualdad
```javascript
console.log(5 == "5");
console.log(5 === "5");
```
> ❓ **Análisis en clase:** ¿Qué imprime cada sentencia en consola? ¿Cuál es la diferencia fundamental en la evaluación que realiza cada uno de estos dos operadores?

---

## 2. Módulo 2: Control de Flujo (Condicionales y Bucles)

### Decisiones con Condicionales
*   **`if / else if / else`:** Ejecuta bloques de código basados en operadores lógicos (`&&` AND, `||` OR, `!` NOT).
*   **Operador Ternario:** Alternativa compacta para sentencias simples de tipo si/no.
*   **`switch`:** Estructura limpia para evaluar múltiples opciones discretas de una misma variable.

### 🧪 CASO 7: Simplificar código con el Operador Ternario
```javascript
let cargando = false;
let estado = cargando ? "Cargando..." : "Listo";
```
> ❓ **Análisis en clase:** ¿Qué valor toma la variable `estado`? ¿Cómo estructurarían este mismo comportamiento utilizando una sentencia `if / else` tradicional?

---

### 🧪 CASO 8: Toma de decisiones múltiples con Switch
```javascript
let estadoBateria = "OK";
switch (estadoBateria) {
    case "LOW":
        console.log("Alerta de ahorro.");
        break;
    case "CRITICAL":
        console.log("Apagando dispositivo.");
        break;
    default:
        console.log("Funcionamiento óptimo.");
}
```
> ❓ **Análisis en clase:** ¿Qué se imprime en consola con el valor inicial de la variable? ¿Qué ocurriría en la terminal si inicializamos `estadoBateria` en `"LOW"` pero borramos el `break` de la línea 5?

---

### Repeticiones con Bucles

#### 1. Bucle `for` (Iteraciones conocidas)
Se utiliza cuando sabemos con exactitud cuántas veces queremos repetir una acción (por ejemplo, recorrer elementos en un menú o procesar una cantidad fija de pasos).

---

#### 2. Bucle `while` vs `do-while`

### 🧪 CASO 9: Iteración condicionada
```javascript
let intentosDeRed = 0;
while (intentosDeRed < 3) {
    console.log("Intentando conectar con el servidor...");
    intentosDeRed++;
}
```
```javascript
let nivelBateria = 5;
do {
    console.log("Alerta de batería: El celular está por apagarse.");
    nivelBateria = 0; 
} while (nivelBateria > 0);
```
> ❓ **Análisis en clase:** Si modificamos los valores iniciales para que la condición del bucle sea falsa de entrada en ambos casos (por ejemplo, `intentosDeRed = 5` y `nivelBateria = 0`), ¿qué se mostrará en la consola para cada uno de los bucles?

---

#### 3. Control de Bucles: `break` y `continue`

### 🧪 CASO 10: Interrupción de flujos repetitivos
```javascript
for (let descarga = 1; descarga <= 5; descarga++) {
    if (descarga === 3) {
        console.log("Error de conexión. Cancelando descarga.");
        break;
    }
    console.log(`Descargado: ${descarga * 20}%`);
}
```
```javascript
for (let i = 1; i <= 5; i++) {
    if (i % 2 === 0) {
        continue;
    }
    console.log(`Número impar encontrado: ${i}`);
}
```
> ❓ **Análisis en clase:** ¿Qué salidas exactas se imprimirán en consola al ejecutar cada uno de estos dos bucles? Destaquen en qué líneas cambia la secuencia.

---

## 3. Módulo 3: Funciones y Ámbitos

Las funciones son bloques de código reutilizables que realizan una tarea específica.

### Ámbito de las Variables (Scope Global vs Local)
El **ámbito (scope)** determina la visibilidad y accesibilidad de las variables en distintas partes de tu código.
*   **Ámbito Global:** Las variables creadas fuera de cualquier función están disponibles en cualquier sección de tu script.
*   **Ámbito Local (de Función):** Las variables creadas adentro de una función solo existen allí y no pueden ser leídas desde el exterior.

### 🧪 CASO 10A: Visibilidad de Variables en Funciones (Tema de Interfaz)
```javascript
let modoOscuroActivo = true;

function cambiarTema() {
    let temaActual = "oscuro";
    console.log(modoOscuroActivo);
}

cambiarTema();
console.log(temaActual);
```
> ❓ **Análisis en clase:** Al ejecutar el script completo, ¿se lograrán imprimir ambos valores en la consola? ¿Por qué la variable `modoOscuroActivo` funciona dentro de la función pero `temaActual` genera un error al final?

---

### ¿Qué es el Hoisting (Elevación)?
El Hoisting es un comportamiento interno de JavaScript donde el motor del lenguaje "eleva" virtualmente las declaraciones de variables y funciones al principio de su ámbito antes de ejecutar el código.

---

#### A. Hoisting en Variables:

### 🧪 CASO 11: Uso de variables antes de su declaración
```javascript
console.log(edadVar);
var edadVar = 25;
```
```javascript
console.log(edadLet);
let edadLet = 25;
```
> ❓ **Análisis en clase:** ¿Qué ocurre en la consola al ejecutar cada uno de estos dos bloques de código? ¿Cómo describirían la diferencia de comportamiento entre usar `var` y `let` antes de su línea de asignación?

---

#### B. Hoisting en Funciones:

### 🧪 CASO 12: Llamado a funciones antes de su declaración
```javascript
saludarDeclarado();

function saludarDeclarado() {
    console.log("¡Hola!");
}
```
```javascript
saludarFlecha(); 

const saludarFlecha = () => {
    console.log("¡Hola desde flecha!");
};
```
> ❓ **Análisis en clase:** ¿Qué ocurre en cada caso al intentar invocar las funciones al principio del archivo? ¿Qué diferencias de elevación (hoisting) pueden deducir entre una función declarada y una función flecha expresada?

---

### Los 10 Tipos de Funciones en JavaScript

En esta sección se listan los 10 tipos de funciones estudiados en la materia, clasificados según su prioridad:

---

#### 1. Función Declarada (Named Function) — `[OBLIGATORIA]`
Es la sintaxis clásica de JavaScript. Se asocia a un nombre y posee hoisting completo.
```javascript
saludar();

function saludar() {
    console.log("¡Hola!");
}
```
> ❓ **Análisis en clase:** ¿Qué comportamiento especial del lenguaje permite que invoquemos esta función en la línea 1 si está declarada recién en la línea 3?

---

#### 2. Función Expresada (Function Expression) — `[OBLIGATORIA]`
Es una función anónima asignada dentro de una variable o constante. No posee hoisting.
```javascript
const saludarExpresado = function() {
    console.log("Hola desde expresión");
};

saludarExpresado();
```

---

#### 3. Función Anónima (Anonymous Function) — `[COMÚN / LECTURA RECOMENDADA]`
No posee nombre y se declara generalmente para usarse en caliente, por ejemplo como callback en un temporizador o manejador de eventos directo.
```javascript
setTimeout(function() {
    console.log("Se ejecuta después de 1 segundo.");
}, 1000);
```

---

#### 4. Función Flecha (Arrow Function) — `[OBLIGATORIA]`
Introducidas en ES6 para simplificar la sintaxis. Ideales para operaciones de una sola línea con retorno implícito y `this` léxico.
```javascript
const sumar = (a, b) => a + b;
```
> ❓ **Análisis en clase:** ¿Cómo se comporta el retorno (`return`) en esta estructura y en qué se diferencia visualmente de una función clásica?

---

#### 5. Función de Método (Method Function) — `[COMÚN / LECTURA RECOMENDADA]`
Es una función definida directamente dentro de las propiedades de un objeto literal.
```javascript
const reproductor = {
    volumen: 50,
    subirVolumen() {
        this.volumen += 10;
    }
};
reproductor.subirVolumen();
```
> ❓ **Análisis en clase:** ¿A qué hace referencia la palabra clave `this` en la línea 4? ¿Qué ocurriría con `this` si cambiáramos `subirVolumen` a una función flecha?

---

#### 6. Función Constructora (Constructor Function) — `[COMÚN / LECTURA RECOMENDADA]`
Diseñadas para instanciar y modelar objetos antes de la llegada de la palabra clave `class`. Se invocan utilizando la palabra clave `new`.
```javascript
function Usuario(nombre, rol) {
    this.nombre = nombre;
    this.rol = rol;
}
const valentina = new Usuario("Valentina", "Estudiante");
```

---

#### 7. Expresión de Función Ejecutada Inmediatamente (IIFE) — `[AVANZADA / NICHO]`
Funciones autoejecutables que se corren en el instante en que el intérprete las lee.
```javascript
(function() {
    console.log("Me ejecuto inmediatamente al cargar.");
})();
```

---

#### 8. Función Generadora (Generator Function) — `[AVANZADA / NICHO]`
Funciones especiales que pueden pausar y reanudar su ejecución devolviendo iteradores.
```javascript
function* creadorDeIds() {
    let id = 1;
    while (true) {
        yield id++;
    }
}
const gen = creadorDeIds();
console.log(gen.next().value);
```
> ❓ **Análisis en clase:** ¿Qué ocurre si volvemos a ejecutar `console.log(gen.next().value)`? ¿Cómo explicarían el hecho de tener un bucle `while (true)` infinito aquí sin que se cuelgue la computadora?

---

#### 9. Función de Orden Superior (High Order Function) — `[OBLIGATORIA]`
Son funciones que reciben otras funciones como argumentos o las retornan.
```javascript
const lista = [1, 2, 3];
const duplicados = lista.map(num => num * 2);
```
> ❓ **Análisis en clase:** ¿Qué tipo de valor recibe el método `.map()` como argumento? ¿Cómo escribirían este mismo código usando un bucle `for` clásico?

---

#### 10. Función Asincrónica (Async Function) — `[OBLIGATORIA]`
Declaradas con la palabra clave `async`. Devuelven promesas y permiten utilizar el operador `await` en su interior.
```javascript
async function descargarConfig() {
    // await fetch(...)
}
```
