# Ejercitación Práctica de JS: Nivelación Parte I
**Materia:** Desarrollo de Software para Plataformas Móviles  
**Clase 02:** Ejercicios de Nivelación (Módulos 1, 2 y 3)

Todos los ejercicios se deben resolver en archivos JavaScript separados (ej: `ejercicio1.js`, `ejercicio2.js`, etc.) dentro de una carpeta llamada `clase-02` en el repositorio local de tu espacio de trabajo (`C:\Proyectos-Estudiantes\...`).

Al finalizar, debés crear un archivo `README.md` formateado en Markdown explicando qué herramientas utilizaste y subir todo a tu repositorio remoto de GitHub con `git add`, `git commit` y `git push`.

---

## Ejercicio 1: Cálculo de Espacio de Almacenamiento (Módulo 1 - Variables y Coerción)
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

## Ejercicio 2: Acceso a la Aplicación Escolar (Módulo 2 - Lógica Condicional)
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

## Ejercicio 3: Simulación de Test de Red (Módulo 2 - Bucles y Control de Flujo)
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

## Ejercicio 4: Procesamiento de Pago (Módulo 3 - Integración de Funciones)
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

## Ejercicio 5: Gráfico de Consumo de Memoria (Módulo 2 - Bucles Anidados y Algoritmia)
*   **Consigna:** Para simular visualmente la carga y consumo de recursos de la app en la terminal, escribí una función llamada `dibujarGraficoConsumo` que reciba la cantidad de `pasos` (Number) a graficar.
    *   La función debe construir un único string acumulando caracteres de bloque `█` fila por fila.
    *   En cada paso, se debe dibujar una fila de bloques equivalente al número del paso actual (el paso 1 tiene un bloque `█`, el paso 2 tiene dos bloques `██`, etc.).
    *   Cada fila debe terminar con un salto de línea `\n`.
    *   La función debe retornar el string del gráfico final completo.
    *   *Desafío:* Utilizá **bucles anidados** para construir las filas del gráfico.
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

