# Ejercitación Práctica de JS: Nivelación Parte I
**Materia:** Desarrollo de Software para Plataformas Móviles  
**Clase 03:** Ejercicios de Nivelación (Módulos 1, 2 y 3)

Esta guía se divide en dos partes:
1. **Ejercicios de Calentamiento:** Diseñados para resolverse en el aula durante las pausas de la explicación teórica para afianzar conceptos básicos.
2. **Ejercicios de Integración (Tarea Semanal):** Desafíos más complejos con contexto de aplicación real que debés resolver autónomamente y entregar para la semana que viene.

> [!IMPORTANT]
> **REQUISITO OBLIGATORIO DE ENTREGA:** Todos los ejercicios (tanto los de calentamiento como los de integración y el desafío) deben estar correctamente creados y guardados dentro de una carpeta llamada `clase-03` dentro de tu repositorio personal del alumno. 
> Cada ejercicio debe resolverse en su propio archivo separado (por ejemplo, `calentamiento1.js`, `ejercicio9.js`, `peaje.js`).
> 
> Al finalizar, debés crear un archivo `README.md` formateado en Markdown dentro de esa misma carpeta explicando qué herramientas utilizaste, y subir todo a tu repositorio remoto de GitHub con los comandos de Git correspondientes (`git add .`, `git commit` y `git push`).

---

# Parte 1: Ejercicios de Calentamiento (Para resolver en clase)

## Bloque 1: Variables, Tipos y Coerción (Módulo 1)

### Ejercicio 1: Contraseña Válida
*   **Consigna:** Escribir una función llamada `contrasenaValida` que reciba un string y retorne `true` si el string es igual a `"2Fj(jjbFsuj"` o `"eoZiugBf&g9"`. De lo contrario debe retornar `false`.
*   **Código inicial (`calentamiento1.js`):**
    ```javascript
    function contrasenaValida(str) {
        // Tu código acá:
        
    }
    ```
*   **Ejemplos de prueba:**  
    `console.log(contrasenaValida("2Fj(jjbFsuj"))` 👉 Retorna: `true`  
    `console.log(contrasenaValida("eoZiugBf&g9"))` 👉 Retorna: `true`  
    `console.log(contrasenaValida("hola"))` 👉 Retorna: `false`  
    `console.log(contrasenaValida(""))` 👉 Retorna: `false`

### Ejercicio 2: Calcular Impuestos
*   **Consigna:** Escribir una función llamada `calcularImpuestos` que reciba dos argumentos numéricos: `edad` e `ingresos`. Si la `edad` es igual o mayor a 18 y los `ingresos` son iguales o mayores a 1000 debe retornar el valor de los `ingresos * 0.4` (el 40%). De lo contrario debe retornar `0`.
*   **Código inicial (`calentamiento2.js`):**
    ```javascript
    function calcularImpuestos(edad, ingresos) {
        // Tu código acá:
        
    }
    ```
*   **Ejemplos de prueba:**  
    `console.log(calcularImpuestos(18, 1000))` 👉 Retorna: `400`  
    `console.log(calcularImpuestos(40, 10000))` 👉 Retorna: `4000`  
    `console.log(calcularImpuestos(17, 5000))` 👉 Retorna: `0`  
    `console.log(calcularImpuestos(30, 500))` 👉 Retorna: `0`

---

## Bloque 2: Control de Flujo y Estructuras Repetitivas (Módulo 2)

### Ejercicio 3: IMC (Índice de Masa Corporal)
*   **Consigna:** El índice de masa corporal (IMC o BMI) se calcula con la siguiente fórmula: `peso / altura^2`.  
    Escribí una función llamada `bmi` que reciba dos argumentos: `peso` y `altura`, y retorne un string de acuerdo a las siguientes posibilidades:
    *   `"Bajo de peso"` si el BMI < 18.5
    *   `"Normal"` si está entre 18.5 y 24.9
    *   `"Sobrepeso"` si está entre 25 y 29.9
    *   `"Obeso"` si es igual o mayor a 30
*   **Código inicial (`calentamiento3.js`):**
    ```javascript
    function bmi(peso, altura) {
        // Tu código acá:
        
    }
    ```
*   **Ejemplos de prueba:**  
    `console.log(bmi(65, 1.8))` 👉 Retorna: `"Normal"`  
    `console.log(bmi(72, 1.6))` 👉 Retorna: `"Sobrepeso"`  
    `console.log(bmi(52, 1.75))` 👉 Retorna: `"Bajo de peso"`  
    `console.log(bmi(135, 1.7))` 👉 Retorna: `"Obeso"`

