# Instrucciones de Trabajo - PC 5
**Widget Asignado:** Configuración de Tema
**Acción Especial:** Modificación de Estilo Global (Conflicto en CSS).

---

## 🛠️ Tareas a realizar en tu rama `feature-pc5`:

### 1. Desarrollar el HTML (`index.html`):
Buscá el comentario `<!-- [PC 5] AGREGÁ TU WIDGET DE CONFIGURACIÓN DE TEMA ABAJO DE ESTE COMENTARIO -->`. Debés programar allí una tarjeta que cumpla con los siguientes requisitos:
1. Una etiqueta `<section>` contenedora con las clases `widget-card` y `widget-theme`.
2. Adentro, un título `<h3>` que diga `🎨 Configuración`.
3. Un párrafo `<p>` que diga `Tema Activo:`.
4. Un contenedor `<div>` con la clase `theme-badge` que contenga el texto `Dark Mode`.

### 2. Modificación de CSS y Conflicto (`style.css`):
1. **El Conflicto CSS:** Dirigite al principio del archivo `style.css`. Buscá la variable de color principal `--primary-color` en la línea 4. Cambiale su color original por un color violeta amatista: `#8b5cf6`.
2. Andá al final del archivo `style.css` y escribí las reglas de diseño necesarias para tu widget:
   * Estilá la clase `.widget-theme .theme-badge` para que sea un bloque en línea (`display: inline-block`), tenga un fondo translúcido (`background: rgba(255, 255, 255, 0.08)`), texto color blanco (`#ffffff`), un relleno interno de `4px` arriba/abajo y `10px` izquierda/derecha, bordes redondeados de `8px`, fuente de `0.75rem` semibold (`600`), un borde fino igual a las variables de la app (`1px solid var(--border-color)`) y un margen superior de `5px`.

### 3. Registrar a tus Integrantes:
Buscá el comentario `<!-- [PC 5] Agregá tu bloque de créditos abajo de este comentario -->` en el footer. Debés crear una estructura HTML que contenga:
1. Un contenedor `<div>` con la clase `team-credits`.
2. Un título `<h4>` que diga `PC 5 - Integrantes`.
3. Una lista desordenada (`<ul>`) que contenga los nombres y apellidos reales de todos los integrantes sentados en tu computadora.

---

## 🏁 Siguiente Paso:
Cuando termines de guardar y verificar que el diseño se vea bien en tu navegador, hacé commit en tu terminal y subí la rama a GitHub como indica el paso 2 de la [`README.md`](README.md).
