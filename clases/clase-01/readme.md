# Clase 01: Diagnóstico de Desarrollo Web 🕵️‍♂️🔍

¡Bienvenidos al primer desafío del año! En el mundo real del desarrollo de software, pasarás gran parte de tu tiempo depurando (arreglando bugs) en código escrito por otros (o por vos mismo en el pasado).

Hoy vamos a poner a prueba tus habilidades de resolución de problemas con una **Calculadora de Promedios** que está rota.

## 🎯 El Objetivo
Tu misión (en duplas) es encontrar y solucionar los **3 bugs** que tiene esta aplicación utilizando las Herramientas de Desarrollador de tu navegador (F12 / Clic derecho -> Inspeccionar).

La aplicación debe cumplir con los siguientes requisitos:
1.  **Responsiva (Mobile First):** Se debe ver bien en pantallas de celulares sin desbordarse ni cortarse horizontalmente.
2.  **Cálculo Correcto:** Si ingresás un 7, un 8 y un 9, el promedio debe ser **8.00** (no 263.00).
3.  **Regla de Aprobación:** Siguiendo la normativa de la Provincia de Buenos Aires, el alumno aprueba únicamente si el promedio es **7 o más**.

---

## 🛠️ Pistas para investigar

1.  **Bug 1 (Sintaxis):** Al hacer clic en el botón de calcular, no pasa nada y la página parece muerta. Abre la pestaña **Consola** (Console) en las herramientas de desarrollador. ¿Ves algún error en rojo? ¿En qué línea está?
2.  **Bug 2 (Lógica de tipos):** ¿Por qué la suma de las notas da un número gigante? Recuerda que en JavaScript, los valores obtenidos de los inputs del formulario vienen con un tipo de dato específico. ¿Cómo convertimos un texto a número?
3.  **Bug 3 (Diseño responsivo / CSS):** Pon la vista de dispositivo móvil en el navegador. ¿Por qué la tarjeta blanca se corta a los costados? ¿Qué pasa con los inputs que sobresalen de la tarjeta?