### Ejercicio 4: FizzBuzz
*   **Consigna:** Escribir una función llamada `fizzBuzz` que reciba un número y retorne un string de acuerdo a lo siguiente:
    *   `"fizz"` si el número es múltiplo de 3.
    *   `"buzz"` si el número es múltiplo de 5.
    *   `"fizzbuzz"` si el número es múltiplo tanto de 3 como de 5.
    *   Si no cumple ninguna de las condiciones anteriores, debe retornar el mismo número.
*   **Código inicial (`calentamiento4.js`):**
    ```javascript
    function fizzBuzz(num) {
        // Tu código acá:
        
    }
    ```
*   **Ejemplos de prueba:**  
    `console.log(fizzBuzz(6))` 👉 Retorna: `"fizz"`  
    `console.log(fizzBuzz(20))` 👉 Retorna: `"buzz"`  
    `console.log(fizzBuzz(30))` 👉 Retorna: `"fizzbuzz"`  
    `console.log(fizzBuzz(8))` 👉 Retorna: `8`

### Ejercicio 5: Sumar Rango de Números
*   **Consigna:** Escribir una función llamada `sumarRango` que reciba dos argumentos: `numeroInicial` y `numeroFinal`. La función debe retornar la suma de todos los números enteros dentro de ese rango (incluyendo los extremos).  
    *Nota: Podés asumir que el número inicial siempre será menor o igual que el final.*
*   **Código inicial (`calentamiento5.js`):**
    ```javascript
    function sumarRango(numeroInicial, numeroFinal) {
        // Tu código acá:
        
    }
    ```
*   **Ejemplos de prueba:**  
    `console.log(sumarRango(0, 10))` 👉 Retorna: `55`  
    `console.log(sumarRango(12, 14))` 👉 Retorna: `39`  
    `console.log(sumarRango(5, 5))` 👉 Retorna: `5`

---

## Bloque 3: Funciones, Ámbito y Arrays Básicos (Módulo 3)

### Ejercicio 6: Imprimir un Arreglo
*   **Consigna:** Escribir una función llamada `imprimirArreglo` que reciba un arreglo e imprima cada uno de sus elementos en una línea aparte utilizando la consola.
*   **Código inicial (`calentamiento6.js`):**
    ```javascript
    function imprimirArreglo(arreglo) {
        // Tu código acá:
        
    }
    ```
*   **Ejemplo de prueba:**  
    `imprimirArreglo([1, "Hola", 2, "Mundo"])`  
    👉 Imprime en consola:  
    `1`  
    `Hola`  
    `2`  
    `Mundo`

### Ejercicio 7: Número de Caracteres
*   **Consigna:** Escribir una función llamada `numeroDeCaracteres` que reciba un string y un carácter (un string de longitud 1). La función debe retornar el número de veces que aparece dicho carácter en el string.
*   **Código inicial (`calentamiento7.js`):**
    ```javascript
    function numeroDeCaracteres(str, caracter) {
        // Tu código acá:
        
    }
    ```
*   **Ejemplos de prueba:**  
    `console.log(numeroDeCaracteres("Hola Mundo", "o"))` 👉 Retorna: `2`  
    `console.log(numeroDeCaracteres("MMMMM", "m"))` 👉 Retorna: `0`  
    `console.log(numeroDeCaracteres("eeee", "e"))` 👉 Retorna: `4`

### Ejercicio 8: Duplicar Elementos de un Arreglo
*   **Consigna:** Escribir una función llamada `duplicar` que reciba un arreglo de números y retorne un **nuevo arreglo** donde cada número esté multiplicado por dos (2).
*   **Código inicial (`calentamiento8.js`):**
    ```javascript
    function duplicar(arreglo) {
        // Tu código acá:
        
    }
    ```
*   **Ejemplos de prueba:**  
    `console.log(duplicar([1, 2, 3]))` 👉 Retorna: `[2, 4, 6]`  
    `console.log(duplicar([]))` 👉 Retorna: `[]`

---
---

# Parte 2: Ejercicios de Integración (Tarea Semanal Evaluativa)

Resolver los siguientes ejercicios a modo de tarea para entregar en la próxima clase.

