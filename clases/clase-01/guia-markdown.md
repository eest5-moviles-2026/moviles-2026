# Guía Rápida de Markdown (Cheatsheet)
**Materia:** Desarrollo de Software para Plataformas Móviles  
**Clase 01:** Introducción y Herramientas

Markdown es un lenguaje de marcado ligero que permite dar formato al texto usando caracteres simples de teclado. En VS Code, podés ver la vista previa renderizada del archivo presionando **`Ctrl + K` y luego `V`**.

---

## 1. Encabezados (Títulos)
Usá el carácter `#` seguido de un espacio al inicio de la línea. A mayor cantidad de `#`, menor es el tamaño del título:

```markdown
# Título Principal (Solo debe haber uno por archivo)
## Título de Sección
### Subsección
#### Título Menor
```

---

## 2. Formato de Texto
Permite destacar palabras o código en el texto:

```markdown
**Texto en Negrita**  (Dos asteriscos a los lados)
*Texto en Itálica*   (Un asterisco a los lados)
~~Texto tachado~~    (Dos virgulillas a los lados)
`código en línea`    (Acento grave / backtick. Para variables o comandos como `let x = 5;`)
```

---

## 3. Listas

### Listas Desordenadas (Viñetas)
Usá un guión `-` o un asterisco `*` seguido de un espacio:
```markdown
- Primer elemento
- Segundo elemento
  - Subelemento (Agregando 2 o 4 espacios de sangría)
```

### Listas Ordenadas (Numeradas)
Usá números seguidos de un punto:
```markdown
1. Instalar VS Code
2. Crear un archivo HTML
3. Abrir en el navegador
```

### Listas de Tareas (Checklists)
Ideales para hacer seguimiento de consignas de proyectos:
```markdown
- [x] Tarea completada (marcar con una "x")
- [ ] Tarea pendiente (dejar espacio vacío)
```

---

## 4. Bloques de Código (Syntax Highlighting)
Para escribir fragmentos de código limpios, envolvelos en tres acentos graves (backticks) e indicá el nombre del lenguaje al inicio de la primera línea:

```javascript
const promedio = (a + b) / 2;
console.log(promedio);
```

---

## 5. Enlaces e Imágenes

### Enlaces (Links)
El texto visible va entre corchetes `[ ]` y la URL va entre paréntesis `( )`:
```markdown
Visita la documentación de [MDN Web Docs](https://developer.mozilla.org).
```

### Imágenes
Es igual a un enlace pero anteponiendo un signo de exclamación `!`:
```markdown
![Texto alternativo para accesibilidad](ruta/a/la/imagen.png)
```

---

## 6. Tablas
Usa barras verticales `|` y guiones `-` para separar el encabezado. 

```markdown
| Alumno | Nota 1 | Nota 2 | Estado |
| :--- | :---: | :---: | :---: |
| Gómez, Juan | 8 | 9 | Aprobado |
| Pérez, María | 5 | 6 | Recupera |
```
*(Los dos puntos `:` indican la alineación del texto: `:---` izquierda, `:---:` centrado).*

---

## 💡 Atajos rápidos en VS Code:
*   **Ver vista previa dividida:** `Ctrl + K` y luego `V` (abre el markdown renderizado a la par del editor).
*   **Negrita rápida:** Selecciona el texto y presiona `Ctrl + B`.
*   **Itálica rápida:** Selecciona el texto y presiona `Ctrl + I`.
