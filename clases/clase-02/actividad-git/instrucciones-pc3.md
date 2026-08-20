# Instrucciones de Trabajo - PC 3
**Widget Asignado:** Asistencia Mock
**Acciones Especiales:** Modificación de Estilo Global (Conflicto en CSS) y Ubicación en Grilla (Conflicto en HTML).

---

## 🛠️ Tareas a realizar en tu rama `feature-pc3`:

### 1. Desarrollar el HTML (`index.html`):
Buscá el comentario `<!-- [PC 2 y PC 3] ¡ESPACIO DE CONFLICTO! AGREGUEN SU WIDGET DEBAJO DE ESTA LÍNEA -->`. Debés programar allí una tarjeta que cumpla con los siguientes requisitos:
1. Una etiqueta `<section>` contenedora con las clases `widget-card` y `widget-attendance`.
2. Adentro, un título `<h3>` que diga `📊 Asistencia`.
3. Un párrafo `<p>` con la clase `percentage` que muestre el valor `94%`.
4. Otro párrafo `<p>` con texto secundario diciendo `Presentes: 17 de 18`.

### 2. Modificación de CSS y Conflicto (`style.css`):
1. **El Conflicto CSS:** Dirigite al principio del archivo `style.css`. Buscá la variable de color principal `--primary-color` en la línea 4. Cambiale su color original por un color verde esmeralda: `#10b981`.
2. Andá al final del archivo `style.css` y escribí las reglas de diseño necesarias para tu widget:
   * Estilá la clase `.widget-attendance .percentage` para que su fuente sea de `1.8rem`, su grosor sea extra-negrita (`800`) y su color use la variable principal que acabás de modificar (`var(--primary-color)`).

### 3. Registrar a tus Integrantes:
Buscá el comentario `<!-- [PC 3] Agregá tu bloque de créditos abajo de este comentario -->` en el footer. Debés crear una estructura HTML que contenga:
1. Un contenedor `<div>` con la clase `team-credits`.
2. Un título `<h4>` que diga `PC 3 - Integrantes`.
3. Una lista desordenada (`<ul>`) que contenga los nombres y apellidos reales de todos los integrantes sentados en tu computadora.

---

## 🏁 Siguiente Paso:
Cuando termines de guardar y verificar que el diseño se vea bien en tu navegador, hacé commit en tu terminal y subí la rama a GitHub como indica el paso 2 de la [`README.md`](file:///home/axel/Escritorio/Clases/moviles-2026/clases/clase-02/actividad-git/README.md).