## Ejercicio 9: Cálculo de Espacio de Almacenamiento (Módulo 1 - Variables y Coerción)
*   **Consigna:** Las entradas en los formularios web siempre llegan como texto (`String`). Escribí una función llamada `calcularEstadisticasDescarga` que reciba dos parámetros: `cantArchivos` (String) y `tamanoPromedioMB` (String). La función debe:
    1.  Convertir ambos parámetros a valores numéricos (`Number`).
    2.  Calcular el tamaño total de la descarga multiplicando la cantidad de archivos por el peso promedio.
    3.  Convertir ese peso total a Kilobytes (KB) sabiendo que `1 MB = 1024 KB`.
    4.  Retornar el siguiente mensaje exacto usando *Template Literals*:  
        `"Se descargarán [cantArchivos] archivos con un peso total de [pesoTotalKB] KB."`
*   **Código inicial (`ejercicio1.js`):**
    ```javascript
    function calcularEstadisticasDescarga(cantArchivos, tamanoPromedioMB) {
        // Tu código acá:
        
    }
    ```
*   **Ejemplo de salida:**  
    `calcularEstadisticasDescarga("10", "1.5")` 👉 Retorna: `"Se descargarán 10 archivos con un peso total de 15360 KB."`

---

## Ejercicio 10: Acceso a la Aplicación Escolar (Módulo 2 - Lógica Condicional)
*   **Consigna:** Para regular el acceso a la plataforma móvil de la escuela, escribí una función llamada `evaluarAccesoApp` que reciba tres parámetros: `edad` (Number), `tienePermisoDocente` (Boolean) y `esInvitado` (Boolean). 
    La función debe retornar `true` si el usuario puede acceder, o `false` en caso contrario, aplicando las siguientes reglas lógicas de negocio:
    1.  El acceso solo se permite si el usuario es mayor o igual a 18 años **O** si es menor de 18 años pero tiene autorización docente (`tienePermisoDocente` es `true`).
    2.  **Bajo ninguna circunstancia** se permite el acceso si el usuario ingresa en modo invitado (`esInvitado` es `true`), sin importar su edad o sus permisos.
*   **Código inicial (`ejercicio2.js`):**
    ```javascript
    function evaluarAccesoApp(edad, tienePermisoDocente, esInvitado) {
        // Tu código acá:
        
    }
    ```
*   **Ejemplo de salida:**  
    `evaluarAccesoApp(16, true, false)` 👉 Retorna: `true`  
    `evaluarAccesoApp(20, false, true)` 👉 Retorna: `false`

---

## Ejercicio 11: Simulación de Test de Red (Módulo 2 - Bucles y Control de Flujo)
*   **Consigna:** Escribí una función llamada `simularReportePing` que reciba el número de `intentosMaximos` (Number) que realizará la aplicación para conectarse al servidor. La función debe:
    1.  Ejecutar un bucle `for` que vaya desde el intento 1 hasta el intento máximo.
    2.  En cada iteración, evaluar las siguientes condiciones:
        *   Si el número de intento actual es **múltiplo de 5**, simular un fallo crítico de hardware: imprimir en consola `"Error crítico de hardware en intento [intento]"` y **salir del bucle inmediatamente** (`break`).
        *   Si el intento es un **número par**, imprimir en consola `"Intento [intento]: Exitoso"`.
        *   Si el intento es un **número impar**, imprimir en consola `"Intento [intento]: Fallido"`.
*   **Código inicial (`ejercicio3.js`):**
    ```javascript
    function simularReportePing(intentosMaximos) {
        // Tu código acá:
        
    }
    ```

---

## Ejercicio 12: Procesamiento de Pago (Módulo 3 - Integración de Funciones)
*   **Consigna:** Escribí una función llamada `procesarCompraMovil` que reciba el `precioBase` (Number) y el porcentaje de `descuentoPct` (Number). Para resolver la lógica del ejercicio, debés declarar y utilizar tres funciones auxiliares que cooperen entre sí:
    1.  **`aplicarDescuento` (Función Declarada):** Recibe el precio y el descuento; retorna el precio rebajado.
    2.  **`sumarIva` (Expresión de Función):** Recibe un precio y le suma el 21% de IVA; retorna el valor con impuesto.
    3.  **`redondear` (Función Flecha):** Recibe un valor decimal y lo retorna redondeado a 2 posiciones decimales (podés usar `.toFixed(2)` convertido de nuevo a número con `Number()`).
    
    La función principal `procesarCompraMovil` debe invocar a estas tres funciones auxiliares de forma encadenada (aplicar descuento -> sumar IVA -> redondear) y retornar el precio final facturado.
*   **Código inicial (`ejercicio4.js`):**
    ```javascript
    function procesarCompraMovil(precioBase, descuentoPct) {
        // Declara aquí tus funciones auxiliares:
        
        // Ejecuta la lógica encadenada y retorna el valor:
        
    }
    ```
