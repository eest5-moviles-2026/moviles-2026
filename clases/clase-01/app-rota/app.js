// Lógica de la calculadora de promedios

// BUG 1 (Sintaxis/Referencia): "documnt" está mal escrito, va a tirar un Uncaught ReferenceError en consola
documnt.getElementById('btn-calcular').addEventListener('click', function() {
    // Obtenemos los valores de las notas
    const n1 = document.getElementById('nota1').value;
    const n2 = document.getElementById('nota2').value;
    const n3 = document.getElementById('nota3').value;

    // Validación básica
    if (n1 === '' || n2 === '' || n3 === '') {
        alert('Por favor, completa todas las notas.');
        return;
    }

    // BUG 2 (Lógica de tipos): Las variables n1, n2 y n3 son Strings. 
    // Al sumarlas con "+", se concatenan en vez de sumarse aritméticamente.
    // Ejemplo: "7" + "8" + "9" dará "789". Y "789" / 3 dará 263.
    const promedio = (n1 + n2 + n3) / 3;

    // Mostramos el resultado
    const resultadoDiv = document.getElementById('resultado');
    const promedioSpan = document.getElementById('promedio-valor');
    const mensajeP = document.getElementById('estado-mensaje');

    promedioSpan.innerText = promedio.toFixed(2);
    resultadoDiv.classList.remove('hidden');

    // BUG 3 (Lógica de negocio): En secundaria técnica de PBA se aprueba con 7 o más.
    // Aquí pusimos >= 6.
    if (promedio >= 6) {
        resultadoDiv.className = 'result-box aprobado';
        mensajeP.innerText = '¡Felicidades! Aprobaste la materia.';
    } else {
        resultadoDiv.className = 'result-box desaprobado';
        mensajeP.innerText = 'Nos vemos en diciembre/febrero para recuperar.';
    }
});