*   **Ejemplo de salida:**  
    `procesarCompraMovil(100, 10)` 👉 Retorna: `108.9` (100 - 10% = 90. IVA de 90 = 18.9. Total = 108.90).

---

## Ejercicio 13: Gráfico de Consumo de Memoria (Módulo 2 - Bucles Anizados y Algoritmia)
*   **Consigna:** Para simular visualmente la carga y consumo de recursos de la app en la terminal, escribí una función llamada `dibujarGraficoConsumo` que reciba la cantidad de `pasos` (Number) a graficar.
    *   La función debe construir un único string acumulando caracteres de bloque `█` fila por fila.
    *   En cada paso, se debe dibujar una fila de bloques equivalente al número del paso actual (el paso 1 tiene un bloque `█`, el paso 2 tiene dos bloques `██`, etc.).
    *   Cada fila debe terminar con un salto de línea `\n`.
    *   La función debe retornar el string del gráfico final completo.
    *   *Desafío:* Utilizá **bucles anizados** para construir las filas del gráfico.
*   **Código inicial (`ejercicio5.js`):**
    ```javascript
    function dibujarGraficoConsumo(pasos) {
        let grafico = "";
        // Tu código de bucles anidados acá:
        
        return grafico;
    }
    ```
*   **Ejemplo de salida:**  
    `console.log(dibujarGraficoConsumo(3))`  
    👉 Imprime en consola:  
    `█`  
    `██`  
    `███`

---

## 🚀 Desafío Semanal Obligatorio: Peaje Inteligente (Telepase)

Este ejercicio es de carácter obligatorio y deberá ser presentado en la próxima clase. Resolverlo en un archivo JavaScript llamado `peaje.js` dentro de esta carpeta (pueden probar su ejecución en la consola del desarrollador F12 del navegador o mediante Node.js).

### Consigna:
Escribir un script que implemente dos funciones principales para simular la facturación automática de una cabina de peaje inteligente.

#### 1. Función `calcularTarifa(tipoVehiculo, hora, esFeriado)`
Debe recibir el tipo de vehículo (String), la hora del día en formato militar (Number de 0 a 23) y si es un día feriado (Boolean). Debe retornar el monto final de la tarifa cobrada.

*   **Tarifas Base:**
    *   `"moto"`: $150
    *   `"auto"`: $300
    *   `"camion"`: $600
*   **Regla de Hora Pico (Recargo del 30%):**
    *   Se aplica si la hora está entre las **8 y las 10 inclusive**, o entre las **17 y las 19 inclusive**, y además el día **no** es feriado (es decir, `esFeriado` es `false`).
    *   Si es feriado, la hora pico no aplica y se cobra la tarifa base.
*   **Controles adicionales (Robustez):**
    *   La función debe aceptar el tipo de vehículo sin importar si viene en mayúsculas, minúsculas o mezcla (ej: `"AuTo"`, `"MOTO"` deben ser válidos).
    *   Si el vehículo ingresado no es ninguno de los tres tipos válidos, debe retornar `0` e imprimir una advertencia en consola.

#### 2. Función `simularFilaCabina(cantidadVehiculos)`
Simula una fila de vehículos que pasan de forma consecutiva por la cabina.
*   Debe simular el paso del número de vehículos indicado en el parámetro.
*   En cada iteración del bucle, debés simular de forma aleatoria los datos del vehículo:
    *   **Tipo de vehículo:** Elegido aleatoriamente entre `"moto"`, `"auto"`, `"camion"`.
    *   **Hora:** Elegido aleatoriamente entre 0 y 23.
    *   **Feriado:** Elegido aleatoriamente (`true` o `false`).
*   Por cada vehículo simulado, debe llamar a la función `calcularTarifa` para obtener el cobro.
*   Debe acumular la facturación total y mostrar en consola el detalle de cada vehículo procesado (ej: `"[Intento X] Vehículo: auto | Hora: 18 | Feriado: false | Tarifa cobrada: $390"`).
*   Al finalizar el bucle, debe retornar el monto total recaudado.

#### Ejemplos para pruebas manuales en consola:
*   `calcularTarifa("moto", 9, false)` 👉 Retorna: `195` (Tarifa $150 + 30% recargo por hora pico).
*   `calcularTarifa("auto", 18, true)` 👉 Retorna: `300` (Tarifa base, al ser feriado no aplica hora pico).
*   `calcularTarifa("camion", 12, false)` 👉 Retorna: `600` (Tarifa base, hora no pico).
